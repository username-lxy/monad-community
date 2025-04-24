import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/common.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.min.css"; // Swiper 5 的样式路径
import '@/utils/rem.js'  // 屏幕适配
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/message.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.prototype.$message = Message;

// 配置 axios
axios.defaults.baseURL = 'http://localhost:3000/api'; // 你的后端 API 地址
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
