import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/common.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.min.css"; // Swiper 5 的样式路径
import "lib-flexible";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

// 在入口文件中（如 main.js）
// function setRootValue() {
//   const width = document.documentElement.clientWidth;
//   const rootValue = width < 1440 ? 144 : 192; // 动态切换
//   document.documentElement.style.setProperty("--root-value", rootValue);
// }

// // 初始化执行
// setRootValue();
// window.addEventListener("resize", setRootValue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
