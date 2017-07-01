<template>
	<div class="myorder-box">

		<!-- <blankpage v-show="courseArray.length === 0"><span>您还没有购买课程</span></blankpage> -->
		<!-- 导航栏部分 -->
		<div>
			<div class="myorder-Nav-box">
				<tab>
			      <tab-item selected @on-item-click="onItemClick">普通</tab-item>
			      <tab-item @on-item-click="onItemClick">赠礼</tab-item>
			      <tab-item @on-item-click="onItemClick">拼课</tab-item>
	    		</tab>
			</div>
			<!-- 介绍部分 -->
				<ul>
					<li v-for="item in displayArray">
						<router-link :to="{name:'OrderDetails', params: { orderid:item.orderId }}">
							<!-- 订单号部分 -->
						<div class="myorder-orderNumber-box">
							<!-- 订单号部分 -->
							<span class="myorder-orderNumber">
								订单号:{{ item.orderNumber }}
							</span>

							<!-- 已经领取部分 -->
							<span class="myorder-orderNumber-text" v-show="item.orderType===1">
								已领取光
							</span>
						</div>
						<div class="myorder-topImgDiv">
							<!-- 阿里云的图片处理 -->
							<!-- <img :src="item.imgUrl" alt="" class="myorder-imgGrain"> -->
							<img :src="item.courseLogo_url" class="myorder-imgGrain">
							<div class="myorder-introduceText" >{{ item.courseName }}</div>
							<span class="myorder-introduceFoodText">{{ item.courseIntroduction }}</span>
							<img src="../../assets/lecturer@2x.png" class="myorder-userIcon">
							<span class="myorder-userName">{{ item.lecturerName }}</span>
							<img src="../../assets/heat@2x.png" class="myorder-fire">
							<span class="myorder-fireNumber">{{ item.chViewCount }}</span>
							<span class="myorder-money">{{ item.coursePrice }}</span>
							<img src="../../assets/zengli.png" height="12" width="12" class="myorder-gift-icon">
							<span class="myorder-gift-number">{{ item.scale }}<span>份</span></span>
						</div>
						</router-link>
					</li>
				</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import { Tab, TabItem } from 'vux';
import BlankPage from '@/components/blankpages/blankpages';
import { mapState } from 'vuex';
	export default {
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url,
	            common_request_appendv1_url: state => state.common.common_request_appendv1_url,
	            userinfo_data : state => state.UserInfo.userinfo_data
	        })
    	},
		data() {
			return {
				loading: true,
				// scroller: null,
				courseArray: [],
				displayArray: [],
				normalArray: [],
				sendArray: [],
				pingkeArray: [],
				normalTempArray: [],
				sendTempArray: [],
				pingkeTempArray: []
			};
		},
		components: {
			Tab,
			TabItem,
			blankpage: BlankPage
		},
		methods: {
			onItemClick(val) {
				if (val === 0) {
					this.displayArray = this.normalArray;
				} else if (val === 1) {
					this.displayArray = this.sendArray;
				} else if (val === 2) {
					this.displayArray = this.pingkeArray;
				};
			},
			getNormalArrayImage() {
				let course_image_t = [];
				this.normalTempArray.forEach((b_item, b_index) => {
					let openid = localStorage.getItem('openid');
					let x_url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia?media=' + b_item.courseLogo + '&openid=' + openid;
					this.$http.get(x_url)
						.then((h_res) => {
							b_item.courseLogo_url = h_res.data;
							course_image_t[b_index] = b_item;
							if(b_index >= this.normalTempArray.length-1){
								this.normalArray = course_image_t;
								console.log("this.normalArray");
								console.log(this.normalArray);
								this.displayArray = this.normalArray;
							}
						})
						.catch((error) => {
	    					console.log(error);
	    					this.$toast("获取普通订单列表图片异常");
	  					});
				});
			},
			getSendArrayImage() {
				let course_image_t = [];
				this.sendTempArray.forEach((b_item, b_index) => {
					let openid = localStorage.getItem('openid');
					let x_url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia?media=' + b_item.courseLogo + '&openid=' + openid;
					this.$http.get(x_url)
						.then((h_res) => {
							b_item.courseLogo_url = h_res.data;
							course_image_t[b_index] = b_item;
							if(b_index >= this.sendTempArray.length-1){
								this.sendArray = course_image_t;
								console.log("this.sendArray");
								console.log(this.sendArray);
							}
						})
						.catch((error) => {
	    					console.log(error);
	    					this.$toast("获取赠送订单列表图片异常");
	  					});
				});
			},
			getPingkeTempArrayImage() {
				let course_image_t = [];
				let openid = localStorage.getItem('openid');
				this.pingkeTempArray.forEach((b_item, b_index) => {
					let x_url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia?media=' + b_item.courseLogo+ '&openid=' + openid;
					this.$http.get(x_url)
						.then((h_res) => {
							b_item.courseLogo_url = h_res.data;
							course_image_t[b_index] = b_item;
							if(b_index >= this.pingkeTempArray.length-1){
								this.pingkeArray = course_image_t;
								console.log("this.pingkeArray");
								console.log(this.pingkeArray);
							}
						})
						.catch((error) => {
	    					console.log(error);
	    					this.$toast("获取拼课订单列表图片异常");
	  					});
				});
			},
		},
		mounted() {
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				// 获取订单详情
				vm.loading = true;
				vm.$indicator.open('加载中...');
				let userID = vm.userinfo_data.userId;
				let id = localStorage.getItem('dataid');
				let openid = localStorage.getItem('openid');
				let url = vm.common_request_base_url + vm.common_request_appendv1_url + 'findorderbyuserid?id=' + id + '&userId=' + userID + '&openid=' + openid;
				console.log(url);
				vm.$http.get(url)
				.then((res) => {
					console.log(res);
					if (vm.courseArray.length === res.data.content.result.length) {
						vm.loading = false;
						vm.$indicator.close();
						return;
					};
					vm.courseArray = [];
					vm.normalTempArray = [];
					vm.sendTempArray = [];
					vm.pingkeTempArray = [];
					vm.courseArray = res.data.content.result;
					for (var i = 0; i < vm.courseArray.length; i++) {
						if (vm.courseArray[i].orderType === 0) {
							vm.normalTempArray.push(vm.courseArray[i]);
						} else if (vm.courseArray[i].orderType === 1) {
							vm.sendTempArray.push(vm.courseArray[i]);
						} else if (vm.courseArray[i].orderType === 2) {
							vm.pingkeTempArray.push(vm.courseArray[i]);
						};
					};
					console.log(vm.normalTempArray);
					console.log(vm.sendTempArray);
					console.log(vm.pingkeTempArray);
					vm.loading = false;
				})
				.catch((error) => {
					this.$toast("获取订单异常");
					vm.loading = true;
					vm.$indicator.close();
				});
			});
		},
		watch: {
			loading() {
				if (this.loading === false) {
					console.log("loading image");
					this.getNormalArrayImage();
					this.getSendArrayImage();
					this.getPingkeTempArrayImage();
					this.$indicator.close();
				};
			}
		}
	};
</script>
<style type="text/css" scorped>
	body{
		background-color:#fafafa;
	}
	.myorder-box{
		width:100%;
		height:auto;
		max-width:750px;
		width: 100vw;
		height: 100vh;
		overflow: auto;
		transition: transform 0.3s ease;
		-webkit-overflow-scrolling: touch;
	}
	/*导航部分*/
	.myorder-Nav-box{
		width:100%;
		height:40px;
		max-width:750px;
		border-bottom: 1px solid #e5e5e5;
		background-color:white;
	}
	.myorder-Nav-text-box li{
		width:16%;
		color:#333;
		font-size:0.94rem;
	}
	.myorder-Nav-text-box{
		display:flex;
		justify-content:space-around;
		line-height:40px;
		text-align:center;
	}

	.myorder-Nav-text-box li:nth-child(2){
		color:#04a16a;
		border-bottom:2px solid #04a16a;
	}

	/*订单号部分*/
	.myorder-orderNumber-box{
		width:100%;
		background-color:white;
		height:40px;
		margin-top:10px;
		border-top:1px solid #e5e5e5;
		border-bottom:1px solid #e5e5e5;
	}
	/*订单号部分*/
	.myorder-orderNumber{
		line-height:40px;
		font-size:0.75rem;
		color:#333;
		margin-left:10px;
	}
	.myorder-orderNumber-text{
		float:right;
		line-height:40px;
		font-size:0.875rem;
		color:#666;
		margin-right:10px;
	}

	/*介绍部分*/
	.myorder-topImgDiv{
		width:100%;
		height:8rem;
		margin:0 auto;
		border-bottom:0.01rem solid #e5e5e5;
		position:relative;
		overflow:hidden;
		background-color:white;
	}
	.myorder-topImgDiv .myorder-imgGrain{
		width:6rem;
		height:6rem;
		margin-top:0.94rem;
		margin-left:0.625rem;
		border-radius:2px;
	}
	

	.myorder-introduceText{
		width:66.2%;
		position:absolute;
		top:0.6rem;
		left:112px;
		font-size:0.875rem;
		word-break:break-all;
		font-family:"Microsoft Yahei";
		color:#333333;
		line-height:1.2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.myorder-introduceFoodText{
		width:64%;
		height:14px;
		position:absolute;
		top:53px;
		left:112px;
		font-size:0.688rem;
		font-family:"Microsoft Yahei";
		color:#999999;
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
	}
	.myorder-userIcon{
		width:0.8rem;
		height:0.8rem;
		position:absolute;
		bottom:2.4rem;
		left:112px;
	}

	.myorder-userName{
		font-size:0.69rem;
		color:#666666;
		font-family:"Microsoft Yahei";
		position:absolute;
		bottom:2.4rem;
		left:129px;
	}
	.myorder-fire{
		width:0.8rem;
		height:0.8rem;
		margin-left:13px;
	}

	.myorder-fireNumber{
		font-size:0.69rem;
		color:#666666;
		font-family:"Microsoft Yahei";
		position:absolute;
		bottom:16px;
		left:129px;
	}
	
	.myorder-money{
		float:right;
		margin-right:0.625rem;
		margin-top:5.14rem;
		color:#ff2626;
		font-size:1.25rem;
		font-family:"Microsoft Yahei";
	}

	/*赠礼部分*/
	.myorder-gift-icon{
		float:right;
		margin-right:2rem;
		margin-top:5.375rem;
	}
	.myorder-gift-number{
		float:right;
		margin-right:-36px;
		margin-top:5.375rem;
		color:#666;
		font-size:0.688rem;
	}

	.myorder-gift-number span{
		color:#999;
	}


	/*领取状态部分*/
	.myorder-orderNumber-Unclaimed{
		float:right;
		line-height:40px;
		font-size:0.875rem;
		color:#ff9900;
		margin-right:10px;
	}
</style>
