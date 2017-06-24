<template>
<div>
   <div class="room-main-content" :style="{'height':room_main_content_height+'px'}">
        <div class="item-box" v-for="( msg_item, index ) in roomMsgList">
            <div class="item-time">{{msg_item.data.msg_time | formatDate}}</div>
            <div class="item-content clearfix">
                <div class="left">
                    <img src="../../assets/images/1.png">
                </div>
                <div class="content" :style="{'width':item_content_width+'px'}">
                    <div class="userinfo">
                        <span class="username">{{msg_item.user.user_name}}</span>
                        <span class="usertype" v-if="parseInt(msg_item.user.user_type) == 1">主持人</span>
                        <span class="usertype" v-else-if="parseInt(msg_item.user.user_type) == 2">讲师</span>
                        <span class="usertype" v-else-if="parseInt(msg_item.user.user_type) == 3">嘉宾</span>
                    </div>
                    <div class="msg-content">
                        <!-- text -->
                        <div class="msg text"   v-if="parseInt(msg_item.data.type) == 0">
                            <div class="msg-horn">
                                <img src="../../assets/images/msg-horn.png">
                            </div>
                            {{ msg_item.data.content }}
                        </div>
                        <!-- text -->

                        <!-- image -->
                        <div class="msg image" :style="{'max-width':item_image_max_width+'px'}" v-else-if="parseInt(msg_item.data.type) == 1">
                            <!--<div class="msg-horn">
                                <img src="../../assets/images/msg-horn.png">
                            </div>-->
                            <img :src="'data:image/jpeg;base64,'+msg_item.data.content">
                        </div>
                        <!-- image -->

                        <!-- audio -->
                        <div @click="audioPlay(index)" class="msg audio" v-else-if="parseInt(msg_item.data.type) == 2">
                            <audio :src="'data:audio/x-mpeg;base64,'+msg_item.data.content"></audio>
                            <div class="audio-play-btn">
                                <div class="audio-play-pause-btn" ></div>
                                <div class="audio-play-playing-btn" style="display:none;"></div>
                            </div>
                            <div class="mt-progress audio-play-progress">
                                <div class="mt-progress-content">
                                    <div class="mt-progress-runway play-progress-runway"></div>
                                    <div class="mt-progress-progress play-progress-progress" style="width:20%;"></div>
                                </div>
                            </div>
                            <div class="audio-play-time">
                                <span>11"</span>
                            </div>
                        </div>
                        <!-- audio -->

                        <!-- question -->
                        <div class="msg question" v-else-if="parseInt(msg_item.data.type) == 3">
                            <div class="msg-horn">
                                <img src="../../assets/images/msg-horn.png">
                            </div>
                            <div class="question-question">
                                <span class="username">用户名:</span><span class="question-content">问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题问题</span>
                            </div>
                            <div class="question-answer">
                                <div class="answer-text">
                                    <span style="font-size:14px;color:#666;">回复:</span><span class="answer-text-content">答案答案答案答案答案答案答案答案答案答案答案答案</span>
                                </div>
                                <div class="answer-audio">
                                    <div class="audio-play-btn">
                                        <div class="audio-play-pause-btn"></div>
                                        <div class="audio-play-playing-btn" style="display:none;"></div>
                                    </div>
                                    <div class="mt-progress audio-play-progress">
                                        <div class="mt-progress-content">
                                            <div class="mt-progress-runway play-progress-runway"></div>
                                            <div class="mt-progress-progress play-progress-progress" style="width:20%;"></div>
                                        </div>
                                    </div>
                                    <div class="audio-play-time">
                                        <span>11"</span>
                                    </div>
                                </div>

                                <div class="answer-image" :style="{'max-width':item_image_max_width+'px'}">
                                    <img src="../../assets/images/test.jpg">
                                </div>
                            </div>
                        </div>
                        <!-- question -->

                    </div>
                </div>
            </div>
        </div>
    </div>
    <room-audio></room-audio>
    <room-footer v-show="isShowRoomFooter"></room-footer>
</div>
</template>

<script>
import { mapState } from 'vuex'
import roomAudio from './room_audio.vue'
import roomFooter from './footer.vue'
import {formatDate} from '../../utils/datetime.js'
export default {
    data () {
        return {
            item_content_width: document.body.clientWidth - 60,
            item_image_max_width: document.body.clientWidth / 2
        }
    },
    components: {
        roomAudio,roomFooter
    },
    computed: {
        ...mapState({
            isShowRoomFooter: state => state.room.isShowRoomFooter,
            room_main_content_height: state => state.room.roomMainContentHeight,
            roomMsgList:state => state.chat.current_room_msg_list,
        })
    },
    filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    methods: {
        audioPlay(i_index){
            alert("i_index:"+i_index);
            //let audio = document.querySelector("#"+message_id);
            let message_data = this.roomMsgList[i_index];
            let audio_data = {};
            audio_data.content = message_data.data.content;
            alert(audio_data.content)
            this.$store.dispatch("setAudioInfo", audio_data);
            this.$store.dispatch("audioPlay");

        }
    }
}
</script>

<style lang="less" scroped>
.room-main-content {
    width: 100%;
    padding:0 5px;
    background-color: #fafafa;
    overflow-y: auto;
    padding-bottom: 5px;
    .item-box {
        width:100%;
        .item-time {
            height:16px;
            font-size:12px;
            color: #999999;
            line-height: 16px;
            margin:5px 0;
            text-align:center;
        }
        .item-content {
            width:100%;
            .left {
                float:left;
                width:40px;
                margin-right:10px;
                img {
                    width:40px;
                    height:40px;
                    border-radius: 40px;
                }
            }
            .content {
                float:left;
                .userinfo{
                    margin-bottom:5px;
                    .username{
                        font-size:14px;
                        color:#666;
                        margin-right:5px;
                    }
                    .usertype{
                        font-size: 12px;
                        color:#999;
                    }
                }
                .msg-content {
                    width:100%;
                    .msg {
                        float:left;
                        position:relative;
                        .msg-horn {
                            width: 0px;
                            height: 0px;
                            position: absolute;
                            left: -7px;
                            top: 12px;
                            img {
                                width: 7px;
                                height: 11px;
                            }
                        }
                        &.text{
                            padding: 12px 8px 12px 8px;
                            border-radius: 6px;
                            line-height: 16px;
                            font-size: 14px;
                            border: 1px solid #e5e5e5;
                            background:#fff;
                            color:#333;
                        }
                        &.image{
                            //border: 1px solid #e5e5e5;
                            border-radius: 6px;
                            img{
                               border-radius: 6px;
                            }
                        }
                        &.audio {
                            background-color: #ffaa35;
                            border-radius: 6px;
                            height: 40px;
                            padding-left:10px;
                            padding-right:10px;
                            padding-top:5px;
                            .audio-play-btn{
                                width:30px;
                                height: 30px;
                                border-radius: 30px;
                                border: 1px solid #fff;
                                padding-top:6px;
                                padding-left:9px;
                                float:left;
                                .audio-play-pause-btn{
                                    width: 0;
                                    height: 0;
                                    border-top: 8px solid transparent;
                                    border-left: 14px solid #fff;
                                    border-bottom: 8px solid transparent;
                                }
                                .audio-play-playing-btn{
                                    width:12px;
                                    height:16px;
                                    border-left: 3px solid #fff;
                                    border-right: 3px solid #fff;
                                }
                            }
                            .audio-play-progress{
                                float:left;
                                margin-left: 10px;
                                width:160px;
                                .play-progress-runway{
                                    background-color: #7b4c0b;
                                    height: 2px;
                                }
                                .play-progress-progress{
                                    height: 2px;
                                    background-color: #fff;
                                }
                            }
                            .audio-play-time{
                                float:right;
                                height: 26px;
                                line-height: 30px;
                                margin-left:10px;
                                span{
                                    font-family: "Microsoft YaHei";
                                    font-size:16px;
                                    color:#fff;
                                }
                            }
                        }

                        &.question {
                            padding: 12px 8px 12px 8px;
                            border-radius: 6px;
                            line-height: 16px;
                            font-size: 14px;
                            border: 1px solid #e5e5e5;
                            background:#fff;
                            color:#333;

                            .question-question{
                                padding-bottom:5px;
                                border-bottom:1px solid #e5e5e5;
                                .username{
                                    font-size:14px;
                                    color:#666;
                                }
                                .question-content{
                                    font-size:14px;
                                    color:#333;
                                }
                            }
                            .question-answer {
                                .answer-text {
                                    margin-top:5px;
                                    .answer-text-content {
                                        font-size:14px;
                                        color:#333;
                                    }
                                }
                                .answer-audio {
                                    margin-top:5px;
                                    background-color: #ffaa35;
                                    border-radius: 6px;
                                    height: 40px;
                                    padding-left:10px;
                                    padding-right:10px;
                                    padding-top:5px;
                                    .audio-play-btn{
                                        width:30px;
                                        height: 30px;
                                        border-radius: 30px;
                                        border: 1px solid #fff;
                                        padding-top:6px;
                                        padding-left:9px;
                                        float:left;
                                        .audio-play-pause-btn{
                                            width: 0;
                                            height: 0;
                                            border-top: 8px solid transparent;
                                            border-left: 14px solid #fff;
                                            border-bottom: 8px solid transparent;
                                        }
                                        .audio-play-playing-btn{
                                            width:12px;
                                            height:16px;
                                            border-left: 3px solid #fff;
                                            border-right: 3px solid #fff;
                                        }
                                    }
                                    .audio-play-progress{
                                        float:left;
                                        margin-left: 10px;
                                        width:160px;
                                        .play-progress-runway{
                                            background-color: #7b4c0b;
                                            height: 2px;
                                        }
                                        .play-progress-progress{
                                            height: 2px;
                                            background-color: #fff;
                                        }
                                    }
                                    .audio-play-time{
                                        float:right;
                                        height: 26px;
                                        line-height: 30px;
                                        margin-left:10px;
                                        span{
                                            font-family: "Microsoft YaHei";
                                            font-size:16px;
                                            color:#fff;
                                        }
                                    }
                                }

                                .answer-image{
                                    margin-top:5px;
                                    border-radius: 6px;
                                    img{
                                        border-radius: 6px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>


