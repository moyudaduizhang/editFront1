import {defineStore} from 'pinia'

export const mainStore=defineStore('main',{
    state:()=>{
        return{
            helloPinia:'hello pinia!'
        }
    },
    getters:{},
    actions:{}
})