<template>
  <div class="container">
    <h1 style="font-size: 40px; border-bottom: 2px solid black; padding-bottom: 10px;">新建</h1>
    <h2 style="font-size: 20px;">基础文档</h2>
    <div class="icons">
      <img @click="navigateTo('doc')" src="@/assets/WORD.svg" />
      <img @click="navigateTo('ppt')" src="@/assets/PPT.svg" />
      <img @click="navigateTo('doc')" src="@/assets/ECEL.svg" />
      <img @click="navigateTo('doc')" src="@/assets/PDF1.svg" />
    </div>
    <h2 style="font-size: 20px;">应用服务</h2>
    <div class="icons">
      <img @click="navigateTo('doc')" src="@/assets/WORD.svg" />
      <img @click="navigateTo('ppt')" src="@/assets/PPT.svg" />
      <img @click="navigateTo('doc')" src="@/assets/ECEL.svg" />
      <img @click="navigateTo('doc')" src="@/assets/PDF1.svg" />
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
.container {
  border: 2px solid black;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1); /* Add a shadow effect */
  padding: 20px; /* Add padding for better spacing */
}

.icons {
  display: flex;
  gap: 20px; /* Adjust the spacing between icons */
  justify-content: center; /* Center the icons */
}

img {
  width: 32px;
  height: 32px;
}
</style>