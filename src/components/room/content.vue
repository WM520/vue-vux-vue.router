<template>
<div>
    <room-main-content></room-main-content>
    <room-question-btn ></room-question-btn>
    <room-main-question></room-main-question>
    <image-sheet></image-sheet>
</div>
</template>

<script>
import roomMainContent from '@/components/room/room_main_content.vue'
import roomQuestionBtn from '@/components/room/room_question_btn.vue'
import roomMainQuestion from '@/components/room/room_main_question.vue'
import imageSheet from '@/components/room/imageSheet.vue'
export default {
    data () {
        return {
        }
    },
    components: {
        roomMainContent, roomQuestionBtn, roomMainQuestion, imageSheet
    },
    methods: {

    }
}
</script>

<style lang="less">


</style>

