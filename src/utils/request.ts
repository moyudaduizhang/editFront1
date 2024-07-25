import axios from 'axios'

const request = axios.create({
    //baseURL: 'http://39.97.218.60/',
    baseURL: 'https://attap.cpolar.top',
    timeout: 50000
})

export default request

