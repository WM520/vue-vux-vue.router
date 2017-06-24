
const state = {
	audio_data:{
		content:null,
		duration:0,
		currentTime:0,
		status:false
	},
	callback_func:{
		callback_play:null,
		callback_pause:null,
		callback_stop:null
	}

}


const getters = {
	audioInfo: state => {
        return {
            audio_data : state.audio_data
        }
    },

}


const mutations = {
	INITAUDIOVUE(state,info){
        state.callback_func.callback_play = info.callback_play;
        state.callback_func.callback_pause = info.callback_pause;
        state.callback_func.callback_stop = info.callback_stop;
    },
    AUDIOINFO(state,info){
        state.audio_data.content = info.content;
        alert(state.audio_data);
        alert(state.audio_data.content);
    },
    AUDIOPLAY(state){
    	state.callback_func.callback_play();
    }

}

const actions = {
	initAudioVue({commit},value){
		commit("INITAUDIOVUE",value);
	},
	setAudioInfo({commit},value){
        commit("AUDIOINFO",value);
    },
    audioPlay({commit}){
    	alert("audio_play");
    	commit("AUDIOPLAY");
    },
    audioPause({commit}){

    },
    audioStop({commit}){

    }


}

export default {
    state,
    getters,
    mutations,
    actions
}