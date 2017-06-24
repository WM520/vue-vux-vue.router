<template>
	<div class="feedback-wrapper">
		<div class="title">{{ title }}</div>
		<div class="balance">{{ money }}</div>
		<span class="feedbackbutton" @click="emitMyEvent">提现</span>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			money: Number,
			title: String
		},
		components: {},
		methods: {
			emitMyEvent() {
				this.$emit('feedback');
			}
		}
	};
</script>
<style lang="stylus" scroped>
	.feedback-wrapper
		border-top: 1px solid rgba(7, 17, 27, 0.1)
		width: 100%
		// margin: 5px
		height: 40px
		vertical-align: center
		padding: 5px
		.title
			display: inline-block
			padding-top: 6px
			padding-left: 10px
		.balance
			position: absolute
			padding-top: 6px
			right: 70px
			display: inline-block
		.feedbackbutton
			display: inline-block
			position: absolute
			margin-top: 5px
			text-align: center
			-webkit-border-radius: 5px;
			right: 10px
			width: 50px
			background-color: red
			color: #fff
</style>
