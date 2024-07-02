<template>
  <el-aside>
    <el-menu router unique-opened :collapse="isCollapse">
      <a class="logo">
        <img src="@/assets/ai.svg" alt="" />
        <h2 style="margin-left: 10px">智能文档</h2>
      </a>

      <router-link to="/dashboard" class="el-menu-item">
        <el-icon style="font-size: 200px"><HomeFilled /></el-icon
        ><span>开始</span>
      </router-link>

      <el-popover placement="right" :width="400" trigger="click">
        <template #reference>
          <el-menu-item>
            <el-icon style="font-size: 200px"><DocumentAdd /></el-icon
            ><span>新建</span>
          </el-menu-item>
        </template>
        <Newfileshow />
      </el-popover>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { HomeFilled, DocumentAdd } from "@element-plus/icons-vue";
import { ref } from "vue";
import { isCollapse } from "@/components/layout/isCollapse.ts";
import Newfileshow from "@/views/Homepage/Newfileshow.vue";
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #eee;
  height: 100vh;
  width: auto;
  text-align: left;
}
.el-menu {
  width: 200px;
  padding: 0;
  background-color: #eee;
  border-right: none;
  &.el-menu--collapse {
    width: 60px;
    & h2 {
      display: none;
    }
  }
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 15px;
  color: black;
  height: 60px;
  img {
    width: 32px;
    height: 32px;
  }
}
.router-link-active .el-menu-item {
  background-color: #d3d3d3; /* or any highlight color */
}
</style>
