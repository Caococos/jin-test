<template>
  <div class='j-footer'>
    <div class="statement">
      <p class="title">声明：</p>
      <p class="text">本文版本归金十数据所有，未经书面授权任何商业机构、网站、公司及个人禁止转载或再利用稳重信息，违者必究。</p>
    </div>
    <div class="good">
      <div class="niceP" @click="addGood()">
        <i class="iconfont icon-good"></i>
        <p>{{good}}</p>
      </div>
      <p>好文章，需要你的鼓励</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'j-footer',
  data() {
    return {
      good: 45
    }
  },
  methods: {
    addGood() {
      this.good = 46
    }
  }
}
</script>

<style scoped>
.j-footer {
  margin-top: 14px;
  color: #b2b2b2;
  font-size: 12px;
}
.statement {
  margin-bottom: 60px;
}
.title {
  margin-bottom: 2px;
}
.good {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.niceP {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 70px;
  height: 70px;
  border: 2px solid #eee;
  border-radius: 50%;
}
.icon-good {
  font-size: 24px;
}
</style>