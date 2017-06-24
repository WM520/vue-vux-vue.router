<template>
	<div class="bankCard-wrapper">
		<swipeout-item :threshold=".5" underlay-color="#ccc">
	        <div slot="right-menu">
	          <swipeout-button @click.native="onButtonClick" background-color="#D23934">删除</swipeout-button>
	        </div>
	        <div slot="content" class="demo-content vux-1px-tb">
	        	<div class="withdrawal-detail" >
					<div class="avatar">
						<img src="../../assets/grain.jpg" class="icon">
					</div>
					<div class="content">
						<span class="title">{{ cardMessage.bankName }}</span>
						<span class="time">{{ cardMessage.bankCreateTime }}</span>
					</div>
				</div>
	        </div>
      	</swipeout-item>
	</div>
</template>
<script type="text/javascript">
import {formatDate} from '../../utils/datetime.js';
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux';
	export default {
		data() {
			return {
				cardMessage: {}
			};
		},
		methods: {
			onButtonClick() {
				alert(11111);
				console.log(11111);
			},
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
		components: {
			Swipeout,
			SwipeoutItem,
			SwipeoutButton
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				vm.cardMessage = to.params.cardMessage;
				vm.cardMessage.bankCreateTime = vm.getLocalTime(vm.cardMessage.bankCreateTime * 1000);
				console.log(vm.cardMessage);
			})
		}
	};
</script>
<style lang="stylus">
.bankCard-wrapper
	.withdrawal-detail
		margin-top: 10px
		width: 125%
		padding: 5px
		transition:all 0.5s linear
		display: flex
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
		height: 80px;
		.avatar
			flex: 0 0 70px
			margin-right: 12px
			.icon
				border-radius: 50px
				padding: 5px
				width: 60px
				height: 60px
		.content
			position: relative
			flex: 1
			.title
				display: inline-block
				padding-top: 10px
				font-size: 14px
				line-height: 26px
				color: #333333
				overflow: hidden
				text-overflow: ellipsis
				display: -webkit-box
				-webkit-line-clamp: 2
				-webkit-box-orient: vertical
			.time
				display: inline-block
				padding-top: 10px
				font-size: 10px
</style>
