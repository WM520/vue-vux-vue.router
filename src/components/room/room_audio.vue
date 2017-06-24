<template>
<div>
	<audio :src="'data:audio/x-mpeg;base64,'+audio_data.content" autoplay ref="audioRef"></audio>
</div>
</template>

<style lang="less" scroped>

</style>

<script>

import { mapState } from 'vuex'
export default {

	data () {
        return {
        }
    },
    computed: {
    	...mapState({
            audio_data: state => state.audio.audio_data
        })
    },
    mounted() {
      this.initAudioVue();
    },
    methods: {
      	play:function(){
      		alert("play");
      		//alert(this.audio_data.content);
      		alert(this.$refs.audioRef.src);
      		//this.$refs.audioRef.play();
        },
        pause:function(){

        },
        stop:function(){

        },
        initAudioVue(){
        	alert("initAudioVue");
        	let callback = {};
        	callback.callback_play = this.play;
       		callback.callback_pause = this.pause;
        	callback.callback_stop = this.stop;
        	this.$store.dispatch("initAudioVue", callback);
        }
    }
}

</script>