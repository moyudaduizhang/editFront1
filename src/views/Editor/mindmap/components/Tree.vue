<template>
   <el-tree
    ref="tree"
    node-key="uid"
    draggable
    default-expand-all
    :data="data"
    :highlight-current="true"
    :expand-on-click-node="false"
    :allow-drag="checkAllowDrag"
    @node-drop="onNodeDrop"
    @current-change="onCurrentChange"
    @mouseenter.native="isInTreArea = true"
    @mouseleave.native="isInTreArea = false"
>
    <span
        class="customNode"
        slot-scope="{ node, data }"
        :data-id="data.uid"
        @click="onClick(data)"
    >
        <span
            class="nodeEdit"
            contenteditable="true"
            :key="getKey()"
            @keydown.stop="onNodeInputKeydown($event, node)"
            @keyup.stop
            @blur="onBlur($event, node)"
            @paste="onPaste($event, node)"
            v-html="node.label"
        ></span>
    </span>
</el-tree>
  </template>
  
  <script lang="ts" setup>
  interface Tree {
    label: string
    children?: Tree[]
  }
  
  const handleNodeClick = (data: Tree) => {
    console.log(data)
  }
  
  const data: Tree[] = [
    {
      label: 'Level one 1',
      children: [
        {
          label: 'Level two 1-1',
          children: [
            {
              label: 'Level three 1-1-1',
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 2',
      children: [
        {
          label: 'Level two 2-1',
          children: [
            {
              label: 'Level three 2-1-1',
            },
          ],
        },
        {
          label: 'Level two 2-2',
          children: [
            {
              label: 'Level three 2-2-1',
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 3',
      children: [
        {
          label: 'Level two 3-1',
          children: [
            {
              label: 'Level three 3-1-1',
            },
          ],
        },
        {
          label: 'Level two 3-2',
          children: [
            {
              label: 'Level three 3-2-1',
            },
          ],
        },
      ],
    },
  ]
  
  const defaultProps = {
    children: 'children',
    label: 'label',
  }
  </script>
  