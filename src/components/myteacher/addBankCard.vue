<template>
	<div>
		<group :title="title">
			<x-input title="持卡人" placeholder="请输入持卡人姓名" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="right" text-align="right"></x-input>
		</group>
		<group>
			<x-input title="银行卡号" placeholder="请输入银行卡号" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="right" text-align="right"></x-input>
			<popup-picker title="选择银行" :data="banks" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
			<x-input title="开户支行" placeholder="请填写开户支行名称" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="right" text-align="right"></x-input>
		</group>
		<router-link to="bankcard">
			<div class="addBankCommit">
				<span class="title">确认</span>
			</div>
		</router-link>
		
	</div>
</template>
<script type="text/javascript">
	import { Group, Cell, XInput, PopupPicker } from 'vux';
	export default {
		data() {
			return {
				title: '请绑定本人的银行卡，目前仅支持绑定一张卡',
				iconType: '',
				banks: [['交通银行', '招商银行', '中国银行', '中国工商银行']],
				value1: ['交通银行']
			};
		},
		methods: {
			onBlur(val) {
				console.log(val);
			},
			choosebank() {
				console.log('choosebank');
			},
			onShow() {

			},
			onHide() {

			},
			onChange(val) {
				console.log('val change', val);
			}
		},
		components: {
			Group,
			Cell,
			XInput,
			PopupPicker
		}
	};
</script>
<style lang="stylus">
.addBankCommit
	margin-top: 40px
	margin-left: 30%
	height: 40px
	// text-align: center
	width: 40%
	background-color: red
	display:flex
	justify-content:center
	align-items:center
	-webkit-border-radius: 5px;
	.title
		// position: absolute
		font-size: 16px
		line-height: 16px
		color: #fff
		// padding-left: 17%
		// padding-top: 12px
</style>
