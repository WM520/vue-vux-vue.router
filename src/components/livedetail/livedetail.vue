<template>
  <div class="liveDetailContent">
  	<div class="headercontent">
  		<img :src="courseCoverImage" class="scanerImg">
  		<h1 class="livetitle">{{ this.courseIntroduction }}</h1>
  		<router-link :to="{name: 'Teacher', params: { teacherID : this.lecturerId }}">
  			<div class="teacher">
	  			<img :src="lecturerHeadImage" class="headericon">
	  			<span class="name">{{ this.lecturerName }}  讲师</span>
  			<img src="../../assets/gobutton.png" class="headergo">
  		</div>
  		</router-link>
  	</div>
  	<split></split>
  	<div class="liveIntruction">
  		<div class="intructionHeader">
  			<img src="../../assets/liveintroduction@2x.png" class="intructionIcon">
  			<span class="intructionTitle">直播介绍</span>
  		</div>
  		<div class="intructionContent">
  			<span class="text">
  				{{ this.courseMainIntroduction }}
  			</span>
  		</div>
  	</div>
  	<split></split>
  	<div class="liveArrange">
  		<div class="arrangeHeader">
  			<img src="../../assets/liveplan@2x.png" class="arrangeIcon">
  			<span class="intructionTitle">直播介绍</span>
  		</div>
  		<ul>
  			<!-- 直播间的信息 -->
  			<li v-for="item in courceList" @click="goToLive(item)">
	  				<div class="arrangeList">
	  					<span class="text">{{ item.roomName }}<br>{{ item.roomStartTime * 1000 | formatDate }} {{ item.roomEndTime * 1000 | formatDate }}</span>
	  					<img src="../../assets/live.png" class="isLive" v-show="!item.roomType">
	  				</div>
  			</li>
  		</ul>
  	</div>
  	<v-footer class="tool" :itemInfo="modal" @on-change="isbuychange" :userId="userinfo_data.userId" :lecturerId="userinfo_data.lecturerId" :userNickname="userinfo_data.userNickname" @paySuccess="paySuccess"></v-footer>
  	<!-- 分隔块3 -->
  	<div class="recent-interval"></div>
  </div>
</template>

<script type="javascript">
import split from '@/components/split/split';
import Footer from '@/components/livedetailfooter/livedetailfooter';
import { mapState } from 'vuex';
import {formatDate} from '../../utils/datetime.js';
 export default {
 	computed: {
	    ...mapState({
	        common_request_base_url: state => state.common.common_request_base_url,
	        common_request_appendv1_url: state => state.common.common_request_appendv1_url,
	        userinfo_data : state => state.UserInfo.userinfo_data
	    })
    },
 	components: {
 		split,
 		vFooter: Footer
 	},
 	data() {
 		return {
 			scroller: null,
 			loading: false,
 			courceList: [],
 			courseIntroduction: '',
 			courseMainIntroduction: '',
 			lecturerHeadImage: '',
 			courseCoverImage: '',
 			courseIsPin: '',
 			coursePrice: '',
 			isbuy: '',
 			lecturerName: '',
 			lecturerId: '',
 			modal: {},
 			courseId: '',
 			liveRoom: {},
 			loading: true
 		};
 	},
 	mounted() {
 		this.scroller = this.$el;
 		this.userId = this.userinfo_data.userId;
 		this.initDetail();
 	},
 	methods: {
 		initDetail(){
 				let u = navigator.userAgent;
 			    if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
				//if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
					//currentUrl = currentUrl + 'livedetail/liveroom/'
					let currentUrl = location.href;

					console.log("currenturl:="+currentUrl);
					this.$store.dispatch("getWeChatSignature",currentUrl);
				}

 		},
 		isbuychange() {
 			this.modal.isbuy = 1;
 		},
 		goToLive(val) {
 			console.log(this.userinfo_data);
 			if (this.lecturerId === this.userinfo_data.lecturerId) {
 				if (val.roomType === 1) {
 					this.$router.push({ name: 'LiveAudio', params: { room: val }});
 				} else if (val.roomType === 0) {
 					let id = localStorage.getItem('dataid');
		            let openid = localStorage.getItem('openid');
		            let url = this.common_request_base_url + 'v1/app/findinfobyroomidanduserid?id=' + id + '&userId=' + this.userId  + '&roomId=' + val.roomId + '&openid=' + openid;
		       	    this.$http.get(url)
		            .then((res) => {
		            	console.log(res);
		                this.liveRoom = res.data.content.result;
		                this.$router.push({ name: 'LiveRoom', params: { liveroom: this.liveRoom }});
	                });
 				};
 			} else {
 				if (val.roomType === 1) {
	 				if (this.modal.isbuy === 1) {
	 					this.$router.push({ name: 'LiveAudio', params: { room: val }});
	 				 } else {
	 					this.$toast('请先购买课程');
	 				};
	 			} else if (val.roomType === 0) {
	 				console.log('直播介绍');
	 				if (this.modal.isbuy === 1) {
	 					let id = localStorage.getItem('dataid');
		                let openid = localStorage.getItem('openid');
		                let url = this.common_request_base_url + 'v1/app/findinfobyroomidanduserid?id=' + id + '&userId=' + this.userId  + '&roomId=' + val.roomId + '&openid=' + openid;
		                console.log(url);
		                this.$http.get(url)
		                .then((res) => {
		                	console.log(res);
		                    this.liveRoom = res.data.content.result;
		                    this.$router.push({ name: 'LiveRoom', params: { liveroom: this.liveRoom }});
		                });
	 				} else {
	 					this.$toast('请先购买课程');
	 				};
 				};
 			};
 		},
 		paySuccess() {
 			this.modal.buy = 1;
 		}
 	},
 	beforeRouteEnter (to, from, next) {
		next(vm => {
			// 获取课程详情
			vm.loading = true;
			vm.$indicator.open('加载中...');
	 		let id = localStorage.getItem('dataid');
	 		let userID = vm.userinfo_data.userId;
	 		let courseId = to.params.id;
	 		let openid = localStorage.getItem('openid');
	 		console.log(courseId !== undefined);
	 		// 判断是带参数进入还是不带参数
	 		if (courseId !== undefined) {
	 			vm.courseId = courseId;
	 		};
	 		console.log(vm.courseId);
	 		let url = vm.common_request_base_url + vm.common_request_appendv1_url +'findcoursebyid?id=' + id + '&courseId=' + vm.courseId + '&userId=' + userID + '&openid=' + openid;
	 		console.log(url);
			vm.$http.get(url)
			.then((res) => {
				console.log(res.data);
				vm.loading = false;
				var modal = res.data.content.result;
				vm.modal = modal;
				console.log(vm.modal);
				vm.courceList = modal.courseRooms;
				vm.courseIntroduction = modal.courseIntroduction;
				let courseCoverImageUrl = vm.common_request_base_url + vm.common_request_appendv1_url +'getossmedia' + '?media=' + modal.courseCoverImage + '&openid=' + openid;
				vm.$http.get(courseCoverImageUrl)
				.then((res) => {
					console.log(res.data);
					vm.courseCoverImage = res.data;
				});
				let lecturerHeadImageUrl = vm.common_request_base_url + vm.common_request_appendv1_url +'getossmedia' + '?media=' + modal.lecturerHeadImage + '&openid=' + openid;
				vm.$http.get(lecturerHeadImageUrl)
				.then((res) => {
					vm.lecturerHeadImage = res.data;
				});
				vm.lecturerName = modal.lecturerName;
				vm.courseMainIntroduction = modal.courseMainIntroduction;
				vm.lecturerId = modal.lecturerId;
			})
			.catch((error) => {
				vm.loading = false;
				vm.$toast('加载课程详情失败');
			});
		});
    },
    watch: {
    	loading() {
    		if (this.loading === false) {
    			this.$indicator.close();
    		};
    	}
    },
    filters: {
	    formatDate(time) {
	        var date = new Date(time);
	        return formatDate(date, 'yyyy-MM-dd hh:mm');
	    }
    }
 };
</script>

<style type="text/css" scroped>
.liveDetailContent {
	/*background-color: red;*/
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: auto;
	transition: transform 0.3s ease;
	-webkit-overflow-scrolling: touch;
}
.scanerImg {
	height: 190px;
	width: 100%;
}
.livetitle {
	padding: 8px;
	font-size: 16px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	color: #333333
}
.teacher {
	position: relative;
	margin: 0 auto;
	font-size: 0px;
	width: 100%;
	height: 60px;
}
.headericon {
	display: inline-block;
	padding-top: 10px;
	padding-left: 10px;
	width: 40px;
	height: 40px;
}
.name {
	position: absolute;
	display: inline-block;
	/*height: 60px;*/
	padding-left: 10px;
	top: 23px;
	font-size: 14px;
	line-height: 14px;
	color: #333333
}
.headergo {
	position: absolute;
	right: 10px;
	top: 24px;
	width: 8px;
	height: 12px;
}
.liveIntruction {
	padding: 5px;
	font-size: 0px;
	
}
.intructionHeader {
	padding: 8px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.intructionIcon {
	width: 16px;
	height: 15px;
}
.intructionTitle {
	padding-left: 5px;
	padding-top: 5px;
	font-size: 15px;
	color: #333333;
}
.intructionContent {
	padding: 8px;
	font-size: 13px;
	line-height: 15px;
	color: #666666
}
.text {
	color: #7f7f7f;
}
.liveArrange {
	padding: 5px;
	font-size: 0px;
}
.arrangeHeader {
	padding: 8px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.arrangeIcon {
	width: 16px;
	height: 15px;
}
.arrangeList {
	padding: 8px;
	border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.arrangeList .text{
	color: #666666;
	font-size: 14px;
	line-height:25px;
}
.isLive {
	padding-left: 5px 
}
.recent-interval {
	width: 100%;
	height:70px;
}

</style>
