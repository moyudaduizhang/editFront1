<template>
  <div class="container">
    <h1
      style="
        font-size: 40px;
        border-bottom: 2px solid black;
        padding-bottom: 10px;
      "
    >
      新建
    </h1>
    <h2 style="font-size: 20px">基础文档</h2>
    <div class="icons">
      <div class="icon-item">
        <img @click="navigateTo('doc')" src="@/assets/WORD.svg" />
        <div class="icon-text">Word</div>
      </div>
      <div class="icon-item">
        <img @click="navigateTo('ppt')" src="@/assets/PPT.svg" />
        <div class="icon-text">PPT</div>
      </div>
      <div class="icon-item">
        <img @click="navigateTo('excel')" src="@/assets/EXCEL.svg" />
        <div class="icon-text">Excel</div>
      </div>
      <div class="icon-item">
        <img @click="navigateTo('pdf')" src="@/assets/PDF1.svg" />
        <div class="icon-text">PDF</div>
      </div>
    </div>
    <h2 style="font-size: 20px">应用服务</h2>
    <div class="icons">
      <div class="icon-item">
        <img @click="navigateTo('mindmap')" src="@/assets/思维导图.svg" />
        <div class="icon-text">思维导图</div>
      </div>
      <div class="icon-item">
        <img @click="navigateTo('flowchart')" src="@/assets/流程图.svg" />
        <div class="icon-text">流程图</div>
      </div>
      <div class="icon-item">
        <img @click="navigateTo('drawing')" src="@/assets/画笔.svg" />
        <div class="icon-text">创作</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
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

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-text {
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}

img {
  width: 32px;
  height: 32px;
}
</style>
