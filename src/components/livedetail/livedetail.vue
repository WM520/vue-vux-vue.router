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
	  					<span class="text">{{ item.roomName }}<br>2017.03.16 16:00-17.00</span>
	  					<img src="../../assets/live.png" class="isLive" v-show="!item.roomType">
	  				</div>
  			</li>
  		</ul>
  	</div>
  	<v-footer class="tool" :itemInfo="modal"></v-footer>
  	<!-- 分隔块3 -->
  	<div class="recent-interval"></div>
  </div>
</template>

<script type="javascript">
import split from '@/components/split/split';
import Footer from '@/components/livedetailfooter/livedetailfooter';
import { mapState } from 'vuex';
 export default {
 	computed: {
	    ...mapState({
	        common_request_base_url: state => state.common.common_request_base_url 
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
 			liveRoom: {}
 		};
 	},
 	mounted() {
 		this.scroller = this.$el;
 	},
 	methods: {
 		goToLive(val) {
 			alert(this.lecturerId);
 			alert(this.$store.state.UserInfo.lecturerId);
 			console.log(this.$store.state.UserInfo.lecturerId === this.lecturerId);
 			if (this.lecturerId === this.$store.state.UserInfo.lecturerId) {
 				if (val.roomType === 1) {
 					this.$router.push({ name: 'LiveAudio', params: { roomId: val.roomId }});
 				} else if (val.roomType === 0) {
 					let id = localStorage.getItem('dataid');
		            let userID = this.$store.state.UserInfo.useID;
		            let url = this.common_request_base_url + 'api/web/v1/app/findinfobyroomidanduserid?id=' + id + '&userId=' + userID + '&roomId=' + val.roomId;
		       	    this.$http.get(url)
		            .then((res) => {
		                this.liveRoom = res.data.content.result;
		                this.$router.push({ name: 'LiveRoom', params: { liveroom: this.liveRoom }});
	                });
 				};
 			} else {
 				if (val.roomType === 1) {
	 				if (this.modal.isbuy === 1) {
	 					this.$router.push({ name: 'LiveAudio', params: { roomId: val.roomId }});
	 				 } else {
	 					alert('请先购买课程');
	 				};
	 			} else if (val.roomType === 0) {
	 				console.log('直播介绍');
	 				if (this.modal.isbuy === 1) {
	 					let id = localStorage.getItem('dataid');
		                let userID = this.$store.state.UserInfo.useID;
		                console.log(this.$store.state.UserInfo.useID);
		                let url = this.common_request_base_url + 'api/web/v1/app/findinfobyroomidanduserid?id=' + id + '&userId=' + userID + '&roomId=' + val.roomId;
		                console.log(url);
		                this.$http.get(url)
		                .then((res) => {
		                    this.liveRoom = res.data.content.result;
		                    this.$router.push({ name: 'LiveRoom', params: { liveroom: this.liveRoom }});
		                });
	 				} else {
	 					alert('请先购买课程');
	 				};
 				};
 			};
 		}
 	},
 	beforeRouteEnter (to, from, next) {
		next(vm => {
			// 获取课程详情
	 		let id = localStorage.getItem('dataid');
	 		let userID = vm.$store.state.UserInfo.useID;
	 		let courseId = to.params.id;
	 		console.log(courseId !== undefined);
	 		// 判断是带参数进入还是不带参数
	 		if (courseId !== undefined) {
	 			vm.courseId = courseId;
	 		};
	 		console.log(vm.courseId);
	 		let url = vm.common_request_base_url + 'api/web/v1/app/findcoursebyid?id=' + id + '&courseId=' + vm.courseId + '&userId=' + userID;
	 		alert(url);
	 		console.log(url);
			vm.$http.get(url)
			.then((res) => {
				console.log(res.data);
				var modal = res.data.content.result;
				vm.modal = modal;
				console.log(vm.modal);
				vm.courceList = modal.courseRooms;
				vm.courseIntroduction = modal.courseIntroduction;
				vm.courseCoverImage = vm.$store.state.UserInfo.hostURL + modal.courseCoverImage;
				vm.lecturerHeadImage = modal.lecturerHeadImage;
				vm.lecturerName = modal.lecturerName;
				vm.courseMainIntroduction = modal.courseMainIntroduction;
				vm.lecturerId = modal.lecturerId;
				vm.lecturerHeadImage = vm.$store.state.UserInfo.hostURL + modal.lecturerHeadImage;
			});
		});
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
