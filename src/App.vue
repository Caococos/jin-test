<template>
  <div id="app" @scroll="loadScroll($event)">
    <div class="wrapper">
      <main-nav></main-nav>
      <transition name="fade">
        <main-nav v-show="isShow" class="nav-j main-nav2"></main-nav>
      </transition>
      <main-content></main-content>
    </div>
    <div class="mask-all" v-show="maskShow">
      <div class="content">
        <i class="iconfont icon-chexiao"></i>
        <span>点击右上角选择浏览器打开</span>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from 'components/content/nav/MainNav';
import MainContent from 'components/content/main-content/MainContent';


export default {
  name: 'App',
  components: {
    MainNav,
    MainContent
  },
  mounted() {
    window.addEventListener('scroll', this.loadScroll)
    const wClick = document.querySelector('.icon-weixin')
    wClick.addEventListener('click', this.shareWechat)
  },
  data() {
    return {
      isShow: false,
      maskShow: false
    }
  },
  methods: {
    loadScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop > 50) this.isShow = true
      else this.isShow = false
    },
    shareWechat() {
      this.maskShow = true
    }
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
@media only screen and (max-width: 1014px) {
  .nav-j {
    display: none;
  }
  .mask-all {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .mask-all .content {
    position: absolute;
    top: 0;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #fff;
  }
  .icon-chexiao {
    font-size: 50px !important;
  }
}

.main-nav2 {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter {
  opacity: 0.5;
}
</style>
