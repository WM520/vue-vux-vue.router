<template>
    <div class="room-main">
        <room-content></room-content>
    </div>
</template>

<script>
require('../assets/less/common.less')
import roomContent from '@/components/room/content.vue'
export default {
    data () {
        return {
        }
    },
    components: {
        roomContent
    },
    mounted () {
        this.InitRoom();
    },
    methods: {
        room_connected_callback:function(msg){
            if(msg.status == 200){
                //console.log("connected success");
                this.$store.dispatch("joinRoom");
            }else{
                console.log("connected failed");
            }
        },
        user_joined_callback:function(msg){
            console.log(msg);
        },
        InitRoom:function(){  
            //console.log(this.$route.params.liveroom);
            let roomName = this.$route.params.liveroom.cr_room_name;
            let roomID = this.$route.params.liveroom.roomId;
            let userName = this.$route.params.liveroom.user_nickname;
            let userID = this.$route.params.liveroom.user_id;
            let userType = this.$route.params.liveroom.userType;
            document.title = roomName;
            let user = {};
            user.session_id = localStorage.getItem('dataid');
            user.user_id = userID;
            user.user_name = userName;
            user.user_type = userType;
            console.log("user_type:"+user.user_type);
            if(user.user_type == 1 || user.user_type ==2 || user.user_type ==3){
                this.$store.dispatch("showRoomFooter", true);
                this.$store.dispatch("isUserFooter", false);
                this.$store.dispatch("setRoomQuestionBtnBottom", 80);
            }else{
                this.$store.dispatch("showRoomFooter", false);
                this.$store.dispatch("setRoomMainContentHeight", document.body.clientHeight);
                this.$store.dispatch("isUserFooter", true);
                this.$store.dispatch("setRoomQuestionBtnBottom", 30);
            }
            let room = {};
            room.room_id = roomID;
            room.room_name = roomName;
            this.$store.dispatch("setUserInfo", user);
            this.$store.dispatch("setRoomInfo", room);
            let chat_socket = {};
            chat_socket.room_connected = this.room_connected_callback;
            chat_socket.user_joined = this.user_joined_callback;
            this.$store.dispatch("initRoomSocket", chat_socket);
            
        }
    },
     beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.InitRoom();
        });
     }
}
</script>

<style lang="less" scroped>
.room-main {
    width:100%;
    height:100%;
    background:#fafafa;
    position:relative;
}
</style>

