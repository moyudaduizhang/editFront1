import axios from 'axios'

const request = axios.create({
    //baseURL: 'http://39.97.218.60/',
    baseURL: 'http://10.255.198.65:5500/',
    timeout: 5000
})
export default request