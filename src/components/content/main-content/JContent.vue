<template>
  <div class='j-content'>
    <div class="bgImg"></div>
    <abstract></abstract>
  </div>
</template>

<script>
import Abstract from 'components/content/main-content/Abstract';
export default {
  name: 'j-content',
  data() {
    return {

    }
  },
  components: {
    Abstract
  }
}
</script>

<style scoped>
.j-content {
  position: relative;
  z-index: 1;
  margin-top: 30px;
  width: 1082px;
  padding: 30px 41px;
  width: 752px;
  background-color: #fff;
  overflow: hidden;
}
.bgImg {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(~assets/img/水印.png);
  transform: rotate(-45deg);
}
</style>