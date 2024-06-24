<template>
    <h1>翻译</h1>
    <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-input v-model="input" type="textarea" :autosize="{ minRows: 6, maxRows: 8 }" placeholder="输入你要翻译的语句" />   
    <el-icon ><SetUp /></el-icon>
    <el-button type="primary">提交</el-button>
    <h1>结果：</h1>
         
</template>
<script setup lang="ts">
import { ref } from 'vue'


const value = ref('')
const input = ref('');
const options = [
  {
    value: 'Chinese',
    label: '中文(简体)',
  },
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>