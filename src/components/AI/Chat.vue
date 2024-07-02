<template>
  <div class="chat-container">
    <!-- 添加条件渲染，当没有消息时显示图片 -->
    <div v-if="messages.length === 0" class="image-container">
      <img class="img" src="@/assets/AIlogo.svg" alt="Placeholder Image">
      <h1 style="font-size: 20px;">我今天能帮你什么？</h1>
    </div>
    <div class="message-container">
      <!-- 这里放聊天消息的显示区域，可以根据需要自行设计 -->
      <div v-for="(message, index) in messages" :key="index" class="message-wrapper">
        <div class="message-header">
          <el-avatar
            class="mr-3"
            :size="32"
            :src="message.sender === 'user' ? avatarstore.avatarUrl : aiAvatar"
          />
          <span class="sender-name">{{ message.sender === 'user' ? '用户' : 'AI' }}</span>
        </div>
        <div :class="['message-bubble', message.sender]">
          <div class="message-content">{{ message.content }}</div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <!-- PDF 上传图标按钮 -->
      <el-button @click="triggerFileUpload">
        <el-icon><UploadFilled /></el-icon>
      </el-button>
      <!-- 隐藏的文件输入框 -->
      <input ref="fileInput" type="file" @change="handleFileUpload" style="display: none;" />
      <el-input 
        v-model="input" 
        type="textarea" 
        :autosize="{ minRows: 4, maxRows: 5 }" 
        placeholder="输入以聊天" 
        @keypress="handleKeyPress" 
      />
      <div v-if="file" class="file-info">{{ file.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useTokenStore, useUserAvatarStore } from "@/store/userstoken";
import { UploadFilled } from '@element-plus/icons-vue'; // 确保已安装Element Plus和相关图标

const input = ref('');
const num = ref("1");
const messages = ref<{ sender: string, content: string }[]>([]);
const avatarstore = useUserAvatarStore();
const aiAvatar = 'path/to/ai/avatar.png'; // AI头像路径

const file = ref<File | null>(null);
const fileInput = ref<HTMLInputElement | null>(null); // 确保 fileInput 被正确引用

const sendMessage = () => {
  if (input.value.trim() === '') return;

  // 本地显示发送的消息
  messages.value.push({ sender: 'user', content: input.value });

  let formData = new FormData();
  formData.append("username", "123456");
  formData.append("number", num.value);
  formData.append("cont", input.value);
  if (file.value) {
    formData.append("file", file.value);
  }

  axios({
    method: 'post',
    url: "http://63d5fa47.r21.cpolar.top/getAI",
    data: formData,
  }).then(res => {
    messages.value.push({ sender: 'ai', content: res.data.answer });
    console.log(res.data.answer);
  }).catch(error => {
    console.error("请求错误: ", error);
  });

  // 发送完成后清空输入框内容和文件信息
  input.value = '';
  file.value = null;
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault(); // 阻止默认的换行行为
    sendMessage();
  }
};

const triggerFileUpload = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    file.value = target.files[0];
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 90vh; /* 让聊天界面占满整个页面高度 */
  width: 100%; /* 让聊天界面占满整个页面宽度 */
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1; /* 占据剩余的空间 */
  .img{
    width: 40%;
  }
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

.message-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
}

.message-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.message-bubble {
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
  word-wrap: break-word;
  position: relative;
}

.message-bubble.user {
  background-color: #9fe7a4;
  color: #000;
}

.message-bubble.ai {
  background-color: #e0e0e0;
  color: #000;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
}

.sender-name {
  font-weight: bold;
}

.message-content {
  white-space: pre-wrap; /* 保留空白字符 */
}

.file-info {
  margin-top: 10px;
  font-size: 14px;
  color: #888;
}
</style>
