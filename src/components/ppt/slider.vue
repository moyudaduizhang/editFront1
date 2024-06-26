<template>
    <div class="slide">
      <textarea v-model="slide.content" @input="updateContent"></textarea>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, defineProps } from 'vue';
  
  const props = defineProps({
    slide: Object
  });
  
  const content = ref(props.slide.content);
  
  const updateContent = () => {
    props.slide.content = content.value;
  };
  
  watch(() => props.slide.content, (newValue) => {
    content.value = newValue;
  });
  </script>
  
  <style scoped>
  .slide {
    position: relative;
    width: 800px;
    height: 600px;
    border: 1px solid #ddd;
  }
  textarea {
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: none;
    padding: 20px;
    box-sizing: border-box;
    resize: none;
  }
  </style>
  