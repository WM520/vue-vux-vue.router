<template>
	<div class="home" rel="homescroll">
		<div v-if="tabbarSelect.info === '首页'">
			<v-header></v-header>
			<split></split>
			<div class="recentvisit">
				<div class="recent-wrapper">
					<div class="recent-header">
						<img class="recenticon" src="../../assets/time@2x.png">
						<h1 class="recenttitle">最近浏览</h1>
					 	<router-link to="recent" class="more">更多</router-link>
						<img class="arrows" src="../../assets/gobutton.png">
					</div>
					<div id="recentcontent" v-for="item in homeArray">
						<router-link to="livedetail">
							<div id="topImgDiv">
								<img src="../../assets/grain.jpg" alt="" class="imgGrain">
								<div class="begin"></div>
								<span class="beginText">即将开始</span>
								<div class="introduceText">多吃谷物少吃菜,日常生活中的养生之道。谷肉果菜，食养尽之，无使过之，伤其正也。</div>
								<p class="introduceFoodText">饮食养生其实就是让身体的本能去顺应...</p>
								<img src="../../assets/lecturer@2x.png" class="userIcon">
								<span class="userName">曲黎敏</span>
								<img src="../../assets/heat@2x.png" class="fire">
								<span class="fireNumber">234567次</span>
								<img src="../../assets/buyed@2x.png" class="purchase">
								<span class="money">￥300</span>
							</div>
						</router-link>
					</div>
				</div>
				<split></split>
				<div class="liveRoom">
					<tab active-color='#04a16a'>
				      <tab-item selected @on-item-click="handler">单直播间</tab-item>
				      <tab-item @on-item-click="handler">系列直播</tab-item>
    				</tab>
					<div v-if="currentSelect === '单直播间'">
							<div id="recentcontent" v-for="item in homeArray">
								<router-link to="livedetail">
									<div id="topImgDiv">
										<img src="../../assets/grain.jpg" alt="" class="imgGrain">
										<div class="begin"></div>
										<span class="beginText">即将开始</span>
										<div class="introduceText">多吃谷物少吃菜,日常生活中的养生之道。谷肉果菜，食养尽之，无使过之，伤其正也。</div>
										<p class="introduceFoodText">饮食养生其实就是让身体的本能去顺应...</p>
										<img src="../../assets/lecturer@2x.png" class="userIcon">
										<span class="userName">曲黎敏</span>
										<img src="../../assets/heat@2x.png" class="fire">
										<span class="fireNumber">234567次</span>
										<img src="../../assets/buyed@2x.png" class="purchase">
										<span class="money">￥300</span>
									</div>
								</router-link>
							</div>
					</div>
					<div v-else>
						<div id="recentcontent">
							<router-link to="livedetail">
								<div id="topImgDiv">
									<img src="../../assets/grain.jpg" alt="" class="imgGrain">
									<div class="begin"></div>
									<span class="beginText">即将开始</span>
									<div class="introduceText">多吃谷物少吃菜,日常生活中的养生之道。谷肉果菜，食养尽之，无使过之，伤其正也。</div>
									<p class="introduceFoodText">饮食养生其实就是让身体的本能去顺应...</p>
									<img src="../../assets/lecturer@2x.png" class="userIcon">
									<span class="userName">曲黎敏</span>
									<img src="../../assets/heat@2x.png" class="fire">
									<span class="fireNumber">234567次</span>
									<img src="../../assets/buyed@2x.png" class="purchase">
									<span class="money">￥300</span>
								</div>
							</router-link>
						</div>
					
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<mine></mine>
		</div>
		<div class="home-interval"></div>
		<v-footer :tabSelect="tabbarSelect" ></v-footer>
	</div>
</template>
<script type="text/javascript">
import header from '@/components/header/header';
import footer from '@/components/tabbar/tabbar';
import { Scroller, Group, Cell, Tab, TabItem, Swiper, SwiperItem } from 'vux';
import split from '@/components/split/split';
import mine from '@/components/mine/mine';
const list = () => ['单直播间', '系列直播'];
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
				{
					topic_id: '1510',
					topic_type: 'shiji',
					pic: 'http://image.shougongke.com/topic/main/1493878194_73rbwkcanj.jpg@!home_page',
					subject: '众筹｜这支笔，让你重新爱上书写',
					template: '4',
					mob_h5_url: 'http://www.shougongke.com/index.php?m=Topic&a=topicDetail&topic_id=1510&topic_type=shiji&funding_id=33&is_old=1'
				}
			],
			currentSelect: '单直播间',
			tabbarSelect: {
				info: '首页'
			},
			list2: list(),
			index: 0
		};
	},
	created() {
	},
	components: {
		vHeader: header,
		Scroller,
		Group,
		Cell,
		split,
		Tab,
		TabItem,
		Swiper,
		SwiperItem,
		vFooter: footer,
		mine
	},
	methods: {
		handler() {
			if (this.currentSelect === '单直播间') {
				this.currentSelect = '系列直播';
			} else {
				this.currentSelect = '单直播间';
			}
		}
	},
	mounted() {
		// console.log(window.localStorage.tabSelect);
		if (!window.localStorage.tabSelect) {
			// console.log(window.localStorage.tabSelect);
			window.localStorage.tabSelect = this.tabbarSelect.info;
			// this.tabbarSelect.info = window.localStorage.tabSelect;
			console.log(window.localStorage.tabSelect);
		} else {
			this.tabbarSelect.info = window.localStorage.tabSelect;
		};
	},
	computed: {
		// tabbarSelect: function() {
		// 	if (this.tabbarSelect.info === '') {
		// 		this.tabbarSelect.info = '首页';
		// 	};
		// 	return this.tabbarSelect;
		// }
	}
};
</script>
<style type="text/css" scroped>
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
	.more {
		position:absolute;
		font-family:MicrosoftYahei;
		font-size: 14px;
		line-height: 14px;
		top: 10px;
		right:35px;
	}
	.arrows {
		position: absolute;
		width: 8px;
		height: 12px;
		right: 10px;
		top: 10px;
	}
	.
	.liveRoomTitle {
		display: flex;
		font-size: 16px;
		color: #04a16a;
	}
	.home-interval {
		width: 100%;
		height: 50px;
	}

</style>
