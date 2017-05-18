// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
// 网络框架
import { AjaxPlugin } from 'vux';
import { InfiniteScroll } from 'mint-ui';
import infinite from './components/home/infiniteScroll';

Vue.use(AjaxPlugin);
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(InfiniteScroll);
Vue.component(infinite.name, infinite);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
