import Api from '@/services/Api'

export default {
    index (date) {
        return Api().get(`entry/remittance/${date}`)
    },
    post (entry) {
        return Api().post('entry/remittance', entry)
    },
    delete (id) {
        return Api().delete(`entry/remove/${id}`)
    }
}
