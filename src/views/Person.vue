<template>
  <div aria-label="A complete example of page header">
    <el-page-header @back="onBack">
      <template #extra>
        <div class="flex items-center">
          <el-button  @click="$router.push({path:'/EditPerson'})" type="primary" class="ml-2">Edit</el-button>
        </div>
      </template>

      <el-descriptions :column="1" size="large" class="mt-4">
        <el-descriptions-item >
          <div class="flex items-center">
          <el-avatar
            class="mr-3"
            :size="100"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <div class="tags">
            <span class="text-large font-600 mr-3"> {{nickname}} </span>
       <span
       class="text-sm mr-2"
       style="color: var(--el-text-color-regular)"
      >
       {{ account }}
    </span>
          </div>
          
        </div>
        </el-descriptions-item>
        <el-descriptions-item   label="账号">
          {{ account }}
        </el-descriptions-item>
        <el-descriptions-item label="密码">
          {{ password }}
        </el-descriptions-item>
        <el-descriptions-item label="电话号码">
          {{ phone }}
        </el-descriptions-item>
        <el-descriptions-item label="所在地">中国 湖南</el-descriptions-item>
        <el-descriptions-item label="电子邮箱">{{ email }}</el-descriptions-item>
        <el-descriptions-item label="百度飞桨token">{{ token }}</el-descriptions-item>
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
import { onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useTokenStore } from '@/store/userstoken'
import axios from 'axios';
const store=useTokenStore()
const defaultValues = {
    account: '默认账号',
    password: '默认密码',
    email: 'example@example.com',
    phone: '1234567890',
    token: '默认Token',
    pet_name: 'test昵称',
  };
  
  const account = ref(defaultValues.account);
  const password = ref(defaultValues.password);
  const email = ref(defaultValues.email);
  const phone = ref(defaultValues.phone);
  const token = ref(defaultValues.token);
  const nickname = ref(defaultValues.pet_name);

  const fetchPersonalPageData = async () => {
    try {
      
      const response = await axios.post('http://127.0.0.1:5000/personal_page', { user: store.token.access_token });
      if (response.data.success === 'true' && response.data.data.length > 0) {
        const data = response.data.data[0];
        account.value = data.account ?? defaultValues.account;
        password.value = data.password ?? defaultValues.password;
        email.value = data.email ?? defaultValues.email;
        phone.value = data.phone ?? defaultValues.phone;
        token.value = data.token ?? defaultValues.token;
        nickname.value = data.pet_name ?? defaultValues.pet_name;
      } else {
        alert(`获取数据失败: ${response.data.message}`);
      }
    } catch (error) {
      alert('发生错误: ' + error.message);
    }
  };
  onMounted(() => {
    fetchPersonalPageData();
  });
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
