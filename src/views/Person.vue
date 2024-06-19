<template>
    <div class="container">
      <h1 class="name">{{ name }}</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="account">账号</label>
          <input id="account" v-model="account" type="text" required />
        </div>
        
        <div class="form-group">
          <label for="email">邮箱</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div class="form-group">
          <label for="phone">手机号</label>
          <input id="phone" v-model="phone" type="tel" required />
        </div>
        <div class="form-group">
          <label for="token">百度秘钥token</label>
          <input id="token" v-model="token" type="text" required />
        </div>
        <div class="form-group">
          <label for="nickname">昵称</label>
          <input id="nickname" v-model="nickname" type="text" required />
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useTokenStore } from '@/store/userstoken';
  
  const store=useTokenStore()
 
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .name {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 10px;
  }
  
  .bio {
    font-size: 1.5em;
    color: #666;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    font-size: 1.2em;
    margin-bottom: 5px;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1.2em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  