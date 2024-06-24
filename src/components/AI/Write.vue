<template>
    <el-input v-model="input" style="width: 240px" ></el-input>  
   <h2>格式</h2>
   <div class="write">
    <el-button >续写</el-button>
    <el-button >润色</el-button>
    <el-button >摘要</el-button>
    <h2>语气</h2>
   <div class="write">
    <el-button >续写</el-button>
    <el-button >润色</el-button>
    <el-button >摘要</el-button>
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
const aiResponse = ref('');
  const polish = () => {
  sendRequest('http://10.255.198.65:5500/getpolish');
};

const continuation = () => {
  sendRequest('http://10.255.198.65:5500/getcontinuation');
};

const zhaiyao = () => {
  sendRequest('http://10.255.198.65:5500/getabstract');
};

const sendRequest = (url) => {
  console.log(`调用${url}`);
  let formData = new FormData();
  formData.append("username", "123456");
  formData.append("key", "xxxxxxx");
  formData.append("cont", input.value);
  axios({
    method: 'post',
    url,
    data: formData,
  }).then(res => {
    aiResponse.value = res.data.answer;
    console.log(res.data.answer);
  }).catch(error => {
    console.error("请求错误: ", error);
  });
};
  </script>
  