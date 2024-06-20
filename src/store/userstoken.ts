import {ref,computed} from 'vue'
import {defineStore} from "pinia"
import { ElMessage } from 'element-plus'
interface Token{
    access_token:string
}
export const useTokenStore=defineStore('userstoken',()=>{
    const tokenJson=ref("")
    const token=computed<Token>(()=>{
        try{
            return JSON.parse(tokenJson.value||"{}")
        }
        catch(e){
            ElMessage.error("json字符串格式不对,转化对象失败")
            throw(e)
        }
    })
    function saveToken(data:string){
        tokenJson.value=data
        window.localStorage.setItem("TokenInfo",data)
    }
    return {token,saveToken}
})

export const useUserAvatarStore = defineStore('userAvatar', {
  state: () => ({
    avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  }),
  actions: {
    setAvatarUrl(newUrl: string) {
      this.avatarUrl = newUrl;
    },
  },
});
