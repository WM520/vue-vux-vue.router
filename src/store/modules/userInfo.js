// import Vue from 'vue';

const state = {
	userName: '',
	openID: '',
	access_token: '',
	headimgurl: '',
	userCity: '',
	count: 0,
	useID: '',
	hostURL: 'http://192.168.0.126:38080',
	appendURL: 'api/web/v1/app/',
	isLogin: false,
	userSex: '',
	userProvince: '',
	userCreateTime: '',
	userIsLecturer: false,
	lecturerId: '',
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
	},
	updateUserInfoHeadImgURL(state, headimgurl) {
		state.headimgurl = headimgurl;
	},
	updateUserInfoCity(state, userCity) {
		state.userCity = userCity;
	},
	updateUserInfoUserID(state, useID) {
		state.useID = useID;
	},
	updateUserInfoIsLogin(state, isLogin) {
		state.isLogin = isLogin;
	},
	updateUserInfoUserSex(state, userSex) {
		state.userSex = userSex;
	},
	updateUserInfoUserProvince(state, userProvince) {
		state.userProvince = userProvince;
	},
	updateUserInfoUserCreateTime(state, userCreateTime) {
		state.userCreateTime = userCreateTime;
	},
	updateUserInfoUserIsLecturer(state, userIsLecturer) {
		state.userIsLecturer = userIsLecturer;
	},
	updateUserInfoUserIsLecturerId(state, lecturerId) {
		state.lecturerId = lecturerId;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
