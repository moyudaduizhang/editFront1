<template>
    <div class="editor">
      <div class="slide-list">
        <button @click="addSlide">添加幻灯片</button>
        <ul>
          <li v-for="(slide, index) in slides" :key="index" @click="selectSlide(index)">
            幻灯片 {{ index + 1 }}
          </li>
        </ul>
      </div>
      <div class="slide-editor">
        <Slide v-if="currentSlide" :slide="currentSlide" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Slide from './slider.vue';
  
  const slides = ref([{ content: '幻灯片 1' }]);
  const currentSlideIndex = ref(0);
  
  const addSlide = () => {
    slides.value.push({ content: `幻灯片 ${slides.value.length + 1}` });
    currentSlideIndex.value = slides.value.length - 1;
  };
  
  const selectSlide = (index: number) => {
    currentSlideIndex.value = index;
  };
  
  const currentSlide = computed(() => slides.value[currentSlideIndex.value]);
  </script>
  
  <style scoped>
  .editor {
    display: flex;
  }
  .slide-list {
    width: 200px;
    background: #f0f0f0;
    padding: 20px;
  }
  .slide-editor {
    flex: 1;
    padding: 20px;
    background: #ffffff;
    border-left: 1px solid #ddd;
  }
  </style>
  