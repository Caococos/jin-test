<template>
  <div class='main-content'>
    <j-content></j-content>
  </div>
</template>

<script>
import JContent from 'components/content/main-content/JContent';
export default {
  name: 'main-content',
  data() {
    return {

    }
  },
  components: {
    JContent
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: center;
}
</style>