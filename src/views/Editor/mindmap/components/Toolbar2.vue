<template>
    <div class="toolbar-2" v-if="activeNodes.length > 0">
      <div class="toolbar-item" @click="changeLayout">
        <el-icon><img src="@/assets/全科.svg" alt="切换结构"/></el-icon>
        <span>结构</span>
      </div>
      <div class="toolbar-item" @click="changeTheme">
        <el-icon><img src="@/assets/mindmap主题.svg" alt="切换主题"/></el-icon>
        <span>主题</span>
      </div>
      <div class="toolbar-item" @click="defineTheme">
        <el-icon><img src="@/assets/新建主题.svg" alt="注册并使用新主题"/></el-icon>
        <span>新建主题</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const activeNodes = ref([])
  
  const changeLayout = () => {
    // 切换布局
  }
  
  const changeTheme = () => {
    // 切换主题
  }
  
  const defineTheme = () => {
    // 注册并使用新主题
  }
  </script>
  
  <style scoped>
  .toolbar-2 {
    /* 样式代码 */
  }
  .toolbar-item {
    /* 样式代码 */
  }
  </style>
  