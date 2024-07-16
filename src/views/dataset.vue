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
          <el-button @click="previewChunkEffect(row.name)">预览分块效果</el-button>
          <el-button @click="deleteDocument(row.name)">删除</el-button>
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
import { ElMessage } from 'element-plus';

const route = useRoute();
const router = useRouter();
const store = useTokenStore();
const alldocs = ref([
  { date: '2023-05-01', name: '文档1', sorts: '文档' },
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
const previewChunkEffect = (name: string) => {
  // 这里是预览分块效果的占位函数，具体实现需要您根据实际情况编写
  ElMessage.info(`预览分块效果：${name}`);
  // 可以在这里调用 rag 系统的文本分块逻辑
};
const deleteDocument = (name: string) => {
  // 删除文档的逻辑
  ElMessage.info(`删除文档：${name}`);
  // 实际删除逻辑需要您根据后端接口编写
};

onMounted(() => {
  fetchdocsdata();
});

// Helper function to get file type
const getFileType = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'doc':
    case 'docx':
      return 'Word 文档';
    case 'ppt':
    case 'pptx':
      return 'PPT 文件';
    case 'xls':
    case 'xlsx':
      return 'Excel 文件';
    case 'pdf':
      return 'PDF 文件';
    default:
      return '未知文件类型';
  }
};

// Modify handleUploadSuccess to add file type
const handleUploadSuccess = (response: any, file: any) => {
  if (response.success === 'true') {
    ElMessage.success('上传成功');
    const fileType = getFileType(file.name);
    alldocs.value.push({
      date: new Date().toISOString().split('T')[0],
      name: file.name,
      sorts: fileType
    });
  } else {
    console.log(`上传失败: ${response.message}`);
  }
};
</script>

<style lang="scss">
</style>
