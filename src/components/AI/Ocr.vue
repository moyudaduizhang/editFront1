<template>
  <div>
    <h1>从图像中提取文本，数字和方程</h1>

    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-success="handleSuccess"
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
    结果：{{ aiResponse }}
  </div>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
import axios from 'axios'

const aiResponse = ref('');
const sendfiled = (file: File) => {
  let formData = new FormData();
  formData.append("file", file);
  axios({
    method: 'post',
    url: "http://127.0.0.1:5500/",
    data: formData,
  }).then(res => {
    aiResponse.value = res.data.answer;
    console.log(res.data.answer);
  }).catch(error => {
    console.error("请求错误: ", error);
  });
};

const handleSuccess = (response: any, file: File) => {
  console.log('上传成功:', response);
  sendfiled(file);
};
</script>
