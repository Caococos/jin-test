<template>
  <div class='re-reading'>
    <div class="title">推荐阅读</div>
    <div class="more">
      <p>查看更多</p>
      <p class="right-arrow"></p>
    </div>
    <img class="head-img" src="~assets/img/图片-1.jpg" alt="">
    <p class="text">挂单报告：黄金留意下方空单押注元祐上行阻力分布密集</p>
    <div class="re-footer">
      <p class="time">2小时前</p>
      <p class="name">喵呜</p>
    </div>
    <more-content class="more-content"></more-content>
  </div>
</template>

<script>
import MoreContent from 'components/content/other-content/MoreContent';

export default {
  name: 're-reading',
  components: {
    MoreContent
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1014px) {
  .re-reading {
    width: 308px;
  }
  .more-content {
    width: 275px;
  }
}
.re-reading {
  position: relative;
  padding: 30px 20px 27px 20px;
  background-color: #fff;
}
.title {
  font-size: 18px;
  font-weight: 700;
}
.more {
  display: flex;
  align-items: center;
  position: absolute;
  top: 33px;
  right: 20px;
  font-size: 12px;
  color: #888;
  cursor: pointer;
}
.right-arrow {
  margin-left: 7px;
  border-color: transparent transparent transparent #888;
  border-style: solid;
  border-width: 5px 0 5px 10px;
  width: 0;
  height: 0;
}
.head-img {
  margin: 17px 0;
  width: 100%;
  border-radius: 9px;
}
.text {
  color: #3d4352;
  font-size: 14px;
}
.re-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding-bottom: 23px;
  color: #888;
  font-size: 12px;
}
</style>