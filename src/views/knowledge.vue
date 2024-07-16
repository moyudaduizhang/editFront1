<template>
  <div class="container">
    <!-- 搜索框和新建模块按钮 -->
    <div class="top-section">
      <el-input
        placeholder="搜索知识库"
        v-model="searchQuery"
        clearable
        class="search-box"
      ></el-input>
    </div>

    <div class="icon-grid-container">
      <!-- 上半部分：文档格式图标 -->
      <div class="icon-section">
        <h3>新建</h3>
        <div class="icon-list">
          <!-- 新建模块按钮 -->
          <div class="custom-card new-card" @click="dialogVisible = true">
            <i class="el-icon-plus">
              <el-icon><Plus /></el-icon>
            </i>
          </div>
          <el-card class="custom-card" v-for="item in filteredIcons" :key="item.id" @click="goToDocs(item.id)">
            <template #header>
              <div class="card-header">{{ item.name }}</div>
            </template>
            <img :src="item.imgSrc" style="width: 100%" />
          </el-card>
        </div>
      </div>
    </div>

    <!-- 弹出输入框 -->
    <el-dialog title="新建知识库" v-model="dialogVisible">
      <el-input v-model="newRepoName" placeholder="输入知识库名字"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="createNewRepo">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElCard, ElInput, ElDialog, ElButton } from 'element-plus';
import 'element-plus/dist/index.css';
import { useRouter } from 'vue-router';

// 模拟数据
const icons = ref([
  { id: 1, name: '蓝灰色简历', imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png' },
  // 添加更多图标数据
]);

const searchQuery = ref('');

const filteredIcons = computed(() => {
  return icons.value.filter(icon => icon.name.includes(searchQuery.value));
});

const router = useRouter();

const dialogVisible = ref(false);
const newRepoName = ref('');

const showDialog = () => {
  dialogVisible.value = true;
};

const createNewRepo = () => {
  if (newRepoName.value) {
    const newId = icons.value.length ? icons.value[icons.value.length - 1].id + 1 : 1;
    icons.value.push({ id: newId, name: newRepoName.value, imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png' });
    newRepoName.value = '';
    dialogVisible.value = false;
    router.push(`/dataset/${newId}`);
  }
};

const goToDocs = (id) => {
  router.push(`/dataset/${id}`);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-box {
  width: 300px;
}

.icon-grid-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.icon-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.icon-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  justify-items: center;
}

.custom-card {
  max-width: 200px;
  width: 100%;
  height: 100%;
}

.new-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dcdfe6; /* 加粗边框 */
  border-radius: 5px; /* 圆角边框 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  cursor: pointer;
  transition: box-shadow 0.3s ease; /* 平滑过渡效果 */
}

.new-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 鼠标悬停时增加阴影 */
}

.el-icon-plus {
  font-size: 24px; /* 调整图标大小 */
  color: #409eff; /* 调整图标颜色 */
}

.card-header {
  font-size: 0.675rem;
  text-align: center;
}

.dialog-footer {
  text-align: right;
}
</style>
