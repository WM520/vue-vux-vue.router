<template>
	<div>
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
	      	   <scroller lock-x height="-46px" @on-scroll="onScroll" ref="scrollerEvent" >
			      <div class="box2">
			        <p v-for="i in 30" class="withDrawal">placeholder {{i}}      2017-05-15 09:15:37      已处理</p>
			      </div>
    			</scroller>
		</group>
	</div>
</template>
<script type="text/javascript">
import { Cell, Group, Scroller } from 'vux';
import WalletCell from '@/components/myteacher/walletCell';
	export default {
		data() {
			return {
				money: 900,
				title: '账户余额'
			};
		},
		components: {
			Cell,
			Group,
			walletcell: WalletCell,
			Scroller
		},
		methods: {
			onScroll(pos) {
				this.scrollTop = pos.top;
			},
			getFeedback() {
				console.log('提现操作');
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.$refs.scrollerEvent.reset({top: 0});
			});
		}
	};
</script>
<style lang="stylus">
.withDrawal
	border-bottom: 1px solid rgba(7, 17, 27, 0.1)
	line-height: 40px
	padding-left: 10px
	font-size: 14px
	
</style>
