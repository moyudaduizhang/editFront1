<template>
  <!-- 做过改动login-container -> container -->
  <div class="out-container">
    <div class="container">
      <!-- 删去login-form -->
      <el-form :rules="rules" :ref="formRef" :model="form" label-width="auto" > 
        <!-- <h2 class="form-title">用户登录</h2>
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
        </el-form-item> -->

        <!-- <div class="small-background"></div> -->
        <h1 class="form-title">用户登录</h1>

        <div class="form-control">
          <!-- <el-form-item prop="user"> -->
            <input v-model="form.user" type="text" required/>
            <label>
              <span v-for="(letter, index) in splitLetters('账户')" :key="index" :style="{transitionDelay: letter.delay}">
              {{ letter.char }}
              </span>
            </label>
          <!-- </el-form-item> -->
        </div>

        <div class="form-control">
          <!-- <el-form-item label="密码" prop="password"> -->
            <input v-model="form.password" type="password" required/>
            <label>
              <span v-for="(letter, index) in splitLetters('密码')" :key="index"
                  :style="{transitionDelay: letter.delay}">
              {{ letter.char }}
            </span>
            </label>
          <!-- </el-form-item> -->
        </div>

        <el-form-item>
          <el-button type="primary" @click="onSubmit" :loading="isLoading" class="btn">登录</el-button>
        </el-form-item>

        <el-form-item> 
          <p class="text">没有账户？点击<a href="http://localhost:5173/register">注册</a></p>
          <RouterLink to="/register">
            <!-- <el-button  class="register-button">注册</el-button>  -->
          </RouterLink>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

  <script lang="ts" setup>
  import { ElMessage, FormInstance, FormRules } from 'element-plus';
  import { reactive,ref } from 'vue'
  import {login} from '@/api/users'
  import { useRouter } from 'vue-router'
  import {useTokenStore} from '@/store/userstoken'
  const store=useTokenStore()
  const router=useRouter()
  
  // do not use same name with ref
  const form = reactive({
    user: '',
    password: '',
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
        throw new Error(res.data.message)
      }
      return res.data
    })

    console.log(data)
    store.saveToken(data.content)
    isLoading.value=false
    ElMessage.success("登录成功")
    router.push('/')
    
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

  //新添加
  const splitLetters = (word) => {
  return [...word].map((char, index) => ({
    char,
    delay: `${index * 35}ms`,
  }))
}
  </script>


<style lang="scss" scoped>
// .login{
//     background-color:beige;

// }
// .el-form{
//     width:600px;
//     background-color:beige;
// }
// .login-container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// }

// .login-form {
//   max-width: 400px;
//   width: 100%;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background: #f5f5f5;
// }

// .form-title {
//   text-align: center;
//   margin-bottom: 20px;
//   color:black;
// }

// .login-button {
//   width: 100%;
// }

// .register-link {
//   display: flex;
//   justify-content: center;
// }

// .register-button {
//   width:100%;
 
// }

//新增
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.out-container{
  width: 100%;
  height: 100vh;
  background: linear-gradient(144deg, rgba(255, 94, 249, 1) 19%, rgba(104, 185, 251, 1) 86%);
  
}
.container {
  //min-height: 100vh; /* 视口高度 */
  //min-width: 100vw; /* 视口宽度 */
  width: 500px;
  height: 500px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  //background: linear-gradient(144deg, rgba(255, 94, 249, 1) 19%, rgba(104, 185, 251, 1) 86%); /* 背景渐变 */
  background: rgba(50, 46, 46, 0.4);
  border-radius: 8px;
  color: white; /* 文字颜色 */
}
// background: rgba(50, 46, 46, 0.4);

/* 表单中标题属性 */
.container h1 {
  text-align: center;
  margin-bottom: 30px;
  font-family: '楷体', '微软雅黑';
}

/* 鼠标经过时字体颜色改变 */
.container h1:hover {
  background-image: linear-gradient(90deg, #673ab7, #e91e63);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg,
  rgb(255, 167, 69),
  rgb(254, 134, 159),
  rgb(239, 122, 200),
  rgb(160, 131, 237),
  rgb(67, 174, 255),
  rgb(160, 131, 237),
  rgb(239, 122, 200),
  rgb(254, 134, 159),
  rgb(255, 167, 69));
  background-size: 200%;
  animation: streamer 3s linear infinite;
}

/* 下面注册旁的连接 */
.container a {
  text-decoration: none;
  color: lightblue;
}

/* 字体颜色变化的动画 */
@keyframes streamer {
  0% {
    background-position: 200%;
  }

  100% {
    background-position: 0%;
  }
}

/* 按钮的属性 */
.btn {
  cursor: pointer;
  width: 100%;
  background-color: lightblue;
  padding: 15px;
  border: 0;
  font-size: 16px;
  font-family: inherit;
}

/* 点击按钮时的属性 */
.btn:focus {
  outline: 0;
}

/* 点击按钮时的效果,缩小0.98 */
.btn:active {
  transform: scale(0.98);
}


.text {
  margin-top: 30px;
}

/* 输入框所在容器的类 */
.form-control {
  width: 300px;
  margin: 20px 0 40px;
  position: relative;
}

.form-control input {
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid white;
  display: block;
  padding: 15px 0;
  font-size: 18px;
  color: white;
}

/* 获取焦点时下边框变为蓝色 */
.form-control input:focus {
  outline: 0;
  border-bottom-color: lightblue;
}

/*当输入框中有文字时，下边框还是蓝色  valid：检测input有没有填*/
.form-control input:valid {
  border-bottom-color: lightblue;
}

/* Email与password的属性 */
.form-control label {
  position: absolute;
  left: 0;
  top: 15px;
}

/* Email与password的动画效果 */
.form-control label span {
  display: inline-block;
  font-size: 18px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* +选择器：选择除了自己之外的其它兄弟元素 */
.form-control input:focus + label span,
.form-control input:valid + label span {
  transform: translateY(-30px);
  color: lightblue;
}

</style> 