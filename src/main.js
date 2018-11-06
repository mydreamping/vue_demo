import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

import vant from 'vant';
import 'vant/lib/vant-css/index.css';
import { Loading } from 'vant';

Vue.use(Loading);

Vue.use(vant);

// axios的引入及使用
import axios from 'axios'
// Vue.use(axios);
Vue.prototype.$http=axios;


import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';


// 全局使用 引入qs模块
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
import qs from "qs";//配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$qs = qs;


Vue.use(MuseUI);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
