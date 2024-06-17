import {ref,computed} from 'vue'
import {defineStore} from "pinia"
import { ElMessage } from 'element-plus'

export const useTokenStore=defineStore('userstoken',()=>{
    const tokenJson=ref("")
    const token=computed(()=>{
        try{
            return JSON.parse(tokenJson.value||"{}")
        }
        catch(e){
            ElMessage.error("json字符串格式不对，转化对象失败")
            throw(e)
        }
    })
    function saveToken(data:string){
        tokenJson.value=data
    }
    return {token,saveToken}
})