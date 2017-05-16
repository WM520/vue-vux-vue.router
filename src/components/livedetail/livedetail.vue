<template>
  <div class="content">
  	<div class="headercontent">
  		<img src="../../assets/teacherbg@2x.png" class="scanerImg">
  		<h1 class="livetitle">多吃谷物少吃菜，日常生活中的养生。谷肉果菜，食养尽之，无使过之，伤其正也</h1>
  		<router-link to="/myteacher">
  			<div class="teacher">
	  			<img src="../../assets/logo@2x.png" class="headericon">
	  			<span class="name">张宇  讲师</span>
  			<img src="../../assets/gobutton.png" class="headergo">
  		</div>
  		</router-link>
  	</div>
  	<split></split>
  	<div class="liveIntruction">
  		<div class="intructionHeader">
  			<img src="../../assets/liveintroduction@2x.png" class="intructionIcon">
  			<span class="intructionTitle">直播介绍</span>
  		</div>
  		<div class="intructionContent">
  			<span class="text">
  				研究表明，五谷杂粮可养五脏。俗话说“一谷补一脏”，五谷杂粮可养五脏。五谷有小米，大米，小麦，大豆，高粱。其中小米可养脾、大豆可养肾等等
  			</span>
  		</div>
  	</div>
  	<split></split>
  	<div class="liveArrange">
  		<div class="arrangeHeader">
  			<img src="../../assets/liveplan@2x.png" class="arrangeIcon">
  			<span class="intructionTitle">直播介绍</span>
  		</div>
  		<ul>
  			<li>
  				<router-link to="liveaudio">
	  				<div class="arrangeList">
	  					<span class="text">多吃谷物少吃菜，日常生活中的养生之道。。。<br>2017.03.16 16:00-17.00</span>
	  				</div>
  				</router-link>
  			</li>
  		</ul>
  	</div>
  	<v-footer class="tool"></v-footer>
  	<!-- 分隔块3 -->
  	<div class="recent-interval"></div>
  </div>
</template>

<script type="javascript">
import split from '@/components/split/split';
import Footer from '@/components/livedetailfooter/livedetailfooter'
 export default {
 	components: {
 		split,
 		vFooter: Footer
 	}
 };
</script>

<style type="text/css" scroped>
.content {
	/*background-color: red;*/
	position: relative;
	width: 100%;
	height: 100%;
}
.scanerImg {
	height: 190px;
	width: 100%;
}
.livetitle {
	padding: 8px;
	font-size: 16px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	color: #333333
}
.teacher {
	position: relative;
	margin: 0 auto;
	font-size: 0px;
	width: 100%;
	height: 60px;
}
.headericon {
	display: inline-block;
	padding-top: 10px;
	padding-left: 10px;
	width: 40px;
	height: 40px;
}
.name {
	position: absolute;
	display: inline-block;
	/*height: 60px;*/
	padding-left: 10px;
	top: 23px;
	font-size: 14px;
	line-height: 14px;
	color: #333333
}
.headergo {
	position: absolute;
	right: 10px;
	top: 24px;
	width: 8px;
	height: 12px;
}
.liveIntruction {
	padding: 5px;
	font-size: 0px;
	
}
.intructionHeader {
	padding: 8px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.intructionIcon {
	width: 16px;
	height: 15px;
}
.intructionTitle {
	padding-left: 5px;
	padding-top: 5px;
	font-size: 15px;
	color: #333333;
}
.intructionContent {
	padding: 8px;
	font-size: 13px;
	line-height: 15px;
	color: #666666
}
.text {
	color: #7f7f7f;
}
.liveArrange {
	padding: 5px;
	font-size: 0px;
}
.arrangeHeader {
	padding: 8px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.arrangeIcon {
	width: 16px;
	height: 15px;
}
.arrangeList {
	padding: 8px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.arrangeList .text{
	color: #666666;
	font-size: 14px;
	line-height:25px;
}
.recent-interval {
	width: 100%;
	height:70px;
}

</style>
