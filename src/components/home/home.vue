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
						<router-link to="livedetail">
							<div id="recentcontent">
								<div id="topImgDiv">
									<img src="../../assets/grain.jpg" alt="" class="imgGrain">
									<div class="begin"></div>
									<span class="beginText">即将开始</span>
									<div class="introduceText">多吃谷物少吃菜,日常生活中的养生之道。谷肉果菜，食养尽之，无使过之，伤其正也。
									</div>
									<p class="introduceFoodText">饮食养生其实就是让身体的本能去顺应...</p>
									<img src="../../assets/lecturer@2x.png" class="userIcon">
									<span class="userName">曲黎敏</span>
									<img src="../../assets/heat@2x.png" class="fire">
									<span class="fireNumber">234567次</span>
									<!-- 是否已经购买的判断 -->
									<img src="../../assets/buyed@2x.png" class="purchase">
									<span class="money">￥300</span>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
			<infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
		</div>
		<div v-else>
			<mine></mine>
		</div>
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
				homeArray: [
					{
						topic_id: '1510',
						topic_type: 'shiji',
						pic: 'http://image.shougongke.com/topic/main/1493878194_73rbwkcanj.jpg@!home_page',
						subject: '众筹｜这支笔，让你重新爱上书写',
						template: '4',
						mob_h5_url: 'http://www.shougongke.com/index.php?m=Topic&a=topicDetail&topic_id=1510&topic_type=shiji&funding_id=33&is_old=1'
					},
					{}, {}, {}, {}
				],
				currentSelect: '单直播间',
				tabbarSelect: {
					info: '首页'
				},
				index: 0,
				bottomCount: 20,
				scroller: null,
				loading: false,
				refreshing: false
			};
		},
		components: {
			vHeader: Header,
			vFooter: Footer,
			Mine
		},
		mounted() {
			if (!window.localStorage.tabSelect) {
			// console.log(window.localStorage.tabSelect);
				window.localStorage.tabSelect = this.tabbarSelect.info;
				// this.tabbarSelect.info = window.localStorage.tabSelect;
				console.log(window.localStorage.tabSelect);
			} else {
				this.tabbarSelect.info = window.localStorage.tabSelect;
			};
			this.scroller = this.$el;
		},
		methods: {
			onScrollBottom() {
				if (this.onFetching) {
					// do nothing
				} else {
					this.onFetching = true;
					setTimeout(() => {
						var item = {};
						if (this.homeArray.length > 5) {
							this.onFetching = false;
							this.$nextTick(() => {
								this.$refs.scrollerBottom.reset();
							});
							return;
						};
						this.homeArray.push(item);
						this.$nextTick(() => {
							this.$refs.scrollerBottom.reset();
						});
						this.onFetching = false;
					}, 2000);
				};
			},
			// 上拉加载更多
			loadMore() {
				let vue = this;
				this.loading = true;
				setTimeout(() => {
					vue.getList();
				}, 500);
			},
			getList() {
				for (var i = 0; i < 5; i++) {
					var item = i;
					this.homeArray.push(item);
				};
				this.loading = false;
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
</style>
