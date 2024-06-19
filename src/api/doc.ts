import request from "@/utils/request";
type Doc={
    // id:number,
    // title:string,
    // content:string,
    // createTime:string,
    // updateTime:string
}
export const getalldocs=()=>{
    return request<Doc[]>({
        method:"GET",
        url:"/docs",})  
}