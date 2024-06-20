<template>
  <div v-show="isWindowvisible" style="height:200px" class="floating-window absolute top-10 right-4 z-10 bg-white rounded-lg shadow-lg border border-gray-300"
       :style="{ width: windowWidth + 'px', height: windowHeight + 'px' }"
       ref="floatingWindow">
    <div class="flex justify-between items-center bg-gray-100 p-2 border-b border-gray-300">
      <select class="border border-gray-400" v-model="type">
        <option value="composition">Composition API</option>
        <option value="legacy">Legacy</option>
      </select>
      <button class="text-gray-500 hover:text-gray-800" @click="closeWindow">&times;</button>
    </div>
    <component :is="component" style="height: calc(100% - 40px);"></component>
  </div>

  <div class="relative">
    <div class="editor-container mx-4">
      <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" />
      <el-button v-show="!isWindowvisible" type="primary" @click="openwindow">ai助手</el-button>
      <el-button v-show="isWindowvisible" type="primary" @click="closeWindow">ai助手</el-button>
      <el-button type="submit" @click="saveDocument">保存</el-button>
      <el-button type="primary" @click="polish">润色</el-button>
      <el-button type="primary" @click="continuation">续写</el-button>
      <el-button type="primary" @click="zhaiyao">摘要</el-button>

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
import { ref, computed } from 'vue';
import VueComposition from './vue-composition.vue';
import VueLegacy from './vue-legacy.vue';
import '@wangeditor/editor/dist/css/style.css';
import { onBeforeUnmount, shallowRef, onMounted } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import axios from 'axios';

const polish=()=>{
  console.log("调用润色")
  let formData = new FormData();
  formData.append("username","xxxxxx");
  formData.append("key","xxxxxx");
  formData.append("cont",
    "你是大帅哥"
  );
  let url = 'http://10.255.198.65:5500/getpolish' //访问后端接口的url
  let method = 'post'
  axios({
    method,
    url,
    data: formData,
  }).then(res => {
    alert(res.data.answer)
    console.log(res.data.answer);
  });
}


const continuation=()=>{
  console.log("调用续写")
  let formData = new FormData();
  formData.append("username","123456");
  formData.append("key","xxxxxxx");
  formData.append("cont","你是大帅哥");
  let url = 'http://10.255.198.65:5500/getcontinuation' //访问后端接口的url
  let method = 'post'
  axios({
    method,
    url,
    data: formData,
  }).then(res => {
    alert(res.data.answer);
    console.log(res.data.answer);
  })
  .catch(error => {
    //alert("请求错误: ", error);
    console.error("请求错误: ", error);
  });
}

const zhaiyao=()=>{
  console.log("调用摘要")
  let formData = new FormData();
  formData.append("username","123456");
  formData.append("key","xxxxxxx");
  formData.append("cont","刘涛是帅哥");
  let url = 'http://10.255.198.65:5500/getabstract' //访问后端接口的url
  let method = 'post'
  axios({
    method,
    url,
    data: formData,
  }).then(res => {
    alert(res.data.answer)
    console.log(res.data.answer);
  });}
const editorRef = shallowRef();
const valueHtml = ref('<p></p>');
const isWindowvisible = ref(false);
const closeWindow = () => {
  isWindowvisible.value = false;
};
const openwindow = () => {
  isWindowvisible.value = true;
};
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p></p>';
  }, 1500);
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
  axios
    .post('/api/save_document', { content: valueHtml.value })
    .then((response) => {
      alert('Document saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving document:', error);
    });
};

const type = ref('composition');
const component = computed(() => ({
  composition: VueComposition,
  legacy: VueLegacy,
}[type.value]));
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.0/dist/tailwind.min.css');

h1, p {
  font-family: Lato;
}

.floating-window {
  z-index: 50; /* adjust as necessary */
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
