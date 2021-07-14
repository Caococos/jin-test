<template>
  <div class='j-nav'>
    <a v-for="(item, index) in title" :key="index">{{item}}</a>
  </div>
</template>

<script>
export default {
  name: 'j-nav',
  data() {
    return {
      title: ['首页', '数据', '资讯', '视频', '日历']
    }
  }
}
</script>

<style scoped>
.j-nav {
  margin: 0 calc(563px / 2) 0 80px;
}
.j-nav a {
  display: inline-block;
  margin-right: 45px;
  height: 56px;
  line-height: 56px;
  cursor: pointer;
}
.j-nav a:last-child {
  margin-right: 0;
}
.j-nav a:nth-child(3) {
  font-family: var(--font-weight);
  font-weight: 700;
  border-bottom: 2px solid var(--color-text);
}
</style>