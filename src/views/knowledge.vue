<template>
    <div id="knowledge-base">
      <h2>知识库</h2>
      <input type="file" @change="handleFileUpload" />
      <div v-for="item in knowledgeItems" :key="item.id" class="knowledge-item">
        <h3>{{ item.title }}</h3>
        <p v-if="item.type === 'document'">{{ item.content }}</p>
        <audio v-if="item.type === 'audio'" :src="item.src" controls></audio>
        <video v-if="item.type === 'video'" :src="item.src" controls></video>
        <img v-if="item.type === 'image'" :src="item.src" alt="Image" />
        <embed v-if="item.type === 'pdf'" :src="item.src" width="600" height="400" type="application/pdf" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        knowledgeItems: [
          // 示例数据
          { id: 1, title: '文档1', type: 'document', content: '这是一个文档示例。' },
          { id: 2, title: '语音1', type: 'audio', src: 'audio1.mp3' },
          { id: 3, title: '视频1', type: 'video', src: 'video1.mp4' }
        ]
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
          const content = e.target.result;
          const fileType = this.getFileType(file);
          
          const newItem = {
            id: this.knowledgeItems.length + 1,
            title: file.name,
            type: fileType,
            src: content,
            content: fileType === 'document' ? content : ''
          };
          
          this.knowledgeItems.push(newItem);
        };
        
        if (file) {
          if (file.type.startsWith('text/')) {
            reader.readAsText(file);
          } else if (file.type.startsWith('image/') || file.type === 'application/pdf') {
            reader.readAsDataURL(file);
          } else if (file.type.startsWith('audio/') || file.type.startsWith('video/')) {
            reader.readAsDataURL(file);
          }
        }
      },
      getFileType(file) {
        if (file.type.startsWith('text/')) {
          return 'document';
        } else if (file.type.startsWith('image/')) {
          return 'image';
        } else if (file.type.startsWith('audio/')) {
          return 'audio';
        } else if (file.type.startsWith('video/')) {
          return 'video';
        } else if (file.type === 'application/pdf') {
          return 'pdf';
        } else {
          return 'unknown';
        }
      }
    }
  }
  </script>
  
  <style>
  #knowledge-base {
    margin: 20px;
  }
  .knowledge-item {
    margin-bottom: 20px;
  }
  </style>
  