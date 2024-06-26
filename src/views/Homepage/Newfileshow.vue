<template>
  <div>
    <h1>新建</h1>
    <h3>基础文档</h3>
    <div class="icons">
      <el-icon @click="navigateTo('doc')" style="font-size: 50px"><Document /></el-icon>
      <el-icon @click="navigateTo('ppt')" style="font-size: 50px"><Document /></el-icon>
      <el-icon @click="navigateTo('sheet')" style="font-size: 50px"><Document /></el-icon>
      <el-icon @click="navigateTo('pdf')" style="font-size: 50px"><Document /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateTo = (type: string) => {
  router.push(`/${type}`);
};
</script>

<style scoped>
.icons {
  display: flex;
  gap: 20px; /* Adjust the spacing between icons */
  justify-content: center; /* Center the icons */
}
</style>
