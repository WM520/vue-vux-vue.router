
const state = {
    isShowImageSheet: false,
    isQuestionFooter: false,
    isUserFooter:false
}


const getters = {
    footer_state : state => {
        return {
            isShowImageSheet : state.isShowImageSheet,
            isQuestionFooter : state.isQuestionFooter,
            isUserFooter : state.isUserFooter
        }
    }
}


const mutations = {
    IMAGESHEET(state,status) {
        state.isShowImageSheet = status;
        console.log("state.isShowImageSheet:"+state.isShowImageSheet);
    },
    ISQUESTIONFOOTER(state,isQuestion){
        state.isQuestionFooter = isQuestion;
        //console.log("state.isQuestionFooter:"+state.isQuestionFooter)
    },
    ISUSERFOOTER(state,status){
        state.isUserFooter = status;
    }
}

const actions = {
    showImageSheet({commit},value){
        commit("IMAGESHEET",  value)
    },
    isUserFooter({commit},value){
        commit("ISUSERFOOTER",  value)
    },
    setIsQuestionFooter({commit}, value){
        commit("ISQUESTIONFOOTER",  value)
    }
}

export default {
  state,
  getters,
  mutations,
  actions
}
