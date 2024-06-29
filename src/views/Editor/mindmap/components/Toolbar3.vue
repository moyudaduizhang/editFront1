<template>
    <div class="toolbar-3" v-if="activeNodes.length > 0">
      <h1>节点样式</h1>
      <div class="toolbar-item">
        <h1>文字</h1>
        <el-select v-model="fontFamily" placeholder="字体样式" style="width: 240px">
          <el-option
            v-for="item in fontFamilyOptions"
            :key="item.value"
            :label="item.label"
            :fontFamily="item.value"
          />
        </el-select>
        <el-select v-model="fontSize" placeholder="字体大小" style="width: 240px">
          <el-option
            v-for="item in fontSizeOptions"
            :key="item.value"
            :label="item.label"
            :fontSize="item.value"
          />
        </el-select>
        <el-select v-model="fontWeight" placeholder="字体粗细" style="width: 240px">
          <el-option
            v-for="item in fontWeightOptions"
            :key="item.value"
            :label="item.label"
            :fontWeight="item.value"
          />
        </el-select>
        <el-select v-model="color" placeholder="字体颜色" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :color="item.value"
          />
        </el-select>
        <el-select v-model="lineHeight" placeholder="行高" style="width: 240px">
          <el-option
            v-for="item in lineHeightOptions"
            :key="item.value"
            :label="item.label"
            :lineHeight="item.value"
          />
        </el-select>
        <el-select v-model="textDecoration" placeholder="划线" style="width: 240px">
          <el-option
            v-for="item in textDecorationOptions"
            :key="item.value"
            :label="item.label"
            :textDecoration="item.value"
          />
        </el-select>
        <el-button type="primary" @click="setTextStyle">确定</el-button>
      </div>
      <div class="toolbar-item">
        <h1>边框</h1>
        <el-select v-model="borderColor" placeholder="边框颜色" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :textDecoration="item.value"
          />
        </el-select>
        <el-select v-model="borderDasharray" placeholder="边框虚线" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :textDecoration="item.value"
          />
        </el-select>
        <el-select v-model="borderWidth"
  