import axios from 'axios'

const request = axios.create({
    //baseURL: 'http://39.97.218.60/',
    baseURL: 'http://edno93937032.vicp.fun',
    timeout: 5000
})

export default request

