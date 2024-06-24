<template>
    <div class="chat-container" style="width: 240px">
      <div class="message-container">
        <!-- 这里放聊天消息的显示区域，可以根据需要自行设计 -->
      </div>
      <el-button type="primary" @click="sendMessage">发送</el-button>
      <div class="input-container">
        <el-input v-model="input" type="textarea" :autosize="{ minRows: 6, maxRows: 8 }" placeholder="输入以聊天" />
        
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const input = ref('');
  
  const sendMessage = () => {
    // 这里添加与后端交互的代码，示例中假设使用 fetch 或 axios 发送 POST 请求
    fetch('/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input.value }),
    })
    .then(response => response.json())
    .then(data => {
      // 处理后端返回的数据，例如展示在消息区域中
      console.log('Received from server:', data);
      // 这里可以将 data 添加到消息显示区域，具体逻辑根据实际需求实现
    })
    .catch(error => {
      console.error('Error sending message:', error);
      // 处理发送消息失败的情况
    });
  
    // 发送完成后清空输入框内容
    input.value = '';
  };
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh; /* 让聊天界面占满整个页面高度 */
  }
  
  .message-container {
    flex: 1; /* 消息区域占据剩余的空间 */
    overflow-y: auto; /* 如果消息过多，自动显示滚动条 */
  }
  
  .input-container {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 70px;
    background-color: #f0f0f0;
  }
  </style>
  