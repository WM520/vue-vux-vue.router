// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import VueResource from 'vue-resource';
// 网络框架
import { AjaxPlugin } from 'vux';
import { InfiniteScroll } from 'mint-ui';
import infinite from './components/home/infiniteScroll';
import VueCookie from 'vue-cookie';
import store from './store/index';

Vue.use(AjaxPlugin);
Vue.config.productionTip = false;
// Vue.use(VueResource);
Vue.use(InfiniteScroll);
Vue.component(infinite.name, infinite);
Vue.use(VueCookie);
Vue.use(router);
/* eslint-disable no-new */
// const count = 1;

router.beforeEach((to, from, next) => {
	// console.log(this.$store.getters.getUserName);
	// if (count === 1) {
		console.log(to.fullPath);
		next();
	// } else {
	// 	window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect';
	// };
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() { this.$store.dispatch('fetchUserInfoUserName'); }
});
