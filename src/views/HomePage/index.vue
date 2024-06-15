<template>
  <div class="mainbody">
    <h1 class="headtitle">首页</h1>
    <div>
      <h2 class="">{{ demoStore.helloPinia }}</h2>
    </div>
    <el-button type="primary">你好，这里使用Element-Plus</el-button>
  </div>
</template>
<script setup lang="ts">
import {mainStore} from '../../store/index'

/* 引入storeToRefs */
import {storeToRefs} from 'pinia'
//storeToRefs只会关注store中数据，不会对方法进行ref包裹

/* 得到countStore */
const demoStore = mainStore()
</script>

<style scoped>
.mainbody {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.headtitle {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>

<style lang="scss" scoped>
/* #在此处编写代码 */
.mainbody {
  background: #76cfe5;
}
</style>
