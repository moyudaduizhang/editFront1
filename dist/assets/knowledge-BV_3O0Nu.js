/* empty css             */import{x as B,al as D,r as p,c as N,u as $,o as R,b as q,d as g,e as h,g as o,f as l,h as r,y as k,w as d,F,s as T,p as U,t as M,O as P,J as w,i as V,a$ as z,z as m,D as A,A as J,B as L,_ as O}from"./index-Cq1Zp2HD.js";import{r as b}from"./requestdb-CQ0r-RDs.js";import"./axios-B4uVmeYG.js";const Q=i=>(J("data-v-6539a71c"),i=i(),L(),i),j={class:"container"},G={class:"top-section"},H={class:"icon-grid-container"},K={class:"icon-section"},W=Q(()=>o("h3",null,"新建",-1)),X={class:"icon-list"},Y={class:"el-icon-plus"},Z={class:"card-header"},ee=["src"],se={slot:"footer",class:"dialog-footer"},ae=B({__name:"knowledge",setup(i){const y=D(),n=p([{id:1,name:"示例知识库",imgSrc:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}]),_=p(""),C=N(()=>n.value.filter(s=>s.name.includes(_.value))),S=$(),u=p(!1),c=p(""),I=async()=>{try{const s=await b.post("/show_filesss",{user:y.token.access_token});s.data.success==="true"&&s.data.data.length>0?n.value=s.data.data:console.log(`获取数据失败: ${s.data.message}`)}catch(s){console.log("发生错误: "+s.message)}},x=async()=>{if(c.value){const s=n.value.length>0?n.value[n.value.length-1].id+1:1;n.value.push({id:s,name:c.value,imgSrc:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}),console.log(s);const a="admin",f=s,v=c.value,e=new FormData;e.append("username",a),e.append("ids",f.toString()),e.append("kname",v);try{const t=await b.post("/create_milvus",e);t.data.success?(m.success(t.data.message),console.log(t.data.path)):m.success(t.data.message)}catch(t){console.error("Request failed:",t),t.response?m.error("Request failed: "+t.response.data.message):m.error("Network error")}c.value="",u.value=!1}},E=s=>{S.push(`/dataset/${s}`)};return R(()=>{I()}),(s,a)=>{const f=q("Plus"),v=A;return g(),h("div",j,[o("div",G,[l(r(k),{placeholder:"搜索知识库",modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value=e),clearable:"",class:"search-box"},null,8,["modelValue"])]),o("div",H,[o("div",K,[W,o("div",X,[o("div",{class:"custom-card new-card",onClick:a[1]||(a[1]=e=>u.value=!0)},[o("i",Y,[l(v,null,{default:d(()=>[l(f)]),_:1})])]),(g(!0),h(F,null,T(C.value,e=>(g(),U(r(P),{class:"custom-card",key:e.id,onClick:t=>E(e.id)},{header:d(()=>[o("div",Z,M(e.name),1)]),default:d(()=>[o("img",{src:e.imgSrc,style:{width:"100%"}},null,8,ee)]),_:2},1032,["onClick"]))),128))])])]),l(r(z),{title:"新建知识库",modelValue:u.value,"onUpdate:modelValue":a[4]||(a[4]=e=>u.value=e)},{default:d(()=>[l(r(k),{modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value=e),placeholder:"输入知识库名字"},null,8,["modelValue"]),o("div",se,[l(r(w),{onClick:a[3]||(a[3]=e=>u.value=!1)},{default:d(()=>[V("取消")]),_:1}),l(r(w),{type:"primary",onClick:x},{default:d(()=>[V("确定")]),_:1})])]),_:1},8,["modelValue"])])}}}),ce=O(ae,[["__scopeId","data-v-6539a71c"]]);export{ce as default};
