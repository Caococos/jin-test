<template>
  <div class='j-video'>
    <!-- <transition name="fadeV">
      <div class="mask" @click="showVideo()" v-show="isShow">
      </div>
    </transition> -->
    <img class="logo" src="~assets/img/水印.png" alt="">
    <!-- <div class="bottom-bar">
    </div> -->
    <div class="p-in-p" @click="pInP()"><i class="iconfont icon-shipinbofang-huazhonghua"></i>
      <p>画中画</p>
    </div>
    <video ref="myVideo" @click="showVideo()" poster="~assets/img/视频.jpg" controls width="100%" src="~assets/video/样式.mp4">您的浏览器等级暂不支持video标签，请尽快升级浏览器！</video>
  </div>
</template>

<script>
export default {
  name: 'j-video',
  data() {
    return {
      isShow: true,
      video: '',
    }
  },
  mounted() {
    this.video = this.$refs.myVideo
  },
  methods: {
    showVideo() {
      if (this.isShow) {
        this.isShow = false
      }
    },
    pInP() {
      this.video.requestPictureInPicture()
      // this.video.play()
    }
  }
}
</script>

<style scoped>
.j-video {
  position: relative;
  display: flex;
  justify-content: center;
}
/* .j-video img {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 385.25px;
} */
.mask {
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 100; */
  width: 100%;
  height: 100%;
  background-image: url(~assets/img/视频.jpg);
  background-size: 100%;
}
.fadeV-leave-active {
  transition: opacity 1s;
}
.fadeV-leave-to {
  opacity: 0;
}
.logo {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  width: 77px;
}
.bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 670px;
  height: 44px;
  background-color: rgba(31, 36, 43, 0.8);
}
.p-in-p {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 100;
  right: 158px;
  bottom: 38px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}
.icon-shipinbofang-huazhonghua {
  margin-right: 6px;
}
</style>