<template>
  <div class='user'>
    <div class="logo">
      <img src="~assets/img/头像-2.png" alt="">
    </div>
    <p class="name">Skr橙子</p>
    <p class="describe">我是来自异次元的橙子</p>
    <j-button message="文章：320" textColor="#888" borderColor="#888  "></j-button>
  </div>
</template>

<script>
import JButton from 'components/common/JButton';
export default {
  name: 'user',
  data() {
    return {
    }
  },
  components: {
    JButton
  }
}
</script>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 260px;
  background-color: #fff;
}
.logo {
  width: 90px;
  height: 90px;
}
.logo img {
  width: 100%;
}
.name {
  margin: 18px 0 12px 0;
  font-size: 18px;
  font-weight: 700;
}
.describe {
  margin-bottom: 20px;
  font-size: 12px;
  color: #888;
}
</style>