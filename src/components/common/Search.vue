<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-12 16:37:33
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-16 19:45:39
-->
<template>
  <div class='search'>
    <input type="text" class="text" v-model="search" placeholder="请输入内容" @keyup.enter="searchContent">
    <div class="btn iconfont icon-sousu" @click="searchContent"></div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchContent() {
      if (this.search) {
        let url = `http://www.baidu.com/s?wd=${this.search}`
        window.open(url)
        this.search = ''
      }
    }
  }
}
</script>

<style scoped>
.search {
  position: absolute;
  right: 210px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 垂直对齐 */
  height: 60px;
  border-radius: 40px;
}

.btn {
  /* float: right; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: 1s;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
}

.text {
  /* float: left; */
  width: 0;
  transition: 1s;
  height: 50px;
  font-size: 16px;
}

.search:hover > .text {
  width: 150px;
  padding: 0 6px;
}

.search:hover > .btn {
  color: #fff;
  background-color: var(--color-blue-text);
  height: 50px;
  width: 50px;
  line-height: 50px;
}

.text:focus {
  width: 150px;
  padding: 0 6px;
}

.icon-sousu {
  color: #909090;
  font-size: 17px;
}
</style>