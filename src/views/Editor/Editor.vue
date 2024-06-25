<template>
  <div v-show="isWindowVisible" style="height: 500px;" class="floating-window absolute top-10 right-4 z-10 bg-white rounded-lg shadow-lg border border-gray-300" 
       :style="{ width: windowWidth + 'px', height: windowHeight + 'px' }" 
       ref="floatingWindow">
    <div class="flex justify-between items-center bg-gray-100 p-2 border-b border-gray-300">
      <span>AI 助手</span>
      <button class="text-gray-500 hover:text-gray-800" @click="closeWindow">&times;</button>
    </div>
    <div class="p-4 flex">
      <div class="flex flex-col">
        <el-input v-model="input" type="textarea" autosize placeholder="请输入文本" style="margin-bottom: 10px;" />
        <div v-if="aiResponse" class="mt-4 bg-gray-100 p-2 rounded border border-gray-300">
          {{ aiResponse }}
        </div>
      </div>
      <div class="flex flex-col ml-4">
        <el-button type="primary" @click="chat"><el-icon><Comment /></el-icon></el-button>
        <el-button type="primary" @click="translate">翻译</el-button>
        <el-button type="primary" @click="ocr">OCR</el-button>
        <el-button type="primary" @click="polish" class="mt-2">润色</el-button>
        <el-button type="primary" @click="continuation" class="mt-2">续写</el-button>
        <el-button type="primary" @click="zhaiyao" class="mt-2">摘要</el-button>
      </div>
    </div>
  </div>

  <div class="relative">
    <div class="editor-container mx-4">
      <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" />
      <el-input v-model="documentName" placeholder="请输入文档名称" style="margin-bottom: 10px;" />
      <el-button type="primary" @click="toggleWindow">{{ isWindowVisible ? '关闭' : 'AI 助手' }}</el-button>
      <el-button type="submit" @click="saveDocument">保存</el-button>

      <div id="content">
        <div id="editor-container">
          <div id="title-container"></div>
          <Editor
            style="height: 900px; justify-content: space-between; overflow-y: hidden;"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            @onCreated="handleCreated"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount, shallowRef } from 'vue';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { useTokenStore } from '@/store/userstoken';

const input = ref('');
const aiResponse = ref('');
const isWindowVisible = ref(false);
const documentName = ref('');
const editorRef = shallowRef();
const valueHtml = ref('<p></p>');
const store = useTokenStore();


const toggleWindow = () => {
  isWindowVisible.value = !isWindowVisible.value;
};

const closeWindow = () => {
  isWindowVisible.value = false;
};

const chat = () => {
  // 默认聊天功能
};

const translate = () => {
  // 翻译功能
  
};

const ocr = () => {
  // OCR 功能
};

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

const route = useRoute();
documentName.value = route.query.documentName || '';

onMounted(() => {
  if (documentName.value) {
    axios.post('http://127.0.0.1:5000/get_document', { name: documentName.value, user: store.token.access_token })
      .then((response) => {
        if (response.data.content) {
          valueHtml.value = response.data.content;
          console.log(valueHtml.value)
        }
      })
      .catch((error) => {
        console.error('Error fetching document:', error);
      });
  }

 
});

const toolbarConfig = {};
const editorConfig = { placeholder: '在此输入' };

onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor;
};

const saveDocument = () => {
  if (!documentName.value) {
    alert("请填写文档名称");
    return;
  }
  axios.post('http://127.0.0.1:5000/upload_file', {
    name: documentName.value,
    content: valueHtml.value,
    user: store.token.access_token
  })
  .then((response) => {
    alert('文档保存成功!');
    console.log(response.data);
  })
  .catch((error) => {
    if (error.response) {
      console.error('服务器返回错误:', error.response.data);
      alert('保存文档出错: ' + error.response.data.message);
    } else if (error.request) {
      console.error('请求发送失败:', error.request);
    } else {
      console.error('请求错误:', error.message);
    }
  });
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.0/dist/tailwind.min.css');

h1, p {
  font-family: Lato;
}

.floating-window {
  z-index: 50;
}

#content {
  height: calc(100% - 40px);
  background-color: rgb(245, 245, 245);
  overflow-y: auto;
  position: relative;
}

#editor-container {
  width: 850px;
  margin: 30px auto 150px auto;
  background-color: #fff;
  padding: 20px 50px 50px 50px;
  border: 1px solid #e8e8e8;
  box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
}

#title-container {
  padding: 20px 0;
  border-bottom: 1px solid #e8e8e8;
}
</style>
