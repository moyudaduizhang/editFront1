/* empty css             *//* empty css                        *//* empty css                  *//* empty css                    *//* empty css                  */import{x as S,j as D,r as u,o as k,d as T,p as $,w as o,g as B,f as s,i as d,z as p,L as N,J as O,G as P,M as j,N as q,O as F}from"./index-CKFJJd3L.js";import{r as m}from"./requestdb-C2Ny6NpS.js";import"./axios-B4uVmeYG.js";const I={style:{display:"flex"}},A=S({__name:"dataset",setup(M){const _=D(),c=u([]),n=u(_.params.id),f=async()=>{try{const e=await m.post("/show_milvus",{user:"admin",id:n.value});e.data.success==="true"&&e.data.data.length>0?c.value=e.data.data:console.log(`获取数据失败: ${e.data.message}`)}catch(e){console.log("发生错误: "+e.message)}},g=e=>({username:"admin",ids:n.value,times:new Date().toISOString(),various:l(e.name),dconame:e.name}),h=async e=>{const t=new FormData;t.append("username","admin"),t.append("ids",n.value.toString()),t.append("times",new Date().toISOString()),t.append("various",l(e.file.name)),t.append("dconame",e.file.name),t.append("doc",e.file);try{const a=await m.post(e.action,t);a.data.success=="true"?e.onSuccess(a.data,e.file):e.onError(new Error(a.data.message))}catch(a){e.onError(a)}},w=e=>{p.info(`预览分块效果：${e}`),N.push({name:"Preview",params:{id:n.value,dconame:e}})},v=e=>{p.info(`删除文档：${e}`)};k(()=>{f()});const l=e=>{var a;switch((a=e.split(".").pop())==null?void 0:a.toLowerCase()){case"doc":case"docx":return"Word 文档";case"ppt":case"pptx":return"PPT 文件";case"xls":case"xlsx":return"Excel 文件";case"pdf":return"PDF 文件";case"jpg":return"jpg 文件";default:return"未知文件类型"}},x=(e,t)=>{if(e.success){p.success("上传成功");const a=l(t.name);c.value.push({date:new Date().toISOString().split("T")[0],name:t.name,sorts:a})}else console.log(`上传失败: ${e.message}`)};return(e,t)=>{const a=O,y=P,r=j,b=q,E=F;return T(),$(E,{style:{width:"auto"}},{header:o(()=>[B("div",I,[s(y,{action:"/create_words","on-success":x,data:g,"show-file-list":!1,"http-request":h},{default:o(()=>[s(a,{type:"primary"},{default:o(()=>[d("上传")]),_:1})]),_:1})])]),default:o(()=>[s(b,{data:c.value,border:"",style:{width:"auto",display:"flex"}},{default:o(()=>[s(r,{prop:"date",label:"修改日期",width:"180",align:"center"}),s(r,{prop:"name",label:"名称",width:"400",align:"center"}),s(r,{prop:"sorts",label:"类型",align:"center"}),s(r,{prop:"address",label:"操作",align:"center"},{default:o(({row:i})=>[s(a,{onClick:C=>w(i.name)},{default:o(()=>[d("预览分块效果")]),_:2},1032,["onClick"]),s(a,{onClick:C=>v(i.name)},{default:o(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})}}});export{A as default};