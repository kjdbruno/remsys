import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'http://192.168.200.48:9091'
    })
}
