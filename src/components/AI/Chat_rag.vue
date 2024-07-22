<template>
    <div class="chat-app">
      <div class="sidebar">
        <h3>知识库列表</h3>
        <ul>
          <li 
            v-for="item in knowledgeItems" 
            :key="item.id" 
            :class="{ selected: item.id === selectedItem }"
            @click="selectItem(item.id)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      
      <div class="chat-area">
        <div class="messages">
          <div v-for="message in messages" :key="message.id" class="message">
            <div class="message-header">
              <el-avatar class="mr-3" :size="32" />
              <span class="sender-name">{{ message.sender === 'user' ? '用户' : 'AI' }}</span>
            </div>
            {{ message.text }}
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
  import { ref,onMounted } from 'vue';
  import requestdb from '@/utils/requestdb.ts';
  import  requestai  from '@/utils/requestai.ts';
  import { ElMessage, ElAvatar } from 'element-plus';
  import 'element-plus/es/components/message/style/css';
  
  interface KnowledgeItem {
    id: number;
    name: string;
  }
  
  const knowledgeItems = ref<KnowledgeItem[]>([
    { id: 1, name: '暂无可用知识库' },
  ]);
  
  const selectedItem = ref<number | null>(null);
  
  
  
  interface Message {
    id: number;
    text: string;
    sender: string;
  }
  
  const messages = ref<Message[]>([]);
  const newMessage = ref('');
  
  const file = ref<File | null>(null);
  // const fileInput = ref<HTMLInputElement | null>(null);
const selectItem = async (id: number) => {
    selectedItem.value = id;
    const formdata=new FormData();
    formdata.append("username", "admin");
    formdata.append("id", selectedItem.value.toString());
    formdata.append("question", "总结文档");
    try {
      console.log(selectedItem.value)
      const response = await requestdb.post('/index_milvus', formdata);
      console.log('Index Milvus Response:', response.data);
    } catch (error) {
      console.error('Error interacting with index_milvus:', error);
    }
  };
  const sendMessage = () => {
    if (newMessage.value.trim() === '') {
      return;
    }
    messages.value.push({ id: Date.now(), text: newMessage.value, sender: 'user' });
  
    let formData = new FormData();
    formData.append("username", "admin");
    formData.append("number", '1');
    formData.append("cont", newMessage.value);

    newMessage.value = '';
    requestai({
      method: 'post',
      url: "/getAI",
      data: formData,
    }).then(res => {
      messages.value.push({ id: Date.now(), text: res.data.answer, sender: 'AI' });
    }).catch(error => {
      ElMessage.error("请求错误: " + error);
    }).finally(() => {
      
      file.value = null;
    });
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
    const err = error as Error;
    console.log('发生错误: ' + err.message);
   }
 };

 onMounted(() => {
  fetchdocsdata();
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
  