/* empty css             */import{l as S}from"./users-BHJpaZ8i.js";import{u as C}from"./layout-CpzTSCHn.js";import{_ as I}from"./AppConfig-C_tg9wbS.js";import{_ as U,r as d,a1 as B,u as T,an as F,U as L,c as j,b as c,d as A,e as E,g as e,h as R,t as $,f as o,w as M,F as N,aC as P,A as z,B as D,z as m}from"./index-CKFJJd3L.js";import"./request-BYlNfosp.js";import"./axios-B4uVmeYG.js";const a=r=>(z("data-v-b6348179"),r=r(),D(),r),q={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},G={class:"flex flex-column align-items-center justify-content-center"},H=["src"],J={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},K={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},O={class:"text-center mb-5"},Q=["src"],W={class:"text-900 text-3xl font-medium mb-3"},X=a(()=>e("span",{class:"text-600 font-medium"},"登入",-1)),Y={class:"form-control"},Z=a(()=>e("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"账户",-1)),ee={class:"form-control"},se=a(()=>e("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"密码",-1)),te={class:"flex align-items-center justify-content-between mb-5 gap-5"},oe={class:"flex align-items-center"},ae=a(()=>e("label",{for:"rememberme1"},"记住我",-1)),le=a(()=>e("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},"忘记密码？",-1)),re=a(()=>e("a",{class:"font-medium no-underline ml-2 text-right cursor-pointer",href:"http://localhost:5173/register",style:{color:"var(--primary-color)"}},"没有账户？点击注册",-1)),ne={__name:"LoginView",setup(r){const{layoutConfig:_}=C(),u=d(!1),f=B(),g=T(),n=d(!1),p=d(null),h=F(),t=L({user:"admin",password:"123456"}),x=j(()=>`/editFront1/layout/images/${_.darkTheme.value?"logo-white":"logo-dark"}.svg`),v=async()=>{var i;try{n.value=!0,await((i=p.value)==null?void 0:i.validate());const s=await S(t);if(s.data.success=="false"){m.error(s.data.message),n.value=!1;return}f.saveToken(s.data.content),m.success("登录成功"),g.push("/")}catch(s){m.error(s.message||"登录失败")}finally{n.value=!1}};return(i,s)=>{const b=c("InputText"),w=c("Password"),y=c("Checkbox"),k=c("Button"),V=P;return A(),E(N,null,[e("div",q,[e("div",G,[e("img",{src:x.value,alt:"Sakai logo",class:"mb-5 w-6rem flex-shrink-0"},null,8,H),e("div",J,[e("div",K,[e("div",O,[e("img",{src:`${R(h).avatarUrl}`,alt:"Image",height:"50",class:"mb-3"},null,8,Q),e("div",W,"欢迎, "+$(t.user),1),X]),o(V,{model:t,ref_key:"formRef",ref:p,"label-width":"auto"},{default:M(()=>[e("div",Y,[Z,o(b,{id:"email1",type:"text",placeholder:"Account",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:t.user,"onUpdate:modelValue":s[0]||(s[0]=l=>t.user=l)},null,8,["modelValue"])]),e("div",ee,[se,o(w,{id:"password1",modelValue:t.password,"onUpdate:modelValue":s[1]||(s[1]=l=>t.password=l),placeholder:"输入密码",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:{padding:"1rem"}},null,8,["modelValue"])]),e("div",te,[e("div",oe,[o(y,{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=l=>u.value=l),id:"rememberme1",binary:"",class:"mr-2"},null,8,["modelValue"]),ae]),le]),o(k,{label:"登录",class:"w-full p-3 text-xl",loading:n.value,onClick:v},null,8,["loading"])]),_:1},8,["model"]),re])])])]),o(I,{simple:""})],64)}}},fe=U(ne,[["__scopeId","data-v-b6348179"]]);export{fe as default};