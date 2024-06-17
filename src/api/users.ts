import request from "@/utils/request"
//用户登录-参数类型
type LoginInfo={
    phone:string,
    password:string,
    code?:string
}
type LoginResult={
    success:string
    state:number
    message:string
    content:string
}
export const login=(loginInfo:LoginInfo)=>{
    return request<LoginResult>({
        method:"POST",
        url:"/login",
        data:'phone=${loginInfo.phone}&password=${loginInfo.password}'
    })
}