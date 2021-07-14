<template>
  <div id="app" @scroll="loadScroll($event)">
    <div class="wrapper">
      <main-nav></main-nav>
      <transition name="move">
        <main-nav v-show="isShow" class="main-nav2"></main-nav>
      </transition>
      <main-content></main-content>
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
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    loadScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop > 50) {
        this.isShow = true
      } else this.isShow = false
    }
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
.main-nav2 {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.move-enter-active {
  transition: all 1s;
}
.move-enter {
  opacity: 0;
}
</style>
