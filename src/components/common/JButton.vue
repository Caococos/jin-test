<template>
  <div class='j-button' :style="{'color': textColor, 'backgroundColor': bGColor, 'borderColor': borderColor}">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'j-button',
  props: {
    message: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: 'var(--color-blue-text)'
    },
    bGColor: {
      type: String,
      default: '#fff'
    },
    borderColor: {
      type: String,
      default: 'var(--color-blue-text)'
    }
  }
}
</script>

<style scoped>
.j-button {
  width: 96px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  color: var(--color-blue-text);
  border: 2px solid;
  border-radius: 8px;
}
</style>