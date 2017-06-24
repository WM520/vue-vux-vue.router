<template>
<div>
    <mt-actionsheet :actions="imageActions" v-model="imageSheetVisible"></mt-actionsheet>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {
            //imageSheetVisible1:false,
            imageSheetVisible:false,
            imageActions: []
        }
    },
    computed: {
        ...mapState({
            imageSheetVisibleStore: state => state.footer.isShowImageSheet,
            //wx_access_token : state => state.wechat.wx_access_token
        })
    },
    methods: {
        uploadImageError:function(err){

        },
        uploadImageSuccess:function(res){
            //let image_base_url = 'https://api.weixin.qq.com/cgi-bin/media/get?access_token=';
            //let image_url = image_base_url + this.wx_access_token + "&media_id=" + res.serverId;
            //alert(image_url);
            //window.location.href=image_url;

            let msg = {};
            msg.type=1;
            //msg.content=this.msg_text_data;
            msg.content = res.serverId;
            this.$store.dispatch("sendMessage", msg);
        },
        selectImageError:function(err,type){
            if(type == 0){
                alert("从相册选取图片失败");
            }else{
                alert("拍照选取图片失败");
            }
        },
        selectImageSuccess:function(res,type){
            let callback_value = {};
            callback_value.res = res;
            callback_value.success_callback = this.uploadImageSuccess;
            callback_value.error_callback = this.uploadImageError;
            this.$store.dispatch("uploadImage",callback_value);
        },
        takePhoto () {
            let callback_value = {};
            callback_value.type = 1;
            callback_value.success_callback = this.selectImageSuccess;
            callback_value.error_callback = this.selectImageError;
            this.$store.dispatch("selectImage",callback_value);
        },
        openAlbum () {
            let callback_value = {};
            callback_value.type = 0;
            callback_value.success_callback = this.selectImageSuccess;
            callback_value.error_callback = this.selectImageError;
            this.$store.dispatch("selectImage",callback_value);
        }
    },
    mounted () {
        this.imageActions = [{
            name: '拍照',
            method: this.takePhoto
        }, {
            name: '从相册中选择',
            method: this.openAlbum
        }]
    },
    watch:{
        imageSheetVisibleStore(){
            if(this.imageSheetVisibleStore){
                console.log("watch.imageSheetVisible:"+this.imageSheetVisible);
                this.imageSheetVisible = true;
            }
        },
        imageSheetVisible(){
            if(this.imageSheetVisible){
                this.$store.dispatch("showImageSheet", false)
            }
        }
    }
}
</script>

<style lang="less">

</style>
