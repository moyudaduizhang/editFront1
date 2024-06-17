<template>
  <div class="common-layout">
    <el-container>


        <AppAside/>

        <el-container class="header-and-main">
           <AppHeader/>

          <el-scrollbar>
            <RouterView/>
          </el-scrollbar>

        <el-main>Main</el-main>
        </el-container>

    </el-container>
  </div>
</template>

<script setup lang="ts">
import AppAside from "@/components/layout/AppAside.vue";
import AppHeader from "@/components/layout/AppHeader.vue";

</script>

<style lang="scss" scoped>
.header-and-main{
  flex-direction: column;
  height:100vh;
}
</style>