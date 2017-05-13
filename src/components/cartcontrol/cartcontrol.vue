<template>
	<div class="cartcontrol">
		<div>
			<div class="cart-decrease" @click="decreaseCart">
				<img class="inner" src="../../assets/decrease.png">
			</div>
			<div class="count">{{ count }}</div>
			<div class="cart-add" @click="addCart">
				<img class="inner" src="../../assets/add.png">
			</div>
		</div>	
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				count: 1
			};
		},
		methods: {
			decreaseCart() {
				if (this.count > 0) {
					this.count--;
				};
			},
			addCart() {
				this.count++;
			}
		}
	};
</script>
<style lang="stylus">
.cartcontrol
	font-size: 0px
	.cart-decrease
		display: inline-block
		padding: 6px
		border: 1px solid rgba(7, 17, 27, 0.1)
		.inner
			display: inline-block
			width: 18px
			height: 18px
			font-size: 18px 18px
	.count
		display: inline-block
		font-size: 20px 
		padding: 6px
		width: 30px
		text-align: center
		line_height: 24px
	.cart-add
		display: inline-block
		padding: 6px
		border: 1px solid rgba(7, 17, 27, 0.1)
		.inner
			display: inline-block
			width: 18px
			height: 18px
			font-size: 18px 18px
		
</style>
