<template>
  <div class='main-content'>
    <j-content></j-content>
    <other-content></other-content>
    <back-top v-show="isTop" @click.native="toTop()"></back-top>
  </div>
</template>

<script>
import JContent from 'components/content/main-content/JContent';
import OtherContent from 'components/content/other-content/OtherContent';
import BackTop from 'components/common/BackTop';

export default {
  name: 'main-content',
  data() {
    return {
      isTop: false
    }
  },
  components: {
    JContent,
    OtherContent,
    BackTop
  },
  mounted() {
    window.addEventListener('scroll', this.isTopShow)
  },
  methods: {
    isTopShow() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 200) {
        this.isTop = true
      } else this.isTop = false
    },
    toTop() {
      var time = setInterval(function () {
        document.documentElement.scrollTop = document.documentElement.scrollTop - 50;
        if (document.documentElement.scrollTop <= 0) {
          clearInterval(time);
        }
      }, 1);
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1014px) {
  .main-content {
    display: flex;
    justify-content: center;
  }
}
@media only screen and (max-width: 1014px) {
  .main-content {
    margin-top: 46px;
  }
}
</style>