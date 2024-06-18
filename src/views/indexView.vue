<template>
  <div>
    <button @click="switchViewMode">切换视图模式</button>
    <div v-if="viewMode === 'list'">
      <ul>
        <li v-for="document in documents" :key="document.id">{{ document.name }}</li>
      </ul>
    </div>
    <div v-else-if="viewMode === 'grid'">
      <div class="grid-container">
        <div class="grid-item" v-for="document in documents" :key="document.id">{{ document.name }}</div>
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
        { id: 1, name: 'Document 1' },
        { id: 2, name: 'Document 2' },
        { id: 3, name: 'Document 3' }
      ]
    };
  },
  methods: {
    switchViewMode() {
      this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
    }
  }
};
</script>

<style lang="scss">
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
  }

  .grid-item {
    background-color: #f2f2f2;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>