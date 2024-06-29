<template>
    <div class="toolbar" v-if="activeNodes.length > 0">
      <button @click="toggleFreeDrag">{{ isOpenFreeDrag ? '关闭自由拖拽' : '开启自由拖拽' }}</button>
      <button @click="resetLayout">恢复默认布局</button>
      <div class="toolbar-item" @click="back" v-if="!isStart">
        <el-icon><img src="@/assets/回退.svg" alt="回退"/></el-icon>
        <span>回退</span>
      </div>
      <div class="toolbar-item" @click="forward" v-if="!isEnd">
        <el-icon><img src="@/assets/前进.svg" alt="前进"/></el-icon>
        <span>前进</span>
      </div>
      <div class="toolbar-item" @click="insertNode" v-if="activeNodes.length > 0">
        <el-icon><img src="@/assets/兄弟节点.svg" alt="插入兄弟节点"/></el-icon>
        <span>插入兄弟节点</span>
      </div>
      <div class="toolbar-item" @click="insertChildNode" v-if="activeNodes.length > 0">
        <el-icon><img src="@/assets/添加子节点.svg" alt="插入子节点"/></el-icon>
        <span>插入子节点</span>
      </div>
      <div class="toolbar-item" @click="deleteNode" v-if="activeNodes.length > 0">
        <el-icon><img src="@/assets/删除节点.svg" alt="删除节点"/></el-icon>
        <span>删除节点</span>
      </div>
      <div class="toolbar-item" @click="inserImage">
        <el-icon><img src="@/assets/图片.svg" alt="插入图片"/></el-icon>
        <span>图片</span>
      </div>
      <div class="toolbar-item" @click="insertIcon">
        <el-icon><img src="@/assets/笑脸.svg" alt="插入图标"/></el-icon>
        <span>图标</span>
      </div>
      <div class="toolbar-item" @click="insertLink">
        <el-icon><img src="@/assets/链接.svg" alt="插入超链接"/></el-icon>
        <span>超链接</span>
      </div>
      <div class="toolbar-item" @click="insertNote">
        <el-icon><img src="@/assets/操作-备注.svg" alt="插入备注"/></el-icon>
        <span>备注</span>
      </div>
      <div class="toolbar-item" @click="insertTag">
        <el-icon><img src="@/assets/插入-标签.svg" alt="插入标签"/></el-icon>
        <span>插入标签</span>
      </div>
      <div class="toolbar-item" @click="insertGa">
        <el-icon><img src="@/assets/概要.svg" alt="插入概要"/></el-icon>
        <span>插入概要</span>
      </div>
      <div class="toolbar-item" @click="insertLine">
        <el-icon><img src="@/assets/全科.svg" alt="插入关联线"/></el-icon>
        <span>插入关联线</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MindMap from "simple-mind-map"
  let mindMap = null
  const activeNodes = shallowRef([])
  const isOpenFreeDrag = ref(false)
  const isStart = ref(true)
  const isEnd = ref(true)
  
  const toggleFreeDrag = () => {
    isOpenFreeDrag.value = !isOpenFreeDrag.value
    mindMap.updateConfig({
      enableFreeDrag: isOpenFreeDrag.value
    })
  }
  
  const resetLayout = () => {
    mindMap.execCommand('RESET_LAYOUT')
  }
  
  const back = () => {
    mindMap.execCommand('BACK')
  }
  
  const forward = () => {
    mindMap.execCommand('FORWARD')
  }
  
  const insertNode = () => {
    mindMap.execCommand('INSERT_NODE')
  }
  
  const insertChildNode = () => {
    mindMap.execCommand('INSERT_CHILD_NODE')
  }
  
  const deleteNode = () => {
    mindMap.execCommand('REMOVE_NODE')
  }
  
  const inserImage = () => {
    activeNodes.value.forEach((node) => {
      node.setImage({
        url: 'https://lxqnsys.oss-cn-beijing.aliyuncs.com/qlx/xh2AXkBxYm5jGe5fD7DWYrC5b.png',
        title: '图片的标题或描述',
        width: 100,
        height: 100
      })
    })
  }
  
  const insertIcon = () => {
    const iconList = ['priority_1', 'priority_2']
    activeNodes.value.forEach(node => {
      node.setIcon(iconList)
    })
  }
  
  const insertLink = () => {
    activeNodes.value.forEach(node => {
      node.setHyperlink('http://lxqnsys.com/', '理想青年实验室')
    })
  }
  
  const insertNote = () => {
    activeNodes.value.forEach(node => {
      node.setNote('备注内容')
    })
  }
  
  const insertTag = () => {
    activeNodes.value.forEach(node => {
      node.setTag(['标签1', '标签2'])
    })
  }
  
  const insertGa = () => {
    mindMap.execCommand('ADD_GENERALIZATION', {
      text: '自定义概要内容'
    })
  }
  
  const insertLine = () => {
    mindMap.associativeLine.createLineFromActiveNode()
  }
  </script>
  
  <style>
  .toolbar {
    position: absolute;
    left: 10px;
    top: 10px;
    display: flex; 
    flex-wrap: wrap; 
    gap: 10px; 
    padding: 10px;
    background-color: #f9f9f9; 
    border: 1px solid #ddd; 
    border-radius: 20px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .toolbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  
  .toolbar-item el-icon img {
    width: 24px;
    height: 24px;
  }
  
  .toolbar-item span {
    margin-top: 5px;
  }
  </style>
  