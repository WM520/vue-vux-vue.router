<template>
	<div class="input-wrapper">
		<Group>
			<x-textarea :max="300" name="description" :height="200" :placeholder="placeholdertext" @on-change="onEvent"></x-textarea>
		</Group>
		<div class="commit" @click="commit">
			<span class="commitbutton">确定</span>
		</div>
	</div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
import { XTextarea, Group } from 'vux';
	export default {
		data() {
			return {
				placeholdertext: '意见反馈',
				textValue: ''
			};
		},
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url,
	            common_request_appendv1_url: state => state.common.common_request_appendv1_url
	        })
    	},
		components: {
			XTextarea,
			Group
		},
		methods: {
			// 提交服务器
			commit() {
				// 意见反馈接口
				var params = {
					id: localStorage.getItem('dataid'),
					feedbackUserId: this.$store.state.UserInfo.userinfo_data.userId,
					feedbackContent: this.textValue,
					openid: localStorage.getItem('openid')
				};
				let url = this.common_request_base_url + this.common_request_appendv1_url +'savefeedback';
				var qs = require('qs');
				this.$http.post(url, qs.stringify(params),{
				 headers: {
    				'Content-Type': 'application/x-www-form-urlencoded'
  				}
				}).then((res) => {
					this.$toast("反馈成功");
					// this.$router.go(-1);
					setTimeout(() => this.$router.go(-1), 3000);
				});
			},
			// 取输入框的值
			onEvent(val) {
				this.textValue = val;
				console.log('this.textValue', this.textValue);
			}
		}
	};
</script>
<style lang="stylus">

.commit
	width: 60%
	background-color: red
	margin-left: 20%
	margin-top: 20px
	height: 35px
	-webkit-border-radius: 5px
	text-align: center
	.commitbutton
		font-size: 16px
		line-height: 35px
		color: #ffffff
	
	

</style>
