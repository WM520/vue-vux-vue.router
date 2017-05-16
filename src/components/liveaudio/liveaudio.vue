<template>
	<div class="liveaudio-wrap">
		<!-- 顶部部分 -->
		<div class="liveaudio-top-box">
			<div class="liveaudio-play">
				<div class="liveaudio-triangle"></div>
			</div>
			<img src="../../assets/Health.jpg" class="liveaudio-top-img">
		</div>

		<!-- 进度条部分 -->
		<div class="liveaudio-strip-box">
			 <range decimal v-model="data1" class="liveaudio-strip"></range>
		</div>
		
		<div class="liveaudio-comment-box">
			<img src="../../assets/comment.png" class="liveaudio-comment-img">
			<span class="liveaudio-comment-text">评论</span>
		</div>
		
		<!-- 用户信息部分 -->
		<div class="liveaudio-user-box">
			<img src="../../assets/LF.jpg" class="liveaudio-user-img">
			<span class="liveaudio-userName">微信名</span>
			<span class="liveaudio-user-time">2017-03-15&nbsp;12:36</span>
			<div class="liveaudio-text">五谷为养、五果为助、五畜为益、五菜为冲,气味合而服之,以补精益气</div>
		</div>

		<div class="liveaudio-user-box">
			<img src="../../assets/LF.jpg" class="liveaudio-user-img">
			<span class="liveaudio-userName">微信名</span>
			<span class="liveaudio-user-time">2017-03-15&nbsp;12:36</span>
			<div class="liveaudio-text">五谷为养、五果为助、五畜为益、五菜为冲,气味合而服之,以补精益气</div>
		</div>

		<div class="liveaudio-user-box">
			<img src="../../assets/LF.jpg" class="liveaudio-user-img">
			<span class="liveaudio-userName">微信名</span>
			<span class="liveaudio-user-time">2017-03-15&nbsp;12:36</span>
			<div class="liveaudio-text">五谷为养、五果为助、五畜为益、五菜为冲,气味合而服之,以补精益气</div>
		</div>

		<!-- 空白部分 -->
		<div class="liveaudio-quarantine"></div>



		<!-- 底部输入部分 -->
		<div class="liveaudio-sendOut-box">
			<input type="text" class="liveaudio-input">
			<!-- 发送按钮部分 -->
			<div class="liveaudio-btn">发送</div>
		</div>


	</div>
</template>
<script type="text/javascript">
	import { Range } from 'vux';
	export default{
		components: {
			Range
		},
		data() {
			return {
				data1: 30
			};
		}
	};

</script>
<style type="text/css">
	body{
		background-color:#fafafa;
	}
	.liveaudio-wrap{
		width:100%;
		height:100%;
	}

	/*顶部部分*/
	.liveaudio-top-box{
		width:100%;
		max-width:750px;
		height:180px;
		position:relative;
	}
	.liveaudio-top-img{
		width:100%;
		height:100%;
	}

	.liveaudio-play{
		width:39px;
		height:39px;
		background-color:black;
		border-radius:50%;
		border:2px solid white;
		position:absolute;
		bottom:10px;
		left:10px;
		display:flex;
		justify-content:center;
		align-items:center;
		background:rgba(22,33,44,0.5);
	}
	.liveaudio-triangle{
		width: 0;
	    height: 0;
	    border-top: 8px solid transparent;
	    border-left: 10px solid white;
	    border-bottom: 8px solid transparent;
	    border-radius:10%;
	}
	

	/*进度条部分*/
	.liveaudio-strip-box{
		width:100%;
		height:50px;
		position:relative;
		border-bottom:1px solid #e5e5e5;
		background-color:white;
	}
	.liveaudio-strip{
		position:absolute;
		top:50%;
		right:10px;
	}

	/*Range组件部分*/
	span.range-min{
		color:#666;
		font-size:12px;
		/*position:absolute;*/
		/*top:15px;*/
	}	
	span.range-handle{
		border:3px solid #04a16a;
		width:11px;
		height:11px;
		position:absolute;
		top:-8px !important;
	}
	span.range-bar{
		background-color:#d5d5d5;
		height:3px !important;
		width:94.7%;
	}

	
	/*评论区*/
	.liveaudio-comment-box{
		width:100%;
		height:40px;
		border-top:1px solid #e5e5e5;
		border-bottom:1px solid #e5e5e5;
		margin-top:10px;
		background-color:white;
		display:flex;
		align-items:center;
	}

	.liveaudio-comment-img{
		width:16px;
		height:16px;
		margin-left:10px;
	}

	.liveaudio-comment-text{
		font-size:15px;
		color:#333;
		margin-left:5px;
	}


	/*用户信息部分*/
	.liveaudio-user-box{
		width:100%;
		height:83px;
		background-color:white;
		border-bottom:1px solid #e5e5e5;
		position:relative;
	}

	.liveaudio-user-img{
		border-radius:50%;
		width:40px;
		height:40px;
		margin-top:15px;
		margin-left:15px;
	}

	.liveaudio-userName{
		display:inline-block;
		font-size:0.75rem;
		color:#666;
		position:absolute;
		top:15px;
		left:61px;
	}

	.liveaudio-user-time{
		color:#999;
		font-size:0.625rem;
		position:absolute;
		top:15px;
		left:103px;
	}

	.liveaudio-text{
		color:#333;
		font-size:0.875rem;
		width:80%;
		line-height:18px;
		position:absolute;
		bottom:15px;
		left:60px;
	}


	/*空白部分*/
	.liveaudio-quarantine{
		width:100%;
		height:300px;
	}

	/*底部发送部分*/
	.liveaudio-sendOut-box{
		width:100%;
		height:60px;
		background-color:white;
		position:fixed;
		bottom:0;
		border-top:1px solid #e5e5e5;
		display:flex;
		align-items:center;
	}

	.liveaudio-input{
		background-color:#f5f5f5;
		width:72%;
		height:40px;
		border-radius:4px;
		border:1px solid #e5e5e5;
		margin-left:10px;
	}

	.liveaudio-btn{
		width:20%;
		height:40px;
		background-color:#04a16a;
		border-radius:4px;
		margin-left:10px;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:0.94rem;
		color:#fff;
	}
</style>
