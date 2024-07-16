<template>
  <el-card style="width: auto">
    <template #header>
      <div style="display: flex;">
        <el-upload
          action="/upload"
          :on-success="handleUploadSuccess"
          :before-upload="beforeUpload"
          :data="uploadData"
          :headers="uploadHeaders"
          :show-file-list="false"
        >
          <el-button type="primary">上传</el-button>
        </el-upload>
      </div>
    </template>

    <el-table :data="alldocs" border style="width: auto; display: flex;">
      <el-table-column prop="date" label="修改日期" width="180" align="center" />
      <el-table-column prop="name" label="名称" width="400" align="center" />
      <el-table-column prop="sorts" label="类型" align="center" />
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
import { useRoute, useRouter } from 'vue-router';
import { useTokenStore } from '@/store/userstoken';
import request from '@/utils/request';

const route = useRoute();
const router = useRouter();
const store = useTokenStore();
const alldocs = ref([
  { date: '2023-05-01', name: '文档1', sorts: '文档', address: '地址1' },
]);
const id = ref(route.params.id);

const fetchdocsdata = async () => {
  try {
    const response = await request.post('/show_file', { user: store.token.access_token, id: id.value });
    if (response.data.success === 'true' && response.data.data.length > 0) {
      alldocs.value = response.data.data;
    } else {
      console.log(`获取数据失败: ${response.data.message}`);
    }
  } catch (error) {
    const err = error as Error;
    console.log('发生错误: ' + err.message);
  }
};

const editDocument = (name: string) => {
  router.push({ name: 'wangEditor', query: { documentName: name } });
};

const handleUploadSuccess = (response: any, file: any) => {
  if (response.success === 'true') {
    fetchdocsdata(); // 重新获取文档列表数据
  } else {
    console.log(`上传失败: ${response.message}`);
  }
};

const beforeUpload = (file: any) => {
  // 在这里可以进行上传文件的验证
  return true;
};

const uploadData = () => {
  return {
    user: store.token.access_token,
    id: id.value,
  };
};

const uploadHeaders = {
  Authorization: `Bearer ${store.token.access_token}`,
};

onMounted(() => {
  fetchdocsdata();
});
</script>

<style lang="scss">
</style>
