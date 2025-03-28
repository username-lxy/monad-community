import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/common.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.min.css"; // Swiper 5 的样式路径
import '@/utils/rem.js'  // 屏幕适配

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);



new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
