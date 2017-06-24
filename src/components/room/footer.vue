<template>
<div>
    <div id="room-footer" class="footer" :style="{'height':footer_height+'px'}">
        <div id="lecturer_footer" class="footer-content" v-show="!isUser">
            <ul v-show="!isRecordingVoice">
                <li @click="onShowAudioBtn">
                    <img src='../../assets/images/audio.png'>
                    <span>语音</span>
                </li>
                <li @click="onShowWordBtn">
                    <img src='../../assets/images/word.png'>
                    <span>文字</span>
                </li>
                <li @click="onShowImageSheetBtn">
                    <img src='../../assets/images/pic.png'>
                    <span>图片</span>
                </li>
            </ul>
            <div class="record-voice-60s-tip" v-show="isRecordingVoice">
                录满60秒将自动发送并启动下一条录音
            </div>
        </div>

        <div id="user_footer" class="footer-content" v-show="isUser">
            <div class="user-opt input-content" :style="{'width':user_input_width+'px'}">
                <textarea class="input" placeholder="输入问题" v-model="question_msg_data"></textarea>
            </div>
            <div class="user-opt send-btn" @click="onUserSendMessageBtn">发送</div>
        </div>
        <div id="lecturer-opt-content" class="footer-opt" v-show="showLecturerOpt" :style="{'height':lecturer_opt_content_height+'px'}">
            <div class="audio" v-show="sendAudio">
                <div class="tip" v-show="!isRecordingVoice">点击一下录音</div>
                <div class="record-time-box" v-show="isRecordingVoice">
                    <div class="record-time-tip">{{recordVoiceTime}}s/60s</div>
                    <div class="cacel-record-btn" @click="onCancelRecordVoiceBtn">取消</div>
                </div>
                <div class="audio-btn-content" @click="onRecordVoiceBtn">
                    <div class="audio-btn-border">
                        <div class="audio-btn" v-show="!isRecordingVoice">

                        </div>
                        <div class="audio-recording-btn" v-show="isRecordingVoice">
                            <div class="audio-recording-btn-i"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="word" v-show="!sendAudio">
                <div class="user-opt input-content" :style="{'width':user_input_width+'px'}">
                    <textarea class="input" placeholder="请输入内容" v-model="msg_text_data"></textarea>
                </div>
                <div class="user-opt send-btn" @click="onSendMessageBtn">发送</div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast } from 'mint-ui'
export default {
    data () {
        return {
            sendAudio: true,
            showLecturerOpt: false,
            footer_height: 50,
            lecturer_opt_content_height: 50,
            user_input_width: document.body.clientWidth - 85,
            question_msg_data:'',
            msg_text_data:'',
        }
    },
    computed: {
        ...mapState({
            isQuestionFooter: state => state.footer.isQuestionFooter,
            isUser: state => state.footer.isUserFooter,
            wx_access_token : state => state.wechat.wx_access_token,
            isRecordingVoice : state => state.wechat.isRecordingVoice,
            recordVoiceTime : state => state.wechat.recordVoiceTime
        })
    },
    methods: {
        uploadVoiceError:function(err){

        },
        uploadVoiceSuccess:function(res){
            let msg = {};
            msg.type=2;
            //msg.content=this.msg_text_data;
            msg.content = res.serverId;
            this.$store.dispatch("sendMessage", msg);
        },
        recordVoiceError:function(err){

        },
        recordVoiceSuccess:function(res){
            let voice = {};
            voice.res = res;
            voice.success_callback = this.uploadVoiceSuccess;
            voice.error_callback = this.uploadVoiceError;
            this.$store.dispatch("uploadRecordVoice",voice);
        },
        onShowAudioBtn () {
            this.showLecturerOpt = true
            this.sendAudio = true
            this.footer_height = 120
            this.lecturer_opt_content_height = 70
            //console.log('isQuestionFooter:'+this.isQuestionFooter)
            if(!this.isQuestionFooter){
                this.$store.dispatch("setRoomMainContentHeight", document.body.clientHeight - 120);
                this.$store.dispatch("setRoomQuestionBtnBottom", 150);
            }else{
                this.$store.dispatch("setRoomQuestionListBottom", 120)
            }

        },
        onShowWordBtn () {
            this.showLecturerOpt = true
            this.sendAudio = false
            this.footer_height = 100
            this.lecturer_opt_content_height = 50
            //console.log('isQuestionFooter:'+this.isQuestionFooter)
            if(!this.isQuestionFooter){
                this.$store.dispatch("setRoomMainContentHeight", document.body.clientHeight - 100);
                this.$store.dispatch("setRoomQuestionBtnBottom", 130);
            }else{
                this.$store.dispatch("setRoomQuestionListBottom", 100)

            }
        },
        onShowImageSheetBtn () {
            this.showLecturerOpt = false;
            this.sendAudio = true;
            this.footer_height = 50;
            this.$store.dispatch("showImageSheet", true)
            if(!this.isQuestionFooter){
                this.$store.dispatch("setRoomMainContentHeight", document.body.clientHeight - 50)
                this.$store.dispatch("setRoomQuestionBtnBottom", 80);
            }else{
                this.$store.dispatch("setRoomQuestionListBottom", 50)
            }
        },
        onUserSendMessageBtn(){
            //console.log(this.question_msg_data);
            if(this.question_msg_data.trim().length <= 0){
                Toast({
                    message: '问题不能为空',
                    position: 'bottom'
                });
                return;
            }
            let msg = {};
            msg.type=0;
            msg.content=this.question_msg_data;
            this.$store.dispatch("sendMessage", msg);
            this.question_msg_data='';
        },
        onSendMessageBtn(){
            //console.log(this.msg_text_data);
            if(this.msg_text_data.trim().length <= 0){
                Toast({
                    message: '内容不能为空',
                    position: 'bottom'
                });
                return;
            }
            let msg = {};
            msg.type=0;
            // msg.session_id = localStorage.getItem('dataid');
            msg.content=this.msg_text_data;
            this.$store.dispatch("sendMessage", msg);
            this.msg_text_data='';
        },
        onRecordVoiceBtn(){
            let callback_value = {};
            callback_value.success_callback = this.recordVoiceSuccess;
            callback_value.error_callback = this.recordVoiceError;

            if(this.isRecordingVoice){
                callback_value.status = true;
                this.$store.dispatch("stopRecordVoice",callback_value);
            }else{
                this.$store.dispatch("startRecordVoice",callback_value);
            }
        },
        onCancelRecordVoiceBtn(){
            //alert("CancelReocrd");
            let callback_value = {};
            callback_value.success_callback = this.recordVoiceSuccess;
            callback_value.error_callback = this.recordVoiceError;
            callback_value.status = false;
            this.$store.dispatch("stopRecordVoice",callback_value);
        }
    }

}
</script>

<style lang="less" scroped>
#user_footer {
    padding: 5px;
}

.footer {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #e5e5e5;
    .footer-content {
        height: 50px;
        ul {
            height: 50px;
            margin: 0;
            padding: 0;
            li {
                float: left;
                height: 50px;
                line-height: 50px;
                text-align: center;
                width: 40%;
                &:first-child {
                    width: 30%;
                    border-right: 1px solid #e5e5e5;
                }
                &:last-child {
                    width: 30%;
                    border-left: 1px solid #e5e5e5;
                }
                img {
                    vertical-align: middle;
                    margin-right: 5px;
                }
            }
        }
        .record-voice-60s-tip{
            height:50px;
            line-height: 50px;
            background:#04a16a;
            text-align: center;
            font-size: 14px;
            color: #333;
        }
        .user-opt {
            float: left;
            &.input-content {
                height: 40px;
                min-width: 100px;
                .input {
                    height: 40px;
                    border-radius: 4px;
                    width: 100%;
                    background: #f5f5f5;
                    color: #333;
                    padding: 12px;
                    line-height: 16px;
                    font-size: 14px;
                    border: 1px solid #e5e5e5;
                    resize: none;
                    overflow: hidden;
                    &:focus {
                        border: 1px solid #e5e5e5;
                        outline-offset: 0px;
                    }
                }
            }
            &.send-btn {
                height: 40px;
                width: 70px;
                line-height: 40px;
                text-align: center;
                background: #04a16a;
                border-radius: 4px;
                color: #fff;
                margin-left: 5px;
            }
            /*&.question-btn{
                width:40px;
                height:40px;
                border-radius: 4px;
                background: #ffaa35;
                padding:7px 7px;
                img{
                    height:26px;
                    width:26px;
                }
            }*/
        }
    }

    .footer-opt {
        min-height: 50px;
        width: 100%;
        height:70px;
        border-top: 1px solid #e5e5e5;
        .audio {
            height: 100%;
            width: 100%;
            padding: 5px;
            .tip{
                color: #666666;
                font-family: "Microsoft YaHei";
                font-size: 10px;
                height:16px;
                text-align: center;
            }
            .record-time-box{
                height:16px;
                position: relative;
                .record-time-tip{
                    margin: 0 auto;
                    width:90px;
                    height:16px;
                    background: url('../../assets/images/record_tip.png') no-repeat;
                    text-align: center;
                    color: #04a16a;
                    font-family: "Microsoft YaHei";
                    font-size: 10px;
                }
                .cacel-record-btn{
                    position: absolute;
                    height:16px;
                    width:40px;
                    line-height: 16px;
                    border: 1px solid #666;
                    border-radius: 8px;
                    color: #666;
                    font-family: "Microsoft YaHei";
                    font-size: 10px;
                    top:0px;
                    right:20px;
                    text-align: center;
                }
            }
            .audio-btn-content {
                height:44px;
                .audio-btn-border {
                    width:44px;
                    height:44px;
                    border: 1px solid #dedede;
                    border-radius: 44px;
                    margin: 0 auto;
                    padding:4px;
                    .audio-btn {
                        height:34px;
                        width:34px;
                        border-radius: 34px;
                        background: red;
                    }
                    .audio-recording-btn{
                        height:34px;
                        width:34px;
                        border-radius: 34px;
                        background: green;
                        padding-top:8px;
                        padding-left:10px;
                        .audio-recording-btn-i{
                            width:12px;
                            height:16px;
                            border-left: 3px solid #fff;
                            border-right: 3px solid #fff;
                        }
                    }
                }
            }
        }
        .word {
            height: 100%;
            width: 100%;
            padding: 5px;
            .user-opt {
                float: left;
                &.input-content {
                    height: 40px;
                    min-width: 100px;
                    .input {
                        height: 40px;
                        border-radius: 4px;
                        width: 100%;
                        background: #f5f5f5;
                        color: #333;
                        padding: 12px;
                        line-height: 16px;
                        font-size: 14px;
                        border: 1px solid #e5e5e5;
                        resize: none;
                        overflow: hidden;
                        &:focus {
                            border: 1px solid #e5e5e5;
                            outline-offset: 0px;
                        }
                    }
                }
                &.send-btn {
                    height: 40px;
                    width: 70px;
                    line-height: 40px;
                    text-align: center;
                    background: #04a16a;
                    border-radius: 4px;
                    color: #fff;
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>
