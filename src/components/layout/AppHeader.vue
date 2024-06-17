<template>

  <el-header>
    <el-icon @click="isCollapse=!isCollapse">
      <Expand v-show="isCollapse"/>
      <Fold v-show="!isCollapse"/>
    </el-icon>
    <!--面包屑-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">promotion management</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <!--下拉菜单-->
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="50" :src="circleUrl"/>
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            个人主页
          </el-dropdown-item>
          <el-dropdown-item>
            logout
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>


</template>

<script setup lang="ts">
import {ref} from "vue"
import {isCollapse} from "@/components/layout/isCollapse.ts";
import {Expand, Fold} from "@element-plus/icons-vue";

</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  background-color: white;

  .el-icon {
    margin-right: 17px;
    color: #1a1a1a;
  }
}

.el-dropdown {
  margin-left: auto;
}
</style>