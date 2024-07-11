import axios from 'axios'
const requestai=axios.create({
    baseURL: 'http://edno93937032.vicp.fun:19318',
    timeout: 5000
})
export default requestai