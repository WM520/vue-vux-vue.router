<template>
	<div class="mineDetail">
		<!-- <group> -->
			<div class="top-wrapper">
				<div class="icon">
					<img :src="this.$store.state.UserInfo.headimgurl" style="display:block; width:60px; -webkit-border-radius: 50px; height: 60px">
				</div>
				<div class="content">
					<span class="title">{{ name }}</span><br><br>
					<span class="joinTime">加入时间: {{ joinTime }}</span>
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
	import { mapState } from 'vuex';
	export default {
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url 
	        })
    	},
		data() {
			return {
				name: this.$store.state.UserInfo.userName,
				sex: '男',
				address: this.$store.state.UserInfo.userProvince + this.$store.state.UserInfo.userCity,
				joinTime:  this.$store.state.UserInfo.userCreateTime
			};
		},
		components: {
			Group,
			Cell,
			CellBox
		},
		methods: {
			getLocalTime(now) {
				var time = new Date(now);
				alert(time);
				var year = time.getFullYear();
				// alert(year);
				var month = time.getMonth() + 1;
				var date = time.getDate();
				var hour = time.getHours();
				var minute = time.getMinutes();
				if (minute === '0') {
					minute = '00';
				};
				var second = time.getSeconds();
				return year + '-' + month + '-' + date + '   ' + hour + ':' + minute + ':' + second;
			}
		},
		mounted() {
			if (this.$store.state.UserInfo.userSex === 1) {
				this.sex = '男';
			} else if (this.$store.state.UserInfo.userSex === 0) {
				this.sex = '女';
			};
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
