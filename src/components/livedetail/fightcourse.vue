<template>
	<div class="fightcourse-wrap">
		<div class="fightcourse-topHeaderDiv">
			<img src="../../assets/grain.jpg" alt="" class="fightcourse-img-Grain">
			<div class="fightcourse-introduce-Text">多吃谷物少吃菜,日常生活中的养生之道。谷肉果菜，食养尽之，无使过之，伤其正也。</div>
			<span class="fightcourse-price">拼课价:</span>
			<span class="fightcourse-now-money">￥500</span>
			<span class="fightcourse-oldPrice">原价:￥800</span>
			<img src="../../assets/6.png" class="fightcourse-flag">
			<div class="fightcourse-peopleNumberBox">3人团</div>
		</div>


		<!-- 分隔块1 -->
		<!-- <div class="fightcourse-interval"></div> -->


		<!-- 用户信息部分 -->
		<div class="fightcourse-places">
			<img src="../../assets/hourglass.png" class="fightcourse-hourglass">
			<span class="fightcourse-placesText">拼课名额( 7/10 )</span>
		</div>


		<!-- 微信名部分 -->
		<div class="fightcourse-WXNameBox">
			<div class="fightcourse-WXImgBox">
      			<img src="../../assets/LF.jpg" class="fightcourse-WXImg">
			</div>
			<span class="fightcourse-WXNameText">微信名</span>
			<span class="fightcourse-WXDate">2017-05-15&nbsp;&nbsp;09:15:37</span>
			<span class="fightcourse-success-T">拼课成功</span>
		</div>
		<div class="fightcourse-WXNameBox">
			<div class="fightcourse-WXImgBox">
      			<img src="../../assets/LF.jpg" class="fightcourse-WXImg">
			</div>
			<span class="fightcourse-WXNameText">微信名</span>
			<span class="fightcourse-WXDate">2017-05-15&nbsp;&nbsp;09:15:37</span>
			<span class="fightcourse-success-T">拼课成功</span>
		</div>
		<div class="fightcourse-WXNameBox">
			<div class="fightcourse-WXImgBox">
      			<img src="../../assets/LF.jpg" class="fightcourse-WXImg">
			</div>
			<span class="fightcourse-WXNameText">微信名</span>
			<span class="fightcourse-WXDate">2017-05-15&nbsp;&nbsp;09:15:37</span>
			<span class="fightcourse-success-T">拼课成功</span>
		</div>


		


		<!-- 拼课说明部分 -->
		<div class="fightcourse-places">
			<img src="../../assets/Headset.png" height="16" width="16" class="fightcourse-hourglass">
			<span class="fightcourse-placesText">拼课说明</span>
		</div>

		<!-- 拼课说明介绍部分 -->
		<div class="fightcourse-introduceBox">
			<p>拼团是一种快速有效的营销活动，主要玩法是要在限定时间内，通过分享产品链接，找到规定的人数一起购买才能完成拼团否则失败，举个例子，一件商品拼团时间24小时，5人拼团，你是团长，付款后要通过分享的链接在24小时之内找到另外4个人购买者才行！拼团的商品价格要比原价低</p>
		</div>


		<!-- 分隔块3 -->
		<div class="fightcourse-interval-Three"></div>


		<!-- 进入听课按钮部分 -->
		<div class="fightcourse-into">
			我要拼课
		</div>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css">
	body{
		background-color:#fafafa;
	}
	.fightcourse-wrap{
		width:100%;
		height:100%;
		max-width:750px;
	}
	.fightcourse-wrap .fightcourse-topHeaderDiv{
		width:100%;
		height:120px;
		margin:0 auto;
		position:relative;
		background-color:white;
		border-bottom:1px solid #e5e5e5;
	}
	.fightcourse-wrap .fightcourse-topHeaderDiv .fightcourse-img-Grain{
		width:90px;
		height:90px;
		margin-top:15px;
		margin-left:12px;
		border-radius:2px;
	}
	.fightcourse-introduce-Text{
		width:66.2%;
		position:absolute;
		top:26px;
		left:110px;
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
		/*font-weight:bold;*/
	}
	.fightcourse-price{
		color:#ff2626;
		font-size:0.688rem;
		position:absolute;
		bottom:26px;
		left:110px;
	}
	.fightcourse-now-money{
		color:#ff2626;
		font-size:1.06rem;
		font-family:"Microsoft YaHei";
		position:absolute;
		left:153px;
		bottom:26px;
	}
	.fightcourse-oldPrice{
		text-decoration:line-through;
		color:#999999;
		position:absolute;
		bottom:26px;
		left:205px;
		font-size:0.688rem;
	}
	.fightcourse-peopleNumberBox{
		position:absolute;
		bottom:26px;
		right:5px;
		font-size:0.75rem;
		color:#fefefe;
		font-family:"Microsoft YaHei";
	}

	.fightcourse-flag{
		width:56px;
		height:25px;
		position:absolute;
		right:0;
		bottom:19px;
	}
	


	
	


	/*评课名额部分*/
	.fightcourse-places{
		width:100%;
		height:3rem;
		border-bottom:1px solid #e7e7e7;
		position:relative;
		margin-top:10px;
	}
	.fightcourse-hourglass{
		width:0.8rem;
		height:1.2rem;
		margin-top:0.9rem;
		margin-left:0.8rem;
	}

	.fightcourse-placesText{
		font-size:1.1rem;
		position:absolute;
		line-height:3rem;
		left:2.2rem;
	}
	.fightcourse-success{
		position:absolute;
		right:1rem;
		line-height:3rem;
		font-size:1.1rem;
		color:#949494;
	}

	

	/*文字介绍部分*/
	.fightcourse-introduceBox{
		width:100%;
		border-bottom:1px solid #e5e5e5;
		padding-top:0.4rem;
		padding-bottom:0.6rem;
		background-color:#fff;
	}
	.fightcourse-introduceBox p{
		width:94%;
		margin:0 auto;
		line-height:1.5rem;
		font-size:0.75rem;
		color:#949494;
	}

	
	/*分隔块*/
	.fightcourse-interval-Three{
		width:100%;
		height:84px;
	}

	/*进入听课部分*/
	.fightcourse-into{
		letter-spacing:7px;
		width:100%;
		height:50px;
		background-color:#ef5350;
		text-align:center;
		line-height:50px;
		color:white;
		font-size:1.25rem;
		position:fixed;
		bottom:0;
	}



	/*微信名部分*/
	.fightcourse-WXNameBox{
		width:100%;
		height:60px;
		border-bottom:1px solid #e7e7e7;
		position:relative;
		background-color:white;
	}
	.fightcourse-WXImgBox{
		width:40px;
		height:40px;
		background-color:red;
		border-radius:50%;
		overflow:hidden;
		position:absolute;
		top:11px;
		left:10px;
	}
	.fightcourse-WXImg{
		width:100%;
		height:100%;
	}
	.fightcourse-WXNameText{
		font-size:0.812rem;
		position:absolute;
		top:16px;
		left:56px;
		color:#333;
	}

	.fightcourse-WXDate{
		position:absolute;
		bottom:15px;
		left:56px;
		font-size:0.69rem;
		color:#666;
	}
	
	/*用户信息部分的拼课成功*/
	.fightcourse-success-T{
		float:right;
		margin-right:10px;
		line-height:60px;
		font-size:0.813rem;
		color:#666;
	}

	/*拼课进度部分*/
	.fightcourse-places{
		width:100%;
		height:40px;
		border-bottom:1px solid #e5e5e5;
		border-top:1px solid #e5e5e5;
		background-color:white;
		margin-top:10px;
	}
	.fightcourse-hourglass{
		width:14px;
		height:16px;
		margin-top:12px;
		margin-left:11px;
	}

	.fightcourse-placesText{
		font-size:0.94rem;
		position:absolute;
		line-height:40px;
		left:31px;
		color:#333;
	}
</style>
