<template>
  <div class="person">
    <h2>当前求和为:{{ sum }}</h2>
    <button @click="changeSum">点我</button>
    <h2>
      name:{{ person.name }}
    </h2>
    <h2>
      age:{{ person.age }}
    </h2>
  </div>
</template>

<script lang="ts" setup name="">
import {ref, watch} from "vue"

let sum = ref(0)
let person = ref({
  name: "zhanghsan",
  age: 18
})

function changeSum() {
  sum.value++;
}

//监视
watch(sum, () => {
  console.log('sum changed')
})
</script>
<style scoped>
</style>