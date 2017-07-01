<template>
	<div class="tools">
		<div class="contentfooter">
			<div class="content-cell">
				<div class="course" @click="goToOpportunity">
					<!-- <router-link :to="{name:'Opportunity', params:{ opportunity: itemInfo}}"> -->
						<span class="tools-icon" :class="classMap[itemInfo.courseIsPin]"></span>
						<span class="title" :class="classMap[itemInfo.courseIsPin]">拼课</span>
					<!-- </router-link> -->
				</div>
				<div class="send" @click="showGiveFriend">
					<img src="../../assets/givefrend.png" class="toolse-icon">
					<span class="titlee">送朋友</span>
				</div>
				<div class="price" @click="pay">
					<img src="../../assets/buyed@2x.png" v-show="itemInfo.isbuy" class="buyicon">
					<span class="count">{{ itemInfo.coursePrice }}￥</span>
				</div>
			</div>		
		</div>
		<transition name="fade">
			<modal v-show="modalshow" @commitAction="commitAction" @hideGiveFriend="hideGiveFriend" :itemInfo="modalInfo"></modal>
		</transition>
		<transition name="fade">
			<modal-bank v-show="priceshow" @commitPrice="commitActionPrice" @hidePrice="hidePrice" :totalPrice="pingkeObject.totalPrice" :count="pingkeObject.count"></modal-bank>
		</transition>
		<transition name="fade">
			<normal-modal v-show="normalpriceshow" @commitPrice="commitNormalActionPrice" @hidePrice="hideNormalPrice" :totalPrice="modalInfo.coursePrice" :count="1"></normal-modal>
		</transition>
	</div>
</template>
<script type="text/javascript">
import modal from '@/components/common/modal';
import modalBank from '@/components/common/modalbank';
import normalModal from '@/components/common/normalmodal';
import wx from 'weixin-js-sdk';
import { mapState } from 'vuex';
export default {
	computed: {
	    ...mapState({
	        common_request_base_url: state => state.common.common_request_base_url,
	        common_request_appendv1_url: state => state.common.common_request_appendv1_url,
	        userinfo_data : state => state.UserInfo.userinfo_data
	    })
    },
	data () {
		return {
			modalshow: false,
			priceshow: false,
			normalpriceshow: false,
			pingkeObject: {
				type: Object
			},
			modalInfo: {},
			orderID: '',
			payType: ''
		};
	},
	methods: {
		pay_success:function(res){

		},
		showGiveFriend() {
			this.modalshow = true;
			this.modalInfo = this.itemInfo;
			console.log(this.modalInfo);
		},
		hideGiveFriend() {
			this.modalshow = false;
		},
		hidePrice() {
			this.priceshow = false;
		},
		commitAction(val1, val2) {
			this.modalshow = false;
			this.pingkeObject.count = val1;
			this.pingkeObject.totalPrice = val2;
			this.payType = '0';
			console.log(this.userinfo_data.userId);
			// 价钱要修改
			var params = {
				id: localStorage.getItem('dataid'),
				ubrCourseId: this.itemInfo.courseId,
				ubrUserId: this.userId,
				ubrCoursePrice: this.itemInfo.coursePrice,
				ubrBuyNum: val1,
				ubrCourseType: '1',
				ubrPayType: '0',
				openid: localStorage.getItem('openid')
			};
			console.log(params);
			let url = this.common_request_base_url + this.common_request_appendv1_url + 'createorder';
			let money = val1 * this.itemInfo.coursePrice * 100;
			var qs = require('qs');
			this.$http.post(url, qs.stringify(params),{
				 headers: {
    				'Content-Type': 'application/x-www-form-urlencoded',
  				}
			}).then((res) => {
				console.log(res);
				this.orderID = res.data.content.result.orderId;
				let payurl = this.common_request_base_url + 'wx/wxpay?id=' + localStorage.getItem('dataid') + '&orderNumber=' + res.data.content.result.orderNum + '&total_fee=' + money + '&openid=' + localStorage.getItem('openid') + '&goods_body=' + this.itemInfo.courseName + '&goods_attach=' + this.itemInfo.courseName + '['+ this.userNickname + ']' + '&goods_tag=' + '青枝';
				this.$http.get(payurl)
				.then((res) => {
					let payload = {};
					payload.timestamp = res.data.timeStamp;
					payload.appId = res.data.appId;
					payload.nonceStr = res.data.nonceStr;
					payload.package = res.data.package;
					payload.paySign = res.data.paySign;
					payload.signType = res.data.signType;
					payload.success_callback = this.paySuccess;
					this.$store.dispatch('wechatPay', payload);
				});
			}, (err) => {
				alert(err);
			});
		},
		invoicing() {
			this.priceshow = true;
		},
		commitActionPrice() {
			this.priceshow = false;
		},
		commitNormalActionPrice() {
			this.normalpriceshow = false;
		},
		hideNormalPrice() {
			this.normalpriceshow = false;
		},
		goToOpportunity() {
			console.log(this.itemInfo.courseIsPin);
			if (this.itemInfo.courseIsPin === 1) {
				this.$router.push({name: 'Opportunity', params: {opportunity: this.itemInfo, userId: this.userId}});
			} else {
				this.$toast('此课程不能拼课');
			}
		},
		pay() {
			if (this.itemInfo.isbuy === 1) {
				this.$toast('您已经购买');
				return;
			};
			// 判断是否是该课程讲师
			if (this.itemInfo.lecturerId === this.lecturerId) {
				this.$toast('您是该课程讲师，不需要购买此课程');
				return;
			};
			// 价钱要修改
			var params = {
				id: localStorage.getItem('dataid'),
				ubrCourseId: this.itemInfo.courseId,
				ubrUserId: this.userId,
				ubrCoursePrice: this.itemInfo.coursePrice,
				ubrBuyNum: '1',
				ubrCourseType: '0',
				ubrPayType: '0',
				openid: localStorage.getItem('openid')
			};
			console.log(params);
			this.payType = '1';
			let url = this.common_request_base_url + this.common_request_appendv1_url + 'createorder';
			var qs = require('qs');
			this.$http.post(url, qs.stringify(params),{
				 headers: {
    				'Content-Type': 'application/x-www-form-urlencoded',
  				}
			}).then((res) => {
				console.log(res.data);
				// alert(res.data.content.orderNum);
				let money = this.itemInfo.coursePrice * 100;
				this.orderID = res.data.content.result.orderId;
				let payurl = this.common_request_base_url + 'wx/wxpay?id=' + localStorage.getItem('dataid') + '&orderNumber=' + res.data.content.result.orderNum + '&total_fee=' + money + '&openid=' + localStorage.getItem('openid') + '&goods_body=' + this.itemInfo.courseName + '&goods_attach=' + this.itemInfo.courseName + '['+ this.userNickname + ']' + '&goods_tag=' + '青枝';;
				// alert(url);
				this.pingkeObject.count = '1';
				this.pingkeObject.totalPrice = res.data.content.result.coursePrice;
				this.$http.get(payurl)
				.then((res) => {
					console.log(res);
					let payload = {};
					payload.timestamp = res.data.timeStamp;
					payload.appId = res.data.appId;
					payload.nonceStr = res.data.nonceStr;
					payload.package = res.data.package;
					payload.paySign = res.data.paySign;
					payload.signType = res.data.signType;
					payload.success_callback = this.paySuccess;
					this.$store.dispatch('wechatPay', payload);
				});
			}, (err) => {
				alert(err);
			});
			// alert('付款');
		},
		paySuccess(res) {
			if (this.payType === '0') {
				// this.priceshow = true;
				this.itemInfo.isbuy = 1;
			} else if (this.payType === '1') {
				// this.normalpriceshow = true;
				this.itemInfo.isbuy = 1;
			};
			var params = {
				id: localStorage.getItem('dataid'),
				ubrUserId: this.userId,
				ubrPayMoney: '0.01',
				orderId: this.orderID,
				openid: localStorage.getItem('openid')
			};
			let openid = localStorage.getItem('openid');
			let url = this.common_request_base_url + this.common_request_appendv1_url +'updateorder';
			var qs = require('qs');
			this.$http.post(url, qs.stringify(params),{
				 headers: {
    				'Content-Type': 'application/x-www-form-urlencoded',
  				}
			}).then((res) => {
				this.$emit('paySuccess');
				this.$toast('支付成功');
			});
		}
	},
	components: {
		modal,
		modalBank,
		normalModal
	},
	props: {
		itemInfo: {
			type: Object,
			default() {
				return {
						coursePrice: '1500',
						img: 'http://192.168.0.118:38080/headImage/lecturer/2017-05-09/1494315805638.jpg',
						title: '送你一朵fua'
					};
			}
		},
		userId: '',
		lecturerId: '',
		userNickname: ''
	},
	created() {
		this.classMap = ['noBuy', 'buy'];
	},
	mounted() {
		
	},
	ready() {
	},
	watch: {
		// this.itemInfo.isbuy() {
		// 	this.$emit('on-change', this.itemInfo);
		// }
	}
};
</script>
<style lang="stylus" scroped>
@import "../../common/stylus/mixin.styl"
.tools
	position: fixed
	bottom: 0px
	height: 50px
	width: 100%
	background: white
	.contentfooter
		position: relative
		.content-cell
			display: flex
			
			.course
				flex: 0 0 30%
				vertical-align: middle
				border-right: 1px solid rgba(7, 17, 27, 0.1)
				border-top: 1px solid rgba(7, 17, 27, 0.1)
				.tools-icon
					position: absolute
					margin-left: 10%
					repeat:no-repeat
					margin-top: 7px
					width: 32px
					height: 18px
					&.buy
						bg-image('pinkeSelect.png')
					&.noBuy
						bg-image('pinkeNormal.png')
				.title
					position: absolute
					padding-left: 11%
					padding-top: 30px
					font-size: 14px
					&.buy
						color: #ff9900
					&.noBuy
						color: #333333
				
			.send
				flex: 0 0 30%
				// text-align: center
				height: 50px
				border-top: 1px solid rgba(7, 17, 27, 0.1)
				border-right: 1px solid rgba(7, 17, 27, 0.1)
				.toolse-icon
					position: absolute
					// width: 20px
					height: 25px
					padding-left: 12%
					padding-top: 5px
				.titlee
					position: absolute
					padding-left: 9%
					padding-top: 30px
					font-size: 14px
					color: #333333
			.price
				flex: 0 0 40%
				height: 50px
				border-top: 1px solid rgba(7, 17, 27, 0.1)
				background-color: #ef5350;
				.buyicon
					position: absolute
					width: 70px
					padding-left: 5%
					padding-top: -10px
				.count
					position: absolute
					color: #ffffff
					width: 100%
					height: 60px
					line-height: 20px
					padding-top: 15px
					padding-left: 20%
					font-size: 20px
</style>
