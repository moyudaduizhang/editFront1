<template>
    <el-input v-model="input" style="width: 240px" ></el-input>  
   <h2>格式</h2>
   <div class="write">
    <el-button >大纲</el-button>
    <el-button >文章</el-button>
    <el-button >推特</el-button>
    <h2>语气</h2>
   <div class="write">
    <el-button >正式的</el-button>
    <el-button >随意的</el-button>
    <el-button >专业的</el-button>
    </div>
    <h2>长度</h2>
   <div class="write">
    <el-button >短</el-button>
    <el-button >中</el-button>
    <el-button >长</el-button>
    </div>
   </div>
  </template>
  
  <script setup lang="ts">

  import axios from 'axios';
  import { ref } from 'vue';
  const input = ref('');
  const num=ref(1);
const aiResponse = ref('');
const sendRequest = (url) => {
  console.log(`调用${url}`);
  let formData = new FormData();
  formData.append("username", "123456");
  formData.append("number", num.value);
  formData.append("cont", input.value);
  axios({
    method: 'post',
    url: "http://127.0.0.1:5500/getAI",
    data: formData,
  }).then(res => {
    aiResponse.value = res.data.answer;
    console.log(res.data.answer);
  }).catch(error => {
    console.error("请求错误: ", error);
  });
};
  </script>
  