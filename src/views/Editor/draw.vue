<template>
    <BasicPure :foo="foo">
      <div>
        children内容
      </div>
    </BasicPure>
  </template>
  <script>
  import {applyPureReactInVue} from 'veaury'
  // 这是一个React组件
  import BasicReactComponent from '@/react_app/Basic.jsx';
  import {ref} from 'vue'
  
  export default {
    components:{
      // 现在推荐使用纯净模式的 'applyPureReactInVue'
      BasicPure: applyPureReactInVue(BasicReactComponent),
    },
    setup() {
      return {
        foo: ref('Hello!')
      }
    }
}
  </script>