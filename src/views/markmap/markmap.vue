<template>
  <!-- Floating window container -->
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

  <!-- Main content -->
  <div class="relative">
    <div class="editor-container mx-4">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
      />
      <el-button v-show="!isWindowvisible" type="primary" @click="openwindow">ai助手</el-button>
      <el-button v-show="isWindowvisible" type="primary" @click="closeWindow">ai助手</el-button>
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
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
import axios from 'axios';

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

</style>
