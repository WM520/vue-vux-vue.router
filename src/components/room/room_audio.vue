<template>
<div>
	<audio id="audioToPlay" :src="'data:audio/mpeg;base64,'+audio_data.content" ref="audioRef"></audio>
<!--   <audio id="audio" ref="audioRef">   
      <source :src="'data:audio/mpeg;base64,'+audio_data.content" type="audio/mpeg">
  </audio> -->
</div>
</template>

<style lang="less" scroped>

</style>

<script>

import { mapState } from 'vuex'
export default {

	data () {
        return {
          // audio : document.getElementById('audioToPlay')
          //audio_loaded:false;
        }
    },
    computed: {
    	...mapState({
            audio_data: state => state.audio.audio_data,
            play_index : state => state.audio.play_index
        })
    },
    mounted() {
      this.initAudioVue();
    },
    methods: {
      	play:function(flag){ 
          if(flag == 0){

            this.$refs.audioRef.load();
            this.$refs.audioRef.addEventListener("loadeddata",() => {
                //alert("playing");
                this.$refs.audioRef.play();
                this.$store.dispatch("setPlayStatus", 1); 
                this.$refs.audioRef.removeEventListener("loadeddata",{},true);  

                this.$refs.audioRef.addEventListener("ended",() => {
                    //alert("playing");
                    this.$store.dispatch("setStopIndex", this.play_index);
                    this.stop(); 
                });
            });
          }else{
            this.$refs.audioRef.play();
          }
          
            
        },
        pause:function(){
          this.$store.dispatch("setPlayStatus", 2);
          this.$refs.audioRef.pause();
          // this.audio.pause();
        },
        stop:function(){
          this.$store.dispatch("setPlayStatus", 0);
          this.$refs.audioRef.removeEventListener("ended",{},true);  
        },
        initAudioVue(){
        	// alert("initAudioVue");
        	let callback = {};
        	callback.callback_play = this.play;
       		callback.callback_pause = this.pause;
        	callback.callback_stop = this.stop;
        	this.$store.dispatch("initAudioVue", callback);
        }
    }
}

</script>