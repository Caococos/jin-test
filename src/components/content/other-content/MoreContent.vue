<template>
  <div class='more-content'>
    <div class="more" key="more1">
      <img src="~assets/img/图片-2.jpg" alt="">
      <text-footer title="黄金下方空单押注上行阻力分布" time="6小时前" name="黄金圈"></text-footer>
    </div>
    <div class="more" key="more2">
      <img src="~assets/img/图片-3.jpg" alt="">
      <text-footer title="黄金下方空单押注上行阻力分布" time="昨天" name="技术刘"></text-footer>
    </div>
    <div class="more" key="more3">
      <img src="~assets/img/图片-4.jpg" alt="">
      <text-footer title="黄金下方空单押注上行阻力分布" time="6月6日" name="金融资讯"></text-footer>
    </div>
    <div class="more" key="more4">
      <img src="~assets/img/图片-5.jpg" alt="">
      <text-footer title="黄金下方空单押注上行阻力分布" time="6月5日" name="技术刘"></text-footer>
    </div>
  </div>
</template>

<script>
import TextFooter from 'components/content/other-content/TextFooter';
export default {
  name: 'more-content',
  components: {
    TextFooter
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1014px) {
  .more img {
    width: 90px;
    height: 60px;
  }
}
@media only screen and (max-width: 1014px) {
  .more img {
    width: 129px;
    height: 80.333px;
  }
}
.more {
  display: flex;
  justify-content: space-between;
  padding: 23px 0;
  border-top: 1.5px solid #eee;
}
.more img {
  border-radius: 9px;
}
</style>