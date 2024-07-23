import axios from 'axios'
const requestai=axios.create({
    baseURL: 'https://6acba619.r17.cpolar.top/AI',
    timeout: 50000
})
export default requestai