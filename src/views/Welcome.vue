<template>
  <div class="wrap">
    <!-- 视频 -->
    <video ref="video" autoplay muted>
      <source src="@/assets/welcome.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- 手的图片 -->
    <div ref="click_box" class="click_box" @click="changePage"></div>
    <img ref="hand" class="hand" src="@/assets/hand.png" alt="Hand" />
  </div>
</template>

<script>
export default {
  name: "VideoHandAnimation",
  mounted() {
    const video = this.$refs.video;
    const hand = this.$refs.hand;
    const click_box = this.$refs.click_box;
    // 监听视频播放结束事件
    video.addEventListener("ended", () => {
      // 添加 active 类，触发动画
      hand.classList.add("active");
    });

    video.addEventListener("timeupdate", () => {
      if (video.currentTime >= 5) {
        click_box.classList.add("show"); // 显示盒子
      }
    });
  },
  methods: {
    changePage() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* 视频样式 */
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .click_box {
    position: fixed;
    left: 50%;
    bottom: 140px;
    transform: translateX(-50%);
    width: 540px;
    height: 165px;
    background-color: transparent;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    opacity: 0; /* 初始透明度为 0 */
    transition: opacity 1s ease-in-out; /* 淡入效果 */
    cursor: pointer;
  }

  /* 手的图片样式 */
  .hand {
    position: fixed;
    left: 50%; /* 水平居中 */
    bottom: 200px; /* 初始位置在屏幕底部之外 */
    width: 100px; /* 图片宽度 */
    transform: translateX(-50%); /* 水平居中 */
    opacity: 0; /* 初始透明度为 0 */
    transition: bottom 1s ease-in-out, opacity 1s ease-in-out; /* 动画效果 */
    pointer-events: none; /* 禁止图片的交互 */
  }
}

/* 上下浮动动画 */
@keyframes float {
  0%,
  100% {
    transform: translate(-50%, 0); /* 水平居中，垂直不动 */
  }
  50% {
    transform: translate(-50%, -20px); /* 向上浮动 */
  }
}

/* 动画激活时的样式 */
.hand.active {
  bottom: 100px; /* 移动到特定位置 */
  opacity: 1; /* 显示图片 */
  animation: float 2s ease-in-out infinite; /* 上下浮动动画 */
}

/* 显示盒子 */
.click_box.show {
  opacity: 1; /* 显示盒子 */
}
</style>