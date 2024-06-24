<template>
        <el-aside >
          <el-menu router unique-opened :collapse="isCollapse">
            <a href="/" class="logo">
              <img src="@/assets/ai.svg" alt=""/>
              <h2>智能文档</h2>
            </a>
            
            <el-menu-item  index="/">
             <el-icon style="font-size: 200px"><HomeFilled /></el-icon><span>开始</span>
            </el-menu-item>

            <el-menu-item index="/document">
             <el-icon style="font-size: 200px"><DocumentAdd /></el-icon><span>新建</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
</template>

<script setup lang="ts">
import {HomeFilled} from "@element-plus/icons-vue";
import {ref} from "vue"
import {isCollapse} from "@/components/layout/isCollapse.ts";

</script>

<style lang="scss" scoped>
.el-aside{
  background-color: #eee;
  height: 100vh;
  width:auto;
  text-align: left;
}
.el-menu{
  width:200px;
  padding: 0;
  background-color: #eee;
  border-right: none;
  &.el-menu--collapse{
    width:60px;
    & h2{
      display:none;
    }
  }
}
.logo{
  display:flex;
  align-items:center;
  text-decoration:none;
  justify-content:center;
  color:black;
  height:60px;
  img{
    width:32px;
    height:32px;
  }
}

</style>