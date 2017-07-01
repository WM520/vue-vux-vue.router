<template>
	<div class="liveaudio-wrap">
		<!-- 顶部部分 -->
		<div class="liveaudio-top-box">
<!-- 			<div class="liveaudio-play">
				<div class="liveaudio-triangle"></div>
			</div> -->
			<img :src="coverImg" class="liveaudio-top-img">
		</div>

		<!-- 进度条部分 -->
		<div class="liveaudio-strip-box">
			<!-- <a-player autoplay :music="{
			  title: 'Preparation',
			  author: 'Hans Zimmer/Richard Harvey',
			  url: 'http://devtest.qiniudn.com/Preparation.mp3',
			  pic: 'http://devtest.qiniudn.com/Preparation.jpg'
			}" @play="play" @end="end" class="liveaudio-audio"></a-player> -->
			<audio :src="musicUrl" controls="controls"></audio>
			<span class="liveaudio-downCover"></span>
		</div>

		
		<div class="liveaudio-comment-box">
			<img src="../../assets/comment.png" class="liveaudio-comment-img">
			<span class="liveaudio-comment-text">评论</span>
		</div>
		
		<!-- 用户信息部分 -->
		<ul :style="{'height':commentlist_height+'px'}" ref="commentlistScroll">
			<li v-for="item in commentList">
				<div class="liveaudio-user-box">
					<img :src="item.userHeadImage_url" class="liveaudio-user-img">
					<span class="liveaudio-userName">{{item.userNickname}}</span>
					<span class="liveaudio-user-time">{{ item.messageSendTime * 1000 | formatDate }}</span>
					<div class="liveaudio-text">{{item.messageContent}}</div>
				</div>
			</li>
		</ul>


		<!-- 底部输入部分 -->
		<div class="liveaudio-sendOut-box">
			<input type="text" class="liveaudio-input" v-model="messageContent">
			<!-- 发送按钮部分 -->
			<div class="liveaudio-btn" @click="sender">发送</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	// import { Range } from 'vux';
	import VueAplayer from 'vue-aplayer';
	import { mapState } from 'vuex';
	import {formatDate} from '../../utils/datetime.js'
	export default{
		 computed: {
		    ...mapState({
		        common_request_base_url: state => state.common.common_request_base_url,
		        common_request_appendv1_url: state => state.common.common_request_appendv1_url,
		        userinfo_data : state => state.UserInfo.userinfo_data
		    })
    	},
		components: {
			// Range
			'a-player': VueAplayer
		},
		data() {
			return {
				coverImg: '',
				musicUrl: '',
				liveAudioList: [{}, {}, {}, {}, {}],
				courseDetail: {
					type: Object
				},
				loading: true,
				commentTempList: [],
				commentList: [],
				messageContent: '',
				reloading: false,
				commentlist_height:document.body.clientHeight-320
			};
		},
		methods: {
			onChange() {
				alert('111');
			},
			// 发送评论
			sender() {
				var params = {
					id: localStorage.getItem('dataid'),
					messageRoomId: this.$route.params.room.roomId,
					messageUserId: this.$store.state.UserInfo.userinfo_data.userId,
					messageType: '0',
					messageSendType: '3',
					messageContent: this.messageContent,
					openid: localStorage.getItem('openid'),
				};
				var qs = require('qs');
				console.log(params);
				let url = this.common_request_base_url + this.common_request_appendv1_url + 'saveroommessage';
				this.$http.post(url, qs.stringify(params),{
				 headers: {
    				'Content-Type': 'application/x-www-form-urlencoded',
  				}
				}).then((res) => {
					let tag = res.data.content.is_success;
					if (tag === true) {
						this.reloading = true;
						let id = localStorage.getItem('dataid');
						let openid = localStorage.getItem('openid');
						let url = this.common_request_base_url + this.common_request_appendv1_url +'findmessagesbyroomidandtype?id=' + id + '&openid=' + openid + '&roomId=' + this.$route.params.room.roomId + '&messageType=' + '3';
						this.$http.get(url)
						.then((res) => {	
							this.commentTempList = res.data.content.result;
							this.reloading = false;
						})
					};
				});
				console.log('发送语音');
			},
			loadMore() {
				let vue = this;
				this.loading = true;
				setTimeout(() => {
					vue.getList();
				}, 500);
			},
			play() {
				console.log('开始播放音乐');
			},
			end() {
				console.log('播放结束');
			},
			getCoverImage() {
				let id = localStorage.getItem('dataid');
		        let openid = localStorage.getItem('openid');
		        let url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia' + '?media=' + this.$route.params.room.roomImgUrl + '&openid=' + openid;
		        this.$http.get(url)
		        .then((res) => {
		        	this.coverImg = res.data;
		        })
		        .catch((error) => {
		        	this.$toast('获取背景图失败');
		        })
			},
			getMusicUrl() {
				let id = localStorage.getItem('dataid');
		        let openid = localStorage.getItem('openid');
		        let url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia' + '?media=' + this.$route.params.room.roomFileUrl + '&openid=' + openid;
		        this.$http.get(url)
		        .then((res) => {
		        	this.musicUrl = res.data;
		        })
		        .catch((error) => {
		        	this.$toast('获取音频失败');
		        })
			},
			getCommentList() {
				let course_image_t = [];
				this.commentTempList.forEach((b_item, b_index) => {
					let openid = localStorage.getItem('openid');
					let id = localStorage.getItem('dataid');
					let x_url = this.common_request_base_url + this.common_request_appendv1_url + 'getossmedia?media=' + b_item.userHeadImage + '&openid=' + openid + '&id=' + id;
					this.$http.get(x_url)
						.then((h_res) => {
							b_item.userHeadImage_url = h_res.data;
							course_image_t[b_index] = b_item;
							if(b_index >= this.commentTempList.length-1){
								this.commentList = course_image_t;
								console.log("this.commentList");
								console.log(this.commentList);
							}
						})
						.catch((error) => {
	    					console.log(error);
	    					this.$toast("获取评论列表图片异常");
	  					});
				});
			}
		},
		beforeRouteEnter (to, from, next) {
			next((vm) => {
				vm.loading = true;
				vm.$indicator.open('加载中...');
				let id = localStorage.getItem('dataid');
				let openid = localStorage.getItem('openid');
				let url = vm.common_request_base_url + vm.common_request_appendv1_url +'findmessagesbyroomidandtype?id=' + id + '&openid=' + openid + '&roomId=' + vm.$route.params.room.roomId + '&messageType=' + '3';
				console.log(url);
				vm.$http.get(url)
				.then((res) => {
					console.log(res);
					if (res.data.content.result.length !== 0) {
						vm.commentTempList = res.data.content.result;
					};
					vm.loading = false;

				})
				.catch((error) => {

				});
			})
		},
		watch: {
			loading() {
				if (this.loading === false) {
					this.getCoverImage();
					this.getMusicUrl();
					this.getCommentList();
					this.$indicator.close();
				};
			},
			reloading() {
				if (this.reloading === false && this.commentTempList.length >= 1) {
					this.getCommentList();
				};
			},
			commentList() {
				this.$nextTick(()=>{
	                this.$refs.commentlistScroll.scrollTop = this.$refs.commentlistScroll.scrollHeight;
	            });

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
	body{
		background-color:#fafafa;
	}
	.liveaudio-wrap{
		width: 100vw;
		height: 100vh;
	}
	.liveaudio-wrap ul {
		width:100%;
		overflow-y: auto;
	}

	/*顶部部分*/
	.liveaudio-top-box{
		width:100%;
		max-width:750px;
		height:180px;
		position:relative;
	}
	.liveaudio-top-img{
		width:100%;
		height:100%;
	}

	.liveaudio-play{
		width:39px;
		height:39px;
		background-color:black;
		border-radius:50%;
		border:2px solid white;
		position:absolute;
		bottom:10px;
		left:10px;
		display:flex;
		justify-content:center;
		align-items:center;
		background:rgba(22,33,44,0.5);
	}
	.liveaudio-triangle{
		width: 0;
	    height: 0;
	    border-top: 8px solid transparent;
	    border-left: 10px solid white;
	    border-bottom: 8px solid transparent;
	    border-radius:10%;
	}
	

	/*进度条部分*/
	.liveaudio-strip-box{
		width:100%;
		height:32px;
		position:relative;
		/*border-bottom:1px solid #e5e5e5;*/
		background-color:white;
	}
	.liveaudio-strip{
		position:absolute;
		top:50%;
		right:10px;
	}

	/*Range组件部分*/
	span.range-min{
		color:#666;
		font-size:12px;
		/*position:absolute;*/
		/*top:15px;*/
	}	
	span.range-handle{
		border:3px solid #04a16a;
		width:11px;
		height:11px;
		position:absolute;
		top:-8px !important;
	}
	span.range-bar{
		background-color:#d5d5d5;
		height:3px !important;
		width:94.7%;
	}

	
	/*评论区*/
	.liveaudio-comment-box{
		width:100%;
		height:40px;
		border-top:1px solid #e5e5e5;
		border-bottom:1px solid #e5e5e5;
		margin-top:10px;
		background-color:white;
		display:flex;
		align-items:center;
	}

	.liveaudio-comment-img{
		width:16px;
		height:16px;
		margin-left:10px;
	}

	.liveaudio-comment-text{
		font-size:15px;
		color:#333;
		margin-left:5px;
	}


	/*用户信息部分*/
	.liveaudio-user-box{
		width:100%;
		height:83px;
		background-color:white;
		border-bottom:1px solid #e5e5e5;
		position:relative;
	}

	.liveaudio-user-img{
		border-radius:50%;
		width:40px;
		height:40px;
		margin-top:15px;
		margin-left:15px;
	}

	.liveaudio-userName{
		display:inline-block;
		font-size:0.75rem;
		color:#666;
		position:absolute;
		top:15px;
		left:61px;
	}

	.liveaudio-user-time{
		color:#999;
		font-size:0.625rem;
		position:absolute;
		top:15px;
		left:103px;
	}

	.liveaudio-text{
		color:#333;
		font-size:0.875rem;
		width:80%;
		line-height:18px;
		position:absolute;
		bottom:15px;
		left:60px;
	}


	/*空白部分*/
	.liveaudio-quarantine{
		width:100%;
		height:300px;
	}

	/*底部发送部分*/
	.liveaudio-sendOut-box{
		width:100%;
		height:60px;
		background-color:white;
		position:fixed;
		bottom:0;
		border-top:1px solid #e5e5e5;
		display:flex;
		align-items:center;
	}

	.liveaudio-input{
		background-color:#f5f5f5;
		width:72%;
		height:40px;
		border-radius:4px;
		border:1px solid #e5e5e5;
		margin-left:10px;
	}

	.liveaudio-btn{
		width:20%;
		height:40px;
		background-color:#04a16a;
		border-radius:4px;
		margin-left:10px;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:0.94rem;
		color:#fff;
	}


	/*音频部分*/
	/*.liveaudio-song{
		width:100%;
		position:absolute;
		left:10%;
	}*/
	.liveaudio-audio{
		margin:0px !important;
	}



	audio{
		width:100% !important;
		/*margin:0 !important;*/
		border-radius:0 !important;
		box-shadow:none !important;
	}

	/*audio下载遮盖部分*/
	.liveaudio-downCover{
		width:40px;
		height:32px;
		background-color:#FAFAFA;
		position:absolute;
		top:0;
		right:0;
	}
</style>
