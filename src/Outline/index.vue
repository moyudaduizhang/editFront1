<script setup lang="ts">
import { h, ref, type Component } from 'vue'

import { useEditorStore } from '@/store'
import { storeToRefs } from 'pinia'

const editorStore = useEditorStore()
const { headings } = storeToRefs(editorStore)
/**
 * 左侧区域
 */
const handleHeadingClick = (data) => {
  setActiveHeading(data)
}
</script>

<template>
  <div class="outline__list" style="display: flex; flex-direction: column;">
    <h2 class="text-gray-400">大纲</h2>
    <template v-for="(heading, index) in headings" :key="index">
      <el-popover
        trigger="click"
        placement="right"
      >
        <template #reference>
          <el-button
            @click="handleHeadingClick(heading.text)"
            text
            class="outline__item"
            :class="`outline__item--${heading.level}`"
          >
            {{ heading.text }}
            <el-icon v-if="heading.icon"><component :is="heading.icon"/></el-icon>
          </el-button>
        </template>
        <!-- 如果需要弹出内容，请在这里添加 -->
      </el-popover>
    </template>
  </div>
</template>

<style scoped lang="scss">
.outline {
  opacity: 0.75;
  border-radius: 0.5rem;
  padding: 0.75rem;
  background: rgba(black, 0.1);

  &__list {
    list-style: none;
    font-size: 18px;
    padding: 0;
  }

  &__item {
    a:hover {
      opacity: 0.5;
    }
    &--1 {
      font-size: 23px;
    }
    &--3 {
      padding-left: 1rem;
    }

    &--4 {
      padding-left: 2rem;
    }

    &--5 {
      padding-left: 3rem;
    }

    &--6 {
      padding-left: 4rem;
    }
  }
}
</style>
