<template>
  <div class="wrap">
    <headerVue />
    <section class="floating-cards-section">
      <div class="container">
        <div
          class="floating-card"
          v-for="(video, index) in videos"
          :key="index"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
          :style="floatingCardStyles[index]"
        >
          <img :src="video_img[index]" alt="" v-show="index != video_index" />
          <video
            :ref="'videoPlayer' + index"
            loop
            preload="auto"
            muted
            v-show="video_index == index"
          >
            <source :src="video.src" type="video/mp4" />
          </video>
          <!-- <div class="hint">悬停播放 #{{ index + 1 }}</div> -->
        </div>
      </div>
    </section>

    <div class="page2 container">
      <div :class="`title ${show_text ? 'show-title' : ''}`">
        Espectro de Arte de Monad
      </div>
      <div :class="`t ${show_t1 ? 'fall-enter-active' : ''}`">
        In Monad's digital galaxy, artists use light and shadow as ink and speed
        as strings to compose songs without boundaries.<br />
        Every painting is a poetic prophecy for the future of blockchain - from
        the faint light of the testnet to the dazzling sun of the mainnet,<br />
        Monad's ecosystem is as vast as the universe, nurturing infinite
        artistic blooms. Stop by this spectrum and listen to the resonance
        between technology and soul.
        <!-- 在Monad的数字星河中，艺术家们以光影为墨，以速度为弦，谱写出一曲曲无界之歌。
        ﻿
        每一幅画作，都是对区块链未来的诗意预言——从测试网的微光到主网的耀阳，Monad的生态如宇宙般辽阔，孕育着艺术的无限绽放。驻足这片光谱，聆听技术与灵魂的共振。 -->
      </div>
      <div class="pepe">
        <img src="../assets/art/pepe.png" alt="" />
      </div>
    </div>

    <div class="page3">
      <div class="all container">
        <div class="left">
          Monad's artists paint the future with neon brushstrokes
        </div>
        <div class="right" @click="changePage">
          view all
          <svg class="icon" viewBox="0 0 1024 1024">
            <path
              d="M533.33333333 448l0 128-458.688 1e-8c-29.44 0-53.312-23.872-53.312-53.31200001l0-21.376A53.312 53.312 0 0 1 74.64533333 447.99999999L533.33333333 448z"
              fill="#ffffff"
            ></path>
            <path
              d="M614.61333334 242.176l358.07999999 220.79999999a53.312 53.312 0 0 1 0.57600001 90.43200001l-358.08000001 226.752A53.312 53.312 0 0 1 533.33333333 735.104L533.33333333 287.552a53.312 53.312 0 0 1 81.28-45.44z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>

      <!-- 轮播图区域 -->
      <section class="carousel-section">
        <!-- 从左往右的轮播 -->
        <div class="carousel-row">
          <div class="carousel-row-content">
            <div
              class="carousel-item"
              v-for="(item, index) in duplicatedCarouselItems"
              :key="'left-' + index"
            >
              <img :src="item.src" :alt="'NFT ' + index" loading="lazy" />
              <div class="shadow">
                <a :href="item.twitter" target="_blank" class="a_hover">
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 从右往左的轮播 -->
        <div class="carousel-row">
          <div class="carousel-row-content">
            <div
              class="carousel-item"
              v-for="(item, index) in duplicatedCarouselItems"
              :key="'right-' + index"
            >
              <img :src="item.src" :alt="'NFT ' + index" loading="lazy" />
              <div class="shadow">
                <a :href="item.twitter" target="_blank" class="a_hover">
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footerVue />
  </div>
</template>

<script>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";

export default {
  components: {
    headerVue,
    footerVue,
  },
  data() {
    return {
      show_text: false,
      show_t1: false,
      videos: [
        { src: require("@/assets/art/art1.mp4") },
        { src: require("@/assets/art/art2.mp4") },
        { src: require("@/assets/art/art3.mp4") },
        { src: require("@/assets/art/art4.mp4") },
        { src: require("@/assets/art/art4.mp4") },
      ],
      video_img: [
        require("@/assets/test_art/Charles97019791-1.jpg"),
        require("@/assets/test_art/4.jpg"),
        require("@/assets/test_art/4.jpg"),
        require("@/assets/test_art/4.jpg"),
        require("@/assets/test_art/4.jpg"),
        require("@/assets/test_art/4.jpg"),
      ],
      video_index: -1,
      carouselItems: [
        {
          src: require("@/assets/test_art/Charles97019791-1.jpg"),
          name: "Kyrie tt.nad",
          describe: "",
          twitter: "https://x.com/Charles97019791",
        },
        {
          src: require("@/assets/test_art/Charles97019791-2.jpg"),
          name: "Kyrie tt.nad",
          describe: "",
          twitter: "https://x.com/Charles97019791",
        },
        {
          src: require("@/assets/test_art/Charles97019791-3.jpg"),
          name: "Kyrie tt.nad",
          describe: "",
          twitter: "https://x.com/Charles97019791",
        },
        {
          src: require("@/assets/test_art/dj673285379-1.jpg"),
          name: "J King",
          describe: "",
          twitter: "https://x.com/dj673285379",
        },
        {
          src: require("@/assets/test_art/dj673285379-2.jpg"),
          name: "J King",
          describe: "",
          twitter: "https://x.com/dj673285379",
        },
        {
          src: require("@/assets/test_art/dj673285379-3.jpg"),
          name: "J King",
          describe: "",
          twitter: "https://x.com/dj673285379",
        },
        {
          src: require("@/assets/test_art/HhhhHannah-1.jpg"),
          name: "hannah_hhhh",
          describe: "",
          twitter: "https://x.com/HhhhHannah",
        },
        {
          src: require("@/assets/test_art/HhhhHannah-2.jpg"),
          name: "hannah_hhhh",
          describe: "",
          twitter: "https://x.com/HhhhHannah",
        },
        {
          src: require("@/assets/test_art/jaychen981111-1.jpg"),
          name: "CHEN⌘",
          describe: "",
          twitter: "https://x.com/jaychen981111",
        },
        {
          src: require("@/assets/test_art/jaychen981111-2.jpg"),
          name: "CHEN⌘",
          describe: "",
          twitter: "https://x.com/jaychen981111",
        },
        {
          src: require("@/assets/test_art/jaychen981111-3.jpg"),
          name: "CHEN⌘",
          describe: "",
          twitter: "https://x.com/jaychen981111",
        },
        {
          src: require("@/assets/test_art/melanthaia-1.jpg"),
          name: "melanthaia",
          describe: "",
          twitter: "https://x.com/melanthaia",
        },
        {
          src: require("@/assets/test_art/Mido_269-1.jpg"),
          name: "Midodo",
          describe: "",
          twitter: "https://x.com/Mido_269",
        },
        {
          src: require("@/assets/test_art/Mido_269-2.jpg"),
          name: "Midodo",
          describe: "",
          twitter: "https://x.com/Mido_269",
        },
        {
          src: require("@/assets/test_art/Mido_269-3.jpg"),
          name: "Midodo",
          describe: "",
          twitter: "https://x.com/Mido_269",
        },
        {
          src: require("@/assets/test_art/Pican0_o-3.jpg"),
          name: "Picano",
          describe: "",
          twitter: "https://x.com/Pican0_o",
        },
        {
          src: require("@/assets/test_art/Pican0_o-2.jpg"),
          name: "Picano",
          describe: "",
          twitter: "https://x.com/Pican0_o",
        },
        {
          src: require("@/assets/test_art/Pican0_o-1.jpg"),
          name: "Picano",
          describe: "",
          twitter: "https://x.com/Pican0_o",
        },
        {
          src: require("@/assets/test_art/Pican0_o-4.jpg"),
          name: "Picano",
          describe: "",
          twitter: "https://x.com/Pican0_o",
        },
        {
          src: require("@/assets/test_art/Pican0_o-5.jpg"),
          name: "Picano",
          describe: "",
          twitter: "https://x.com/Pican0_o",
        },
        {
          src: require("@/assets/test_art/Polly_r7-1.jpg"),
          name: "Pollyyyyy",
          describe: "",
          twitter: "https://x.com/Polly_r7",
        },
        {
          src: require("@/assets/test_art/Polly_r7-2.jpg"),
          name: "Pollyyyyy",
          describe: "",
          twitter: "https://x.com/Polly_r7",
        },
        {
          src: require("@/assets/test_art/Polly_r7-3.jpg"),
          name: "Pollyyyyy",
          describe: "",
          twitter: "https://x.com/Polly_r7",
        },
        {
          src: require("@/assets/test_art/XHOYH-1.jpg"),
          name: "Huan",
          describe: "",
          twitter: "https://x.com/XHOYH",
        },
        {
          src: require("@/assets/test_art/XHOYH-2.jpg"),
          name: "Huan",
          describe: "",
          twitter: "https://x.com/XHOYH",
        },
        {
          src: require("@/assets/test_art/XHOYH-3.jpg"),
          name: "Huan",
          describe: "",
          twitter: "https://x.com/XHOYH",
        },
        {
          src: require("@/assets/test_art/XHOYH-4.jpg"),
          name: "Huan",
          describe: "",
          twitter: "https://x.com/XHOYH",
        },
      ],
      floatingCardStyles: [
        {
          width: "400px",
          height: "300px",
          top: "30px",
          left: "2%",
          "--rotation": "-8deg",
        },
        {
          width: "600px",
          height: "350px",
          top: "320px",
          left: "1%",
          "--rotation": "5deg",
          animationDelay: "-0.8s",
        },
        {
          width: "300px",
          height: "200px",
          top: "19px",
          right: "18%",
          "--rotation": "9deg",
          animationDelay: "-1.6s",
        },
        {
          width: "400px",
          height: "300px",
          top: "150px",
          right: "2%",
          "--rotation": "-2deg",
          animationDelay: "-2.4s",
        },
        {
          width: "460px",
          height: "300px",
          top: "400px",
          right: "8%",
          "--rotation": "2deg",
          animationDelay: "-3.2s",
        },
      ],
    };
  },
  computed: {
    duplicatedCarouselItems() {
      return [...this.carouselItems, ...this.carouselItems];
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
    this.initCarouselHover();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.show_text = true;
        setTimeout(() => {
          this.show_t1 = true;
        }, 3000);
      }
    },
    changePage() {
      this.$router.push("/Draw");
    },
    async handleMouseEnter(index) {
      this.video_index = index;
      const video = this.$refs[`videoPlayer${index}`]?.[0];
      if (video && video.paused) {
        try {
          await video.play();
        } catch (e) {
          console.warn("播放失败:", e);
        }
      }
    },
    handleMouseLeave(index) {
      this.video_index = -1;
      const video = this.$refs[`videoPlayer${index}`]?.[0];
      if (video && !video.paused) {
        video.pause();
      }
    },
    initCarouselHover() {
      document.querySelectorAll(".carousel-row").forEach((row) => {
        const content = row.querySelector(".carousel-row-content");
        row.addEventListener("mouseenter", () => {
          content.style.animationPlayState = "paused";
        });
        row.addEventListener("mouseleave", () => {
          content.style.animationPlayState = "running";
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
/* 基础样式 */
.wrap {
  .container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }
}

/* 浮动卡片区域 */
.floating-cards-section {
  margin-top: 100px;
  padding: 50px 0;
  position: relative;
  height: calc(100vh - 100px);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background-image: url("../assets/monad_logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.3;
    filter: blur(2px);
    pointer-events: none;
    animation: rotateLogo 30s linear infinite;
  }

  .floating-card {
    position: absolute;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 1rem;
    transition: all 0.5s ease;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: float 4s ease-in-out infinite;
    animation-delay: var(--animation-delay, 0s);

    &:hover {
      transform: scale(1.3) rotate(var(--rotation)) !important;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      z-index: 10;
      animation: none;
    }

    img {
      width: 100%;
      height: 100%;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
    }

    .hint {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #00ff00;
      text-align: center;
      font-size: 16px;
      text-shadow: 0 0 5px #00ff00;
    }
  }
}

/* 第二页样式 */
.page2 {
  padding-top: 100px !important;
  height: calc(100vh - 100px);
  text-align: center;

  .title {
    color: var(--e-global-color-854f927);
    font-family: "Poppins", Sans-serif;
    font-size: 100px;
    font-weight: 700;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid #000;
    opacity: 0;

    &.show-title {
      opacity: 1;
      animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
    }
  }

  .t {
    margin-top: 20px;
    line-height: 30px;
    font-size: 18px;
    opacity: 0;

    &.fall-enter-active {
      opacity: 1;
      animation: fallDown 0.5s ease-out;
    }
  }

  .pepe {
    position: relative;
    height: 300px;

    img {
      position: absolute;
      top: 50px;
      right: 100px;
      max-width: 200px;
    }
  }
}

/* 第三页样式 */
.page3 {
  padding-top: 50px;

  .all {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    .right {
      position: relative;
      padding: 0 50px 0 10px;
      height: 46px;
      line-height: 42px;
      border: 2px solid #fff;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s;

      .icon {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        width: 30px;
        height: 20px;
        transition: all 0.3s;
      }

      &:hover {
        .icon {
          right: 8px;
        }
      }
    }
  }

  /* 轮播图样式 */
  .carousel-section {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 2rem 0;

    .carousel-row {
      position: relative;
      width: 100%;
      height: 300px;
      margin: 20px 0;
      overflow: hidden;

      .carousel-row-content {
        display: flex;
        position: absolute;
        align-items: center;
        height: 100%;
        will-change: transform;

        .carousel-item {
          flex: 0 0 auto;
          height: 90%; /* 稍微小于容器高度 */
          margin: 0 15px;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease;
          min-width: 150px;
          max-width: 400px;

          &:hover {
            transform: translateY(-10px);
            z-index: 10;
            .shadow {
              opacity: 0.9;
              shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            }
          }

          img {
            height: 100%;
            width: auto;
            max-width: 100%;
            object-fit: contain;
            display: block;
          }

          .shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 999;
            .a_hover {
              position: absolute;
              bottom: 10px;
              left: 10px;
              color: #fff;
              font-size: 18px;
              &:hover {
                color: #836ef9;
              }
            }
          }

          // .select_box {
          //   opacity: 0.9;
          //   shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          // }
        }
      }

      &:nth-child(1) .carousel-row-content {
        animation: scrollLeft 60s linear infinite;
      }

      &:nth-child(2) .carousel-row-content {
        animation: scrollRight 60s linear infinite;
      }
    }
  }
}

/* 动画定义 */
@keyframes rotateLogo {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(var(--rotation));
  }
  50% {
    transform: translateY(-20px) rotate(var(--rotation));
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}

@keyframes fallDown {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .floating-cards-section {
    height: auto;
    padding: 2rem 0;

    .floating-card {
      position: relative !important;
      width: 90% !important;
      height: 300px !important;
      margin: 0 auto 2rem !important;
      transform: none !important;
      top: auto !important;
      left: auto !important;
      right: auto !important;
    }
  }

  .page2 .title {
    font-size: 60px;
  }
}

@media (max-width: 768px) {
  .page2 .title {
    font-size: 40px;
  }

  .page3 .all {
    flex-direction: column;
    gap: 20px;

    .right {
      width: 100%;
      text-align: center;
    }
  }

  .carousel-section .carousel-row {
    height: 200px;

    .carousel-item {
      min-width: 120px !important;
    }
  }
}
</style>