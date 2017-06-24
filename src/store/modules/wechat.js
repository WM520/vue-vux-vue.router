import Vue from 'vue'
import wx from 'weixin-js-sdk'

const state = {
    wx_debug: true,
    wx_access_token:'',
    isRecordingVoice:false,
    recordVoiceTime:0,
    recordTimer:null
}

const getters = {
    wechatInfo: state => {
        return {
            //wx_appid: state.wx_appid,
            //wx_access_token: state.wx_access_token,
            isRecordingVoice:state.isRecordingVoice,
            recordVoiceTime: state.recordVoiceTime
        }
    },
}

const mutations = {
    INITWX(state, params) {
        let config = {};
        config.debug = state.wx_debug;
        config.appId = params.appId;
        config.timestamp = params.timestamp;
        config.nonceStr = params.nonceStr;
        config.signature = params.signature;
        config.jsApiList = params.jsApiList;
        wx.config(config);
        //wx.ready(function(){
        //    console.log("wx config ok");
        //});
        //wx.error(function(res){
        //    console.log("wx error ok");
        //});
    },
    GETACCESSTOKEN(state, payload) {
        console.log(payload.res);
    },
    SELECTIMAGE(state, payload) {
        let source_type = [];
        if (payload.type == 0) {
            source_type = ['album'];
        } else {
            source_type = ['camera'];
        }
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: source_type,
            success: function (res) {
                //alert(JSON.stringify(res));
                payload.success_callback(res, payload.type);
            },
            fail: function (err) {
                payload.error_callback(err, payload.type);
            }
        })
    },
    UPLOADIMAGE(state, payload) {
        //alert(JSON.stringify(payload.res));
        //alert(JSON.stringify(payload.res.localIds));
        wx.uploadImage({
            localId: payload.res.localIds[0],
            isShowProgressTips: 0,//默认是1，显示进度提示信息
            success: function(res){
                payload.success_callback(res);
                //alert(JSON.stringify(res));
            },
            fail: function(err){
                payload.error_callback(err);
                //alert(JSON.stringify(err));
            }
        });
    },
    STARTRECORD(state,payload){
        state.isRecordingVoice = true;
        state.recordVoiceTime = 0;
        wx.startRecord();
        wx.onVoiceRecordEnd({
            success: function(res){
                clearInterval(state.recordTimer);
                state.isRecordingVoice = false;
                payload.success_callback(res);
            },
            fail: function(err) {
                clearInterval(state.recordTimer);
                state.isRecordingVoice = false;
                payload.error_callback(err);
            }
        });
        state.recordTimer = setInterval(function(){
            state.recordVoiceTime++;
        },1000);
    },
    STOPRECORD(state,payload){
        wx.stopRecord({
            success: function(res){
                clearInterval(state.recordTimer);
                state.isRecordingVoice = false;
                if(payload.status){
                    payload.success_callback(res);
                }
            },
            fail: function(err) {
                clearInterval(state.recordTimer);
                state.isRecordingVoice = false;
                payload.error_callback(err);
            }
        })
    },
    UPLOADRECORD(state,payload){
        wx.uploadVoice({
            localId: payload.res.localId,
            isShowProgressTips: 0,//默认是1，显示进度提示信息
            success: function(res){
                alert(JSON.stringify(res));
                payload.success_callback(res);
                //alert(JSON.stringify(res));
            },
            fail: function(err){
                payload.error_callback(err);
                //alert(JSON.stringify(err));
            }
        });
    },
    PLAYVOICE(state,payload){
        wx.playVoice({
            localId: payload.res.localId // 需要播放的音频的本地ID，由stopRecord接口获得
        });
    },
    WECHATPAY(state,payload){
        wx.chooseWXPay({
            timestamp:payload.timestamp,
            nonceStr:payload.nonceStr,
            package:payload.package,
            signType:payload.signType,
            paySign:payload.paySign,
            success: function (res) {
                // 支付成功后的回调函数
                payload.success_callback(res);
            }
        });
    }

}

const actions = {
    initWX({commit}, value) {
        commit("INITWX", value);
    },
    getWeChatSignature({commit}, url) {
        //let url = 'http://wx.mozziewang.xyz/liveroom/roomname/dd/rid/1/username/ddddd/uid/1/usertype/1';
        let jsonp_url = 'http://wx.mozziewang.xyz/api/web/wx/getsignature?url=' + url;
        Vue.http.get(jsonp_url).then(function (response) {
            var init_config_val = {};
            init_config_val.appId = response.data.appId;
            init_config_val.timestamp = response.data.timestamp;
            init_config_val.nonceStr = response.data.nonceStr;
            init_config_val.signature = response.data.signature;
            init_config_val.jsApiList = ['chooseImage', 'uploadImage', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice','chooseWXPay','uploadVoice'];
            commit("INITWX", init_config_val);
        })
    },
    selectImage({commit}, value) {
        commit("SELECTIMAGE", value);
    },
    uploadImage({commit},value){
        commit("UPLOADIMAGE", value);
    },
    startRecordVoice({commit},value) {
        commit("STARTRECORD", value);
    },
    stopRecordVoice({commit},value) {
        commit("STOPRECORD", value);
    },
    uploadRecordVoice({commit},value){
        commit("UPLOADRECORD", value);
    },
    playRecordVoice({commit},value){
        commit("PLAYVOICE", value);
    },
    wechatPay({commit},value){
        commit("WECHATPAY", value);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
