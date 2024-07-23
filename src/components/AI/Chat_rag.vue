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
        <li v-for="history in chatHistory" :key="history.id">
          {{ history.summary }}
        </li>
      </ul>
    </div>

    <div class="chat-area">
      <div class="messages">
        <div v-for="message in messages" :key="message.id" class="message">
          <div class="message-header">
            <el-avatar class="mr-3" :src="message.avatar" :size="32" />
            <span class="sender-name">{{ message.sender === 'user' ? '用户' : 'AI' }}</span>
          </div>
          {{ message.text }}
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
import { ref, onMounted } from 'vue';
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
  } catch (error) {
    console.log('发生错误: ' + error.message);
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

    if (selectedItems.value.length > 0) {
      response = await requestdb.post('/index_milvus', formData);
      console.log('Index Milvus Response:', response.data);
    } else {
      response = await requestai.post('/getAI', formData);
      console.log('AI Response:', response.data);
    }

    messages.value.push({ id: Date.now(), text: response.data.answer, sender: 'AI', avatar: AI_AVATAR });

    // 添加到聊天历史记录
    chatHistory.value.push({ id: Date.now(), summary: newMessage.value });
  } catch (error) {
    ElMessage.error('请求错误: ' + error);
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
  } catch (error) {
    console.log('发生错误: ' + error.message);
  }
};

onMounted(() => {
  fetchdocsdata();
  fetchUserAvatar();
});
</script>

<style scoped>
.chat-app {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 200px;
  border-right: 1px solid #ccc;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
}

.sidebar li.selected {
  background-color: #007bff;
  color: white;
}

.history {
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 10px;
}

.history ul {
  list-style-type: none;
  padding: 0;
}

.history li {
  padding: 10px;
  cursor: pointer;
}

.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  border-bottom: 1px solid #ccc;
}

.message {
  padding: 5px;
  margin: 5px 0;
  background-color: #f1f1f1;
  border-radius: 5px;
}

.loading {
  color: gray;
  font-size: 12px;
  margin-top: 5px;
}

.input-area {
  display: flex;
  padding: 10px;
}

.input-area input {
  flex: 1;
  padding: 5px;
  margin-right: 10px;
}

.input-area button {
  padding: 5px 10px;
}
</style>
