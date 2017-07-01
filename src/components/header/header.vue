<template>
	<div class="swipeheader">
		<swiper loop auto :list="imgURL" :index="imgindex" @on-index-change="onIndexChange" height="200px"></swiper>
	</div>
</template>
<script type="text/javascript">
import { Swiper, SwiperItem } from 'vux';
import { mapState } from 'vuex';
export default {
	data () {
		return {
			imgindex: 0,
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
	computed: {
	    ...mapState({
	        imgURL: state => state.header.imgURL,
	    })
    }
};
</script>
<style lang="less">
.vux-swiper-desc{
	display: none;
}
</style>
