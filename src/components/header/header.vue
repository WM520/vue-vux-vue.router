<template>
	<div class="swipeheader">
		<swiper loop auto :list="imgURL" :index="imgindex" @on-index-change="onIndexChange" height="180px"></swiper>
	</div>
</template>
<script type="text/javascript">
import { Swiper, SwiperItem } from 'vux';
// 轮播图的地址
const baseList = [{
  url: 'http://qingzz.com',
  img: 'http://192.168.0.118:38080/headImage/lecturer/2017-05-09/1494315805638.jpg',
  title: '送你一朵fua'
}, {
  url: 'http://qingzz.com',
  img: 'http://192.168.0.118:38080/headImage/lecturer/2017-05-09/1494315805638.jpg',
  title: '送你一朵fua'
}];
export default {
	data () {
		return {
			bannerList: baseList,
			imgindex: 0 
		};
	},
	methods: {
		onIndexChange (index) {
			this.imgindex = index;
		}
	},
	components: {
		Swiper,
		SwiperItem
	},
	props: {
		// 父组件传回的bannar图
		imgURL: {
			type: Array,
			default() {
				return [{
						url: 'http://qingzz.com',
						img: 'http://192.168.0.118:38080/headImage/lecturer/2017-05-09/1494315805638.jpg',
						title: '送你一朵fua'
					}];
			}
		}
	}
};
</script>
<style lang="stylus">

</style>
