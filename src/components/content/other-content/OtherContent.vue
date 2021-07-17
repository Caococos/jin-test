<template>
  <div class='other-content-j other-content-m'>
    <user class="user-info"></user>
    <re-reading ref="reading"></re-reading>
    <re-reading class="reading" v-show="isShow"></re-reading>
  </div>
</template>

<script>
import User from 'components/content/other-content/User';
import ReReading from 'components/content/other-content/ReReading';
export default {
  name: 'user-info',
  data() {
    return {
      isShow: false
    }
  },
  components: {
    User,
    ReReading
  },
  mounted() {
    window.addEventListener('scroll', this.loadScroll)
  },
  methods: {
    loadScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let w = document.documentElement.offsetWidth || document.body.offsetWidth;
      // console.log(scrollTop)
      // console.log(this.$refs.reading.$el.offsetTop);
      if (w > 1014) {
        if (scrollTop > 310) this.isShow = true
        else this.isShow = false
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1014px) {
  .other-content-j {
    margin: 30px 0 0 20px;
    width: 308px;
  }
  .reading {
    position: fixed;
    top: 56px;
  }
}
@media only screen and (max-width: 1014px) {
  .user-info {
    display: none;
  }
  .other-content-m {
  }
}
</style>