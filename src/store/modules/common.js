
const state = {
	common_request_base_url:"http://wx.mozziewang.xyz/"

}


const getters = {
	commonInfo: state => {
        return {
            common_request_base_url : state.common_request_base_url
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