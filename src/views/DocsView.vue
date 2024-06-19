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
    <el-table-column prop="name" label="名称" width="180" align="center" />
    <el-table-column prop="address" label="操作" align="center">
      
    </el-table-column>
  </el-table>
    <!-- <template #footer>Footer content</template> -->
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getalldocs } from '@/api/doc';
import { useRouter } from 'vue-router';

const router1 = useRouter();
const alldocs = ref([]);
const Getall=async()=>{
   const res = await getalldocs();  
   alldocs.value = res.data;  
}

</script>

<style lang="scss">

</style>
