<template>
	<div class="mineDetail">
		<!-- <group> -->
			<div class="top-wrapper">
				<div class="icon">
					<img src="../../assets/withdrawal@2x.png" style="display:block; width:60px; -webkit-border-radius: 50px; height: 60px">
				</div>
				<div class="content">
					<span class="title">微信名微信名</span><br><br>
					<span class="joinTime">加入时间: 2017-03-16</span>
				</div>
			</div>
		<!-- </group> -->
		<group>
			<cell title="性别" :value="sex">
			</cell>
			<cell title="地区" :value="address">
			</cell>
		</group>
	</div>
</template>
<script type="text/javascript">
	import { Group, Cell, CellBox } from 'vux';
	export default {
		data() {
			return {
				sex: '男',
				address: '江苏南京'
			};
		},
		components: {
			Group,
			Cell,
			CellBox
		}
	};
</script>
<style lang="stylus" scroped>
.mineDetail
	.top-wrapper
		display: flex
		height: 80px
		background-color: white
		margin-top: 20px
		border-bottom: 0.5px solid rgba(7, 17, 27, .1);
		border-top: 0.5px solid rgba(7, 17, 27, .1);
		.icon
			flex: 0 0 80px
			margin-top: 10px
			margin-left: 10px
		.content
			flex: 1
			margin-top: 10px
			.title
				padding-top: 10px		
</style>
