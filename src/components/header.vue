<template>
  <div class="navbar" :style="{ height: show_ ? 'nav_h1' : 'nav_h2' }">
    <div
      :class="`nav-container ${show_ ? 'move_nav nav-no-shadow' : ''} ${
        !isSolid ? 'nav-shadow' : 'nav-no-shadow'
      }`"
    >
      <div href="#" class="logo" @click="changePage('/')">
        <img
          :src="[
            page == '/'
              ? show_
                ? logo[0]
                : isSolid
                ? logo[0]
                : logo[1]
              : logo[0],
          ]"
          alt="Monad Logo"
        />
        <!-- <span class="tagline">社区的星际窗口</span> -->
        <!-- <span class="logo-text">Monad</span> -->
      </div>
      <div class="nav-tabs">
        <img
          :src="[
            page == '/'
              ? show_
                ? list_logo[0]
                : isSolid
                ? list_logo[0]
                : list_logo[1]
              : list_logo[0],
          ]"
          v-if="!show_"
          @click="changeShow"
          alt="Monad Logo"
        />
        <!-- <svg
          t="1742531823422"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2602"
          width="200"
          height="200"
          v-if="!show_"
          @click="changeShow"
        >
          <path
            d="M892.928 128q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0zM892.928 448.512q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0zM892.928 769.024q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0z"
            p-id="2603"
            fill="#ffffff"
          ></path>
        </svg> -->
        <svg
          t="1742531941375"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7765"
          width="200"
          height="200"
          v-else
          @click="changeShow"
        >
          <path
            d="M736.914743 511.95733l224.957413-224.957413c62.127844-62.127844 62.127844-162.829569 0-224.957413C899.744312 0 799.042587 0 736.914743 62.127844L511.95733 287.085257 287.085257 62.127844C224.957413 0 124.255688 0 62.127844 62.127844 0 124.255688 0 224.957413 62.127844 287.085257l224.957413 224.957413L62.127844 736.914743C0 799.042587 0 899.744312 62.127844 961.872156c62.127844 62.127844 162.829569 62.127844 224.957413 0l224.957413-224.957413 224.957413 224.957413c62.127844 62.127844 162.829569 62.127844 224.957413 0 62.127844-62.127844 62.127844-162.829569 0-224.957413L736.914743 511.95733z"
            p-id="7766"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
    <div :class="`show-list ${!show_ ? 'list_old' : 'hidden_list'}`">
      <div
        v-for="(item, i) in tabData"
        :key="i"
        @click="changePage(item.page)"
        @mouseenter="handleMouseEnter(i)"
        @mouseleave="handleMouseLeave"
      >
        <img
          :src="tab_index == i ? item.src1 : item.src"
          alt=""
          :class="item.name == 'Suggestion' ? 'img_Suggestion' : ''"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_: false,
      tabData: [
        {
          name: "HOME",
          page: "/",
          src: require("@/assets/header/home.png"),
          src1: require("@/assets/header/home_bright.png"),
        },
        {
          name: "NFT",
          page: "/Allnft",
          src: require("@/assets/header/nft.png"),
          src1: require("@/assets/header/nft_bright.png"),
        },
        {
          name: "Art",
          page: "/Draw",
          src: require("@/assets/header/art.png"),
          src1: require("@/assets/header/art_bright.png"),
        },
        {
          name: "Suggestion",
          page: "/Suggestion",
          src: require("@/assets/header/contributors.png"),
          src1: require("@/assets/header/contributors_bright.png"),
        },
      ],
      isSolid: false,
      scrollThreshold: 100,
      page: "",
      logo: [
        require("../assets/header/monad.png"),
        require("../assets/header/monad1.png"),
      ],
      list_logo: [
        require("../assets/header/list_logo.png"),
        require("../assets/header/list_logo1.png"),
      ],
      tab_index: -1,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // 初始化检查
    this.handleScroll();
    this.page = this.$route.path;
    this.page != "/" ? (this.isSolid = true) : "";
  },
  methods: {
    handleScroll() {
      if (this.page != "/") return "";
      this.isSolid = window.scrollY > this.scrollThreshold;
      // console.log(this.isSolid);
    },
    changeShow() {
      this.show_ = !this.show_;
    },
    changePage(e) {
      //   console.log(e);
      //   判断是否在当前页面
      //   console.log(this.$route, e);
      if (this.$route.path == e) return "";
      this.$router.push(e);
    },
    handleMouseEnter(i) {
      this.tab_index = i;
    },
    handleMouseLeave() {
      this.tab_index = -1;
    },
  },
};
</script>
<style lang="less" scoped>
.nav_h1 {
  height: 100vh !important;
}
.nav_h2 {
  height: 100px !important;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 100px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    z-index: 1001;
    transition: transform 0.3s ease-out; /* 修正为 transform */

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;

      img {
        margin-right: 10px;
        height: 60px;
        pointer-events: none; /* 禁止图片的交互 */
      }

      .logo-text {
        font-size: 30px;
        font-weight: 600;
        background: linear-gradient(to right, #fff, #9f7aea);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .nav-tabs {
      display: flex;

      img {
        width: 50px;
        height: 50px;
        cursor: pointer;
      }

      svg {
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  .nav-no-shadow {
    background: #1a1a1a !important;
  }

  .nav-shadow {
    background: hsla(0, 0%, 100%, 0.5);
  }
  .show-list {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    max-height: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #1d1d1d; /* 添加背景色 */
    transition: max-height 0.3s ease-out;
    z-index: 999; /* 列表在导航栏之下 */

    div {
      line-height: 120px;
      font-family: "Poppins", Sans-serif;
      font-size: 80px;
      font-weight: 700;
      text-transform: uppercase;
      color: #c0c0c0;
      &:hover {
        color: #fff;
        cursor: pointer;
      }

      img {
        /* 禁止选中 */
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;

        /* 禁止拖动 */
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
      }

      .img_Suggestion {
        height: 65px;
      }
    }
  }

  .move_nav {
    transform: translateY(calc(100vh - 100%));
  }
  /* 收起时高度为 0 */
  .list_old {
    max-height: 0;
  }
  /* 展开时高度为 100vh */
  .hidden_list {
    max-height: 100vh;
  }
}
</style>
