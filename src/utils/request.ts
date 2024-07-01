import axios from 'axios'

const request = axios.create({
    //baseURL: 'http://39.97.218.60/',
    baseURL: 'http://73e2836a.r15.cpolar.top',
    timeout: 5000
})
export default request