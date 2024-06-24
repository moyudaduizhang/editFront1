<template>
  <div class="common-layout">
    <el-container>
      <AppAside />
      <el-container class="header-and-main">
        <AppHeader />
        <el-scrollbar>
          <RouterView />
        </el-scrollbar>
      </el-container>
      <AiSidebar :isVisible="isSidebarVisible" @close="closeSidebar" />
    </el-container>
    <div type="primary" @click="toggleSidebar" class="toggle-button">
      <img  src="@/assets/ai.svg"  class="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppAside from "@/views/Homepage/AppAside.vue";
import AppHeader from "@/views/Homepage/AppHeader.vue";
import AiSidebar from "@/components/AI/AiSidebar.vue";

const isSidebarVisible = ref(false);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

const closeSidebar = () => {
  isSidebarVisible.value = false;
};
</script>

<style lang="scss" scoped>
.common-layout {
  position: relative;
}

.header-and-main {
  flex-direction: column;
  height: 100vh;
}

el-side {
  background-color: #eee;
}

.toggle-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
.logo{
  display:flex;
  align-items:center;
  text-decoration:none;
  justify-content:center;
  color:black;
  height:40px;
  img{
    width:20px;
    height:20px;
  }
}
</style>
