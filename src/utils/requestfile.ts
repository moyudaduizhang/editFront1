import axios from 'axios'

const requestdb = axios.create({
    //baseURL: 'http://39.97.218.60/',
    baseURL: 'https://6acba619.r17.cpolar.top/document',
    timeout: 50000
})

export default requestdb

