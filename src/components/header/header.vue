<template>
	<div class="swipeheader">
		<swiper loop auto :list="bannerList" :index="imgindex" @on-index-change="onIndexChange" height="175px"></swiper>
	</div>
</template>
<script type="text/javascript">
import { Swiper, SwiperItem } from 'vux';
// 轮播图的地址
const baseList = [{
  url: 'http://qingzz.com',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'http://www.gitwangmiao.top',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'https://github.com',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}];
const urlList = baseList.map((item, index) => ({
  url: 'http://qingzz.com/',
  img: item.img,
  title: `${item.title}`
}));
export default {
	data () {
		return {
			bannerList: baseList,
			imgindex: 0,
			urlList
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
	}
};
</script>
<style lang="stylus">
.swipeheader
	background: red
</style>
