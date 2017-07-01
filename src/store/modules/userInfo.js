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
	},
	userinfo_data:{},
	user_header_image:'',
	user_logined:false
};
const getters = {
	
	userinfo : state => {
        return {
            userinfo_data : state.userinfo_data,
            user_header_image : state.user_header_image
        }
    }
};
const mutations = {
	INITUSERINFO(state,info){
		state.userinfo_data = info;
		console.log("INITUSERINFO");
		console.log(info);
		window.localStorage.setItem('userinfo', JSON.stringify(info));
		console.log(window.localStorage.getItem('userinfo'));
		state.user_logined = true;
		localStorage.setItem('user_logined', true);

	},
	GETLOCALUSERINFO(state){
		let user_info_str = window.localStorage.getItem('userinfo');
		state.userinfo_data = JSON.parse(user_info_str); 
		console.log(state.userinfo_data);
		state.user_logined = true;
	},
	GETUSERHEADERIMAGE(state,value){
		state.user_header_image = value;
	},
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

const actions = {
	initUserInfo({commit},value){
		commit("INITUSERINFO",value);
	},
	getLocalUserInfo({commit}){
		commit("GETLOCALUSERINFO");
	},
	getUserHeaderImage({commit},value){
		commit("GETUSERHEADERIMAGE",value);
	}
};


export default {
	state,
	getters,
	actions,
	mutations
};
