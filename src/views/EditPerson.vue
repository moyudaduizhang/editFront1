<template>
    <div class="container">
        <el-page-header @back="onBack">

        </el-page-header>
        <div class="flex items-center">
          <el-avatar
            class="mr-3"
            :size="200"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <el-button type="primary">修改头像</el-button>
        </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label  for="account">账号</label>
          <input id="account" v-model="account" type="text" readonly required />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input id="password" v-model="password" type="text" readonly required />
        </div>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input id="email" v-model="email" type="email" :readonly="!isEditing" required />
        </div>
        <div class="form-group">
          <label for="phone">手机号</label>
          <input id="phone" v-model="phone" type="tel" :readonly="!isEditing" required />
        </div>
        <div class="form-group">
          <label for="token">百度秘钥token</label>
          <input id="token" v-model="token" type="text" :readonly="!isEditing" required />
        </div>
        <div class="form-group">
          <label for="nickname">昵称</label>
          <input id="nickname" v-model="nickname" type="text" :readonly="!isEditing" required />
        </div>

        <button>取消修改</button>
        <button type="submit">保存修改</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useTokenStore } from '@/store/userstoken';
  
  const onBack=()=>{
    
  }
  const defaultValues = {
    account: '默认账号',
    password: '默认密码',
    email: 'example@example.com',
    phone: '1234567890',
    token: '默认Token',
    pet_name: 'si马李昌霖',
  };
  
  const account = ref(defaultValues.account);
  const password = ref(defaultValues.password);
  const email = ref(defaultValues.email);
  const phone = ref(defaultValues.phone);
  const token = ref(defaultValues.token);
  const nickname = ref(defaultValues.pet_name);
  const isEditing = ref(true);
  const store = useTokenStore();
  
  
  
  const fetchPersonalPageData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/personal_page', { user: store.token.access_token });
      if (response.data.success === 'true' && response.data.data.length > 0) {
        const data = response.data.data[0];
        account.value = data.account ?? defaultValues.account;
        password.value = data.password ?? defaultValues.password;
        email.value = data.email ?? defaultValues.email;
        phone.value = data.phone ?? defaultValues.phone;
        token.value = data.token ?? defaultValues.token;
        nickname.value = data.pet_name ?? defaultValues.pet_name;
      } else {
        alert(`获取数据失败: ${response.data.message}`);
      }
    } catch (error) {
      alert('发生错误: ' + error.message);
    }
  };
  
  const updatePersonalPageData = async () => {
    try {
      // 获取要更新的用户信息
      const updatedData = {
        account: account.value,
        email: email.value,
        phone: phone.value,
        token: token.value,
        pet_name: nickname.value
      };
  
      // 发送更新请求到后端
      const response = await axios.post('http://127.0.0.1:5000/person_page_show', updatedData);
  
      // 处理后端响应
      if (response.data.success === 'true') {
        alert('用户信息更新成功');
        isEditing.value = false;
        // 调用获取用户信息的函数以刷新页面数据
        await fetchPersonalPageData();
      } else {
        alert(`更新数据失败: ${response.data.message}`);
      }
    } catch (error) {
      alert('发生错误: ' + error.message);
    }
  };
  
  const handleSubmit = () => {
    updatePersonalPageData();
  };
  
  onMounted(() => {
    fetchPersonalPageData();
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    font-family: 'Arial', sans-serif;
  }
  
  .name {
    font-size: 2.5em;
    color: #4a4a4a;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  label {
    display: block;
    font-size: 1%;
    margin-bottom: 8px;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 12px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #007bff;
  }
  
  button {
    padding: 12px 24px;
    font-size: 1.2em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button:first-of-type {
    background-color: #28a745;
  }
  
  button:first-of-type:hover {
    background-color: #218838;
  }
  </style>
  