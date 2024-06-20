<template>
  <div aria-label="A complete example of page header">
    <el-page-header @back="onBack">
      <template #extra>
        <div class="flex items-center">
          <el-button>Print</el-button>
          <el-button type="primary" class="ml-2">Edit</el-button>
        </div>
      </template>

      <el-descriptions :column="1" size="small" class="mt-4">
        <el-descriptions-item >
          <div class="flex items-center">
          <el-avatar
            class="mr-3"
            :size="128"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <div class="tags">
            <span class="text-large font-600 mr-3"> 下雨 </span>
       <span
       class="text-sm mr-2"
       style="color: var(--el-text-color-regular)"
      >
       admin
    </span>
     <el-tag>Default</el-tag>
          </div>
          
        </div>
        </el-descriptions-item>
        <el-descriptions-item label="账号">
         admin
        </el-descriptions-item>
        <el-descriptions-item label="电话号码">
          18100000000
        </el-descriptions-item>
        <el-descriptions-item label="所在地">中国 湖南</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
      <p class="mt-4 text-sm">
        自我介绍
      </p>
    </el-page-header>
  </div>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const onBack = () => {
  notify('Back')
}
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.tags {
    display: flex;
    flex-direction: column;
}
</style>
