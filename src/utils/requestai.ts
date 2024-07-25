import axios from 'axios'
const requestai=axios.create({
    baseURL: 'https://attap.cpolar.top/AI',
    timeout: 50000
})
export default requestai