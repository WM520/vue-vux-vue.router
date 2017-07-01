<template>
	<div class="minecontent">

		<group>
			<cell :title="userinfo_data.userNickname"  :link="{name:'MineDetail'}" is-link>
				<img slot="icon" :src="user_header_image" style="display:block; margin-right:5px; width:60px; -webkit-border-radius: 50px">
			</cell>
		</group>
		<group>
			<cell title="我的课程"  :link="{name:'MyCourse'}" is-link>
				<img slot="icon" src="../../assets/mycourse.png" style="display:block; margin-right:10px" width="16">
			</cell>
	      	<cell title="我的订单"  :link="{name:'MyOrder'}" is-link>
	      		<img slot="icon" src="../../assets/myorder.png" style="display:block; margin-right:5px" width="16">
	      	</cell>
		</group>
		<group>
			<cell title="讲师入口"  :link="{name:'MyTeacher', params: { isTeacher: userinfo_data.userIsLecturer }}" is-link>
				<img slot="icon" src="../../assets/teacher.png" style="display:block; margin-right:5px" width="16">
			</cell>
		</group>
      	<group>
      		<cell title="青枝介绍" :link="{name:'Introduction'}" is-link>
      			<img slot="icon" src="../../assets/qingzhiintroduction.png" style="display:block; margin-right:5px" width="16">
      		</cell>
      		<cell title="意见反馈"  :link="{name:'FeedBack'}" is-link>
      			<img slot="icon" src="../../assets/feedback.png" style="display:block; margin-right:5px" width="16">
      		</cell>
      	</group>
      	
	</div>
</template>
<script type="text/javascript">
	import { Group, Cell, CellBox } from 'vux';
	import { mapState } from 'vuex';
	export default {
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url,
            	userinfo_data : state => state.UserInfo.userinfo_data,
            	user_header_image : state => state.UserInfo.user_header_image,
            	common_request_appendv1_url: state => state.common.common_request_appendv1_url
	        })
    	},
		components: {
			Group,
			Cell,
			CellBox
		},
		data() {
			return {
			};
		}
	};
</script>
<style lang="stylus">
</style>
