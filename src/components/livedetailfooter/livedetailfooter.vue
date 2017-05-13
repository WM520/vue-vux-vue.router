<template>
	<div class="tools">
		<div class="contentfooter">
			<div class="content-cell">
				<div class="course">
					<router-link to="opportunity">
						<img src="../../assets/lecturer@2x.png" class="tools-icon">
						<span class="title">拼课</span>
					</router-link>
				</div>
				<div class="send" @click="showGiveFriend">
					<img src="../../assets/lecturer@2x.png" class="toolse-icon">
					<span class="titlee">送朋友</span>
				</div>
				<div class="price" @click="showGiveFriend">
					<span class="count">￥1500</span>
				</div>
			</div>		
		</div>
		<transition name="fade">
			<div v-show="modalshow" class="alertModel">
				<div class="alert">
					<img src="../../assets/bigBG@2x.png" class="bgImage">
					<img src="../../assets/close.png" class="close" @click="hideGiveFriend">
					<div class="modalcontent">
						<img src="../../assets/paysucceed@2x.png" class="payimg">
						<span class="title">多吃谷物少吃菜，日常生活中的养生。谷肉果菜，食养尽之，无使过之，伤其正也</span>
						<span class="carttitle">赠送数量</span>
						<cartcontrol class="cartcontrol">
						</cartcontrol>
						<span class="total">合计</span>
						<span class="price">4500</span>
						<div class="modalcommit" @click="commitAction">
							<span class="commitspan">确定</span>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
import cartcontrol from '@/components/cartcontrol/cartcontrol';
export default {
	data () {
		return {
			modalshow: false
		};
	},
	methods: {
		showGiveFriend() {
			this.modalshow = true;
		},
		hideGiveFriend() {
			this.modalshow = false;
		},
		commitAction() {
			this.modalshow = false;
			console.log('做一些提交处理');
		}
	},
	components: {
		cartcontrol
	}

};
</script>
<style lang="stylus" scroped>
.tools
	position: fixed
	bottom: 0px
	height: 50px
	width: 100%
	background: white
	.contentfooter
		position: relative
		.content-cell
			display: flex
			.course
				flex: 0 0 30%
				vertical-align: middle
				border-right: 1px solid rgba(7, 17, 27, 0.1)
				border-top: 1px solid rgba(7, 17, 27, 0.1)
				.tools-icon
					position: absolute
					padding-left: 12%
					padding-top: 5px
					width: 20px
					height: 20px
				.title
					position: absolute
					padding-left: 11%
					padding-top: 30px
					font-size: 14px
					color: #333333
				
			.send
				flex: 0 0 30%
				// text-align: center
				height: 50px
				border-top: 1px solid rgba(7, 17, 27, 0.1)
				border-right: 1px solid rgba(7, 17, 27, 0.1)
				.toolse-icon
					position: absolute
					padding-left: 12%
					padding-top: 5px
					width: 20px
					height: 20px
				.titlee
					position: absolute
					padding-left: 9%
					padding-top: 30px
					font-size: 14px
					color: #333333
			.price
				flex: 0 0 40%
				height: 50px
				border-top: 1px solid rgba(7, 17, 27, 0.1)
				background-color: #ef5350;
				.count
					position: absolute
					color: #ffffff
					width: 100%
					height: 60px
					line-height: 20px
					padding-top: 15px
					padding-left: 12%
					font-size: 20px

	.alertModel
		position: fixed
		z-index: 100
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
		.alert
			position: absolute
			margin: auto
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
					font-size: 16px
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
