// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css';
// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';
import VueResource from 'vue-resource';
// import '../common/stylus/index.styl'

Vue.config.productionTip = false;
// Vue.use(Mint);
Vue.use(VueResource);
// Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
