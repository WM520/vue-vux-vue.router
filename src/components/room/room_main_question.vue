<template>
    <mt-popup class="room-main-question" v-model="showMainQuestion" position="bottom">

        <div class="question-list"  :style="{'max-height':question_list_max_height+'px','bottom':question_list_bottom+'px'}">
            <div class="question-list-header">
                问题(20)
            </div>
            <div class="item-list">
                <div class="item-question-box clearfix" v-for="question_item in myQuestionList">
                    <div class="left">
                        <img src="../../assets/images/1.png">
                    </div>
                    <div class="content" :style="{'width':item_content_width+'px'}">
                        <div class="userinfo">
                            <div class="user">
                                <span class="username">{{question_item.user.user_name}}</span>
                                <span class="time">{{question_item.data.msg_time | formatDate}}</span>
                            </div>
                            <div class="reply-btn">
                                回答
                            </div>
                        </div>
                        <div class="question">
                            {{question_item.data.content}}
                        </div>
                        <div class="reply-box" v-show="!isUser">
                            <div class="reply" v-show="!isUser">
                                <div class="reply-header">
                                    <div class="time">
                                        <span class="reply-tip-text">回复:</span>
                                        <span class="reply-time">2017-05-13 12:12</span>
                                    </div>
                                    <div class="send-btn">发送</div>
                                </div>
                                <div class="reply-content clearfix">
                                    <div class="replay-msg text">
                                        dasfdsafdsfasdfafadsf
                                    </div>
                                    <div class="replay-msg image" :style="{'max-width':item_image_max_width+'px'}">
                                        <img src="../../assets/images/test.jpg">
                                    </div>
                                    <div class="replay-msg audio">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="other-questions" v-show="questionList.length">
                    其他问题
                </div>

                <div class="item-question-box clearfix" v-for="question_item in questionList">
                    <div class="left">
                        <img src="../../assets/images/1.png">
                    </div>
                    <div class="content" :style="{'width':item_content_width+'px'}">
                        <div class="userinfo">
                            <div class="user">
                                <span class="username">{{question_item.user.user_name}}</span>
                                <span class="time">{{question_item.data.msg_time | formatDate}}</span>
                            </div>
                            <div class="reply-btn">
                                回答
                            </div>
                        </div>
                        <div class="question">
                            {{question_item.data.content}}
                        </div>
                        <div class="reply-box" v-show="!isUser">
                            <div class="reply">
                                <div class="reply-header">
                                    <div class="time">
                                        <span class="reply-tip-text">回复:</span>
                                        <span class="reply-time">2017-05-13 12:12</span>
                                    </div>
                                    <div class="send-btn">发送</div>
                                </div>
                                <div class="reply-content clearfix">
                                    <div class="replay-msg text">
                                        dasfdsafdsfasdfafadsf
                                    </div>
                                    <div class="replay-msg image" :style="{'max-width':item_image_max_width+'px'}">
                                        <img src="../../assets/images/test.jpg">
                                    </div>
                                    <div class="replay-msg audio">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <question-footer></question-footer>
    </mt-popup>
</template>

<script>
import { mapState } from 'vuex'
import questionFooter from './footer.vue'
import {formatDate} from '../../utils/datetime.js'
export default {
    data () {
        return {
            showMainQuestion: false,
            item_content_width: document.body.clientWidth - 70,
            item_image_max_width: document.body.clientWidth / 2,
        }
    },
    computed: {
        ...mapState({
            showMainQuestionStore: state => state.room.isShowMainQuestion,
            question_list_bottom : state => state.room.roomQuestionListBottom,
            question_list_max_height : state => state.room.roomQuestionListMaxHeight,
            myQuestionList : state => state.chat.room_my_question_list,
            questionList : state => state.chat.room_question_list,
            isUser : state => state.footer.isUserFooter
        })
    },
    components: {
        questionFooter
    },
    filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    watch:{
        showMainQuestionStore(){
            if(this.showMainQuestionStore){
                this.showMainQuestion = true;
                this.$store.dispatch("setIsQuestionFooter", true)
            }
        },
        showMainQuestion(){
            if(this.showMainQuestion){
                this.$store.dispatch("showMainQuestion", false)

            }else{
                this.$store.dispatch("setIsQuestionFooter", false)
            }
        }
    }
}
</script>

<style lang="less" scroped>

.room-main-question{
    width:100%;
    .question-list {
        position:fixed;
        width:100%;
        left:0px;
        background:#fff;
        min-height: 200px;
        overflow-y: auto;
        .question-list-header {
            width:100%;
            height:30px;
            font-size:14px;
            line-height:30px;
            padding-left:5px;
            border-bottom:1px solid #e5e5e5;
        }
        .item-list{
            padding:5px;
            width:100%;
            .item-question-box{
                width:100%;
                padding: 5px;
                position: relative;
                border-bottom: 1px solid #e5e5e5;
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
                        height:20px;
                        .user{
                            float:left;
                            height:20px;
                            line-height: 20px;
                            .username{
                                font-size:14px;
                                color:#666;
                                margin-right:5px;
                            }
                            .time{
                                font-size: 12px;
                                color:#999;
                            }
                        }
                        .reply-btn{
                            float:right;
                            height:20px;
                            width:50px;
                            text-align: center;
                            font-size: 12px;
                            color:#999;
                            border:1px solid #e5e5e5;
                            border-radius: 3px;
                        }

                    }
                    .question{
                        font-size:14px;
                        color:#666;
                        padding-bottom: 5px;

                    }
                    .reply-box {
                        margin-top: 5px;
                        padding:5px 0;
                        border-top:1px solid #e5e5e5;
                        .reply{

                            background: #eee;
                            padding: 5px;
                            .reply-header{
                                width:100%;
                                border-left:2px solid #04a16a;
                                height:20px;
                                .time{
                                    float:left;
                                    height:20px;
                                    line-height: 20px;
                                    .reply-tip-text{
                                        font-size:14px;
                                        color:#666;
                                        margin-right:5px;
                                    }
                                    .reply-time{
                                        font-size: 12px;
                                        color:#999;
                                    }
                                }
                                .send-btn {
                                    height:20px;
                                    float:right;
                                    border:1px solid #e5e5e5;
                                    border-radius: 3px;
                                    width:50px;
                                    text-align: center;
                                    font-size: 12px;
                                    color:#999;
                                }
                            }
                            .reply-content{
                                width:100%;
                                margin-top:5px;
                                .replay-msg{
                                    margin-bottom:5px;
                                    &.text {
                                        font-size:14px;
                                        color:#666;
                                    }
                                    &.audio{
                                        background-color: #ffaa35;
                                        border-radius: 8px;
                                        height: 48px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 6px;
                                        float: left;
                                        .audio-play-btn {
                                            width: 36px;
                                            height: 36px;
                                            border-radius: 36px;
                                            border: 1px solid #fff;
                                            padding-top: 9px;
                                            padding-left: 12px;
                                            float: left;
                                            .audio-play-pause-btn {
                                                width: 0;
                                                height: 0;
                                                border-top: 8px solid transparent;
                                                border-left: 14px solid #fff;
                                                border-bottom: 8px solid transparent;
                                            }
                                            .audio-play-playing-btn {
                                                width: 12px;
                                                height: 16px;
                                                border-left: 3px solid #fff;
                                                border-right: 3px solid #fff;
                                            }
                                        }
                                        .audio-play-progress {
                                            float: left;
                                            margin-left: 10px;
                                            margin-top: 3px;
                                            width: 100px;
                                            .play-progress-runway {
                                                background-color: #7b4c0b;
                                                height: 2px;
                                            }
                                            .play-progress-progress {
                                                height: 2px;
                                                background-color: #fff;
                                            }
                                        }
                                        .audio-play-time {
                                            float: left;
                                            height: 26px;
                                            line-height: 36px;
                                            margin-left: 10px;
                                            span {
                                                font-family: "Microsoft YaHei";
                                                font-size: 16px;
                                                color: #fff;
                                            }
                                        }
                                    }
                                    &.image{
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

            .other-questions{
                height:36px;
                line-height: 36px;
                text-align: center;
                font-size: 14px;
                color:#999;
            }
        }
    }

}
</style>


