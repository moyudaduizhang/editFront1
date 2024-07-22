import axios from 'axios'

const requestdb = axios.create({
    //baseURL: 'http://39.97.218.60/',
    baseURL: 'https://5bd30447.r17.cpolar.top/multimodels',
    timeout: 50000
})

export default requestdb

