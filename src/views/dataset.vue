<template>
  <el-card style="width: auto">
    <template #header>
      <div style="display: flex;">
        <el-upload
          action="/create_words"
          :on-success="handleUploadSuccess"
          :data="uploadData"
          :show-file-list="false"
          :http-request="customRequest"
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
          <el-button @click="previewChunkEffect(row.name)">预览分块效果</el-button>
          <el-button @click="deleteDocument(row.name)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import requestdb from '@/utils/requestdb';
import { ElMessage } from 'element-plus';
import router from '@/router';
interface Document {
  date: string;
  name: any;
  sorts: string;
}

const route = useRoute();
const alldocs = ref<Array<Document>>([]);
const id = ref(route.params.id);

const fetchdocsdata = async () => {
  try {
    const response = await requestdb.post('/show_milvus', { user: 'admin', id: id.value });
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

const uploadData = (file: File) => {
  return {
    username: 'admin',
    ids: id.value,
    times: new Date().toISOString(),
    various: getFileType(file.name),
    dconame: file.name,
  };
};

const customRequest = async (option: any) => {
  const formData = new FormData();
  formData.append('username', 'admin');
  formData.append('ids', id.value.toString());
  formData.append('times', new Date().toISOString());
  formData.append('various', getFileType(option.file.name)); 
  formData.append('dconame', option.file.name); 
  formData.append('doc', option.file);

  try {
    const response = await requestdb.post(option.action, formData);
    if (response.data.success == 'true') {
      option.onSuccess(response.data, option.file);
    } else {
      option.onError(new Error(response.data.message));
    }
  } catch (error) {
    option.onError(error);
  }
};

const previewChunkEffect = (name: string) => {
  ElMessage.info(`预览分块效果：${name}`);
  router.push({ name: 'Preview', params: { id: id.value, dconame: name } });
};

const deleteDocument = (name: string) => {
  ElMessage.info(`删除文档：${name}`);
};

onMounted(() => {
  fetchdocsdata();
});

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
    case 'jpg':
      return 'jpg 文件';
    default:
      return '未知文件类型';
  }
};

const handleUploadSuccess = (response: any, file: any) => {
  if (response.success) {
    ElMessage.success('上传成功');
    const fileType = getFileType(file.name);
    alldocs.value.push({
      date: new Date().toISOString().split('T')[0],
      name: file.name,
      sorts: fileType,
    });
  } else {
    console.log(`上传失败: ${response.message}`);
  }
};
</script>

<style lang="scss">
</style>
