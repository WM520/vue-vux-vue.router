<template>
	<div class="input-wrapper">
		<x-textarea :max="300" name="description" :height="200" :placeholder="placeholdertext"></x-textarea>
		<div class="commit">
			<span class="commitbutton">确定</span>
		</div>
	</div>
</template>
<script type="text/javascript">
import { XTextarea } from 'vux';
	export default {
		data() {
			return {
				placeholdertext: '意见反馈'
			};
		},
		components: {
			XTextarea
		}
	};
</script>
<style lang="stylus">

.commit
	width: 60%
	background-color: red
	margin-left: 20%
	height: 35px
	-webkit-border-radius: 5px
	text-align: center
	.commitbutton
		font-size: 16px
		line-height: 35px
		color: #ffffff
	
	

</style>
