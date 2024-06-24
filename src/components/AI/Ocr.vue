<template>
    <div>
    <h1>从图像中提取文本，数字和方程</h1>
        
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      style="width: 240px"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
       将图片拖拽至此处或<em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          最大尺寸500kb、支持jpg、png格式
        </div>
      </template>
    </el-upload>
  </div>
  </template>
  
  <script setup lang="ts">
  import { UploadFilled } from '@element-plus/icons-vue'
  </script>
  