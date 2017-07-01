<template>
	<div class="mineDetail">
		<!-- <group> -->
			<div class="top-wrapper">
				<div class="icon">
					<img :src="user_header_image" style="display:block; width:60px; -webkit-border-radius: 50px; height: 60px">
				</div>
				<div class="content">
					<span class="title">{{ userinfo_data.userNickname }}</span><br><br>
					<span class="joinTime">加入时间: {{ userinfo_data.userCreateTime * 1000 | formatDate }}</span>
				</div>
			</div>
		<!-- </group> -->
		<group>
			<cell title="性别" :value="userinfo_data.userSex === 1 ? '男' : '女'">
			</cell>
			<cell title="地区" :value="userinfo_data.userProvince + userinfo_data.userCity">
			</cell>
		</group>
	</div>
</template>
<script type="text/javascript">
	import { Group, Cell, CellBox } from 'vux';
	import { mapState } from 'vuex';
	import {formatDate} from '../../utils/datetime.js';
	export default {
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url,
	            userinfo_data : state => state.UserInfo.userinfo_data,
            	user_header_image : state => state.UserInfo.user_header_image
	        })
    	},
		data() {
			return {
			};
		},
		components: {
			Group,
			Cell,
			CellBox
		},
		filters: {
	        formatDate(time) {
	            var date = new Date(time);
	            return formatDate(date, 'yyyy-MM-dd hh:mm');
	        }
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
