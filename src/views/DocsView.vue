<template>
 <el-card style="max-width: auto">
    <template #header>
      <div class="card-header">
        <el-button type="primary" @click="router1.push({name:'wangEditor'})">新建</el-button>
      </div>
    </template>
    
    <el-table :data="alldocs" border style="width: 100%">
      <!-- <el-table-column label="序号" width="180" align="center"/> -->
    <el-table-column prop="date" label="修改日期" width="180" align="center" />
    <el-table-column prop="name" label="名称" width="400" align="center" />
    <el-table-column prop="address" label="操作" align="center">
      <el-button >编辑</el-button>
      <el-button >删除</el-button>
    </el-table-column>
  </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getalldocs } from '@/api/doc';
import { useRouter } from 'vue-router';
import { useTokenStore } from '@/store/userstoken'
import axios from 'axios';
const router1 = useRouter();
const store=useTokenStore()
const alldocs = ref([
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2024-06-04',
    name: 'docs1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'docs2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'docs2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'docs3',
    address: 'No. 189, Grove St, Los Angeles',
  },
])

const fetchdocsdata=async()=>{
  try {
      const response = await axios.post('http://127.0.0.1:5000/personal_page', { user: store.token.access_token });
      if (response.data.success === 'true' && response.data.data.length > 0) {
        const data = response.data.data[0];
        date.value = data.alldocs ?? alldocs.date;
      } else {
        alert(`获取数据失败: ${response.data.message}`);
      }
    } catch (error) {
      alert('发生错误: ' + error.message);
    }
}

onMounted(()=>{
  fetchdocsdata()
})
</script>

<style lang="scss">

</style>
