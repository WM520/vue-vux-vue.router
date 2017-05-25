<template>
	<div class="bankCard-wrapper">
		<div class="withdrawal-detail" :class="[{swipeleft:isSwipe}, 'wrap']" ref="child">
			<div class="avatar">
				<img src="../../assets/grain.jpg" class="icon">
			</div>
			<div class="content">
				<span class="title">中国银行</span>
				<span class="time">2017-04-24 18:00-19:00</span>
			</div>
			<div class="delete" @click.stop="remove" style="background-color: red">
					删除
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import { Actionsheet } from 'vux';
	export default {
		data() {
			return {
				isSwipe: [false]
			};
		},
		methods: {
			remove() {
				console.log('删除银行卡');
			}
		},
		created() {
			// setTimeOut(() => {
			// 	if (this.$refs.child) {
			// 		let x, y, X, Y, swipeX, swipeY;
			// 		element.addEventListener('touchstart', e => {
			// 			x = e.changeTouches[0].pageX;
			// 			y = e.changeTouches[0].pageY;
			// 			swipeX = true;
			// 			swipeY = true;
			// 			this.isSwipe = false;
			// 		});
			// 		element.addEventListener('touchmove', e => {
			// 			X = event.changeTouches[0].pageX;
			// 			Y = event.changeTouches[0].pageY;
			// 			if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
			// 				e.stopPropagation();
			// 				if (X - x > 10) {
			// 					e.preventDefault();
			// 					this.isSwipe = false;
			// 				};
			// 				if (x - X > 10) {
			// 					e.preventDefault();
			// 					this.isSwipe = true;
			// 				};
			// 				swipeY = false;
			// 			};
			// 			if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
			// 				swipeX = false;
			// 			};
			// 		});
			// 	};
			// }, 1000);
		},
		components: {
			Actionsheet
		}
	};
</script>
<style lang="stylus">
.bankCard-wrapper
	// width: 125%
	// overflow: hidden
	.withdrawal-detail
		margin-top: 10px
		width: 125%
		padding: 5px
		transition:all 0.5s linear
		display: flex
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
		.avatar
			flex: 0 0 70px
			margin-right: 12px
			.icon
				border-radius: 50px
				padding: 5px
				width: 60px
				height: 60px
		.content
			position: relative
			flex: 1
			.title
				display: inline-block
				padding-top: 10px
				font-size: 14px
				line-height: 26px
				color: #333333
				overflow: hidden
				text-overflow: ellipsis
				display: -webkit-box
				-webkit-line-clamp: 2
				-webkit-box-orient: vertical
			.time
				display: inline-block
				padding-top: 10px
				font-size: 10px
		.delete
			float: right
			display: block
			height: 10vh
			line-height: 10vh
			width: 20%
			text-align: center
			font-size: 18px
			font-weight: 500
			color: #fff
			background: #ff1744

</style>
