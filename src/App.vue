<template>
<RouterView/>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router"
import request from "./utils/request"
request({
  method:"GET",
  url:"/"
}).then((res)=>{
  console.log(res)
})
</script>

<style lang="scss" scoped>

</style>