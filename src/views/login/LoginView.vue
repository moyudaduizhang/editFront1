<template>
    <el-form :rules="rules" :ref="formRef":model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="账号" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入你的密码">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { reactive,ref } from 'vue'
  import {login} from '@/api/users'
  // do not use same name with ref
  const form = reactive({
    phone: '',
    password: '',
  })
  
  const onSubmit = async() => {
    await formRef.value?.validate().catch((err)=>{
        ElMessage.error("表单校验失败");
        throw err
    })
    const res =login(form)
    console.log(res)
    
  }
  const rules=reactive<FormRules>({
    phone:[
        {required:true,message:"请输入手机号",trigger:"blur"},
        {pattern:/^\d{10}$/,}
    ],
    password:[
        {required:true,message:"密码不能为空",trigger:"blur"},
        {min:6,max:18}
        
    ]
  })
  const formRef=ref<FormInstance>()
  </script>
  <style lang="scss" scoped>
.login{
    background-color:beige;

}
.el-form{
    width:600px;
    background-color:beige;
}
</style> 