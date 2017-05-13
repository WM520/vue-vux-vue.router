<template>
	<div id="content">
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



	</div>
</template>
<script>
	
</script>
<style type="text/css">
	#content{
		width:100%;
		height:100%;
	}
	#content #topImgDiv{
		width:100%;
		height:8rem;
		margin:0 auto;
		border-top:0.01rem solid #eee;
		border-bottom:0.01rem solid #eee;
		position:relative;
	}
	#content #topImgDiv .imgGrain{
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
</style>

