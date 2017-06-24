<template>
    <div class="room-question-btn" @click="onShowMainQuestionBtn" :style="{'bottom':room_question_btn_bottom+'px'}">
        <div class="question-btn">
            <img src="../../assets/images/room-question-btn.png">
        </div>
        <div class="question-nums">提问区</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {

        }
    },
    computed: {
        ...mapState({
            room_question_btn_bottom: state => state.room.roomQuestionBtnBottom,
        })
    },
    methods: {
        onShowMainQuestionBtn () {
            this.$store.dispatch("showMainQuestion", true)
        }
    }
}
</script>

<style lang="less" scroped>
.room-question-btn{
    width: 40px;
    height: 60px;
    position: fixed;
    right: 10px;
    .question-btn{
        width:40px;
        height: 40px;
        background-color: #ffaa35;
        border-radius: 40px;
        padding:7px;
        img {
            width:26px;
            height:26px;
        }
    }
    .question-nums{
        height: 20px;
        line-height:20px;
        text-align: center;
        font-size:12px;
        font-family: "Microsoft YaHei";
        color:#666;
    }
}
</style>

