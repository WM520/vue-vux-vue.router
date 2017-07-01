
const state = {
    swiper_img_list:[],
    imgURL:[]
}


const getters = {
	header: state => {
        return {
            swiper_img_list : state.swiper_img_list,
            imgURL:state.imgURL
        }
    },

}


const mutations = {
	SETIMAGELIST(state,info){
        state.swiper_img_list[info.index] = info.data;
    },
    SETHEADERIMAGELIST(state){
        state.imgURL = state.swiper_img_list
    }

}

const actions = {
	setImageList({commit},value){
		commit("SETIMAGELIST",value);
	},
    setHeaderImageList({commit}){
        commit("SETHEADERIMAGELIST");
    }


}

export default {
    state,
    getters,
    mutations,
    actions
}