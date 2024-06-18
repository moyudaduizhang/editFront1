<template>
    <div class="icon-grid-container">
      <!-- 上半部分：文档格式图标 -->
      <div class="icon-section">
        <h3>文档格式</h3>
        <div class="icon-list">
            <el-icon><HomeFilled /></el-icon>
            <el-icon><HomeFilled /></el-icon>
            <el-icon><HomeFilled /></el-icon>
          <!-- 其他文档格式图标 -->
        </div>
      </div>
  
      <!-- 下半部分：文档模板图标 -->
      <div class="icon-section">
        <h3>文档模板</h3>
        <div class="icon-list">
            <el-icon><HomeFilled /></el-icon>
            <el-icon><HomeFilled /></el-icon>
            <el-icon><HomeFilled /></el-icon>
          <!-- 其他文档模板图标 -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ElIcon } from 'element-plus';
  import 'element-plus/dist/index.css';

  </script>
  
  <style scoped>
  .icon-grid-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .icon-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .icon-list {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .icon-list > * {
    font-size: 2rem;
    cursor: pointer;
  }
  </style>
  