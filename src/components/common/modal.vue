<template>
	<div class="alertModel">
		<div class="alertBG" @click="hideGiveFriend"></div>
		<div class="alert">
			<img src="../../assets/bigBG@2x.png" class="bgImage" >
			<img src="../../assets/close.png" class="close" @click="hideGiveFriend">
			<div class="modalcontent">
				<img src="../../assets/gift@2x.png" class="payimg">
				<span class="title">多吃谷物少吃菜，日常生活中的养生。谷肉果菜，食养尽之，无使过之，伤其正也</span>
				<span class="carttitle">赠送数量</span>
				<cartcontrol class="cartcontrol" @on-change="totalPriceCount">
									</cartcontrol>
				<span class="total">合计</span>
				<span class="price">{{ totalPrice }}</span>
				<div class="modalcommit" @click="commitAction">
					<span class="commitspan">确定</span>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script type="text/javascript">
import cartcontrol from '@/components/cartcontrol/cartcontrol';
	export default {
		data() {
			return {
				count: 0,
				totalPrice: this.itemInfo.coursePrice
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
				this.$emit('commitAction', this.count, this.totalPrice);
			},
			totalPriceCount(val) {
				console.log(val);
				this.count = val;
				this.totalPrice = this.count * this.itemInfo.coursePrice;
			}
		},
		props: {
			itemInfo: {
				type: Object,
				default() {
					return {
							coursePrice: '1500',
							img: 'http://192.168.0.118:38080/headImage/lecturer/2017-05-09/1494315805638.jpg',
							title: '送你一朵fua'
						};
				}
			}
		}
	};
</script>
<style lang="stylus" scoped>
	.alertModel
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100%
		overflow: auto
		// background-filter: blur(10px)
		// opacity: 1
		// background: rgba(7, 17, 27, 0.3)
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
			z-index: 20
			top:0
			left:0
			right:0
			bottom:0
			width: 80%
			height: 60%
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
				backgroundcolor: red
				.payimg
					position: absolute
					top: 10%
					right: 35%
					left: 35%
					width: 30%
					height: 20%
				.title
					position: absolute
					color: #333333
					top: 40%
					font-size: 14px
					line-height: 20px
					padding-left: 5%
					padding-right: 5%
				.carttitle
					position: absolute
					top: 2px
					left: 5%
					font-size: 16px
					line-height: 24px
					top: 60%
					color: #333333
				.cartcontrol
					position: absolute
					top: 60%
					right: 5%
				.total
					position: absolute
					top: 75%
					left: 5%
				.price
					position: absolute
					top: 75%
					right: 15%
				.modalcommit
					position: absolute
					top: 85%
					left: 20%
					width: 60%
					height: 10%
					// text-align: center
					-webkit-border-radius: 5px
					background: #ef5350
					.commitspan
						position: absolute
						left: 40%
						top: 28%
						// text-align: center
						font-size: 20px
						color: #ffffff
</style>
