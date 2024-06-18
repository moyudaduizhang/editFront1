<template>
  <div class="login-container">
    <el-form :rules="rules" :ref="formRef" :model="form" label-width="auto" class="login-form">
      <h2 class="form-title">用户登录</h2>
      <el-form-item label="用户名" prop="user">
        <el-input v-model="form.user" placeholder="请输用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLoading" class="login-button">登录</el-button>
      </el-form-item>
      <el-form-item> 
        <RouterLink to="/register">
          <el-button  class="register-button">注册</el-button> 
        </RouterLink>
      </el-form-item>
    </el-form>
  </div>
</template>

  <script lang="ts" setup>
  import { ElMessage, FormInstance, FormRules } from 'element-plus';
  import { reactive,ref } from 'vue'
  import {login} from '@/api/users'
  
  // do not use same name with ref
  const form = reactive({
    user: 'admin',
    password: '123456',
  })
  
  //登录事件处理
  const onSubmit = async() => {
    isLoading.value=true
    await formRef.value?.validate().catch((err)=>{
        ElMessage.error("表单校验失败");
        isLoading.value=false
        throw err
    })
  //发送登录请求
   const data=await login(form).then((res)=>{
      if (res.data.success=="false"){
        ElMessage.error("登录信息有误")
        isLoading.value=false
        throw new Error("登录信息有误")
      }
      return res.data
    })
    console.log(data)
    isLoading.value=false
    
  }
  //用户名和密码的格式验证
  const rules=reactive<FormRules>({
    user:[
        {required:true,message:"请输入用户名",trigger:"blur"},
        {min:6,max:18}
        
    ],
    password:[
        {required:true,message:"密码不能为空",trigger:"blur"},
        {min:6,max:18}   
    ]
  })
  const isLoading=ref(false)
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
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f5f5f5;
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
  color:black;
}

.login-button {
  width: 100%;
}

.register-link {
  display: flex;
  justify-content: center;
}

.register-button {
  width:100%;
 
}
</style> 