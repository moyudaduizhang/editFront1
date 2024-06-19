import request from "@/utils/request";
type Doc={
    id:number,
    title:string,
    content:string,
    createTime:string,
    updateTime:string
}
//获取所有文档
export const getalldocs=()=>{
    return request<Doc[]>({
        method:"GET",
        url:"/docs",})  
}
//保存或新增文档
export const newdocs=(id:number)=>{
    return request<Doc>({
        method:"POST",
        url:'/docs/'})  
}

