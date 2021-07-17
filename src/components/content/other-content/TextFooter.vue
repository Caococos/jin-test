<template>
  <div class="content">
    <p class="title">{{title}}</p>
    <div class="text-footer">
      <p>{{time}}</p>
      <p>{{name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'text-footer',
  props: {
    title: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1014px) {
  .content {
    width: 165px;
  }
}
@media only screen and (max-width: 1014px) {
  .content {
    width: 232.4px;
  }
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: #3d4351;
}
.text-footer {
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 12px;
}
</style>