<template>
  <div class="container">
    <el-page-header @back="onBack"></el-page-header>
    <div class="flex items-center">
      <el-avatar class="mr-3" :size="200" :src="avatarUrl" />
      <el-button type="primary" @click="openFileDialog">修改头像</el-button>
      <!-- 隐藏的文件输入框 -->
      <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" />
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="account">账号</label>
        <input id="account" v-model="account" type="text" readonly required />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input id="password" v-model="password" type="text" readonly required />
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input id="email" v-model="email" type="email" :readonly="!isEditing" required />
      </div>
      <div class="form-group">
        <label for="phone">手机号</label>
        <input id="phone" v-model="phone" type="tel" :readonly="!isEditing" required />
      </div>
      <div class="form-group">
        <label for="token">百度秘钥token</label>
        <input id="token" v-model="token" type="text" :readonly="!isEditing" required />
      </div>
      <div class="form-group">
        <label for="nickname">昵称</label>
        <input id="nickname" v-model="nickname" type="text" :readonly="!isEditing" required />
      </div>
      <button type="button" @click="cancelEdit">取消修改</button>
      <button type="submit">保存修改</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useTokenStore,useUserAvatarStore } from '@/store/userstoken';

const onBack = () => {};

const defaultValues = {
  account: '默认账号',
  password: '默认密码',
  email: 'example@example.com',
  phone: '1234567890',
  token: '默认Token',
  pet_name: '默认展示昵称',
  avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
};

const account = ref(defaultValues.account);
const password = ref(defaultValues.password);
const email = ref(defaultValues.email);
const phone = ref(defaultValues.phone);
const token = ref(defaultValues.token);
const nickname = ref(defaultValues.pet_name);
const avatarUrl = ref(defaultValues.avatar);
const isEditing = ref(true);
const store = useTokenStore();
const avatarStore = useUserAvatarStore();
const fileInput = ref<HTMLInputElement | null>(null);

const fetchPersonalPageData = async () => {
  try {
    console.log("访问个人信息展示界面，更新数据");
    const response = await axios.post('http://127.0.0.1:5000/personal_page', { user: store.token.access_token });
    if (response.data.success === 'true' && response.data.data.length > 0) {
      const data = response.data.data[0];
      account.value = data.account ?? defaultValues.account;
      password.value = data.password ?? defaultValues.password;
      email.value = data.email ?? defaultValues.email;
      phone.value = data.phone ?? defaultValues.phone;
      token.value = data.token ?? defaultValues.token;
      nickname.value = data.pet_name ?? defaultValues.pet_name;
     // avatarUrl.value = data.avatar ?? defaultValues.avatar;
    } else {
      alert(`获取数据失败: ${response.data.message}`);
    }
  } catch (error) {
    alert('发生错误: ' + error.message);
  }
};

const updatePersonalPageData = async () => {
  try {
    console.log("更新用户信息");
    const updatedData = {
      account: account.value,
      email: email.value,
      phone: phone.value,
      token: token.value,
      pet_name: nickname.value
    };
    const response = await axios.post('http://127.0.0.1:5000/person_page_show', updatedData);
    if (response.data.success === 'true') {
      alert('用户信息更新成功');
      isEditing.value = false;
      await fetchPersonalPageData();
    } else {
      alert(`更新数据失败: ${response.data.message}`);
    }
  } catch (error) {
    alert('发生错误: ' + error.message);
  }
};

const handleFileChange = async () => {
  if (!fileInput.value || !fileInput.value.files.length) return;
  const file = fileInput.value.files[0];
  const formData = new FormData();
  formData.append('avatar', file);
  formData.append('user', store.token.access_token);

  try {
    const response = await axios.post('http://127.0.0.1:5000/upload_avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
      
    });
    if (response.data.success === 'true') {
      alert('头像上传成功');
      avatarUrl.value = response.data.avatar_url; // 更新头像 URL
      avatarStore.setAvatarUrl(response.data.avatar_url); // 更新全局头像 URL
      console.log('头像 URL 更新为：', response.data.avatar_url);
    } else {
      alert(`头像上传失败: ${response.data.message}`);
    }
  } catch (error) {
    alert('发生错误: ' + error.message);
  }
};



const openFileDialog = () => {
  fileInput.value?.click();
};

const handleSubmit = () => {
  updatePersonalPageData();
};

const cancelEdit = () => {
  isEditing.value = false;
};

onMounted(() => {
  fetchPersonalPageData();
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-family: 'Arial', sans-serif;
}

.name {
  font-size: 2.5em;
  color: #4a4a4a;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-size: 1%;
  margin-bottom: 8px;
  color: #333;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #007bff;
}

button {
  padding: 12px 24px;
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button:first-of-type {
  background-color: #28a745;
}

button:first-of-type:hover {
  background-color: #218838;
}
</style>
