<template>
	<div id="mycourse-content">
		<split v-show="courseArray.length !== 0"></split>
		<!-- 没有课程的时候给个没有课程的提示 -->
		<blankpage v-show="courseArray.length === 0"><span>您还没有购买课程</span></blankpage>
		<ul>
			
				<li v-for="item in courseArray">
					<router-link :to="{name:'LiveDetail', params: { id:item.courseId }}">
<!-- 						<div class="order">
							<span class="ordertext">订单号: {{ item.orderNumber }}</span>
						</div> -->
						<div id="topImgDiv">
						<img :src="item.courseLogo_url" alt="" class="imgGrain">
<!-- 						<div class="begin"></div>
						<span class="beginText">即将开始</span> -->
						<div class="introduceText">{{ item.courseName }}</div>
						<p class="introduceFoodText">{{ item.courseIntroduction }}</p>
						<img src="../../assets/lecturer@2x.png" class="userIcon">
						<span class="userName">{{ item.lecturerName }}</span>
						<span class="money">￥{{ item.coursePrice }}</span>
						</div>
						<split></split>
					</router-link>
				</li>
			
		</ul>

	</div>
</template>
<script type="text/javascript">
import split from '@/components/split/split';
import BlankPage from '@/components/blankpages/blankpages';
import { mapState } from 'vuex';
	export default {
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url,
	            userinfo_data : state => state.UserInfo.userinfo_data,
	            common_request_appendv1_url: state => state.common.common_request_appendv1_url 
	        })
    	},
		data() {
			return {
				courseArray: [],
				courseTempArray: [],
				courseLoading: true
			};
		},
		components: {
			split,
			blankpage: BlankPage
		},
		// beforeRouteEnter (to, from, next) {
		// 	next(vm => {
		// 		let id = localStorage.getItem('dataid');
		// 		let lecturerId = vm.$store.state.UserInfo.lecturerId;
		// 		let url = vm.common_request_base_url + vm.$store.state.UserInfo.appendURL + 'findcoursebylecturerid?id=' + id + '&lecturerId=' + lecturerId;
		// 		vm.$http.get(url)
		// 		.then((res) => {
		// 			vm.courseArray = res.data.content.result;
		// 			console.log(vm.courseArray);
		// 		});
		// 	});
		// }
		beforeRouteEnter (to, from, next) {
			next(vm => {
				vm.courseLoading = true;
				vm.$indicator.open('加载中...');
				console.log(vm.$store.state);
				let lecturerId = vm.userinfo_data.lecturerId;
				let id = localStorage.getItem('dataid');
				let openid = localStorage.getItem('openid');
				let url = vm.common_request_base_url + vm.common_request_appendv1_url + 'findcoursebylecturerid?id=' + id + '&lecturerId=' + lecturerId + '&openid=' + openid;
				console.log(url);
				vm.$http.get(url)
				.then((res) => {
					let courceList = res.data.content.result;
					if (vm.courseTempArray.length === courceList.length) {
						vm.courseLoading = false;
						vm.$indicator.close();
						return;
					};
					vm.courseTempArray = courceList;
					vm.courseLoading = false;
					console.log(vm.courseTempArray);
				})
				.catch((error) => {
					vm.$toast("获取课程异常");
					vm.courseLoading = true;
					vm.$indicator.close();
				});
			});
		},
		watch: {
			courseLoading() {
				if (this.courseLoading === false) {
					console.log('courseLoading===========');
					this.getCourseImage();
					this.$indicator.close();
				};
			}
		},
		methods: {
			getCourseImage() {
				let course_image_t = [];
				let openid = localStorage.getItem('openid');
				this.courseTempArray.forEach((b_item, b_index) => {
					let x_url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia?media=' + b_item.courseLogo + '&openid=' + openid;
					this.$http.get(x_url)
						.then((h_res) => {
							b_item.courseLogo_url = h_res.data;
							course_image_t[b_index] = b_item;
							if(b_index >= this.courseTempArray.length-1){
								this.courseArray = course_image_t;
								console.log("this.courseArray");
								console.log(this.courseArray);
							}
						})
						.catch((error) => {
	    					console.log(error);
	    					this.$toast("获取课程列表图片异常");
	  					});
				});
			}
		}
	};
</script>
<style type="text/css" scroped>
	#mycourse-content{
		width:100vw;
		height:100vh;
		background: #f3f5f7
	}
	#mycourse-content #topImgDiv{
		width:100%;
		height:8rem;
		margin:0 auto;
		border-top:0.01rem solid #eee;
		border-bottom:0.01rem solid #eee;
		position:relative;
	}
	#mycourse-content #topImgDiv .imgGrain{
		width:6rem;
		height:6rem;
		margin-top:1.1rem;
		margin-left:0.5rem;
	}
	.order {
		padding: 10px;
	}
	.ordertext {
		font-size: 14px;
		line-height: 14px;
		color: #333333;
	}
	.begin{
		width:6rem;
		height:1.2rem;
		opacity:0.4;
		background-color:black;
		position:absolute;
		top:6rem;
		left:0.5rem;
	}
	.beginText{
		display:block;
		color:#FF9900;
		font-size:0.7rem;
		font-family:MicrosoftYahei;
		position:absolute;
		top:6.2rem;
		left:2rem;
	}

	.introduceText{
		width:67%;
		position:absolute;
		top:0.78rem;
		left:7rem;
		font-size:0.9rem;
		word-break:break-all;
		font-family:MicrosoftYahei;
		color:#333333;
		line-height:0.9rem;
	}

	.introduceFoodText{
		position:absolute;
		top:3.6rem;
		left:7rem;
		font-size:0.6rem;
		word-break:break-all;
		font-family:MicrosoftYahei;
		color:#999999;
	}
	.userIcon{
		width:0.8rem;
		height:0.8rem;
		position:absolute;
		bottom:1.8rem;
		left:7rem;
	}

	.userName{
		font-size:0.6rem;
		color:#666666;
		font-family:MicrosoftYahei;
		position:absolute;
		bottom:1.8rem;
		left:8rem;
	}
	.fire{
		width:0.8rem;
		height:0.8rem;
		margin-left:0.2rem;
		margin-bottom:-0.2rem;
	}

	.fireNumber{
		font-size:0.8rem;
		color:#666666;
		font-family:MicrosoftYahei;
		position:absolute;
		bottom:0.6rem;
		left:8rem;
	}
	.purchase{
		width:4.2rem;
		height:4.2rem;
		position:absolute;
		top:3rem;
		left:18rem;
	}
	.money{
		color:#ff2626;
		font-size:1.4rem;
		font-family:MicrosoftYahei;
		position:absolute;
		left:20.5rem;
		top:5.6rem;
	}
	@media screen and (max-width: 375px) {
	    .purchase{
			width:4.2rem;
			height:4.2rem;
			position:absolute;
			top:3rem;
			left:16rem;
		}
		.money{
			color:#ff2626;
			font-size:1.32rem;
			font-family:MicrosoftYahei;
			position:absolute;
			left:18.6rem;
			top:5.8rem;
		}
	}
	@media screen and (max-width: 320px) {
	    .purchase{
			width:4rem;
			height:4rem;
			position:absolute;
			top:3rem;
			left:14rem;
		}
		.money{
			color:#ff2626;
			font-size:1.2rem;
			font-family:MicrosoftYahei;
			position:absolute;
			left:16.4rem;
			top:5.6rem;
		}
	}

</style>
