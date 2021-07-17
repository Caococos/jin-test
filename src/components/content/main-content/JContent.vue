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
@media only screen and (min-width: 1014px) {
  .j-content {
    width: 752px;
    padding: 30px 41px;
  }
}
@media only screen and (max-width: 1014px) {
  .j-content {
    padding: 24px 20px;
  }
}
.j-content {
  position: relative;
  z-index: 1;
  margin-top: 30px;
  background-color: #fff;
  overflow: hidden;
}
.bgImg {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(~assets/img/水印g.png);
  background-size: 20%;
}
</style>