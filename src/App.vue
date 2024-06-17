<template>
 <router-view></router-view>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router"
import request from "./utils/request"
request({
  method:"GET",
  url:"/front/"
}).then((res)=>{
  console.log(res)
})
</script>

<style lang="scss" scoped>

</style>