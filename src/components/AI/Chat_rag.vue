<template>
  <div class="chat-app">
    <div class="sidebar">
      <h3>知识库列表</h3>
      <ul>
        <li
          v-for="item in knowledgeItems"
          :key="item.id"
          :class="{ selected: selectedItems.includes(item.id) }"
          @click="toggleSelectItem(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

    <div class="history">
      <h3>聊天历史记录</h3>
      <ul>
        <li v-for="history in chatHistory" :key="history.id" @click="toggleSelectchat(history)">
          聊天历史记录ID： {{  history }}
        </li>
      </ul>
    </div>

    <div class="chat-area">
      <div class="messages">
        <div v-for="message in messages" :key="message.id" :class="['message', message.sender === 'user' ? 'user-message' : 'ai-message']">
          <div class="message-header">
            <el-avatar class="mr-3" :src="message.avatar" :size="32" />
            <span class="sender-name">{{ message.sender === 'user' ? '用户' : 'AI' }}</span>
          </div>
          <div class="message-content">{{ message.text }}</div>
          <div v-if="message.sender === 'user' && isLoading" class="loading">
            加载中...
          </div>
        </div>
      </div>
      <div class="input-area">
        <el-input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="输入消息" />
        <el-button @click="sendMessage">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted,reactive } from 'vue';
import requestdb from '@/utils/requestdb.ts';
import requestai from '@/utils/requestai.ts';
import request from '@/utils/request.ts';
import { ElMessage, ElAvatar } from 'element-plus';

import 'element-plus/es/components/message/style/css';

interface KnowledgeItem {
  id: number;
  name: string;
}

interface Message {
  id: number;
  text: string;
  sender: string;
  avatar: string;
}

interface ChatHistory {
  id: number;
  summary: string;
}

const knowledgeItems = ref<KnowledgeItem[]>([
  { id: 1, name: '暂无可用知识库' },
]);

const selectedItems = ref<number[]>([]);
const messages = ref<Message[]>([]);
const newMessage = ref('');
const chatHistory = ref<ChatHistory[]>([]);
const isLoading = ref(false);

// AI默认头像
const AI_AVATAR = 'https://path.to/ai-avatar.png';

// 获取用户头像
const fetchUserAvatar = async () => {
  try {
    console.log('Fetching user avatar...');
    const response = await request.post('/personal_page', { user: 'admin' });
    if (response.data.success === 'true') {
      return response.data.url;
    } else {
      console.log(`获取用户头像失败: ${response.data.message}`);
      return '';
    }
  } catch (error:any) {
    
    console.log(`发生错误: ${error.message}`);
    return '';
  }
};

const toggleSelectItem = (id: number) => {
  const index = selectedItems.value.indexOf(id);
  if (index === -1) {
    selectedItems.value.push(id);
  } else {
    selectedItems.value.splice(index, 1);
  }
};

const toggleSelectchat = async (id: any) => {
  const response = await requestdb.post('/show_his', { username: 'admin', session_id: id.toString() });
  messages.value = response.data.data;
};

const sendMessage = async () => {
  if (newMessage.value.trim() === '') {
    return;
  }

  // 获取用户头像
  const userAvatar = await fetchUserAvatar();
  messages.value.push({ id: Date.now(), text: newMessage.value, sender: 'user', avatar: userAvatar });
  isLoading.value = true;

  const formData = new FormData();
  formData.append('username', 'admin');
  formData.append('number', '1');
  formData.append('cont', newMessage.value);
  formData.append('question', newMessage.value);
  for (const id of selectedItems.value) {
    formData.append('id', id.toString());
  }

  try {
    let response;
    const aiMessage = reactive({ id: Date.now(), text: '', sender: 'AI', avatar: AI_AVATAR });
    messages.value.push(aiMessage);

    if (selectedItems.value.length > 0) {
      const response = await fetch('http://127.0.0.1:5000/multimodels/index_milvus', {
        method: 'POST',
        body: formData,
      });
      
     if(response.body){ const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        aiMessage.text += decoder.decode(value);
      }
      console.log('数据库响应:', response);}
    }
     else {
      response = await requestai.post('/getAI', formData);
      console.log('无知识库ai响应:', response.data);
      aiMessage.text = response.data.answer;
    }
  } catch (error) {
    ElMessage.error('请求错误: ' + error);
    console.log("请求错误：" + error);
  } finally {
    newMessage.value = '';
    isLoading.value = false;
  }
};


const fetchdocsdata = async () => {
  try {
    const response = await requestdb.post('/show_filesss', { user: 'admin' });
    if (response.data.success === 'true' && response.data.data.length > 0) {
      knowledgeItems.value = response.data.data;
    } else {
      console.log(`获取数据失败: ${response.data.message}`);
    }
  } catch (error:any) {
    console.log('发生错误: ' + error.message);
  }
};

const fetchChatHistory = async () => {
  try {
    const response = await request.post('/multimodels/show_session', { username: 'admin' });
    if (response.data.success === 'true') {
      chatHistory.value = response.data.data;
      console.log(response.data.data);
    } else {
      console.log(`获取聊天历史记录失败: ${response.data.message}`);
    }
  } catch (error:any) {
    console.log('发生错误: ' + error.message);
  }
};

onMounted(() => {
  fetchdocsdata();
  fetchUserAvatar();
  fetchChatHistory();
});
</script>

<style scoped>
.chat-app {
  display: flex;
  height: 79vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.sidebar, .history {
  width: 250px;
  border-right: 1px solid #e0e0e0;
  background-color: #ffffff;
  padding: 20px;
}

.sidebar h3, .history h3 {
  font-size: 18px;
  color: #333333;
  margin-bottom: 20px;
}

.sidebar ul, .history ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li, .history li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sidebar li.selected, .history li:hover {
  background-color: #007bff;
  color: white;
  border-radius: 4px;
}

.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  border-bottom: 1px solid #e0e0e0;
}

.message {
  margin-bottom: 20px;
}

.message-header {
  display: flex;
  align-items: center;
}

.sender-name {
  font-weight: bold;
  margin-right: 10px;
}

.message-content {
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 8px;
  max-width: 70%;
}

.user-message .message-content {
  background-color: #d1eaff;
}

.ai-message .message-content {
  background-color: #f1f1f1;
}

.loading {
  color: gray;
  font-size: 12px;
  margin-top: 5px;
}

.input-area {
  display: flex;
  padding: 20px;
  background-color: #ffffff;
}

.input-area input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.input-area button {
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-area button:hover {
  background-color: #0056b3;
}
</style>
