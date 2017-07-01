import Vuex from 'vuex';
import Vue from 'vue';
import UserInfo from './modules/userInfo';
import wechat from './modules/wechat';
import footer from './modules/footer';
import room from './modules/room';
import chat from './modules/chat';
import audio from './modules/audio';
import common from './modules/common';
import header from './modules/header';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		UserInfo,
		wechat,
		chat,
		room,
		footer,
		audio,
		common,
		header
	}
});
