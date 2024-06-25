<template>
  <div class="chat-container" style="width: 240px">
    <div class="message-container">
      <!-- 这里放聊天消息的显示区域，可以根据需要自行设计 -->
      <div v-for="(message, index) in messages" :key="index" :class="['message-bubble', message.sender]">
        <div class="message-content">{{ message.content }}</div>
      </div>
    </div>
    <div class="input-container">
      <el-input 
        v-model="input" 
        type="textarea" 
        :autosize="{ minRows: 4, maxRows: 5 }" 
        placeholder="输入以聊天" 
        @keypress="handleKeyPress" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const input = ref('');
const num = ref("1");
const messages = ref<{ sender: string, content: string }[]>([]);

const sendMessage = () => {
  if (input.value.trim() === '') return;

  // 本地显示发送的消息
  messages.value.push({ sender: 'user', content: input.value });

  let formData = new FormData();
  formData.append("username", "123456");
  formData.append("number", num.value);
  formData.append("cont", input.value);

  axios({
    method: 'post',
    url: "http://127.0.0.1:5500/getAI",
    data: formData,
  }).then(res => {
    messages.value.push({ sender: 'ai', content: res.data.answer });
    console.log(res.data.answer);
  }).catch(error => {
    console.error("请求错误: ", error);
  });

  // 发送完成后清空输入框内容
  input.value = '';
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault(); // 阻止默认的换行行为
    sendMessage();
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 90vh; /* 让聊天界面占满整个页面高度 */
}

.message-container {
  flex: 1; /* 消息区域占据剩余的空间 */
  overflow-y: auto; /* 如果消息过多，自动显示滚动条 */
  padding: 10px;
  background-color: #f5f5f5;
}

.input-container {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
}

.message-bubble {
  max-width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  word-wrap: break-word;
}

.message-bubble.user {
  align-self: flex-end;
  background-color: #9fe7a4;
  color: #000;
}

.message-bubble.ai {
  align-self: flex-start;
  background-color: #e0e0e0;
  color: #000;
}

.message-content {
  white-space: pre-wrap; /* 保留空白字符 */
}
</style>
