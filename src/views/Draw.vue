<template>
  <div class="wrap">
    <headerVue />
    <div class="big_title container fall-enter-active">
      <div class="t1">Monad's Interstellar Gallery</div>
      <div class="t2">
        <!-- Monad的星际画廊
        "在Monad高速区块链的引擎轰鸣中，来自全球的艺术家们汇聚于此，用色彩与线条勾勒出社区的梦想。
这里，每一幅画作都是Monad精神的缩影——去中心化的节点如繁星闪耀，超速的执行如光流奔腾，共同构筑起一个艺术与技术交融的乌托邦。探索这片光谱，加入这场创意的星际旅程。" -->
        <span>
          Amidst the roar of Monad's high-speed blockchain engine, artists from
          around the world gather here to outline the dreams of the community
          with colors and lines.Here, each painting is a microcosm of the Monad
          spirit - decentralized nodes shining like stars, speeding execution
          like a rushing stream of light, jointly building a utopia where art
          and technology blend together. Explore this spectrum and join this
          creative interstellar journey.
        </span>
      </div>
    </div>
    <div class="waterfall-container">
      <!-- 瀑布流列容器 -->
      <div
        class="waterfall-column"
        v-for="(column, index) in columns"
        :key="index"
      >
        <!-- 每个图片盒子 -->
        <div class="image-box" v-for="(item, index) in column" :key="index">
          <img :src="item.src" :alt="item.name" @load="onImageLoad" />
          <div class="image-info">
            <a :href="item.twitter" target="_blank">
              <h3>
                <img src="@/assets/auther.png" alt="" />
                <span> {{ item.name }}</span>
              </h3>
              <p>{{ item.describe }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
import { artList } from "@/assets/js/art.js";
import { getImg } from "@/assets/js/draw.js";
export default {
  name: "WaterfallGallery",
  components: {
    headerVue,
    footerVue,
  },
  data() {
    return {
      showText: false,
      // 图片数据
      imgList: [...artList],
      columnCount: 4, // 列数
      loadedImages: 0, // 已加载图片计数
    };
  },
  computed: {
    // 将图片分配到各列
    columns() {
      const columns = Array.from({ length: this.columnCount }, () => []);
      this.imgList.forEach((image, index) => {
        columns[index % this.columnCount].push(image);
      });
      const newArray = [...columns];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
      // return columns;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    // let data = getImg("Charles97019791-1.jpg");
    // console.log(data);
  },
  methods: {
    shuffleImages() {
      this.columns = this.shuffleArray(this.columns);
    },
    shuffleArray(array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    },
    // 图片加载完成回调
    onImageLoad(event) {
      this.loadedImages++;
      if (this.loadedImages === this.imgList.length) {
        console.log("所有图片加载完成");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.wrap {
  padding-top: 100px;

  .container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }

  .big_title {
    margin: 80px auto 50px;
    text-align: center;
    .t1 {
      font-size: 40px;
    }

    .t2 {
      margin-top: 15px;
      font-size: 20px;
      span {
        display: block;
      }
    }
  }
  /* 定义进入动画 */
  .fall-enter-active {
    animation: fallDown 0.5s ease-out;
  }

  /* 定义动画 */
  @keyframes fallDown {
    from {
      transform: translateY(-100vh); /* 从上方开始 */
    }
    to {
      transform: translateY(0); /* 掉落到最终位置 */
    }
  }

  .waterfall-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    max-width: 1500px;
    margin: 0 auto;

    .waterfall-column {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: calc((100% - 40px) / 3); /* 3列，考虑间隙 */

      .image-box {
        width: 100%;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        img {
          width: 100%;
          display: block;
          object-fit: cover;
        }

        .image-info {
          padding: 15px;

          h3 {
            display: flex;
            align-content: center;
            margin: 0 0 8px 0;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            color: #333;

            &:hover {
              span {
                color: #836ef9;
              }
            }

            img {
              width: 25px;
              height: 25px;
            }
          }

          p {
            margin: 0;
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }

  /* 响应式设计 */
  @media (max-width: 900px) {
    .waterfall-column {
      width: calc((100% - 20px) / 2); /* 2列 */
    }
    .columnCount {
      columncount: 2;
    }
  }

  @media (max-width: 600px) {
    .waterfall-column {
      width: 100%; /* 1列 */
    }
    .columnCount {
      columncount: 1;
    }
  }
}
</style>
