import * as io from 'socket.io-client'

const state = {
    server_base_url: 'http://101.37.89.181:3000/',
    room_chat_socket:null,
    room_info:{},
    user_info:{},
    room_msg_list:[],
    current_room_msg_list:[],
    room_question_list:[],
    current_room_question_list:[],
    room_my_question_list:[],
    current_room_my_question_list:[],
    question_list_number:0
}

const getters = {
    chatRoomInfo: state => {
        return {
            room_info : state.room_info
        }
    },
    chatUserInfo: state => {
        return {
            user_info : state.user_info
        }
    },
    chatRoomMsg:state => {
        return {
            current_room_msg_list:state.current_room_msg_list,
            current_room_question_list:state.current_room_question_list,
            current_room_my_question_list : state.current_room_my_question_list,
            question_list_number : state.question_list_number
        }
    }
}

const mutations = {
    USERINFO(state,user){
        state.user_info.user_id = user.user_id;
        state.user_info.session_id = user.session_id;
        state.user_info.user_name = user.user_name;
        state.user_info.user_type = user.user_type;
        state.user_info.openid = user.openid;
        state.current_room_msg_list = [];
        state.current_room_my_question_list = [];
        state.current_room_question_list = [];
    },
    ROOMINFO(state,info){
        state.room_info.room_id = info.room_id;
        state.room_info.room_name = info.room_name;
    },
    ROOMSOCKET(state,callback){
        let room_server_url = state.server_base_url + '?roomid='+state.room_info.room_id+'&userid='+state.user_info.user_id;
        console.log(room_server_url);
        state.room_chat_socket = io.connect(room_server_url);
        state.room_chat_socket.on("room_connected",function(msg){
            callback.room_connected(msg);
        });
        state.room_chat_socket.on("user_joined",function(msg){
            if(!state.room_msg_list[state.room_info.room_id]){
                state.room_msg_list[state.room_info.room_id] = [];
            }else{
                state.current_room_msg_list = state.room_msg_list[state.room_info.room_id];
            }
            if(!state.room_my_question_list[state.room_info.room_id]){
                state.room_my_question_list[state.room_info.room_id] = [];
            }else{
                state.current_room_my_question_list = state.room_my_question_list[state.room_info.room_id];
            }   
            if(!state.room_question_list[state.room_info.room_id]){
                state.room_question_list[state.room_info.room_id] = [];
            }else{
                state.current_room_question_list = state.room_question_list[state.room_info.room_id];
            }       
            callback.user_joined(msg);
        });
        state.room_chat_socket.on("message",function(msg){
            //console.log(msg.user.user_type);
            switch(parseInt(msg.data.sendType)){
                case 0:
                    //if(parseInt(msg.user.user_id) == parseInt(state.user_info.user_id)){
                    //    state.room_my_question_list.push(msg);
                    //}else{
                    //    state.room_question_list.push(msg);
                    //}
                    //if(msg.data.)                 
                    state.room_msg_list[state.room_info.room_id].push(msg);
                    console.log(msg);
                    state.current_room_msg_list.push(msg);
                    break;
                case 1:
                    if(parseInt(msg.user.user_id) == parseInt(state.user_info.user_id)){
                        state.room_my_question_list[state.room_info.room_id].push(msg);
                        state.current_room_my_question_list.push(msg);
                    }else{
                        state.room_question_list[state.room_info.room_id].push(msg);
                        state.current_room_question_list.push(msg);
                    }
                    state.question_list_number = state.question_list_number+1;
                    break;
                case 2:
                    break;
                //case 3:
                    //state.room_msg_list[state.room_info.room_id].push(msg);
                    //state.current_room_msg_list.push(msg);
                    //console.log(state.room_info.room_id);
                    //console.log(state.room_msg_list[state.room_info.room_id]);
                    //state.current_room_msg_list = 
                //    break;

            }
        })
    },
    JOINROOM(state){
        //state.room_chat_socket.emit('flush');
        let msg_json_str = JSON.stringify(state.user_info);
        let msg = encodeURI(msg_json_str);
        //console.log(msg);
        state.room_chat_socket.emit('join',msg);
    },
    SENDMSG(state,msg){
        console.log("SENDMSG:"+msg.content);
        state.room_chat_socket.emit('say',msg);
    }
}

const actions = {
    setUserInfo({commit},value){
        commit("USERINFO",value);
    },
    setRoomInfo({commit},value){
        commit("ROOMINFO",value);
    },
    initRoomSocket({commit},value){
        commit("ROOMSOCKET",value);
    },
    joinRoom({commit}){
        commit("JOINROOM");
    },
    sendMessage({commit},message){
        commit("SENDMSG",message);
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}
