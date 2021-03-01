import Api from '@/services/Api'

export default {
    index (dateSelected) {
        return Api().get(`dashboard/collection/${dateSelected}`)
    },
    getReport (dates) {
        return Api().post('report/remittance', dates)
    }
}
