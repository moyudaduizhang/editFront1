<template>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
    </div>

</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // import css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
    // editor instance, use `shallowRef`
    const editorRef = shallowRef()

    // content HTML
    const valueHtml = ref('<p>hello</p>')

    // Simulate ajax async set HTML
    onMounted(() => {
        setTimeout(() => {
            valueHtml.value = '<p>Ajax async set HTML.</p>'
        }, 1500)
    })

    const toolbarConfig = {}
    const editorConfig = { placeholder: 'Type here...' }

    // Timely destroy `editor` before vue component destroy.
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = ((editor) => {
      editorRef.value = editor // record editor instance
    })

</script>