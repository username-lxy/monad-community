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
      <!-- <div class="nav-right">
        <div v-if="!user" class="login-button" @click="handleLogin">
          <svg
            t="1742673219379"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="15215"
            width="24"
            height="24"
          >
            <path
              d="M44.928 85.312l362.432 484.672-364.672 394.112h82.048l319.36-344.96 257.92 344.96h279.296l-382.72-512 339.392-366.72h-82.048L561.856 403.008 324.288 85.312H44.928z m120.704 60.48h128.256l566.656 757.76H732.16L165.632 145.856z"
              p-id="15216"
              fill="#ffffff"
            ></path>
          </svg>
          <span>Login with Twitter</span>
        </div>
        <div v-else class="user-info">
          <div class="user-trigger" @click="showLogoutModal = true">
            <img :src="user.photoURL" class="avatar" alt="avatar">
            <span class="username">{{ user.displayName }}</span>
          </div>
        </div>
      </div> -->
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

    <!-- 添加退出登录模态框 -->
    <div v-if="showLogoutModal" class="modal-overlay" @click="showLogoutModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>退出登录</h3>
        </div>
        <div class="modal-body">
          <p>确定要退出登录吗？</p>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="showLogoutModal = false">取消</button>
          <button class="logout-btn" @click="handleLogout">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, TwitterAuthProvider, signOut } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { mapState, mapActions } from 'vuex';
import { post_login } from '@/assets/js/draw';

const firebaseConfig = {
  apiKey: "AIzaSyAyDt5mRmJS5A08wLa-T57RqUhMPiOMBow",
  authDomain: "monadshow-9e6ee.firebaseapp.com",
  projectId: "monadshow-9e6ee",
  storageBucket: "monadshow-9e6ee.firebasestorage.app",
  messagingSenderId: "358594286461",
  appId: "1:358594286461:web:83c73c764ce42a9d2b7214",
  measurementId: "G-VDZ2SBZ969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default {
  data() {
    return {
      show_: false,
      showLogoutModal: false,
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
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['login', 'logout']),
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
      // 添加一个小延迟，让用户有时间移动到下拉菜单
      setTimeout(() => {
        this.showLogoutModal = false;
      }, 100);
    },
    async handleLogin() {
      try {
        const provider = new TwitterAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const firebaseToken = await user.getIdToken();
        
        try {
          const response = await post_login(firebaseToken);
          console.log('Login response:', response); // 添加调试日志
          
          if (!response || !response.token) {
            throw new Error('Invalid response from server');
          }
          
          const { token, user: userData } = response;
          
          // 确保 token 存在
          if (!token) {
            throw new Error('Token is missing from response');
          }
          console.log('token:', token);
          console.log('userData:', userData);
          // 先更新 localStorage
          localStorage.setItem('auth_token', token);
          console.log('Stored token:', localStorage.getItem('auth_token')); // 添加调试日志
          
          // 直接使用 mutation 更新状态
          this.$store.commit('setUser', userData);
          this.$store.commit('setAuthToken', token);
          
          // 强制更新组件
          this.$forceUpdate();
          
          this.$message.success('Login successful!');
        } catch (error) {
          console.error('Backend authentication failed:', error);
          this.$message.error('Login failed. Please try again.');
          await signOut(auth);
          this.logout();
        }
      } catch (error) {
        console.error('Login error:', error);
        this.$message.error('Login failed. Please try again.');
      }
    },
    async handleLogout() {
      try {
        // 清除所有本地存储
        localStorage.clear();
        // 清除 Firebase 状态
        await signOut(auth);
        // 清除 Vuex store
        this.logout();
        // 强制刷新页面以确保状态完全重置
        window.location.reload();
      } catch (error) {
        console.error('Logout error:', error);
        this.$message.error('Logout failed. Please try again.');
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    this.page = this.$route.path;
    this.page != "/" ? (this.isSolid = true) : "";
    
    // 监听用户状态
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('Firebase auth state changed - user exists'); // 添加调试日志
        // 如果已经有 token，说明已经登录过，不需要重复登录
        const existingToken = localStorage.getItem('auth_token');
        console.log('Existing token:', existingToken); // 添加调试日志
        
        if (!existingToken) {
          const firebaseToken = await user.getIdToken();
          try {
            const response = await post_login(firebaseToken);
            console.log('Auth state change response:', response); // 添加调试日志
            
            if (!response || !response.token) {
              throw new Error('Invalid response from server');
            }
            
            const { token, user: userData } = response;
            
            // 确保 token 存在
            if (!token) {
              throw new Error('Token is missing from response');
            }
            
            localStorage.setItem('auth_token', token);
            console.log('Stored token in auth state change:', localStorage.getItem('auth_token')); // 添加调试日志
            
            // 直接使用 mutation 更新状态
            this.$store.commit('setUser', userData);
            this.$store.commit('setAuthToken', token);
            
            // 强制更新组件
            this.$forceUpdate();
          } catch (error) {
            console.error('Backend authentication failed:', error);
            await signOut(auth);
            this.logout();
          }
        } else {
          // 如果有 token 但没有用户信息，尝试恢复用户状态
          if (!this.user) {
            try {
              // 这里可以添加一个 API 调用来获取用户信息
              // 或者从 localStorage 中恢复用户信息
              // 暂时使用一个简单的解决方案
              this.$store.commit('setAuthToken', existingToken);
              // 强制更新组件
              this.$forceUpdate();
            } catch (error) {
              console.error('Failed to restore user state:', error);
              this.logout();
            }
          }
        }
      } else {
        console.log('Firebase auth state changed - no user'); // 添加调试日志
        this.logout();
      }
    });
  }
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

.nav-right {
  display: flex;
  align-items: center;
  margin-right: 20px;

  .login-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    span {
      color: #fff;
      font-size: 14px;
    }
  }

  .user-info {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 20px;

    .user-trigger {
      position: relative;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      cursor: pointer;

      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }

      .username {
        color: #fff;
        font-size: 14px;
      }
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1003;

  .modal-content {
    background: #2a2a2a;
    border-radius: 12px;
    width: 400px;
    max-width: 90%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

    .modal-header {
      padding: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      h3 {
        color: #fff;
        margin: 0;
        font-size: 18px;
      }
    }

    .modal-body {
      padding: 20px;
      
      p {
        color: #fff;
        margin: 0;
        text-align: center;
      }
    }

    .modal-footer {
      padding: 20px;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      button {
        padding: 8px 20px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;

        &.cancel-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;

          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }

        &.logout-btn {
          background: #ff4d4f;
          color: #fff;

          &:hover {
            background: #ff7875;
          }
        }
      }
    }
  }
}
</style>
