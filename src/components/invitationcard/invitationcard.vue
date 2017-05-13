<template>
	<div class="invitationcard-wrap">
		<!-- 头部盒子 -->
		<div class="invitationcard-head-box">
			<img src="../../assets/LF.jpg" height="140" width="220" class="invitationcard-portrait-img">
			<div class="invitationcard-userName-text">微信名</div>
			<div class="invitationcard-quickly-text">花钱请您收听，只有1份，赶紧领取</div>
		</div>

		<!-- 价格文字图片部分 -->
		<div class="invitationcard-pattern-box">
			<img src="../../assets/AmountOfMoney.png" class="invitationcard-pattern-img">
			<div class="invitationcard-amount">￥500</div>
		</div>

		<!-- 多吃谷物文字部分 -->
		<div class="invitationcard-eat-box">
			<div class="invitationcard-eat-text">多吃谷物少吃菜,日常生活中的养生之道。谷肉果菜,食养尽之,无使过之,伤其正也。</div>
		</div>

		<!-- 讲师名标题部分 -->
		<div class="invitationcard-title-box">
			<div class="invitationcard-title-teacher">讲师:曲黎敏</div>
		</div>

		<!-- 研究表述文字部分 -->
		<div class="invitationcard-research-box">
			<div class="invitationcard-research-text">研究表明,五谷杂粮可养五脏。俗话说“一谷补一脏”,五谷杂粮可养五脏。五谷有小米、大米、小麦、大豆、高粱。其中小米可养脾、大豆可养肾等等</div>
		</div>

		<!-- 好知识文字部分 -->
		<div class="invitationcard-knowledge-box">
			<img src="../../assets/laceLeft.png" class="invitationcard-laceImgLeft">
			<img src="../../assets/laceRight.png" class="invitationcard-laceImgRight">
			<div class="invitationcard-knowledge-text">好知识,值得去分享</div>
		</div>
		

		<!-- 好知识值得分享文字部分 -->
		<div class="invitationcard-share-box">
			<div class="invitationcard-share-text">好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!好知识,值得去分享!</div>
		</div>

		<!-- 底部按钮部分 -->
		<div class="invitationcard-btn-box">
			<div>进入听课</div>
		</div>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css">
	.invitationcard-wrap{
		width:100%;
		height:736px;
		background-image:url("../../assets/cradbg.png");
		background-size:100% 100%;
	}

	/*头部部分*/
	.invitationcard-head-box{
		width:100%;
		
		text-align:center;

	}

	/*头像部分*/
	.invitationcard-portrait-img{
		border-radius:50%;
		width:59px;
		height:59px;
		margin-top:35px;
	}

	/*微信名部分*/
	.invitationcard-userName-text{
		margin-top:5px;
		color:#333;
		font-size:14px;
	}
	.invitationcard-quickly-text{
		color:#666;
		font-size:11px;
		margin-top:5px;
	}

	/*价格文字图片部分*/
	.invitationcard-pattern-box{
		/*background-color:#eee;*/
		width:100%;
		height:56px;
		display:flex;
		justify-content:center;
		align-items:center;
		position:relative;
		text-align:center;
	}

	.invitationcard-pattern-img{
		width:86px;
		height:38px;
	}

	/*金额部分*/
	.invitationcard-amount{
		color:#cdb354;
		font-size:1rem;

		position:absolute;
		bottom:16px;
		left:44%;
	}

	/*多吃谷物文字部分*/
	.invitationcard-eat-box{
		margin:0 auto;
		width:81%;
	}
	.invitationcard-eat-text{
		color:#333;
		font-size:1rem;
		line-height:24px;
	}

	

	/*讲师名标题部分*/
	.invitationcard-title-box{
		width:100%;
		height:65px;
	}

	.invitationcard-title-teacher{
		color:#666;
		font-size:0.813rem;
		line-height:65px;
		text-align:center;
	}

	/*研究表明文字表述部分*/
	.invitationcard-research-box{
		width:80%;
		margin:0 auto;
	}
	.invitationcard-research-text{
		color:#999;
		font-size:0.688rem;
		line-height:17px;
	}

	@media screen and (max-width: 320px){
		.invitationcard-eat-text{
			color:#333;
			font-size:0.8rem;
			line-height:22px;
		}
		.invitationcard-research-text{
			color:#999;
			font-size:0.2rem;
			line-height:14px;
		}
	}

	/*知识文字部分*/
	.invitationcard-knowledge-box{
		width:81.3%;
		height:67px;
		margin:0 auto;
		position:relative;
	}

	.invitationcard-laceImgLeft{
		position:absolute;
		bottom:18px;
	}
	.invitationcard-laceImgRight{
		position:absolute;
		right:0;
		bottom:18px;
	}

	.invitationcard-knowledge-text{
		display:inline-block;
		color:#333;
		font-size:0.75rem;
		position:absolute;
		bottom:18px;
		left:33%;
	}

	/*好知识，值得去分享大段文字部分*/
	.invitationcard-share-box{
		width:81.3%;
		margin:0 auto;
	}
	.invitationcard-share-text{
		font-size:0.688rem;
		color:#666;
		line-height:18px;
	}

	/*底部按钮部分*/
	.invitationcard-btn-box{
		width:81%;
		height:93px;
		/*position:relative;*/
		margin:0 auto;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.invitationcard-btn-box div{
		width:160px;
		height:35px;
		border-radius:4px;
		background-color:#ef5350;
		display:flex;
		justify-content:center;
		align-items:center;
		color:white;
		letter-spacing:2px;
		font-size:1rem;
	}
</style>
