import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.42.145:3033'
})

export default api