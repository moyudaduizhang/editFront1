import{_ as u,d as n,e as o,g as l,F as y,s as h,t as p,m as d}from"./index-CLgEi3mD.js";const g={data(){return{knowledgeItems:[{id:1,title:"文档1",type:"document",content:"这是一个文档示例。"},{id:2,title:"语音1",type:"audio",src:"audio1.mp3"},{id:3,title:"视频1",type:"video",src:"video1.mp4"}]}},methods:{handleFileUpload(s){const t=s.target.files[0],r=new FileReader;r.onload=c=>{const a=c.target.result,i=this.getFileType(t),e={id:this.knowledgeItems.length+1,title:t.name,type:i,src:a,content:i==="document"?a:""};this.knowledgeItems.push(e)},t&&(t.type.startsWith("text/")?r.readAsText(t):(t.type.startsWith("image/")||t.type==="application/pdf"||t.type.startsWith("audio/")||t.type.startsWith("video/"))&&r.readAsDataURL(t))},getFileType(s){return s.type.startsWith("text/")?"document":s.type.startsWith("image/")?"image":s.type.startsWith("audio/")?"audio":s.type.startsWith("video/")?"video":s.type==="application/pdf"?"pdf":"unknown"}}},_={id:"knowledge-base"},f=l("h2",null,"知识库",-1),m={key:0},k=["src"],w=["src"],v=["src"],F=["src"];function W(s,t,r,c,a,i){return n(),o("div",_,[f,l("input",{type:"file",onChange:t[0]||(t[0]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32),(n(!0),o(y,null,h(a.knowledgeItems,e=>(n(),o("div",{key:e.id,class:"knowledge-item"},[l("h3",null,p(e.title),1),e.type==="document"?(n(),o("p",m,p(e.content),1)):d("",!0),e.type==="audio"?(n(),o("audio",{key:1,src:e.src,controls:""},null,8,k)):d("",!0),e.type==="video"?(n(),o("video",{key:2,src:e.src,controls:""},null,8,w)):d("",!0),e.type==="image"?(n(),o("img",{key:3,src:e.src,alt:"Image"},null,8,v)):d("",!0),e.type==="pdf"?(n(),o("embed",{key:4,src:e.src,width:"600",height:"400",type:"application/pdf"},null,8,F)):d("",!0)]))),128))])}const I=u(g,[["render",W]]);export{I as default};