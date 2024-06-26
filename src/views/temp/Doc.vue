<template>
    <div class="icon-grid-container">
      <!-- 上半部分：文档格式图标 -->
      <div class="icon-section">
        <h3>新建</h3>
        <div class="icon-list">
          <el-card class="custom-card">
            <template #header>
              <div class="card-header">蓝灰色简历</div>
            </template>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            />
          </el-card>
          <!-- 继续添加更多 el-card 元素 -->
        </div>
      </div>
  
      <!-- 下半部分：文档模板图标 -->
      <div class="icon-section">
        <h3>文档模板</h3>
        <div class="icon-list">
          <el-card class="custom-card">
            <template #header>
              <div class="card-header">蓝灰色简历</div>
            </template>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            />
          </el-card>
          <!-- 继续添加更多 el-card 元素 -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ElCard } from 'element-plus';
  import 'element-plus/dist/index.css';
  
  // 导入具体的图标组件
  import { HomeFilled, Document, Edit } from '@element-plus/icons-vue';
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
    width: 100%;
  }
  
  .icon-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    justify-items: center;
  }
  
  .icon-list > * {
    font-size: 2rem;
    cursor: pointer;
  }
  
  .custom-card {
    max-width: 200px;
  }
  
  .card-header {
    font-size: 0.675rem; /* 调整字体大小 */
    text-align:center;
  }
  </style>
  