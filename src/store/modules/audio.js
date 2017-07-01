
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
	},
    play_status:0,
    play_index:0,
    stop_index:0
}


const getters = {
	audioInfo: state => {
        return {
            audio_data : state.audio_data,
            play_status: state.play_status,
            play_index : state.play_index,
            stop_index : state.stop_index
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
        state.play_status = info.play_status;
        state.play_index = info.play_index;
        state.callback_func.callback_play(0);
        //if(play)
    },
    PLAYSTATUS(state,value){
        state.play_status = value;
    },
    AUDIOPLAY(state){
        state.callback_func.callback_play(1);
    },
    AUDIOPAUSE(state,value){
        state.stop_index = value;
        state.callback_func.callback_pause();
    },
    AUDIOSTOP(state,value){
        state.stop_index = value;
        state.callback_func.callback_stop();
    },
    SETSTOPINDEX(state,value){
        state.stop_index = value;
    }
    /*AUDIOPLAY(state){
        if(state.play_status == 0){
            state.callback_func.callback_play();
        }
    	
    }*/

}

const actions = {
	initAudioVue({commit},value){
		commit("INITAUDIOVUE",value);
	},
	setAudioInfo({commit},value){
        commit("AUDIOINFO",value);
    },
    setPlayStatus({commit},value){
        commit("PLAYSTATUS",value);
    },
    audioPlay({commit}){
        commit("AUDIOPLAY");
    },
    audioPause({commit},value){
        commit("AUDIOPAUSE",value);
    },
    audioStop({commit},value){
        commit("AUDIOSTOP",value);
    },
    setStopIndex({commit},value){
        commit("SETSTOPINDEX",value);
    }
    /*audioPlay({commit}){
    	alert("audio_play");
    	commit("AUDIOPLAY");
    },
    audioPause({commit}){

    },
    audioStop({commit}){

    }*/


}

export default {
    state,
    getters,
    mutations,
    actions
}