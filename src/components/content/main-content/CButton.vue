<template>
  <div v-if="eType === '折线图'" class='c-button'>
    <i class="iconfont icon-tubiaoxian_tongyong_tongji"> {{eType}}</i>
  </div>
  <div class="c-button" v-else>
    <i class="iconfont icon-zhuzhuangtu"> {{eType}}</i>
  </div>
</template>

<script>
export default {
  name: 'c-button',
  props: {
    eType: {
      type: String,
      default: '折线图'
    }
  }
}
</script>

<style scoped>
.c-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 22px;
  color: var(--color-blue-text);
  border: 1px solid var(--color-blue-text);
  border-radius: 11px;
}
.c-button i {
  font-size: 12px;
}
</style>