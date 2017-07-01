// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Mint from 'mint-ui';
import App from './App';
import router from './router';
//import VueResource from 'vue-resource';
// 网络框架
import { AjaxPlugin } from 'vux';
//import { InfiniteScroll } from 'mint-ui';
import infinite from './components/home/infiniteScroll';
//import VueCookie from 'vue-cookie';
import store from './store/index';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
Vue.use(AjaxPlugin);
Vue.config.productionTip = false;
//Vue.use(VueResource);
//Vue.use(InfiniteScroll);
Vue.component(infinite.name, infinite);
//Vue.use(VueCookie);
Vue.use(router);




new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
