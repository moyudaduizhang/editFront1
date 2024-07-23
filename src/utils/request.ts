import axios from 'axios'

const request = axios.create({
    //baseURL: 'http://39.97.218.60/',
    baseURL: 'https://6acba619.r17.cpolar.top',
    timeout: 50000
})

export default request

