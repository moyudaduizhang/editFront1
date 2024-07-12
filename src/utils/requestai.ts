import axios from 'axios'
const requestai=axios.create({
    baseURL: 'http://xp93937032.zicp.fun',
    timeout: 5000
})
export default requestai