import axios from 'axios'
const requestai=axios.create({
    baseURL: 'https://5bd30447.r17.cpolar.top/AI',
    timeout: 50000
})
export default requestai