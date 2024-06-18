import request from "@/utils/request"
//用户登录-参数类型
type LoginInfo={
    user:string,
    password:string,
    code?:string
}
//用户注册-参数类型
type RegisterInfo={
    user:string,
    password:string,
    password2:string,
    code?:string
}
//注册返回类型
type RegisterResult={
    success:string
    state:number
    message:string
    content:string
}
//登录返回类型
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
        data:'user=${loginInfo.user}&password=${loginInfo.password}'
    })
}
export const register=(registerInfo:RegisterInfo)=>{
    return request<RegisterResult>({
        method:"POST",
        url:"/registuser",
        data:'user=${registerInfo.phone}&password=${registerInfo.password}&password2=${registerInfo.password2}'
    })
}
export const logout=(()=>{
    
})