<template>
	<div class="alertModel">
		<div class="alertBG" @click="hideGiveFriend"></div>
		<div class="alert" >
			<img src="../../assets/bigBG@2x.png" class="bgImage">
			<img src="../../assets/close.png" class="close" @click="hideGiveFriend">
			<div class="modalcontent">
				<div class="price-wrapper">
					<span class="title">提现金额</span>
					<input class="priceCount" type="text" checked="checked">
					元
				</div>
				<div class="userInformation-wrapper">
					<span class="title">提现账户</span>
					<img src="../../assets/live.png" class="icon">
					<span class="card">招商银行<br>尾号9854</span>
				</div>
				<div class="intruction-wrapper">
					<span class="title">提现说明：</span>
					<span class="content">
						提现说明提现说明提现说明提现说明提现说明提现说明提现说明
					</span>
				</div>
				<div class="commit" @click="commitAction">
					<span class="withdrawal" >提现</span>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script type="text/javascript">
import cartcontrol from '@/components/cartcontrol/cartcontrol';
	export default {
		props: {
			count: 0,
			totalPrice: 0
		},
		data() {
			return {
				priceObject: {
					type: Object
				}
			};
		},
		components: {
			cartcontrol
		},
		methods: {
			hideGiveFriend() {
				this.$emit('hideGiveFriend');
			},
			commitAction() {
				this.$emit('commitAction');
			}
		}
	};
</script>
<style lang="stylus" scoped>
	.alertModel
		position: fixed
		z-index: 5
		top: 0
		left: 0
		width: 100%
		height: 100%
		overflow: auto
		background-filter: blur(10px)
		opacity: 1
		background: rgba(7, 17, 27, 0.3)
		&.fade-enter-active, &.fade-leave-active
			transition: all 0.5s
		&.fade-enter, &.fade-leave-active
			opacity: 0
			background: rgba(7, 17, 27, 0)
		.alertBG
			// position: fixed
			z-index: 10
			top: 0
			left: 0
			width: 100%
			height: 100%
			overflow: auto
			background-filter: blur(10px)
			opacity: 1
			background: rgba(7, 17, 27, 0.1)
		.alert
			position: absolute
			margin: auto
			top:0
			left:0
			right:0
			bottom:0
			width: 80%
			height: 50%
			.bgImage
				width: 100%
				height: 100%
				-webkit-border-radius: 15px
			.close
				position: absolute
				width: 30px
				height: 30px
				-webkit-border-radius: 50px
				top: -15px
				right: -15px
			.modalcontent
				position: absolute
				top: 0px
				width: 100%
				height: 100%
			.price-wrapper
				position: absolute
				top: 10%
				left: 10%
				height: 20%
				.priceCount
					// position: absolute
					line-height: 35px
					width: 100px
					margin-left: 20px
				.title
					color: #333333
					font-size: 16px
			.userInformation-wrapper
				position: absolute
				display: flex
				top: 30%
				left: 10%
				height: 20%
				.title
					color: #333333
					font-size: 16px
				.icon
					margin-left: 20px
					width: 30px
					height: 30px
				.card
					margin-left: 10px
					margin-top: 10px
			.intruction-wrapper
				position: absolute
				top: 50%
				left: 10%
				width: 80%
				height: 20%
				.title
					color: #333333
					font-size: 16px
				.content
					font-size: 14px
					line-height: 20px
					color: #999999
			.commit
				position: absolute
				top: 70%
				height: 14%
				.withdrawal
					position:absolute
					color: #ffffff
					font-size: 20px
					line-height: 100%
					height: 100%
					top: 30%
					left: 40%
					// align: middle
			
			
					
					
				
</style>
