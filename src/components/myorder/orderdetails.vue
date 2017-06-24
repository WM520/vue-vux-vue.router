<template>
	<div class="orderdetails-wrap">
		<!-- 顶部内容 -->
		<div class="orderdetails-topImgDiv">
			<img src="../../assets/grain.jpg" alt="" class="orderdetails-imgGrain">
			
			<div class="orderdetails-introduceText">{{ orderDetail.courseName }}</div>
			<span class="orderdetails-introduceFoodText">{{ orderDetail.courseIntroduction }}</span>
			<img src="../../assets/heat@2x.png" class="orderdetails-fire">
			<span class="orderdetails-fireNumber">{{ orderDetail.chViewCount }} 次</span>
			<span class="orderdetails-money">￥{{ orderDetail.coursePrice }}</span>
		</div>


		<!-- 讲师 -->
		<router-link :to="{ name: 'MyTeacher', params: { isTeacher: isTeacher }}">
			<div class="orderdetails-teacher">
				<!-- <div class="orderdetails-teacher-box"></div> -->
				<img :src="orderDetail.lecturerHeadImage" class="orderdetails-teacher-portrait">
					<span>{{ orderDetail.lecturerName }}<span>讲师</span></span>
				<img src="../../assets/Arrow.png" height="12" width="8" alt="" class="orderdetails-teacher-arrow">
			</div>
		</router-link>
		<!-- 直播安排部分 -->
		<div class="orderdetails-arrange-box">
			<img src="../../assets/arrange.png" height="15" width="16" alt="">
			<span>直播安排(4/10)</span>
		</div>

		<!-- 多吃谷物文字部分 -->
		<ul>
			<li v-for="item in orderDetail.courseRooms">
				<div class="orderdetails-grain-box">
					<span>{{ item.roomName }}</span><br>
					<span>{{ item.roomStartTime }}&nbsp;&nbsp;{{ item.roomEndTime }}</span>
				</div>
			</li>
		</ul>
		
		<div v-show="orderDetail.orderType === 2">
			<!-- 拼课状态 拼课价钱 拼课规模部分 -->
			<div class="orderdetails-state-box">
				<span>拼课状态</span>
				<span>16:37:17</span>
				<img src="../../assets/time.png" height="16" width="16" alt="">
			</div>


			<div class="orderdetails-price-box">
				<span>拼课价钱</span>
				<span>￥200</span>
			</div>

			<div class="orderdetails-scale-box">
				<span>拼课规模</span>
				<span>10人团</span>
			</div>
			

			<!-- 拼课进度部分 -->
			<div class="orderdetails-places">
				<img src="../../assets/hourglass.png" class="orderdetails-hourglass">
				<span class="orderdetails-placesText">拼课进度( 3/10 )</span>
			</div>


			<!-- 微信名部分 -->
			<ul>
				<li v-for="item in orderDetail.groupUser">
					<div class="orderdetails-WXNameBox">
						<div class="orderdetails-WXImgBox">
			      			<img src="../../assets/LF.jpg" class="orderdetails-WXImg">
						</div>
						<span class="orderdetails-WXNameText">{{ item.userNickname }}</span>
						<span class="orderdetails-WXDate">{{ item.ubrCreateTime }}</span>
						<span class="orderdetails-success-T">拼课成功</span>
					</div>
				</li>
			</ul>
		</div>

		<!-- 下单时间部分 -->
		<div class="orderdetails-places">
			<img src="../../assets/orderTime.png" class="orderdetails-hourglass">
			<span class="orderdetails-placesText">下单时间</span>
		</div>


		<!-- 订单时间详情部分 -->
		<div class="orderdetails-time-box">
			<div class="orderdetails-time-place">下单时间:<span>{{ orderDetail.createTime }}</span></div>
			<div class="orderdetails-time-payment">支付时间:<span>{{ orderDetail.payTime }}</span></div>
		</div>
		<!-- 底部块 -->
		<div class="orderdetails-bottom"></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				liveList: [{}, {}],
				isTeacher: false,
				orderDetail: {}
			};
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				// 获取课程详情
				// alert(to.params.orderid);
				let id = localStorage.getItem('dataid');
				let url = '/api/web/v1/app/findinfobyorderid?id=' + id + '&orderId=' + to.params.orderid;
				// alert(url);
				vm.$http.get(url)
				.then((res) => {
					// alert(res.data.content.result);
					vm.orderDetail = res.data.content.result;
					console.log(res.data.content);
					vm.orderDetail.createTime = vm.getLocalTime(vm.orderDetail.createTime * 1000);
					vm.orderDetail.payTime = vm.getLocalTime(vm.orderDetail.payTime * 1000);
					for (var i = 0; i < vm.orderDetail.courseRooms.length; i++) {
						vm.orderDetail.courseRooms[i].roomStartTime = vm.getLocalTime(vm.orderDetail.courseRooms[i].roomStartTime * 1000);
						vm.orderDetail.courseRooms[i].roomEndTime = vm.getLocalTime(vm.orderDetail.courseRooms[i].roomEndTime * 1000);
					};
					if (vm.orderDetail.groupUser !== null) {
						for (var i = 0; i < vm.orderDetail.groupUser.length; i++) {
						vm.orderDetail.groupUser[i].ubrCreateTime = vm.getLocalTime(vm.orderDetail.groupUser[i].ubrCreateTime * 1000);
						};
					};
				}, (error) => {
					alert(11111 + error);
				});
			});
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
		}
	};
</script>
<style type="text/css">
	body{
		background-color:#fafafa;
	}
	.orderdetails-wrap{
		width:100%;
		max-width:750px;
		height:100%;
	}
	.orderdetails-topImgDiv{
		width:100%;
		height:8rem;
		margin:0 auto;
		border-bottom:1px solid #e5e5e5;
		position:relative;
		overflow:hidden;
		background-color:white;
	}
	.orderdetails-topImgDiv .orderdetails-imgGrain{
		width:6rem;
		height:6rem;
		margin-top:0.94rem;
		margin-left:0.625rem;
		border-radius:2px;
	}
	

	.orderdetails-introduceText{
		width:66.2%;
		position:absolute;
		top:22px;
		left:7.25rem;
		font-size:0.875rem;
		word-break:break-all;
		font-family:"Microsoft Yahei";
		color:#333333;
		line-height:1.2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.orderdetails-introduceFoodText{
		width:64%;
		height:14px;
		position:absolute;
		top:64px;
		left:7.25rem;
		font-size:0.75rem;
		font-family:"Microsoft Yahei";
		color:#999999;
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
	}
	.orderdetails-fire{
		width:0.8rem;
		height:0.8rem;
		position:absolute;
		top:88px;
		left:116px;
	}

	.orderdetails-fireNumber{
		font-size:0.69rem;
		color:#666666;
		font-family:"Microsoft Yahei";
		position:absolute;
		top:90px;
		left:8.4rem;
	}
	
	.orderdetails-money{
		float:right;
		margin-right:0.625rem;
		margin-top:5.14rem;
		color:#ff2626;
		font-size:1.25rem;
		font-family:"Microsoft Yahei";
	}

	/*讲师部分*/
	.orderdetails-teacher{
		width:100%;
		height:60px;
		border-bottom:1px solid #e5e5e5;
		position:relative;
		background-color:white;
	}
	.orderdetails-teacher-portrait{
		width:40px;
		height:40px;
		border-radius:50%;
		margin-top:9px;
		margin-left:7px;
	}
	.orderdetails-teacher>span{
		color:#333333;
		font-size:0.875rem;
		display:inline-block;
		line-height:60px;
		position:absolute;
		left:60px;
	}
	.orderdetails-teacher span span{
		color:#666;
		font-size:0.75rem;
		margin-left:8px;
	}
	.orderdetails-teacher-arrow{
		float:right;
		margin-right:10px;
		margin-top:24px;
	}
	

	/*直播安排部分*/
	.orderdetails-arrange-box{
		width:100%;
		height:40px;
		border-top:1px solid #e5e5e5;
		border-bottom:1px solid #e5e5e5;
		margin-top:12px;
		background-color:white;
		position:relative;
	}

	.orderdetails-arrange-box img{
		margin-top:12px;
		margin-left:10px;
	}

	.orderdetails-arrange-box span{
		position:absolute;
		top:12px;
		margin-left:5px;
		/*line-height:40px;*/
		font-size:0.94rem;
		color:#333;	
	}


	/*多吃谷物文字部分*/
	.orderdetails-grain-box{
		width:100%;
		height:70px;
		background-color:white;
		border-bottom:1px solid #e5e5e5;
	}
	.orderdetails-grain-box span:first-child{
		color:#666;
		font-size:0.875rem;
		margin-top:18px;
		margin-left:12px;
		display:inline-block;
	}
	.orderdetails-grain-box span:nth-child(3){
		color:#999;
		font-size:0.69rem;
		display:inline-block;
		margin-top:12px;
		margin-left:12px;
	}
	


	/*拼课状态  拼课价格  拼课规模*/
	.orderdetails-state-box{
		width:100%;
		height:40px;
		background-color:white;
		margin-top:10px;
		border-top:1px solid #e5e5e5;
	}

	/*拼课状态部分*/
	.orderdetails-state-box span:first-child{
		line-height:40px;
		margin-left:10px;
		font-size:0.813rem;
		color:#333;
	}
	

	.orderdetails-state-box span:nth-child(2){
		line-height:40px;
		float:right;
		margin-right:10px;
		font-size:0.875rem;
		color:#666;
	}

	.orderdetails-state-box img{
		float:right;
		margin-right:5px;
		margin-top:11px;
	}

	/*拼课价格部分*/
	.orderdetails-price-box{
		width:100%;
		height:40px;
		background-color:white;
		border-top:1px solid #e5e5e5;
	}

	/*拼课状态部分*/
	.orderdetails-price-box span:first-child{
		line-height:40px;
		margin-left:10px;
		font-size:0.813rem;
		color:#333;
	}
	

	.orderdetails-price-box span:nth-child(2){
		line-height:40px;
		float:right;
		margin-right:10px;
		font-size:0.875rem;
		color:#666;
	}
	
	/*拼团价格部分*/
	.orderdetails-scale-box{
		width:100%;
		height:40px;
		background-color:white;
		border-top:1px solid #e5e5e5;
		border-bottom:1px solid #e5e5e5;
	}

	.orderdetails-scale-box span:first-child{
		line-height:40px;
		margin-left:10px;
		font-size:0.813rem;
		color:#333;
	}

	.orderdetails-scale-box span:nth-child(2){
		line-height:40px;
		float:right;
		margin-right:10px;
		font-size:0.875rem;
		color:#666;
	}



	/*微信名部分*/
	.orderdetails-WXNameBox{
		width:100%;
		height:60px;
		border-bottom:1px solid #e7e7e7;
		position:relative;
		background-color:white;
	}
	.orderdetails-WXImgBox{
		width:40px;
		height:40px;
		background-color:red;
		border-radius:50%;
		overflow:hidden;
		position:absolute;
		top:11px;
		left:10px;
	}
	.orderdetails-WXImg{
		width:100%;
		height:100%;
	}
	.orderdetails-WXNameText{
		font-size:0.812rem;
		position:absolute;
		top:16px;
		left:56px;
		color:#333;
	}

	.orderdetails-WXDate{
		position:absolute;
		bottom:15px;
		left:56px;
		font-size:0.69rem;
		color:#666;
	}
	
	/*用户信息部分的拼课成功*/
	.orderdetails-success-T{
		float:right;
		margin-right:10px;
		line-height:60px;
		font-size:0.813rem;
		color:#666;
	}

	/*拼课进度部分*/
	.orderdetails-places{
		width:100%;
		height:40px;
		border-bottom:1px solid #e5e5e5;
		border-top:1px solid #e5e5e5;
		background-color:white;
		margin-top:10px;
	}
	.orderdetails-hourglass{
		width:14px;
		height:16px;
		margin-top:12px;
		margin-left:11px;
	}

	.orderdetails-placesText{
		font-size:0.94rem;
		position:absolute;
		line-height:40px;
		left:31px;
		color:#333;
	}

	/*下单部分*/
	.orderdetails-orderTime-box{
		width:100%;
		height:40px;
		border-bottom:1px solid #e5e5e5;
		border-top:1px solid #e5e5e5;
		background-color:white;
		margin-top:10px;
	}

	.orderdetails-time-box{
		width:100%;
		height:52px;
		background-color:white;
		border-bottom:1px solid #e5e5e5;
	}

	/*下单时间详情部分*/
	.orderdetails-time-place{
		display:inline-block;
		color:#999;
		font-size:0.69rem;
		margin-top:10px;
		margin-left:10px;
	}
	.orderdetails-time-place span{
		color:#666;
		margin-left:10px;
	}

	.orderdetails-time-payment{
		color:#999;
		font-size:0.69rem;
		margin-top:8px;
		margin-left:10px;
	}

	.orderdetails-time-payment span{
		color:#666;
		margin-left:10px;
	}



	/*底部块部分*/
	.orderdetails-bottom{
		width:100%;
		height:45px;
	}
</style>
