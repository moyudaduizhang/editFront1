<template>
  <div>
    <div class="toolbar">
      <input type="text" v-model="searchQuery" placeholder="搜索文档...">
      <button @click="searchDocuments">搜索</button>
      <button @click="switchViewMode">{{ viewMode === 'list' ? '切换到网格视图' : '切换到列表视图' }}</button>
      <div class="sort-buttons">
        <button @click="sortByName">按名称排序</button>
        <button @click="sortByTime">按时间排序</button>
      </div>
    </div>
    <div v-if="viewMode === 'list'">
      <ul>
        <li v-for="document in filteredDocuments" :key="document.id">{{ document.name }} - {{ document.time }}</li>
      </ul>
    </div>
    <div v-else-if="viewMode === 'grid'">
      <div class="grid-container">
        <div class="grid-item" v-for="document in filteredDocuments" :key="document.id">{{ document.name }} - {{ document.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewMode: 'list',
      documents: [
        { id: 1, name: 'Document 1', time: '2023-06-15' },
        { id: 2, name: 'Document 2', time: '2023-06-16' },
        { id: 3, name: 'Document 3', time: '2023-06-14' },
        // Add more documents as needed
      ],
      sortOrder: 'name',
      searchQuery: ''
    };
  },
  computed: {
    sortedDocuments() {
      return [...this.documents].sort((a, b) => {
        if (this.sortOrder === 'name') {
          return a.name.localeCompare(b.name);
        } else if (this.sortOrder === 'time') {
          return new Date(a.time) - new Date(b.time);
        }
      });
    },
    filteredDocuments() {
      if (!this.searchQuery.trim()) {
        return this.sortedDocuments;
      }
      const query = this.searchQuery.trim().toLowerCase();
      return this.sortedDocuments.filter(document =>
        document.name.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    switchViewMode() {
      this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
    },
    sortByName() {
      this.sortOrder = 'name';
    },
    sortByTime() {
      this.sortOrder = 'time';
    },
    searchDocuments() {
     
    }
  }
};
</script>

<style lang="scss">
.toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.sort-buttons {
  display: flex;
  gap: 10px;
}

input[type="text"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 每行最多显示7个项目 */
  gap: 20px;
}

.grid-item {
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}
</style>
