<template>
	<div class="content">
		<group>
			<cell title="银行卡信息" :link="{path:'/addbankcard'}" isLink></cell>
			<cell title="总收入" :link="{path:'/particulars'}" :value="money"></cell>
			<!-- <cell title="账户余额" :value="money"></cell> -->
			<walletcell :title="title" :money="money" @feedback="getFeedback"></walletcell>
			<cell title="提现金额" :value="money"></cell>
			
		</group>
		<group>
			<cell title="提现进度">
	      		<img slot="icon" src="../../assets/wallet.png" style="display:block; margin-right:5px" width="16">
	      	</cell>
	      	<!--    <scroller lock-x height="-46px" @on-scroll="onScroll" ref="scrollerEvent" >
			      <div class="box2"> -->
			        <p v-for="i in 30" class="withDrawal">placeholder {{i}}      2017-05-15 09:15:37      已处理</p>
			  <!--     </div>
    			</scroller> -->
		</group>
		<transition name="fade">
			<modalbank v-show="modalshow" @commitAction="commitAction" @hideGiveFriend="hideGiveFriend"></modalbank>
		</transition>
	</div>
</template>
<script type="text/javascript">
import { Cell, Group, Scroller } from 'vux';
import WalletCell from '@/components/myteacher/walletCell';
import modalbank from '@/components/common/addBankModal';
	export default {
		data() {
			return {
				money: 900,
				title: '账户余额',
				modalshow: false,
				scroller: null
			};
		},
		components: {
			Cell,
			Group,
			walletcell: WalletCell,
			Scroller,
			modalbank
		},
		methods: {
			onScroll(pos) {
				this.scrollTop = pos.top;
			},
			getFeedback() {
				this.modalshow = true;
				console.log('提现操作');
			},
			commitAction() {
				this.modalshow = false;
				console.log('提交提现');
			},
			hideGiveFriend() {
				this.modalshow = false;
				console.log('提现取消');
			}
		},
		mounted() {
			// this.$nextTick(() => {
			// 	this.$refs.scrollerEvent.reset({top: 0});
			// });
			this.scroller = this.$el;
		}
	};
</script>
<style lang="stylus" scroped>
.content
	width: 100vw
	height: 100vh
	overflow: auto;
	transition: transform 0.3s ease;
	-webkit-overflow-scrolling: touch;
	.withDrawal
		border-bottom: 1px solid rgba(7, 17, 27, 0.1)
		line-height: 40px
		padding-left: 10px
		font-size: 14px
	
</style>
