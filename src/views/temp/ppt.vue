<template>
    <div class="document-manager">
      <h1>文档管理</h1>
      <button @click="createNewDocument">新建</button>
      <ul>
        <li v-for="(doc, index) in documents" :key="index">
          文档 {{ index + 1 }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const documents = ref(['文档 1', '文档 2', '文档 3']);
  
  const createNewDocument = () => {
    router.push('/editppt');
  };
  </script>
  
  <style scoped>
  .document-manager {
    padding: 20px;
  }
  </style>
  