<template>
	<div class="homeContent" ref="home">
		<div v-if="tabbarSelect.info === '首页'">
			<!-- 轮播 -->
			<v-header :imgURL="imgURL"></v-header>
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
									<img src="../../assets/grain.jpg" alt="" class="imgGrain">
									<div class="begin"></div>
									<span class="beginText">即将开始</span>
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
		<!-- <v-footer :tabSelect="tabbarSelect" @choosemine="choosemine" @choosehome="choosehome"></v-footer> -->
		<v-footer :tabSelect="tabbarSelect"></v-footer>
	</div>
</template>
<script type="text/javascript">
import Header from '@/components/header/header';
import Footer from '@/components/tabbar/tabbar';
import Mine from '@/components/mine/mine';
	export default {
		data () {
			return {
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
				imgURL: []
			};
		},
		components: {
			vHeader: Header,
			vFooter: Footer,
			Mine
		},
		mounted() {
			if (!window.localStorage.tabSelect) {
				window.localStorage.tabSelect = this.tabbarSelect.info;
				console.log(window.localStorage.tabSelect);
			} else {
				this.tabbarSelect.info = window.localStorage.tabSelect;
			};
			// this.scroller = this.$el;
			// 获取banner
			let id = localStorage.getItem('dataid');
			let url = 'api/web/v1/app/findallbanner?id=' + id;
				this.$http.get(url)
				.then((res) => {
					var imgURL = res.data.content.result;
					if (imgURL === null) { return; };
					for (var i = 0; i < imgURL.length; i++) {
						var imgObject = {};
						imgObject.img = 'http://192.168.0.126:38080' + imgURL[i].mbUrl;
						imgObject.title = imgURL[i].mbImage;
						imgObject.url = 'http://qingzz.com/';
						this.imgURL.push(imgObject);
					}
				}, (err) => {
					console.log(err);
				});
				this.getList();
		},
		methods: {
			// 上拉加载更多
			loadMore() {
				let vue = this;
				this.loading = true;
				setTimeout(() => {
					vue.getList();
				}, 500);
			},
			getList() {
				// 获取课程列表
				let id = localStorage.getItem('dataid');
				let url = 'api/web/v1/app/findallcourse' + '?id=' + id + '&page=' + '1' + '&size=' + '5';
				// alert(url);
				this.$http.get(url)
				.then((res) => {
					var courceList = res.data.content.result;
					console.log(courceList);
					this.homeArray = courceList;
				});
			}
			// choosemine() {
			// 	console.log('choosemine');
			// 	document.title = '我的青枝';
			// },
			// choosehome() {
			// 	console.log('choosehome');
			// 	document.title = '首页';
			// }
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				let id = localStorage.getItem('dataid');
				let url = 'api/web/v1/app/findallcourse' + '?id=' + id + '&page=' + '1' + '&size=' + '5';
				// alert(url);
				vm.$http.get(url)
				.then((res) => {
					var courceList = res.data.content.result;
					console.log(courceList);
					vm.homeArray = courceList;
				});
			});
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
