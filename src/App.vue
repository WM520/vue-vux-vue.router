<template>
  <div id="app">
  	<!-- <transition name="fade"> -->
	  	<keep-alive>
		    <router-view></router-view>
		</keep-alive>
	<!-- </transition> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
	export default {
		name: 'app',
		mounted() {
			if (localStorage.getItem('dataid') === null || localStorage.getItem('dataid') === undefined) {
				var key = '';
				localStorage.setItem('dataid', key);
			};
			let url = this.common_request_base_url + 'api/web/v1/app/logintest' + '?id=' + localStorage.getItem('dataid');
			this.$http.get(url)
			.then((res) => {
				// 微信网页授权验证
				if (res.data.userWxOpenid === undefined || res.data.userWxOpenid === '') {
					localStorage.setItem('dataid', res.data.id);
					let url = 'http://wx.mozziewang.xyz/api/web/v1/app/login' + '?id=' + res.data.id;
					window.location.href = url;
				} else {

					// 拿到个人数据缓存
					this.$store.commit('updateUserInfoUserName', res.data.userNickname);
					this.$store.commit('updateUserInfoCity', res.data.userCity);
					this.$store.commit('updateUserInfoUserID', res.data.userId);
					this.$store.commit('updateUserInfoIsLogin', true);
					this.$store.commit('updateUserInfoOpenID', res.data.userWxOpenid);
					this.$store.commit('updateUserInfoUserSex', res.data.userSex);
					this.$store.commit('updateUserInfoUserProvince', res.data.userProvince);
					this.$store.commit('updateUserInfoUserIsLecturer', res.data.userIsLecturer);
					this.$store.commit('updateUserInfoUserIsLecturerId', res.data.lecturerId)
					let time = this.getLocalTime(res.data.userCreateTime * 1000);
					this.$store.commit('updateUserInfoUserCreateTime', time);
					// 转换头像图片
					let url = this.common_request_base_url +'api/web/v1/app/getossmedia' + '?media=' + res.data.userHeadImage;
					this.$http.get(url)
					.then((res) => {
						this.$store.commit('updateUserInfoHeadImgURL', res.data);
					});
				};
			}, (err) => {
				console.log(err);
			});
			let currentUrl = location.href;
			console.log(currentUrl);
			this.$store.dispatch("getWeChatSignature",currentUrl);
		},
		methods: {
			getLocalTime(now) {
				var time = new Date(now);
				// alert(time);
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
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url 
	        })
    	}
	};
</script>

<style lang="stylus">

</style>
