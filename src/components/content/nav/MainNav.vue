<template>
  <div class='main-nav' ref="mainNav">
    <div class=" container">
      <!-- logo -->
      <img class='logo' src="~assets/img/金十logo-蓝.png" alt="">
      <!-- 导航栏 -->
      <j-nav></j-nav>
      <!-- 搜索按钮 -->
      <i class="iconfont icon-sousu"></i>
      <!-- 下载链接 -->
      <j-button class="download" message="下载APP"></j-button>
      <j-button class="login" message="登录 / 注册" textColor="#fff" bGColor="#5778da"></j-button>
    </div>
  </div>
</template>

<script>
import JNav from 'components/content/nav/JNav';
import JButton from 'components/content/nav/JButton';
export default {
  name: 'main-nav',
  data() {
    return {

    }
  },
  components: {
    JNav,
    JButton
  }
}
</script>

<style scoped>
.main-nav {
  z-index: 100;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 56px;
  box-shadow: 0 3px 10px #e5e5e5;
  background-color: #fff;
}
.logo {
  width: calc(263px / 2);
  height: calc(57px / 2);
  cursor: pointer;
}
.container {
  display: flex;
  align-items: center;
}
.icon-sousu {
  color: #909090;
  font-size: 17px;
}
.download {
  margin: 0 20px;
}
</style>