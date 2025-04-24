<template>
  <div class="wrap">
    <headerVue />
    <div class="page1">
      <!-- <img src="@/assets/home/all.png" alt="" /> -->
      <div class="swiper-container">
        <swiper :options="swiperOptions" ref="mySwiper" @transitionEnd="checkLoop">
          <swiper-slide v-for="(item, index) in slides" :key="index">
            <img :src="item.image" class="slide-image" />
          </swiper-slide>

          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="change_box">
          <a class="auther" :href="slides[swiper_index].src" target="_blank">
            <span>art：{{ slides[swiper_index].name }}</span>
          </a>
        </div>
        <!-- <div class="shadow-overlay"></div> -->
      </div>
    </div>
    <div class="page2">
      <div class="big_title container">
        <!-- <div class="t1">Welcome to Monad NFT and the Art World</div> -->
        <div class="title_img">
          <img src="@/assets/home/home_title1.png" alt="" />
        </div>
        <div class="t2">
          <span>
            Monad is a high-speed, high-performance Layer 1 blockchain that
            brings together countless innovative NFT projects and talented
            artists.
          </span>
          <span>
            Through this webpage, you can take a look at the exciting content of
            the Monad ecosystem: from unique NFT mascots to stunning digital
            paintings, exploring the beauty of the fusion of art and technology
            that belongs to the future.
          </span>
        </div>
      </div>
      <div class="cards-container">
        <!-- 卡片1 -->
        <!-- 闪电般的速度  
拥有每秒数十万次交易的处理能力，Monad快如星际跃迁，为dApp提供超强支持，告别延迟！
﻿
多线程魔法  
并行处理让NFT和艺术创作效率翻倍，极致性能释放无限创意！"
﻿
星际去中心化  
节点连接成宇宙网络，Monad赋予自由，开发者工具让dApp开发超简单！" -->
        <div class="card">
          <div class="card-img">
            <img src="../assets/home/icon1.png" alt="卡片1 Logo" />
            <div class="card-title">Lightning speed</div>
          </div>
          <div class="card-content">
            <img src="../assets/home/icon_omit.png" alt="" />
            <div class="card-desc">
              With the processing power of hundreds of thousands of transactions
              per second, Monad is as fast as interstellar leap, providing super
              support for dApps and bidding farewell to delays!
            </div>
          </div>
        </div>

        <!-- 卡片2 -->
        <div class="card">
          <div class="card-img">
            <img src="../assets/home/icon2.png" alt="卡片2 Logo" />
            <div class="card-title">Multi threaded magic</div>
          </div>
          <div class="card-content">
            <img src="../assets/home/icon_omit.png" alt="" />
            <div class="card-desc">
              Parallel processing doubles the efficiency of NFT and art
              creation, unleashing unlimited creativity with ultimate
              performance!
            </div>
          </div>
        </div>

        <!-- 卡片3 -->
        <div class="card">
          <div class="card-img">
            <img src="../assets/home/icon3.png" alt="卡片3 Logo" />
            <div class="card-title">Decentralized Galaxy</div>
          </div>
          <div class="card-content">
            <img src="../assets/home/icon_omit.png" alt="" />
            <div class="card-desc">
              Nodes connect to form a cosmic network, Monad grants freedom, and
              developer tools make dApp development super easy!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page3">
      <div class="big_title container">
        <!-- NFT星云：Monad的数字疆域
探索这些吉祥物背后的故事——它们是通往Monad生态的密钥，也是未来数字经济的脉动信号。 -->
        <div class="title_img">
          <img src="@/assets/home/nft_title.png" alt="" />
        </div>
        <!-- <div class="t1">NFT Nebula: Monad's Digital Territory</div> -->
        <div class="t2">
          Explore the stories behind these mascots - they are the keys to the
          Monad ecosystem and the pulsating signals of the future digital
          economy.
        </div>
      </div>
      <div class="all container">
        <div class="left">
          Monad's artists paint the future with neon brushstrokes
        </div>
        <div class="right" @click="changePage">
          view all
          <svg t="1742415414024" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1638" width="200" height="200">
            <path
              d="M533.33333333 448l0 128-458.688 1e-8c-29.44 0-53.312-23.872-53.312-53.31200001l0-21.376A53.312 53.312 0 0 1 74.64533333 447.99999999L533.33333333 448z"
              fill="#ffffff" p-id="1639"></path>
            <path
              d="M614.61333334 242.176l358.07999999 220.79999999a53.312 53.312 0 0 1 0.57600001 90.43200001l-358.08000001 226.752A53.312 53.312 0 0 1 533.33333333 735.104L533.33333333 287.552a53.312 53.312 0 0 1 81.28-45.44z"
              fill="#ffffff" p-id="1640"></path>
          </svg>
        </div>
      </div>
      <div class="all_nft">
        <div class="item" v-for="(item, i) in nftList" :key="i" @mouseenter="hoverBox(i)" @mouseleave="resetBox">
          <img class="nft_img" :src="item.avatar_url" alt="" />
          <div :class="`shadow ${moveIndex == i ? 'select_box' : ''}`">
            <div class="small_logo">
              <a :href="item.twitter || '#'" :target="item.twitter ? '_blank' : null" :class="{ a_hover: item.twitter }"
                @click="!item.twitter && $event.preventDefault()">
                <svg t="1742673219379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="15215" width="40" height="40">
                  <path
                    d="M44.928 85.312l362.432 484.672-364.672 394.112h82.048l319.36-344.96 257.92 344.96h279.296l-382.72-512 339.392-366.72h-82.048L561.856 403.008 324.288 85.312H44.928z m120.704 60.48h128.256l566.656 757.76H732.16L165.632 145.856z"
                    p-id="15216" :fill="item.twitter != '' ? '#ffffff' : '#929090'"></path>
                </svg>
              </a>
              <a :href="item.discord_url || '#'" :target="item.discord_url ? '_blank' : null"
                :class="{ a_hover: item.discord_url }" @click="!item.discord_url && $event.preventDefault()">
                <svg t="1742672913599" class="icon" viewBox="0 0 1117 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="10460" width="40" height="40">
                  <path
                    d="M1108.66215 815.706125l-3.165079 29.556256-14.894491 12.101774-7.959244 6.469795c-104.35453 84.619329-251.670358 141.916575-374.875728 158.114334l-12.008683 1.58254a55.016527 55.016527 0 0 1-58.972877-36.212232l-60.555416-169.704111a55.714706 55.714706 0 0 1 2.187628-42.821662h-39.935854c6.330159 13.03268 7.633427 28.53226 2.327264 43.287115l-60.508871 169.285203c-8.703968 24.203548-33.000607 39.563492-58.926331 36.165687l-12.055229-1.58254c-123.20537-16.197759-270.521198-73.541551-374.875728-158.114334l-22.80719-18.571569-2.094538-19.083567-1.117086-10.472689c-24.343184-226.210087 3.583987-545.557289 72.191737-727.409719l3.25817-8.750513c8.610878-16.29085 8.610878-16.29085 24.250094-26.437722l8.378151-4.002895C183.109152 17.454482 265.215036 5.119981 389.723674 0h105.145799c38.539496 0 56.226705 38.911859 43.473297 67.490664a1019.62102 1019.62102 0 0 1 48.453642 0.186181C573.810277 39.09804 591.590576 0 630.223163 0h99.188003c122.553736 5.119981 204.659619 17.501027 271.172832 49.105276l8.285061 3.909804c15.965033 10.472689 15.965033 10.472689 24.250093 26.298086l3.397806 8.98324c68.607751 181.85243 96.534922 501.199632 72.191738 727.409719zM839.770037 101.934175l10.519235 5.259617c50.64127 25.27409 22.621009 103.935622-33.745332 88.529133A978.94044 978.94044 0 0 0 558.543423 160.348508c-85.177872 0-171.519376 11.775957-257.209246 35.14169-56.738703 15.359944-84.386602-64.092858-33.140243-88.854949l10.007236-4.84071c-46.545285 5.957797-83.502242 14.754855-113.570496 27.694445-59.857237 166.166668-85.457144 458.843422-64.558311 667.599027 84.479693 65.954669 202.332355 113.105043 302.963262 129.8148l35.234781-98.443278c-85.084782-18.059571-165.468489-55.993978-232.726426-119.807564-37.422409-35.514053-0.465453-100.630907 50.920542-80.709525 5.585434 2.187628 10.239963 4.04944 21.178105 8.517787 23.924277 9.77451 34.443511 13.777404 41.146032 15.453035 64.092858 15.918488 128.883895 25.553362 193.162934 28.671896l92.99748-0.418908a969.86411 969.86411 0 0 0 193.349115-28.252988c6.702521-1.67563 17.314846-5.678525 41.146032-15.453035 10.798506-4.421802 15.546125-6.330159 21.178105-8.517787 51.43254-19.967927 88.342951 45.242017 50.920542 80.75607-67.071756 63.58086-147.548554 101.329086-232.726426 119.388657l35.281326 98.81564c100.630907-16.756303 218.437024-63.906677 302.916717-129.861346 20.898833-208.709059-4.654529-501.339268-64.558311-667.552481-29.975164-12.893044-66.699394-21.690103-112.686136-27.601355zM423.748277 447.300192c4.282166-50.361999-34.908964-91.32185-80.616434-87.039684-34.862419 3.25817-63.906677 33.652241-67.164847 71.865921-4.282166 50.408544 34.815873 91.32185 80.569889 87.039683 34.908964-3.25817 63.953222-33.652241 67.211392-71.86592z m-58.553969 164.584128c-104.726892 9.77451-191.114941-80.616434-181.992065-187.624045 6.981793-82.4317 70.841924-149.177639 151.272177-156.67143 104.726892-9.77451 191.114941 80.569889 181.992066 187.5775-6.981793 82.4317-70.795379 149.177639-151.272178 156.717975zM841.073305 447.300192c4.328712-50.361999-34.815873-91.32185-80.523343-87.039684-34.908964 3.25817-63.953222 33.652241-67.211392 71.865921-4.282166 50.408544 34.815873 91.32185 80.569889 87.039683 34.908964-3.25817 63.906677-33.652241 67.164846-71.86592z m-58.507423 164.584128c-104.726892 9.77451-191.114941-80.616434-181.992066-187.624045 6.981793-82.4317 70.841924-149.177639 151.272177-156.67143 104.726892-9.77451 191.114941 80.569889 181.992066 187.5775-6.981793 82.4317-70.795379 149.177639-151.272177 156.717975z"
                    :fill="item.discord_url != '' ? '#ffffff' : '#929090'" p-id="10461"></path>
                </svg>
              </a>
              <a :href="item.magiceden_url || '#'" :target="item.magiceden_url ? '_blank' : null"
                :class="{ a_hover: item.magiceden_url }" @click="!item.magiceden_url && $event.preventDefault()">
                <svg t="1742673303151" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="17132" width="40" height="40">
                  <path
                    d="M703.5904 376.23808l53.98528 63.42656c6.18496 7.12704 11.65312 12.98432 13.86496 16.32256 16.13824 16.03584 25.1904 37.72416 25.1904 60.3136-1.51552 26.66496-18.88256 44.81024-34.97984 64.22528l-37.76512 44.35968-19.70176 22.97856a5.38624 5.38624 0 0 0-0.83968 5.89824c0.45056 0.96256 1.18784 1.76128 2.10944 2.29376 0.9216 0.55296 1.96608 0.8192 3.05152 0.77824h196.9152c30.08512 0 67.97312 25.27232 65.76128 63.65184-0.06144 17.44896-7.12704 34.16064-19.64032 46.4896-12.51328 12.32896-29.47072 19.29216-47.16544 19.3536H595.968c-20.29568 0-74.8544 2.19136-90.112-44.3392-3.25632-9.728-3.6864-20.15232-1.29024-30.1056 4.44416-14.72512 11.4688-28.5696 20.74624-40.89856 15.50336-22.97856 32.29696-45.95712 48.8448-68.23936 21.34016-29.184 43.25376-57.4464 64.8192-87.20384 0.75776-0.96256 1.18784-2.17088 1.18784-3.3792 0-1.2288-0.4096-2.41664-1.18784-3.3792l-78.336-91.91424c-0.512-0.67584-1.16736-1.20832-1.92512-1.57696-0.75776-0.36864-1.59744-0.57344-2.43712-0.57344-0.83968 0-1.67936 0.18432-2.43712 0.57344-0.75776 0.36864-1.41312 0.9216-1.92512 1.57696-20.992 27.91424-112.8448 151.552-132.44416 176.59904-19.57888 25.04704-67.85024 26.4192-94.55616 0l-122.53184-121.22112c-0.77824-0.77824-1.78176-1.31072-2.8672-1.51552-1.08544-0.2048-2.21184-0.1024-3.23584 0.3072s-1.90464 1.1264-2.51904 2.02752c-0.6144 0.90112-0.94208 1.98656-0.94208 3.072v233.12384c0.28672 16.54784-4.68992 32.768-14.21312 46.3872-9.5232 13.6192-23.1424 23.9616-38.95296 29.57312a67.76832 67.76832 0 0 1-31.45728 3.01056 67.44064 67.44064 0 0 1-29.36832-11.53024 66.17088 66.17088 0 0 1-20.74624-23.51104c-4.9152-9.35936-7.49568-19.72224-7.51616-30.24896V303.73888c0.69632-15.11424 6.22592-29.61408 15.7696-41.45152a72.966144 72.966144 0 0 1 37.39648-24.49408 75.44832 75.44832 0 0 1 38.66624 0.1024 74.4448 74.4448 0 0 1 33.3824 19.21024l188.39552 185.89696c0.57344 0.57344 1.24928 1.00352 2.00704 1.26976s1.55648 0.38912 2.3552 0.32768c0.79872-0.06144 1.57696-0.3072 2.27328-0.69632 0.69632-0.38912 1.29024-0.94208 1.76128-1.57696l133.8368-182.55872c6.18496-7.41376 13.94688-13.39392 22.71232-17.55136a67.6864 67.6864 0 0 1 28.11904-6.47168h348.11904c9.5232 0.02048 18.944 2.02752 27.60704 5.91872 8.66304 3.8912 16.40448 9.56416 22.67136 16.62976a65.61792 65.61792 0 0 1 13.68064 24.3712c2.74432 8.99072 3.52256 18.45248 2.2528 27.7504-2.4576 16.13824-10.77248 30.86336-23.38816 41.43104a68.990976 68.990976 0 0 1-45.28128 16.01536h-194.92864c-0.98304 0.02048-1.92512 0.3072-2.7648 0.8192-0.83968 0.512-1.51552 1.2288-1.96608 2.08896-0.45056 0.86016-0.65536 1.82272-0.6144 2.78528 0.1024 0.94208 0.4096 1.86368 0.96256 2.68288z"
                    p-id="17133" :fill="item.magiceden_url != '' ? '#ffffff' : '#929090'"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mascot_box">
      <div class="mascot_1">
        <div class="nft"><img src="../assets/home/chog.png" alt="" /></div>
        <div class="details">
          <!-- <div class="title">CHOG</div> -->
          <div class="chog_title">
            <img src="@/assets/home/chog_title.png" alt="" />
          </div>
          <div class="p">
            <!-- 星辰修复者"，是Monad宇宙中的紫色光芒。它们修复破损星空，可爱又神秘。 -->
            <span>· The 'Star Repairer' is the purple light in the Monad universe.
            </span>
            <span>
              · They repair damaged starry skies, cute and mysterious.
            </span>
            <span>· Chog is the house for the wise and industrious who value
              intellect, strategy, and tireless work ethic.</span>
          </div>
        </div>
      </div>
      <div class="mascot_2">
        <div class="nft"><img src="../assets/home/moyaki.png" alt="" /></div>
        <div class="details">
          <!-- <div class="title">MOYAKI</div> -->
          <div class="moyaki_title">
            <img src="@/assets/home/moyaki_title.png" alt="" />
          </div>
          <div class="p">
            <!-- "波浪引导者"，在星际水域中闪耀，鳞片如星光流动。它们指引旅人，优雅而神秘。 -->
            <span>· The 'Wave Navigator' shines in the interstellar waters, with
              scales flowing like starlight. They guide travelers, elegant and
              mysterious.
            </span>
            <span>· Moyaki swims for those who rise from humble beginnings with an
              unyielding drive to succeed.</span>
          </div>
        </div>
      </div>
      <div class="mascot_3">
        <div class="nft"><img src="../assets/home/molandak.png" alt="" /></div>
        <div class="details">
          <!-- <div class="title">MOLANDAK</div> -->
          <div class="molandak_title">
            <img src="@/assets/home/molandak_title.png" alt="" />
          </div>
          <div class="p">
            <!-- "时间旅者"，是紫色刺猬形象的社区宠儿。顽皮又坚韧，它们活跃于时间交汇处。 -->
            <span>· Time Traveler "is the darling of the community with the image
              of a purple hedgehog. Naughty and resilient, they are active at
              the intersection of time.
            </span>
            <span>· Known for courage and tradition, Molandak is home to the
              brave-hearted who rip challenges head-on.
            </span>
          </div>
        </div>
      </div>
    </div>
    <art />
    <footerVue />
  </div>
</template>
<script>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
import art from "@/views/Art.vue";
// import { home_nft } from "@/assets/js/nft.js";
import { get_contributors, get_home_nft, } from "@/assets/js/draw.js";
export default {
  components: {
    headerVue,
    footerVue,
    art,
  },
  data() {
    return {
      isTabVisible: false, // 控制 Tab 的显示和隐藏
      nftList: [],
      moveIndex: -1,
      swiperOptions: {
        effect: "fade",
        // 核心配置
        autoplay: {
          delay: 3000, // 3秒切换
          disableOnInteraction: false, // 操作后继续播放
          waitForTransition: true, // 等待动画完成
        },
        loop: true, // 开启无限循环
        speed: 1000, // 切换速度(ms)

        // 分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        },

        // 解决loop模式下的克隆问题
        loopAdditionalSlides: 1,
        loopFillGroupWithBlank: true,
      },
      slides: [
        {
          image: require("@/assets/home/carousel3.png"),
          name: "CHEN⌘",
          src: "https://x.com/jaychen981111",
        },
        {
          image: require("@/assets/home/all.png"),
          name: "Picano.nad 🐼⌘(💜,💜)",
          src: "https://x.com/Pican0_o",
        },
        {
          image: require("@/assets/home/carousel1.png"),
          name: "Reum | M⨀nad💜",
          src: "https://x.com/Reum_House",
        },
        {
          image: require("@/assets/home/carousel2.png"),
          name: "Reum | M⨀nad💜",
          src: "https://x.com/Reum_House",
        },
      ],
      swiper_index: 0, // 当前轮播图的index
    };
  },
  async created() {
    const data = await get_home_nft()
    if (data.code == 200) {
      this.nftList = data.data
    }
  },
  async mounted() {
    const data = await get_contributors()
    console.log(data);

    window.scrollTo(0, 0);
    // 确保自动播放初始化
    this.$nextTick(() => {
      if (this.swiperInstance) {
        this.swiperInstance.autoplay.start();
      }
    });
  },
  methods: {
    changePage() {
      this.$router.push("/Allnft");
    },
    hoverBox(index) {
      this.moveIndex = index;
    },
    resetBox() {
      this.moveIndex = -1;
    },
    checkLoop() {
      this.swiper_index = this.$refs.mySwiper.$swiper.realIndex;
      if (this.swiperInstance) {
        const realIndex = this.swiperInstance.realIndex;
        const isLastSlide = realIndex === this.slides.length - 1;

        // 如果是最后一张且没有正确循环，手动重置
        if (isLastSlide && !this.swiperInstance.animating) {
          this.$nextTick(() => {
            this.swiperInstance.slideToLoop(0, 0);
          });
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.wrap {
  .container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }

  .page1 {
    height: 100vh;
    width: 100%;

    img {
      width: 100%;
    }

    /* 分页器样式 */

    .swiper-container {
      width: 100%;
      height: 100%;
      position: relative;

      .slide-image {
        width: 100%;
        height: 100%;
        // object-fit: cover;
      }

      .swiper-pagination {
        /deep/ .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          margin: 0 8px;
        }

        /deep/ .swiper-pagination-bullet-active {
          background: #fff;
          transform: scale(1.2);
        }
      }

      .change_box {
        position: absolute;
        // top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50%;
        background-color: pink;
        z-index: 999;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
        opacity: 1;
        transform: translateY(100%);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        display: flex;
        align-items: flex-end;
        padding: 15px;
        color: white;
        // z-index: 999;
        // opacity: 0;

        .auther {
          position: absolute;
          bottom: 30px;
          right: 50px;
          width: 400px;
          font-size: 25px;

          &:hover {
            color: #836ef9;
          }
        }
      }

      &:hover {
        .change_box {
          transform: translateY(0);

          // opacity: 1;
          .auther {
            cursor: pointer;
          }
        }
      }
    }
  }

  .page2 {
    padding: 100px 0 150px;
    width: 100%;

    .big_title {
      margin: 80px auto 100px;
      text-align: center;

      .t1 {
        font-size: 40px;
        background: linear-gradient(to right, #fff, var(--monad-light-purple));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .title_img {
        text-align: center;
        margin-bottom: 20px;

        img {
          width: 1000px;
        }
      }

      .t2 {
        margin-top: 15px;
        font-size: 20px;
        font-weight: 600;

        span {
          display: block;
        }
      }
    }

    .cards-container {
      display: flex;
      gap: 50px;
      flex-wrap: wrap;
      justify-content: center;

      .card {
        border: 1px solid #cccfd3;
        width: 380px;
        height: 480px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        position: relative;
        transition: all 0.3s ease;

        .card-img {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transition: all 0.3s ease;

          img {
            margin-top: 90px;
            width: 100px;
            height: 100px;
            object-fit: contain;
            transition: all 0.3s ease;
          }

          .card-title {
            margin-top: 50px;
            font-size: 26px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 600;
            line-height: 24px;
          }
        }

        .card-content {
          padding: 20px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            margin-top: 90px;
            width: 50px;
            transition: all 0.4s ease;
          }

          .card-desc {
            margin: 30px auto 0;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #d8e0ee;
            opacity: 0;
            transition: all 0.5s ease;
          }
        }
      }

      .card:hover {
        .card-img {
          img {
            margin-top: 50px;
          }
        }

        .card-content {
          img {
            margin-top: 15px;
          }

          .card-desc {
            margin-top: 20px;
            opacity: 1;
          }
        }
      }
    }
  }

  .mascot_box {
    // position: relative;
    width: 100%;

    .mascot_1,
    .mascot_2,
    .mascot_3 {
      .details {
        position: absolute;
        width: 1000px;

        .title {
          font-family: "Poppins", Sans-serif;
          font-size: 100px;
          font-weight: 600;
        }

        .p {
          margin-top: 40px;
          font-size: 25px;
          font-weight: 600;

          span {
            display: block;
          }
        }
      }
    }

    .mascot_1 {
      position: relative;
      // position: absolute;
      // top: 0;
      height: 700px;
      width: 100%;
      background-color: #ccfc3a;
      /* 背景色 */
      clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%);
      /* 梯形裁剪 */
      z-index: 3;

      .chog_title {
        width: 240px;
        height: 73px;
      }

      .nft {
        position: absolute;
        top: 100px;
        left: 200px;
        width: 450px;

        img {
          width: 100%;
        }
      }

      .details {
        top: 150px;
        right: 100px;
        color: #000;
      }
    }

    .mascot_2 {
      position: relative;
      // position: absolute;
      // top: 470px;
      margin-top: -210px;
      height: 800px;
      width: 100%;
      background-color: #a45ff2;
      /* 背景色 */
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 85%);
      /* 梯形裁剪 */
      z-index: 2;

      .nft {
        position: absolute;
        top: 0;
        right: 0px;
        width: 800px;

        img {
          width: 100%;
        }
      }

      .details {
        top: 280px;
        left: 200px;
        // color: #000;
        width: 950px;

        .moyaki_title {
          width: 326px;
          height: 73px;
        }
      }
    }

    .mascot_3 {
      // position: absolute;
      position: relative;
      margin-top: -150px;
      // top: 1100px;
      height: 800px;
      width: 100%;
      background-color: #7fa6b7;
      /* 背景色 */
      clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
      /* 梯形裁剪 */
      z-index: 1;

      .nft {
        position: absolute;
        top: 100px;
        left: 150px;
        width: 600px;

        img {
          width: 100%;
        }
      }

      .details {
        top: 250px;
        right: 100px;
        width: 950px;

        .molandak_title {
          width: 477px;
          height: 73px;
        }
      }
    }
  }

  .page3 {
    // position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    background: url("../assets/home/nft_bg.png") no-repeat;
    background-size: 100% 100%;

    .big_title {
      text-align: center;

      .title_img {
        text-align: center;

        img {
          width: 950px;
        }
      }

      .t1 {
        font-size: 40px;
      }

      .t2 {
        margin-top: 15px;
        font-weight: 600;
        font-size: 20px;
      }
    }

    .all {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      margin-top: 50px;
      font-size: 18px;

      .left {
        opacity: 0;
      }

      .right {
        position: relative;
        padding: 0 50px 0 10px;
        height: 46px;
        line-height: 42px;
        box-sizing: border-box;
        border: 2px solid #fff;
        border-radius: 8px;
        cursor: pointer;

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

    .all_nft {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      max-width: 1500px;

      .item {
        position: relative;
        margin-right: 10px;
        margin-bottom: 10px;
        width: 360px;
        height: 350px;
        background-color: #fff;
        cursor: pointer;
        transition: scale 0.3s ease;

        &:hover {
          scale: 1.1;
          z-index: 10;
          border-radius: 15px;
          overflow: hidden;
        }

        .nft_img {
          width: 100%;
          height: 100%;
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

          .small_logo {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            padding: 30px 50px;

            .a_hover {
              svg:hover {
                path {
                  fill: #836ef9;
                }
              }
            }
          }
        }

        .select_box {
          opacity: 0.9;
          shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
}
</style>