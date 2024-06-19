<template>
    <!-- 悬浮窗 -->
    <div v-show="isWindowvisible" style="height:200px" class="floating-window absolute top-10 right-4 z-10 bg-white rounded-lg shadow-lg border border-gray-300"
         :style="{ width: windowWidth + 'px', height: windowHeight + 'px' }"
         ref="floatingWindow">
      <div   class="flex justify-between items-center bg-gray-100 p-2 border-b border-gray-300">
        <select class="border border-gray-400" v-model="type">
          <option value="composition">Composition API</option>
          <option value="legacy">Legacy</option>
        </select>
        <button class="text-gray-500 hover:text-gray-800" @click="closeWindow">&times;</button>
      </div>
      <component :is="component" style="height: calc(100% - 40px);"></component>
    </div>
    
    <!-- 编辑器-->
    <div class="relative">
      <div class="editor-container mx-4">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
        />
        <el-button v-show="!isWindowvisible" type="primary" @click="openwindow">ai助手</el-button>
        <el-button v-show="isWindowvisible" type="primary" @click="closeWindow">ai助手</el-button>
      <div id="content">
        <div id="editor-container">
          <div id="title-container">
          </div>
          <Editor
          style="height: 1000px; justify-content: space-between; overflow-y: hidden;"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          @onCreated="handleCreated"
        />
        </div>
      </div>
  
        <el-button type="primary" @click="saveDocument">保存</el-button>
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
  import axios from 'axios'
import { Boot } from '@wangeditor/editor';
 const menu1={
  key:"menu1",
  factory(){
    return new MyButtonMenu()
  }
 }
 Boot.registerMenu(menu1)
  //进行润色的函数
  const polish=()=>{
    visiblemenu.value = false;
    let formData = new FormData();
    formData.append("username","xxxxxx");
    formData.append("key","xxxxxx");
    formData.append("cont",hisstring);
    let url = 'http://127.0.0.1:5000/getpolish' //访问后端接口的url
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
  //进行续写
  const continuation=()=>{
    visiblemenu.value = false;
    let formData = new FormData();
    formData.append("username","123456");
    formData.append("key","xxxxxxx");
    formData.append("cont",hisstring);
    let url = 'http://127.0.0.1:5000/getcontinuation' //访问后端接口的url
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
  
  const editorRef = shallowRef();
  const valueHtml = ref('<p>你好！！！</p>');
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
  
  /* Ensure the floating window is always above other content */
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
  