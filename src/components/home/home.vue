<template>
	<div class="homeContent" ref="home">
		<div v-if="tabbarSelect.info === '首页'">
			<!-- 轮播 -->
			<v-header></v-header>
			<div class="liveContent">
				<div class="recent-wrapper">
					<div class="recent-header">
						<img class="recenticon" src="../../assets/time@2x.png">
						<h1 class="recenttitle">直播间</h1>
					</div>
				</div>
				<ul>
					<!-- 课程列表 -->
					<li v-for= "item in homeArray">
						<router-link :to="{name:'LiveDetail', params: { id:item.courseId }}">
							<div id="recentcontent">
								<div id="topImgDiv">
									<img :src="item.courseLogo_url" class="imgGrain">
									<div class="introduceText">
										{{ item.courseName }}
									</div>
									<p class="introduceFoodText">{{ item.courseIntroduction }}</p>
									<img src="../../assets/lecturer@2x.png" class="userIcon">
									<span class="userName">{{ item.lecturerName }}</span>
									<img src="../../assets/heat@2x.png" class="fire">
									<span class="fireNumber">{{ item.chViewCount }}次</span>
									<!-- 是否已经购买的判断 -->
									<img src="../../assets/buyed@2x.png" class="purchase" v-show="item.isBuy">
									<span class="money">￥{{ item.coursePrice }}</span>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
				<!-- 分隔块3 -->
  				<div class="recent-interval"></div>
			</div>
			<!-- <infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/> -->
		</div>
		<div v-else>
			<mine></mine>
		</div>
		<v-footer :tabSelect="tabbarSelect" @choosemine="choosemine" @choosehome="choosehome"></v-footer>
		<!--<v-footer :tabSelect="tabbarSelect"></v-footer>-->
	</div>
</template>
<script type="text/javascript">
import Header from '@/components/header/header';
import Footer from '@/components/tabbar/tabbar';
import Mine from '@/components/mine/mine';
import { mapState } from 'vuex';
	export default {
		data () {
			return {
				homeBannerDataLoading:true,
				homeBannerLoading:true,
				homeListLoading:true,
				homeArray: [],
				currentSelect: '单直播间',
				tabbarSelect: {
					info: '首页'
				},
				index: 0,
				bottomCount: 20,
				// scroller: null,
				loading: false,
				refreshing: false,
				imgUrlBanner:[],
				homeTempArray:[]
			};
		},
		components: {
			vHeader: Header,
			vFooter: Footer,
			Mine
		},
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url,
	            swiper_img_list : state => state.header.swiper_img_list,
	            common_request_appendv1_url: state => state.common.common_request_appendv1_url
	        })
    	},
		mounted() {
			this.initLogin();
			this.tabbarSelect.info = '首页';
		},
		methods: {
			initUserInfo() {
				
			},
			initLogin(){
				if(localStorage.getItem('user_logined') === null || localStorage.getItem('user_logined') === undefined || localStorage.getItem('user_logined') === false ){
					if (localStorage.getItem('dataid') === null || localStorage.getItem('dataid') === undefined)
					{
						let key = '';
						localStorage.setItem('dataid', key);
					};
					if (localStorage.getItem('openid') === null || localStorage.getItem('openid') === undefined)
					{
						let key = '';
						localStorage.setItem('openid', key);
					};
					let url = this.common_request_base_url + this.common_request_appendv1_url +'logintest?id=' + localStorage.getItem('dataid') + '&openid=' + localStorage.getItem('openid');
					console.log(url);
					this.$http.get(url)
						.then((res) => {
							// 微信网页授权验证
							console.log(res);
							if (res.data.userWxOpenid === undefined || res.data.userWxOpenid === '') {
								localStorage.setItem('dataid', res.data.id);
								console.log(res);
								let r_url = this.common_request_base_url + this.common_request_appendv1_url + 'login?id=' + res.data.id;
								window.location.href = r_url;
							}else{
								this.$store.dispatch("initUserInfo", res.data);

								localStorage.setItem('openid', res.data.userWxOpenid);
								console.log(res.data);
								this.initHome();
							}
						})
	  					.catch((error) => {
	    					this.$toast("获取session_id异常");
	    					console.log(error);
	  					});
				}else{
					this.$store.dispatch("getLocalUserInfo");
					this.initHome();
				}
			},
			
			initHome(){

				
				let u = navigator.userAgent;

				//if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
				if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
					//currentUrl = currentUrl + 'livedetail/liveroom/'
					let currentUrl = location.href;

					console.log("currenturl:="+currentUrl);
					this.$store.dispatch("getWeChatSignature",currentUrl);
				}
				if(this.homeBannerDataLoading || this.homeListLoading){
					this.$indicator.open('加载中...'); 
					if(this.homeBannerDataLoading){
						this.initBanner();
					}
					if(this.homeListLoading){
						this.initHomeCourseList();
					}
				}

			},
			initBanner(){
				let id = localStorage.getItem('dataid');
				let openid = localStorage.getItem('openid');
				let bannerurl = this.common_request_base_url + this.common_request_appendv1_url + 'findallbanner?id=' + id + '&openid=' + openid;
				this.$http.get(bannerurl)
					.then((response) => {
    					console.log(response);
    					let banner_list = response.data.content.result;
    					if(banner_list.length <= 0){
    						this.$toast("获取banner信息为空");
    					}else{
    						this.imgUrlBanner = [];
	    					console.log(banner_list);
	    					this.imgUrlBanner = banner_list;
	    					console.log(this.imgUrlBanner);
	    					this.homeBannerDataLoading = false;
    					}
  					})
  					.catch((error) => {
  						this.homeBannerDataLoading = false;
    					console.log(error);
    					this.$toast("获取banner信息异常");
    					localStorage.clear();
    					this.$router.go(0);
  					});
			},
			getBannerImages(){
				this.imgURL = [];
				let openid = localStorage.getItem('openid');
				this.imgUrlBanner.forEach((b_item,b_index) => {
					let url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia?media=' + b_item.mbImage + '&openid=' + openid;
					console.log('getBannerImagesUrl====='+ url);
					this.$http.get(url)
						.then((response) => {
	    					console.log(response);
	    					//this.imgUrlBanner[b_index].img = response.data;
	    					//this.imgUrlBanner[b_index].url = this.imgUrlBanner[b_index].mbUrl;
	    					let img_b = {
	    						url:'',
	    						img:'',
	    					};
	    					img_b.url = b_item.mbUrl;
	    					img_b.img = response.data;

	    					let s_img_data = {
	    						index:b_index,
	    						data:img_b
	    					};
	    					this.$store.dispatch("setImageList",s_img_data);
	    					if(b_index >= this.imgUrlBanner.length-1){
	    						this.$store.dispatch("setHeaderImageList");
	    						this.homeBannerLoading = false;
	    						//this.$forceUpdate();
	    					}
	    					console.log(this.swiper_img_list);
	  					})
	  					.catch((error) => {
	    					console.log(error);
	    					this.$toast("获取banner图片异常");
	  					});
				})
			},
			initHomeCourseList(){
				this.homeTempArray = [];
				let openid = localStorage.getItem('openid');
				this.homeArray = [];
				let id = localStorage.getItem('dataid');
				let url = this.common_request_base_url + this.common_request_appendv1_url + 'findallcourse?id=' + id + '&page=' + '1' + '&size=' + '5' + '&openid=' + openid;
				this.$http.get(url)
				.then((res) => {
					let courceList = res.data.content.result;
					this.homeTempArray = courceList;
					this.homeListLoading = false;
					console.log(this.homeTempArray);

				})
				.catch((error) => {
	    			console.log(error);
	    			this.$toast("获取首页课程列表异常");
	    			localStorage.clear();
    				this.$router.go(0);
	  			});
			},
			getHomeCourseListImage(){
				let home_array_t = [];
				let openid = localStorage.getItem('openid');
				this.homeTempArray.forEach((b_item,b_index) => {
					let x_url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia?media=' +b_item.courseLogo + '&openid=' + openid;
					this.$http.get(x_url)
						.then((h_res) => {
							b_item.courseLogo_url = h_res.data;
							this.homeArray.push(b_item);
							//home_array_t[b_index] = b_item;
							//this.homeArray = home_array_t;
							//console.log(this.homeArray);
							/*if(b_index >= this.homeTempArray.length-1){
								//this.homeArray = home_array_t;
								//this.$forceUpdate();
								this.$nextTick(function () {
									this.homeArray = home_array_t;
								})

							}*/
						})
						.catch((error) => {
	    					console.log(error);
	    					this.$toast("获取课程列表图片异常");
	  					});
				})
			},
			choosemine(){
				this.tabbarSelect.info = '我的青枝';
			},
			choosehome(){
				this.tabbarSelect.info = '首页';
			}			
		},
		watch:{
	        homeBannerDataLoading(){
	            if(this.homeBannerDataLoading === false){
	                if(this.imgUrlBanner.length > 0){
	                	console.log("getBannerImages");
	                	this.getBannerImages();
	                }
	            }
	        },
	        homeListLoading(){
	            if(this.homeListLoading === false){
	            	this.getHomeCourseListImage();
	                if(this.homeBannerLoading === false){
	                	this.$indicator.close();
	                }
	            }
	        },
	        homeBannerLoading(){
	            if(this.homeBannerLoading === false){
	            	console.log("this.homeBannerLoading false");
	                if(this.homeListLoading === false){
	                	this.$indicator.close();
	                }
	            }
	        }
    	}

	};
</script>
<style type="text/css" scroped>
	.homeContent {
		z-index: 1;
		width: 100vw;
		height: 100vh;
		overflow: auto;
/*
		transition: transform 0.3s ease;
		-webkit-overflow-scrolling: touch;
	}
	#recentcontent{
		width:100%;
		/*height:100%;*/
	}
	#recentcontent #topImgDiv{
		width:100%;
		height:8rem;
		margin:0 auto;
		border-top:0.01rem solid #eee;
		border-bottom:0.01rem solid #eee;
		position:relative;
	}
	#recentcontent #topImgDiv .imgGrain{
		width:6rem;
		height:6rem;
		margin-top:1.1rem;
		margin-left:0.5rem;
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
	.recent-header {
		width:100%;
		position: relative;
		padding: 5px;
		display: inline-block;
		height: 32px;
		font-size: 0px;
	}
	.recenticon {
		display: inline-block;
		width: 16px;
		height: 16px;
		padding-left: 5px;
		padding-top: 5px;
	}
	.recenttitle {
		display: inline-block;
		font-family:MicrosoftYahei;
		font-size: 18px;
		line-height: 18px;
		padding-left: 10px;
		padding-top: 7px;
	}
	.recent-interval {
		width: 100%;
		height:70px;
	}
</style>
