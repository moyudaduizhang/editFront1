<template>
  <el-card style="max-width: auto">
     <template #header>
       <div class="card-header">
         <el-button type="primary" @click="router1.push({name:'wangEditor'})">新建</el-button>
       </div>
     </template>
     
     <el-table :data="alldocs" border style="width: 100%">
       <el-table-column prop="date" label="修改日期" width="180" align="center" />
       <el-table-column prop="name" label="名称" width="400" align="center" />
       <el-table-column prop="address" label="操作" align="center">
         <template #default="{ row }">
           <el-button @click="editDocument(row.name)">编辑</el-button>
           <el-button>删除</el-button>
         </template>
       </el-table-column>
     </el-table>
   </el-card>
 </template>
 
 <script setup lang="ts">
 import { onMounted, ref } from 'vue';
 import { getalldocs } from '@/api/doc';
 import { useRouter } from 'vue-router';
 import { useTokenStore } from '@/store/userstoken';
 import axios from 'axios';
 
 const router1 = useRouter();
 const store = useTokenStore();
 const alldocs = ref([]);
 
 const fetchdocsdata = async () => {
   try {
     const response = await axios.post('http://132df498.r16.cpolar.top/show_file', { user: store.token.access_token });
     if (response.data.success === 'true' && response.data.data.length > 0) {
       alldocs.value = response.data.data;
     } else {
       alert(`获取数据失败: ${response.data.message}`);
     }
   } catch (error) {
     alert('发生错误: ' + error.message);
   }
 };
// const fetchdocsdata = async () => {
//   try {
//     const response = await getalldocs(store.token.access.token);
//     if (response.data.success === 'true' && response.data.data.length > 0) {
//       alldocs.value = response.data.data;
//     } else {
//       alert(`获取数据失败: ${response.data.message}`);
//     }
//   } catch (error) {
//     alert('发生错误: ' + error.message);
//   }
// };
 
 const editDocument = (name) => {
   router1.push({ name: 'wangEditor', query: { documentName: name } });
 };
 
 onMounted(() => {
   fetchdocsdata();
 });
 </script>
 
 <style lang="scss">
 </style>
 