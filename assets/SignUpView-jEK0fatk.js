/* empty css             */import{r as V}from"./users-DxLoVykw.js";/* empty css                  *//* empty css                 */import{x as b,at as i,r as c,d as v,e as h,f as o,w as t,i as x,z as p,y as E,b3 as I,J as S,b2 as B,A as U,B as y,g as k,_ as q}from"./index-Cq1Zp2HD.js";import"./request-DjinKeR9.js";import"./axios-B4uVmeYG.js";const C=l=>(U("data-v-7ec8411e"),l=l(),y(),l),N={class:"login-container"},F=C(()=>k("h2",{class:"form-title"},"用户注册",-1)),z=b({__name:"SignUpView",setup(l){const s=i({user:"admin",password:"123456",password2:"123456"}),_=async()=>{var a;n.value=!0,await((a=u.value)==null?void 0:a.validate().catch(e=>{throw p.error("表单校验失败"),n.value=!1,e}));const m=await V(s).then(e=>{if(e.data.success=="false")throw console.log(e.data),p.error(e.data.message),new Error(e.data.message);return p.success(e.data.message),e.data});console.log(m),n.value=!1},f=i({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^\d{10}$/}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:18}],password2:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:18}]}),n=c(!1),u=c();return(m,a)=>{const e=E,d=I,g=S,w=B;return v(),h("div",N,[o(w,{rules:f,ref:u.value,model:s,"label-width":"auto",class:"login-form"},{default:t(()=>[F,o(d,{label:"用户名",prop:"user"},{default:t(()=>[o(e,{modelValue:s.user,"onUpdate:modelValue":a[0]||(a[0]=r=>s.user=r),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),o(d,{label:"密码",prop:"password"},{default:t(()=>[o(e,{modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=r=>s.password=r),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),o(d,{label:"确认密码",prop:"password2"},{default:t(()=>[o(e,{modelValue:s.password2,"onUpdate:modelValue":a[2]||(a[2]=r=>s.password2=r),type:"password2",placeholder:"请确认你输入的密码"},null,8,["modelValue"])]),_:1}),o(d,null,{default:t(()=>[o(g,{class:"register-button",onClick:_},{default:t(()=>[x("确认注册")]),_:1})]),_:1})]),_:1},8,["rules","model"])])}}}),j=q(z,[["__scopeId","data-v-7ec8411e"]]);export{j as default};
