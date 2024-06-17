<templte>
<svg
    aria-hidden="true"
    class="svg-icon"
    :style="'width:+size+';height:'+size"
>
  <use :xlink:href="symbolId" :fill="color"/>
</svg>
</templte>


<script setup lang="ts">
import {computed} from "vue";
//使用defineProps函数可以将这些属性注入到组件中，可以在组件内部通过props来访问这些属性的值
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  iconClass: {
    type: String,
    required: false,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
    default: "1em",
  }
})

const symbolId = computed(
    () => `#${props.prefix}-${props.iconClass}`);

</script>

<style scoped>
.svg-icon{
  display:inline-block;
  outline:none;
  width:1em;
  height:1em;
  vertical-align:-0.15em;
  fill:currentColor;
  overflow:hidden;
}
</style>