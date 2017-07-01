<template>
	<div class="myteacher-wrap">
		<!-- 顶部 -->
		<div class="myteacher-teacher-top">
			<span>{{ teacherInfo.lecturerName }}</span>
			<!-- 头像部分 -->
			<div class="myteacher-teacher-portrait">
				<img :src="head_image_url">
			</div>
			<!-- 讲师名 -->	
		</div>

		<!-- 提现和直播内容部分 -->
		<ul class="myteacher-withdrawals-box">
			<li @click="goToMyWallet"><img src="../../assets/wallet.png"><span class="myteacher-withdrawals-number">{{ teacherInfo.sumIncome }}<span class="myteacher-withdrawals-individual">&nbsp;元</span></span></li>
			
			<li><router-link :to="{name: 'TeacherCourse'}"><img src="../../assets/directSeeding.png"><span class="myteacher-withdrawals-number">{{ teacherInfo.courseCount }}<span class="myteacher-withdrawals-individual">&nbsp;条</span></span></router-link></li>
		</ul>

		<!-- 隔断块 -->
		<div class="myteacher-transition"></div>

		<!-- 讲师介绍 -->
		<div class="myteacher-AboutInstructor-box">
			<img src="../../assets/DSIntroduce.png" height="15" width="16">
			<span>讲师介绍</span>
		</div>

		<!-- 讲师介绍文字部分 -->
		<div class="myteacher-AboutInstructor-text-box">
			<div class="myteacher-field">擅长领域 : <span>公共关系学</span></div>
			<div class="myteacher-Characteristic">特点/背景 : <span>{{ teacherInfo.lecturerIntroduction }}</span></div>
			<img src="../../assets/teacherImg.png" height="576" width="1024" alt="">
		</div>
	</div>
</template>
<script type="text/javascript">
// import Vue from 'vue';
import { Alert } from 'vux';
import { mapState } from 'vuex';
	export default {
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url,
	            userinfo_data : state => state.UserInfo.userinfo_data,
	            common_request_appendv1_url: state => state.common.common_request_appendv1_url
	        })
    	},
		beforeRouteEnter (to, from, next) {
			console.log(to.params);
			if (to.params.isTeacher || to.params.isTeacher === undefined) {
				next(vm => {
					vm.loading = true;
					vm.$indicator.open('加载中...');
					let id = localStorage.getItem('dataid');
					let openid = localStorage.getItem('openid');
					let lecturerId = vm.userinfo_data.lecturerId;
					let url = vm.common_request_base_url + vm.common_request_appendv1_url +'findincomeandcoursebyid?id=' + id + '&lecturerId=' + lecturerId + '&openid=' + openid;
					vm.$http.get(url)
					.then((res) => {
						console.log(res);
						vm.loading = false;
						vm.teacherInfo = res.data.content.result;
						if (vm.teacherInfo.sumIncome === null) {
							vm.teacherInfo.sumIncome = 0;
						};
					})
					.catch((error) =>{
						vm.loading = false;
						vm.$toast('获取讲师个人信息失败');
					});
				});
			} else {
				this.$toast('您还不是讲师');
			};
		},
		components: {
			Alert
		},
		data() {
			return {
				teacherInfo: {},
				loading: true,
				head_image_url: ''
			};
		},
		watch: {
			loading() {
				if (this.loading === false) {
					this.$indicator.close();
					this.getHeadImage();
				};
			}
		},
		methods: {
			getHeadImage() {
				let url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia?media=' + this.teacherInfo.headImage;
				this.$http.get(url)
				.then((res) => {
					this.head_image_url = res.data;
				})
				.catch((error) => {
					this.$toast('获取讲师头像错误');
				});
			},
			getIntroductionImage() {

			},
			goToMyWallet() {
				if ((this.teacherInfo.sumIncome !== null || this.teacherInfo.sumIncome !== undefined) && this.teacherInfo.sumIncome > 0)  {
					this.$router.push({ name: 'MyWallet'});
				} else {
					this.$router.push({ name: 'MyWallet'});
					// this.$toast('您还没有收入');
				};
			}
		}
	};
</script>
<style type="text/css" scroped>
	
	.myteacher-wrap{
		width:100%;
		height:100%;
		max-width:750px;
		padding: 0 !important;
	}
	.myteacher-teacher-top{
		width:100%;
		height:100px;
		background-image: url("../../assets/teacherImg.png");
		background-size:100% 100%;
		display:flex;
		justify-content:center;
		position:relative;
	}
	/*头像部分*/
	.myteacher-teacher-portrait{
		width:90px;
		height:90px;
		background-color:#eee;
		margin-top:20px;
		border-radius:50%;
		overflow:hidden;
	}
	.myteacher-teacher-portrait img{
		width:100%;
		height:100%;
	}
	/*讲师名*/
	.myteacher-teacher-top span{
		display:inline-block;
		/*text-align:center;*/
		position:absolute;
		bottom:22px;
		left:44%;
		color:#333;
		font-size:0.94rem;
		font-family:"Microsoft Yahei";
	}

	/*提现和直播内容部分*/
	.myteacher-withdrawals-box{
		width:100%;
		height:60px;
		background-color:white;
		border-bottom:1px solid #e5e5e5;
	}

	/*提现和直播内容部分*/
	.myteacher-withdrawals-box{
		display:flex;
		justify-content:center;
		align-items:center;
		justify-content:space-around;
		position:relative;
	}
	.myteacher-withdrawals-box li{
		line-height:100%;
	}
	.myteacher-withdrawals-box li .myteacher-withdrawals-number{
		position:absolute;
		top:22px;
	}

	.myteacher-withdrawals-box li:first-child{
		width:40%;
		height:30px;
		border-right:1px solid #e5e5e5;
		margin-top:4px;
	}
	.myteacher-withdrawals-box li:nth-child(2){
		margin-right:26px;
	}
	.myteacher-withdrawals-box li .myteacher-withdrawals-number{
		font-size:1.25rem;
		color:#333;
		font-family: "Microsoft Yahei";
		margin-left:5px;
	}
	
	.myteacher-withdrawals-individual{
		color:#666;
		font-size:0.81rem;
	}

	.myteacher-transition{
		width:100%;
		height:10px;
		background-color:#fafafa;
	}

	/*讲师介绍部分*/
	.myteacher-AboutInstructor-box{
		width:100%;
		height:40px;
		background-color:white;
		border-top:1px solid #e5e5e5;
	}
	.myteacher-AboutInstructor-box img{
		margin-top:12px;
		margin-left:10px;
	}
	.myteacher-AboutInstructor-box span{
		font-size:0.94rem;
		color:#333;
		font-family:"Microsoft Yahei";
		margin-left:2px;
	}

	/*讲师介绍文字部分*/
	.myteacher-AboutInstructor-text-box{
		width:100%;
		border-top:1px solid #e5e5e5;
	}

	.myteacher-field{
		margin-top:20px;
		margin-left:13px;
		font-size:0.813rem;
		color:#333;
	}
	.myteacher-field span{
		color:#666;
	}

	.myteacher-Characteristic{
		margin-left:13px;
		margin-top:20px;
		line-height:26px;
		font-size:0.875rem;
		color:#333;
		font-family:"Microsoft Yahei";
	}
	.myteacher-Characteristic span{
		font-size:0.813rem;
		color:#666;
	}

	/*图片部分*/
	.myteacher-AboutInstructor-text-box img{
		width:94%;
		height:auto;
		margin-left:10px;
		margin-top:20px;
	}
</style>
