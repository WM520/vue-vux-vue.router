
const state = {
    isShowMainQuestion: false,
    isShowRoomFooter:false,
    roomMainContentHeight: document.body.clientHeight - 50,
    roomQuestionListBottom: 50,
    roomQuestionListMaxHeight: document.body.clientHeight - 100 - 50,
    roomQuestionBtnBottom:30
}


const getters = {
    room_state : state => {
        return {
            isShowMainQuestion : state.isShowMainQuestion,
            isShowRoomFooter : state.isShowRoomFooter,
            roomMainContentHeight : state.roomMainContentHeight,
            roomQuestionListBottom : state.roomQuestionListBottom,
            roomQuestionListMaxHeight : state.roomQuestionListMaxHeight,
            roomQuestionBtnBottom : state.roomQuestionBtnBottom
        }
    }
}


const mutations = {
    SHOWMAINQUESTION(state,status) {
        state.isShowMainQuestion = status
    },
    SHOWROOMFOOTER(state,status){
        state.isShowRoomFooter = status
    },
    ROOMMAINCONTENTHEIGHT(state, height){
        state.roomMainContentHeight = height
    },
    ROOMQUESTIONLISTBOTTOM(state,bottom){
        state.roomQuestionListBottom = bottom
        state.roomQuestionListMaxHeight = document.body.clientHeight - 100 - state.roomQuestionListBottom
        //console.log(state.roomQuestionListBottom)
    },
    ROOMQUESTIONBTNBOTTOM(state,bottom){
        state.roomQuestionBtnBottom = bottom;
    }
}

const actions = {
    showMainQuestion({commit}, value){
        commit("SHOWMAINQUESTION",  value)
    },
    showRoomFooter({commit},value){
        commit("SHOWROOMFOOTER",  value)
    },
    setRoomMainContentHeight({commit},value){
        commit("ROOMMAINCONTENTHEIGHT",  value)
    },
    setRoomQuestionListBottom({commit},value){
        commit("ROOMQUESTIONLISTBOTTOM",  value)
    },
    setRoomQuestionBtnBottom({commit},value){
        commit("ROOMQUESTIONBTNBOTTOM",  value)
    }
}

export default {
  state,
  getters,
  mutations,
  actions
}
