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
          <img
            :src="video_img[index].src"
            alt=""
            v-show="index != video_index"
          />
          <video
            :ref="'videoPlayer' + index"
            loop
            preload="auto"
            muted
            v-show="video_index == index"
          >
            <source :src="video.src" type="video/mp4" />
          </video>
          <div class="auther" v-show="video_index == index">
            <a href="" target="_blank" class="link"
              ><svg
                t="1743086223225"
                class="icon"
                viewBox="0 0 1107 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4551"
                width="200"
                height="200"
              >
                <path
                  d="M352.457692 579.234694a176.741926 176.741926 0 0 1-50.769294 105.153231c-12.604305 12.604305-32.015403 24.457515-60.439636 37.366952a430.424095 430.424095 0 0 0 52.693974 105.951268c180.051436 262.883077 559.236803 260.535907 737.621748 0 115.504252-168.714603 99.613909-407.89126-56.707635-564.189332-70.063034-70.063034-128.671878-69.429298-161.954753-59.66507-52.740917 15.538268-91.046737 68.06794-91.046737 124.84599a59.195636 59.195636 0 0 1-117.804479 7.135398c-2.88702 3.121737-5.844454 6.266945-8.82536 9.388681-84.498132 90.013982-178.971738 179.112568-242.720884 233.918995z m184.698834 293.677952a88.793454 88.793454 0 1 1 125.597084 0 88.88734 88.88734 0 0 1-125.550141 0z m376.767781-83.723566a88.793454 88.793454 0 1 1 0-125.597084 88.88734 88.88734 0 0 1 0.046943 125.597084z m41.873519-376.767781a88.816925 88.816925 0 1 1-125.597085 0 88.910812 88.910812 0 0 1 125.644028 0z m-230.140051 104.660325a88.816925 88.816925 0 1 1-125.597085 0 88.910812 88.910812 0 0 1 125.597085 0z m-209.32065 41.850047a88.816925 88.816925 0 1 1-125.597085 0 88.910812 88.910812 0 0 1 125.52667 0zM346.378521 388.550576a176.601096 176.601096 0 0 1 44.948312 76.118734c-15.937287 14.88106-31.240837 28.846723-45.535104 41.638802a177.375662 177.375662 0 0 0-117.827951-117.358517c13.191097-14.998418 26.992459-30.301969 41.263254-45.699406a175.850001 175.850001 0 0 1 77.151489 45.300387zM649.773758 12.909437c13.63706-6.736379 49.853898-24.66876 73.396016-1.126642 6.19653 6.19653 13.355399 17.298645 12.416531 35.019781-3.708529 68.819034-161.36796 241.758544-297.433424 373.364385a237.650996 237.650996 0 0 0-124.400027-123.954065C433.247295 172.822151 571.331326 51.825521 649.773758 12.909437zM259.861823 475.067275a118.555573 118.555573 0 0 1 0 167.470603c-27.931327 27.907855-164.301923 70.673299-220.305407 90.67119A29.597818 29.597818 0 0 1 1.72003 695.396154c20.514269-57.576088 62.857221-192.467967 90.694661-220.328879a118.532102 118.532102 0 0 1 167.447132 0z"
                  p-id="4552"
                  fill="#ffffff"
                ></path></svg
              >&nbsp;<span>{{ video_img[index].name }}</span></a
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" target="_blank" class="link"
              ><svg
                t="1743086319512"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9165"
                width="200"
                height="200"
              >
                <path
                  d="M861.44 246.8864a68.266667 68.266667 0 0 1 93.422933 58.965333l0.136534 4.3008 0.477866 232.5504a68.266667 68.266667 0 0 1-89.361066 65.0752l-4.061867-1.467733-157.832533-62.583467a34.133333 34.133333 0 0 1 22.647466-64.341333l2.5088 0.887467 157.832534 62.5664-0.477867-232.533334-157.2864 62.737067a34.133333 34.133333 0 0 1-27.733333-62.327467l2.440533-1.092266 157.2864-62.737067z"
                  fill="#ffffff"
                  p-id="9166"
                ></path>
                <path
                  d="M682.666667 119.466667H136.533333a68.266667 68.266667 0 0 0-68.266666 68.266666v477.866667a68.266667 68.266667 0 0 0 68.266666 68.266667h546.133334a68.266667 68.266667 0 0 0 68.266666-68.266667V187.733333a68.266667 68.266667 0 0 0-68.266666-68.266666zM136.533333 187.733333h546.133334v477.866667H136.533333V187.733333z"
                  fill="#ffffff"
                  p-id="9167"
                ></path>
                <path
                  d="M242.5344 701.5424a34.133333 34.133333 0 0 1 62.1568 28.091733l-1.092267 2.423467-85.333333 170.666667a34.133333 34.133333 0 0 1-62.1568-28.091734l1.092267-2.423466 85.333333-170.666667zM530.875733 686.267733a34.133333 34.133333 0 0 1 44.509867 12.919467l1.28 2.3552 85.333333 170.666667a34.133333 34.133333 0 0 1-59.784533 32.8704l-1.28-2.3552-85.333333-170.666667a34.133333 34.133333 0 0 1 15.274666-45.789867z"
                  fill="#ffffff"
                  p-id="9168"
                ></path>
                <path
                  d="M512 529.066667v34.133333a34.133333 34.133333 0 0 1-34.133333 34.133333H238.933333a34.133333 34.133333 0 0 1-34.133333-34.133333v-34.133333h307.2z"
                  fill="#ffffff"
                  p-id="9169"
                ></path></svg
              >&nbsp;<span>{{ video.name }}</span></a
            >
          </div>
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
              v-for="(item, index) in duplicatedCarouselItems1"
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

    <!-- <footerVue /> -->
  </div>
</template>

<script>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
import { styleToRem } from "@/utils/pxToRem";
// import { nftData } from "@/assets/js/art.js";
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
        { src: require("@/assets/art/art1.mp4"), name: "old_six" },
        { src: require("@/assets/art/art2.mp4"), name: "old_six" },
        { src: require("@/assets/art/art3.mp4"), name: "old_six" },
        { src: require("@/assets/art/art4.mp4"), name: "old_six" },
        { src: require("@/assets/art/art5.mp4"), name: "old_six" },
      ],
      video_img: [
        {
          src: require("@/assets/test_art/Charles97019791-2.jpg"),
          name: "Kyrie tt.nad",
          twitter: "https://x.com/Charles97019791",
        },
        {
          src: require("@/assets/test_art/Charles97019791-1.jpg"),
          name: "Kyrie tt.nad",
          twitter: "https://x.com/Charles97019791",
        },
        {
          src: require("@/assets/test_art/depskydeps-1.jpg"),
          name: "depskyyy",
          twitter: "https://x.com/depskydeps",
        },
        {
          src: require("@/assets/test_art/Dreamer117Zz-2.jpg"),
          name: "Dream ⨀",
          twitter: "https://x.com/Dreamer117Zz",
        },
        {
          src: require("@/assets/test_art/depskydeps-3.jpg"),
          name: "depskyyy",
          twitter: "https://x.com/depskydeps",
        },
      ],
      video_index: -1,
      carouselItems: [
        {
          src: "/img/Charles97019791-1.5e7bb52d.jpg",
          name: "Kyrie tt.nad",
          describe: "",
          twitter: "https://x.com/Charles97019791",
        },
        {
          src: "/img/dj673285379-1.b6491777.jpg",
          name: "J King",
          describe: "",
          twitter: "https://x.com/dj673285379",
        },
        {
          src: "/img/HhhhHannah-1.e0d7b7aa.jpg",
          name: "hannah_hhhh",
          describe: "",
          twitter: "https://x.com/HhhhHannah",
        },
        {
          src: "/img/jaychen981111-1.51dfcfbb.jpg",
          name: "CHEN⌘",
          describe: "",
          twitter: "https://x.com/jaychen981111",
        },
        {
          src: "/img/melanthaia-1.5eaaf437.jpg",
          name: "melanthaia",
          describe: "",
          twitter: "https://x.com/melanthaia",
        },
        {
          src: "/img/Mido_269-1.3df5be8f.jpg",
          name: "Midodo",
          describe: "",
          twitter: "https://x.com/Mido_269",
        },
        {
          src: "/img/Pican0_o-3.6495ad84.jpg",
          name: "Picano",
          describe: "",
          twitter: "https://x.com/Pican0_o",
        },
        {
          src: "/img/Polly_r7-1.60e72ac9.jpg",
          name: "Pollyyyyy",
          describe: "",
          twitter: "https://x.com/Polly_r7",
        },
        {
          src: "/img/XHOYH-1.45cd7645.jpg",
          name: "Huan",
          describe: "",
          twitter: "https://x.com/XHOYH",
        },
        {
          src: "/img/faber4904-2.074904aa.jpg",
          name: "Faber",
          describe: "",
          twitter: "https://x.com/faber4904",
        },
        {
          src: "/img/uuprc11476591-1.afc531a7.jpg",
          name: "Lewis Herring",
          describe: "",
          twitter: "https://x.com/uuprc11476591",
        },

        {
          src: "/img/ghooolyache-1.dbf9df2f.jpg",
          name: "ghooolyache",
          describe: "",
          twitter: "https://x.com/ghooolyache",
        },
        {
          src: "/img/_Kristina8888-1.3542fc6f.jpg",
          name: "Kristina⌘",
          describe: "",
          twitter: "https://x.com/_Kristina8888",
        },
        {
          src: "/img/0xpotatoking-1.96438597.jpg",
          name: "Potato King",
          describe: "",
          twitter: "https://x.com/0xpotatoking",
        },
        {
          src: "/img/depskydeps-1.a72bb927.jpg",
          name: "depskyyy",
          describe: "",
          twitter: "https://x.com/depskydeps",
        },
        {
          src: "/img/Dreamer117Zz-1.8ef885e7.jpg",
          name: "Dream ⨀",
          describe: "",
          twitter: "https://x.com/Dreamer117Zz",
        },
        {
          src: "/img/damiyahh8-1.0aa74138.jpg",
          name: "Damiyahh",
          describe: "",
          twitter: "https://x.com/damiyahh8",
        },
        {
          src: "/img/lambe1981-1.f1d09484.jpg",
          name: "lambe⦿nad",
          describe: "",
          twitter: "https://x.com/lambe1981",
        },
        {
          src: "/img/0xAmne-1.fc8689b9.jpg",
          name: "Amne ⨀",
          describe: "",
          twitter: "https://x.com/0xAmne",
        },
      ],
      carouselItems1: [
        {
          src: "/img/Charles97019791-2.11e21831.jpg",
          name: "Kyrie tt.nad",
          describe: "",
          twitter: "https://x.com/Charles97019791",
        },
        {
          src: "/img/dj673285379-2.4692ceca.jpg",
          name: "J King",
          describe: "",
          twitter: "https://x.com/dj673285379",
        },
        {
          src: "/img/HhhhHannah-2.a44e26ac.jpg",
          name: "hannah_hhhh",
          describe: "",
          twitter: "https://x.com/HhhhHannah",
        },
        {
          src: "/img/jaychen981111-2.18b61de2.jpg",
          name: "CHEN⌘",
          describe: "",
          twitter: "https://x.com/jaychen981111",
        },
        {
          src: "/img/Mido_269-1.3df5be8f.jpg",
          name: "Midodo",
          describe: "",
          twitter: "https://x.com/Mido_269",
        },
        {
          src: "/img/Mido_269-2.3518ae9f.jpg",
          name: "Midodo",
          describe: "",
          twitter: "https://x.com/Mido_269",
        },
        {
          src: "/img/Pican0_o-2.e7ddda50.jpg",
          name: "Picano",
          describe: "",
          twitter: "https://x.com/Pican0_o",
        },
        {
          src: "/img/Polly_r7-2.cee6bf3a.jpg",
          name: "Pollyyyyy",
          describe: "",
          twitter: "https://x.com/Polly_r7",
        },
        {
          src: "/img/XHOYH-2.f64686ce.jpg",
          name: "Huan",
          describe: "",
          twitter: "https://x.com/XHOYH",
        },
        {
          src: "/img/faber4904-1.e37a0680.jpg",
          name: "Faber",
          describe: "",
          twitter: "https://x.com/faber4904",
        },
        {
          src: "/img/uuprc11476591-2.c4814ff5.jpg",
          name: "Lewis Herring",
          describe: "",
          twitter: "https://x.com/uuprc11476591",
        },
        {
          src: "/img/totomal090202-2.423bf6bc.jpg",
          name: "toto",
          describe: "",
          twitter: "https://x.com/totomal090202",
        },
        {
          src: "/img/ghooolyache-2.516853af.jpg",
          name: "ghooolyache",
          describe: "",
          twitter: "https://x.com/ghooolyache",
        },
        {
          src: "/img/_Kristina8888-2.c60f96a5.jpg",
          name: "Kristina⌘",
          describe: "",
          twitter: "https://x.com/_Kristina8888",
        },
        {
          src: "/img/0xpotatoking-2.4e0e73ad.jpg",
          name: "Potato King",
          describe: "",
          twitter: "https://x.com/0xpotatoking",
        },
        {
          src: "/img/depskydeps-2.f93aa092.jpg",
          name: "depskyyy",
          describe: "",
          twitter: "https://x.com/depskydeps",
        },
        {
          src: "/img/Dreamer117Zz-2.ead2e1d6.jpg",
          name: "Dream ⨀",
          describe: "",
          twitter: "https://x.com/Dreamer117Zz",
        },
        {
          src: "/img/damiyahh8-2.73cc6b67.jpg",
          name: "Damiyahh",
          describe: "",
          twitter: "https://x.com/damiyahh8",
        },
        {
          src: "/img/lambe1981-2.1d907d1e.jpg",
          name: "lambe⦿nad",
          describe: "",
          twitter: "https://x.com/lambe1981",
        },
        {
          src: "/img/0xAmne-2.ba5f4bcc.jpg",
          name: "Amne ⨀",
          describe: "",
          twitter: "https://x.com/0xAmne",
        },
      ],
      rawCardStyles: [
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
    duplicatedCarouselItems1() {
      return [...this.carouselItems1, ...this.carouselItems1];
    },
    // 转换为rem的样式
    floatingCardStyles() {
      return this.rawCardStyles.map((style) => styleToRem(style));
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
  min-height: 850px;
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
    // opacity: 0.3;
    filter: blur(2px);
    pointer-events: none;
    animation: rotateLogo 30s linear infinite;
  }

  .floating-card {
    position: absolute;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 15px;
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
      height: 90%;
      object-fit: cover;
      border-radius: 15px;
    }

    .auther {
      display: flex;
      align-items: center;
      height: 10%;
      .link {
        display: flex;
        align-items: center;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        .icon {
          width: 20px;
          height: 20px;
        }

        &:hover {
          color: #836ef9;
          .icon {
            path {
              fill: #836ef9;
            }
          }
        }
      }
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
  // height: calc(100vh - 100px);
  min-height: 800px;
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
    padding: 20px 0;

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
// @media (max-width: 1200px) {
//   .floating-cards-section {
//     height: auto;
//     padding: 20px 0;

//     .floating-card {
//       position: relative !important;
//       width: 90% !important;
//       height: 300px !important;
//       margin: 0 auto 20px !important;
//       transform: none !important;
//       top: auto !important;
//       left: auto !important;
//       right: auto !important;
//     }
//   }

//   .page2 .title {
//     font-size: 60px;
//   }
// }

// @media (max-width: 768px) {
//   .page2 .title {
//     font-size: 40px;
//   }

//   .page3 .all {
//     flex-direction: column;
//     gap: 20px;

//     .right {
//       width: 100%;
//       text-align: center;
//     }
//   }

//   .carousel-section .carousel-row {
//     height: 200px;

//     .carousel-item {
//       min-width: 120px !important;
//     }
//   }
// }
</style>