<template>
	<div class="content">
		<div class="img-wrapper">
			<!-- <slot class="imgtitle"></slot> -->
			<img src="../../assets/blankpages.png" class="blankimg">
			<!-- <spot></spot> -->
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
	};
</script>
<style lang="stylus" scroped>
 .content
 	width: 100vw
 	height: 100vh
 	// background-color: red
 	.img-wrapper
 		width: 100vw
 		height: 100vh
 		.imgtitle
 			position: absolute
 			top: 20%
 		.blankimg
 			position: absolute
 			top: 30%
 			left: 20%
</style>
