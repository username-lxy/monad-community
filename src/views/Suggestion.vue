<template>
  <div class="wrap">
    <div id="particles-bg"></div>
    <headerVue />
    <div class="big_title container fall-enter-active" v-if="showText">
      <div class="t1">Our contributors</div>
      <div class="t2">
        <span>
          Under the radiance of Monad, they ignite every possibility with wisdom
          and passion, jointly writing the future chapter
        </span>
        <span>
          Salute to every artist, without your brushes and imagination, this
          website would not be so joyful and beautiful
        </span>
      </div>
    </div>
    <div class="contributors-section container">
      <span class="tips">
        (tips:The ranking is not in any particular order, arranged in
        alphabetical order according to the first letter of the X account)
      </span>
      <div class="contributors-grid">
        <a class="contributor-card" v-for="(item, i) in userList" :key="item.id" :href="item.twitterUrl" target="_blank">
          <img :src="item.avatarUrl" :alt="item.name" class="contributor-avatar" />
          <h3 class="contributor-name">{{ item.name }}</h3>
          <p class="contributor-role">{{ item.description }}</p>
          <!-- <div class="contributor-links">
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          </div> -->
        </a>
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
import { user_list } from "@/assets/js/contributor.js";
import { get_all_succ } from "@/assets/js/draw.js"
export default {
  components: {
    headerVue,
    footerVue,
  },
  data() {
    return {
      showText: false,
      userList: [],
    };
  },
  async created() {
    const data = await get_all_succ()
    if (data.code == 200) {
      this.userList = data.data
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.showText = true;
    // 配置高级粒子效果
    particlesJS("particles-bg", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#ff3f81", "#3f9fff", "#7f3fff"],
        },
        shape: {
          type: ["circle", "triangle", "star"],
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            line_linked: {
              opacity: 0.8,
            },
          },
          bubble: {
            distance: 200,
            size: 6,
            duration: 0.3,
            opacity: 1,
            speed: 3,
          },
          push: {
            particles_nb: 8,
          },
        },
      },
      retina_detect: true,
    });
  },
};
</script>

<style lang="less" scoped>
.wrap {
  padding-top: 100px;

  #particles-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(125deg, #000000, #1a1a1a, #000000);
  }

  .container {
    max-width: 1500px;
    margin: 0 auto;
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
      transform: translateY(-100vh);
      /* 从上方开始 */
    }

    to {
      transform: translateY(0);
      /* 掉落到最终位置 */
    }
  }
}

/* Contributors Section Styles */
.contributors-section {
  padding: 20px 40px;
  //   background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #fff;
  position: relative;
  overflow: hidden;

  .tips {
    display: block;
    margin: 0 40px 20px;
    height: 30px;
    font-size: 16px;
  }
}

.contributors-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%);
  pointer-events: none;
}

.contributors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.contributor-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 25px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.contributor-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.contributor-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.contributor-card:hover::before {
  opacity: 1;
}

.contributor-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease;
  position: relative;
}

.contributor-card:hover .contributor-avatar {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
}

.contributor-name {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.contributor-role {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  //   margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /* 限制行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  //   height: 70px;
  //   text-transform: uppercase;
  //   font-weight: 500;
}

.contributor-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.contributor-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.contributor-links a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}
</style>