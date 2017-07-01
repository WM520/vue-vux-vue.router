
const state = {
	common_request_base_url:"http://wxapi.qingzz.com/",
    common_request_appendv1_url:"v1/app/"
}


const getters = {
	commonInfo: state => {
        return {
            common_request_base_url : state.common_request_base_url,
            common_request_appendv1_url: state.common_request_appendv1_url
        }
    },

}


const mutations = {
	

}

const actions = {
	

}

export default {
    state,
    getters,
    mutations,
    actions
}