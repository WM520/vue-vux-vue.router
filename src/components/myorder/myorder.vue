<template>
	<div class="myorder-box">
		<!-- 导航栏部分 -->
		<div class="myorder-Nav-box">
			<ul class="myorder-Nav-text-box">
				<li>普通</li>
				<li>赠礼</li>
				<li>拼课</li>
			</ul>
		</div>


		<!-- 订单号部分 -->
		<div class="myorder-orderNumber-box">
			<!-- 订单号部分 -->
			<span class="myorder-orderNumber">
				订单号:20170016254
			</span>

			<!-- 已经领取部分 -->
			<span class="myorder-orderNumber-text">
				已领取光
			</span>
		</div>

		<!-- 介绍部分 -->
		<router-link to="orderdetails">
			<div class="myorder-topImgDiv">
				<img src="../../assets/grain.jpg" alt="" class="myorder-imgGrain">
				
				<div class="myorder-introduceText">多吃谷物少吃菜,日常生活中的养生之道。谷肉果菜，食养尽之，无使过之，伤其正也。</div>
				<span class="myorder-introduceFoodText">饮食养生其实就是让身体的本能去顺应...</span>
				<img src="../../assets/lecturer@2x.png" class="myorder-userIcon">
				<span class="myorder-userName">曲黎敏</span>
				<img src="../../assets/heat@2x.png" class="myorder-fire">
				<span class="myorder-fireNumber">234567次</span>
				<span class="myorder-money">￥300</span>
				<img src="../../assets/zengli.png" height="12" width="12" class="myorder-gift-icon">
				<span class="myorder-gift-number">5<span>份</span></span>
			</div>
		</router-link>

		<!-- 第二块订单号部分 -->
		<div class="myorder-orderNumber-box">
			<!-- 订单号部分 -->
			<span class="myorder-orderNumber">
				订单号:20170016254
			</span>

			<!-- 已经领取部分 -->
			<span class="myorder-orderNumber-Unclaimed">
				2份未领取
			</span>
		</div>

		<!-- 第二块介绍部分 -->
		<div class="myorder-topImgDiv">
			<img src="../../assets/grain.jpg" alt="" class="myorder-imgGrain">
			
			<div class="myorder-introduceText">多吃谷物少吃菜,日常生活中的养生之道。谷肉果菜，食养尽之，无使过之，伤其正也。</div>
			<span class="myorder-introduceFoodText">饮食养生其实就是让身体的本能去顺应...</span>
			<img src="../../assets/lecturer@2x.png" class="myorder-userIcon">
			<span class="myorder-userName">曲黎敏</span>
			<img src="../../assets/heat@2x.png" class="myorder-fire">
			<span class="myorder-fireNumber">234567次</span>
			<span class="myorder-money">￥300</span>
			<img src="../../assets/zengli.png" height="12" width="12" class="myorder-gift-icon">
			<span class="myorder-gift-number">5<span>份</span></span>
		</div>



	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css">
	body{
		background-color:#fafafa;
	}
	.myorder-box{
		width:100%;
		height:auto;
		max-width:750px;
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
		margin-left:0;
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
