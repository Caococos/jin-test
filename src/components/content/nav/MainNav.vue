<template>
  <div class='main-nav' ref="mainNav">
    <div class="container">
      <!-- logo -->
      <img class='logo' src="~assets/img/金十logo-蓝.png" alt="">
      <!-- 导航栏 -->
      <j-nav></j-nav>
      <!-- 搜索按钮 -->
      <search></search>
      <!-- 下载链接 -->
      <j-button class="download" message="下载APP"></j-button>
      <j-button class="login" message="登录 / 注册" textColor="#fff" bGColor="#5778da"></j-button>
    </div>
    <div class="nav-m">
      <i class="iconfont icon-nav"></i><i class="iconfont icon-yonghu"></i>
    </div>
  </div>
</template>

<script>
import JNav from 'components/content/nav/JNav';
import JButton from 'components/common/JButton';
import Search from 'components/common/Search';
export default {
  name: 'main-nav',
  components: {
    JNav,
    JButton,
    Search
  }
}
</script>

<style scoped>
@media only screen and (max-width: 1014px) {
  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 0 20px;
    width: 100vw;
    box-shadow: 0 3px 10px #e5e5e5;
    background-color: #fff;
  }
  .container {
    display: none;
  }
  .nav-m {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 46px;
    font-size: 24px;
    color: var(--color-blue-text);
  }
  .icon-yonghu,
  .icon-nav {
    font-size: 24px;
  }
}
@media only screen and (min-width: 1014px) {
  .nav-m {
    display: none;
  }
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
    position: relative;
    display: flex;
    align-items: center;
  }
  .download {
    margin: 0 20px;
    cursor: pointer;
  }
  .login {
    cursor: pointer;
  }
}
</style>