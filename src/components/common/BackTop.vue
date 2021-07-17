<template>
  <div class="back-top">
    <i class="iconfont icon-top1"></i>
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
@media only screen and (min-width: 1014px) {
  .back-top {
    right: 150px;
    bottom: 55px;
  }
}
@media only screen and (max-width: 1014px) {
  .back-top {
    right: 20px;
    bottom: 50px;
  }
}
.back-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid #888;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
}
</style>
