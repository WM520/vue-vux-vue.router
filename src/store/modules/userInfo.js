// import Vue from 'vue';

const state = {
	userName: '',
	openID: '',
	access_token: '',
	count: 0,
	params: {
		userWxOpenid: '123hyfaaa',
		userNickname: '测试123',
		userSex: '1',
		userMobilephone: '166461613131',
		userCreateIp: '11111111',
		userHeadImage: '/d/a',
		userCity: '南京',
		userProvince: '江苏'
	}
};
const getters = {
	getUserName: function(state) {
		return state.userName;
	},
	getOpenID: function(state) {
		return state.openID;
	},
	getAccessToken: function(state) {
		return state.access_token;
	}
};
const actions = {
	fetchUserInfoUserName ({commit, state}) {
		// Vue.http.post('/api/web/v1/app/login', state.params)
		// .then((res) => {
		// 	// console.log(res);
		// 	// console.log(res.content.error);
		// 	commit('updateUserInfoUserName', 'wangmiao');
		// }, (err) => {
		// 	console.log(err);
		// });
	}
};
const mutations = {
	updateUserInfoUserName(state, userName) {
		state.userName = userName;
	},
	updateUserInfoOpenID(state, openID) {
		state.openID = openID;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
