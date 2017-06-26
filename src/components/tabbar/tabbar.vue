<template>
	<div class="footerbar">
		<div class="contentfooter">
			<div class="content-home-cell">
				<div class="course" @click="choosehome">
					<img v-bind:src="homeImg" class="coursechoseicon">
					<span class="coursetitle" :class="classMap[selectedtab]">首页</span>
				</div>
				<div class="send" @click="choosemine">
					<span class="coursetitle" :class="classMap[selectedtab]">我的青枝</span>
					<img :src="mineImg" class="sendchoseicon">
				</div>
			</div>		
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			tabSelect: {
				type: Object
			}
		},
		data() {
			return {
				selectedtab: 0,
				homeImg: require('./homeselect.png'),
				mineImg: require('./minenormal.png')
			};
		},
		created() {
			this.classMap = ['homeselected', 'mineselected'];
		},
		methods: {
			choosehome() {
				if (this.selectedtab === 0) {
					return;
				} else {
					this.selectedtab = 0;
					this.tabSelect.info = '首页';
					// document.title = '首页';
					this.homeImg = require('./homeselect.png');
					this.mineImg = require('./minenormal.png');
					window.localStorage.tabSelect = '首页';
					this.$emit('choosehome');
					console.log(window.localStorage.tabSelect);
				};
			},
			choosemine() {
				if (this.selectedtab === 0) {
					this.selectedtab = 1;
					this.tabSelect.info = '我的青枝';
					// document.title = '我的青枝';
					this.homeImg = require('./homenormal.png');
					this.mineImg = require('./mineselect.png');
					window.localStorage.tabSelect = '我的青枝';
					this.$emit('choosemine');
					console.log(window.localStorage.tabSelect);
				} else {
					return;
				};
			}
		},
		mounted() {
			if (window.localStorage.tabSelect === '我的青枝') {
				this.selectedtab = 1;
				this.homeImg = require('./homenormal.png');
				this.mineImg = require('./mineselect.png');
			} else if (window.localStorage.tabSelect === '首页') {
				this.selectedtab = 0;
				this.homeImg = require('./homeselect.png');
				this.mineImg = require('./minenormal.png');
			};
		}
	};
</script>
<style lang="stylus" scroped>
.footerbar
	position: fixed
	bottom: 0px
	height: 50px
	width: 100%
	background: white
	.contentfooter
		position: relative
		.content-home-cell
			display: flex
			fone-size: 0px
			.course
				flex: 0 0 50%
				border-right: 1px solid rgba(7, 17, 27, 0.1)
				border-top: 1px solid rgba(7, 17, 27, 0.1)
				.coursechoseicon
					position: absolute
					padding-left: 22.5%
					padding-top: 3px
					// width: 25px
					height: 25px
				.coursetitle
					position: absolute
					padding-left: 22.1%
					padding-top: 14px
					line-height: 14px
					font-size: 12px
					line-height: 50px
					color: #333333
					&.homeselected
						color: #04a16a
			.send
				flex: 1
				height: 50px
				border-top: 1px solid rgba(7, 17, 27, 0.1);
				border-right: 1px solid rgba(7, 17, 27, 0.1)
				.sendchoseicon
					position: absolute
					padding-left: 22.5%
					padding-top: 3px
					// width: 25px
					height: 25px
				.coursetitle
					position: absolute
					padding-left: 19%
					padding-top: 14px
					font-size: 12px
					line-height: 50px
					color: #333333
					&.mineselected
						color: #04a16a

</style>
