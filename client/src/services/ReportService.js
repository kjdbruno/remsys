import Api from '@/services/Api'

export default {
    index () {
        return Api().get('dashboard/collection')
    },
    getReport (dates) {
        return Api().post('report/remittance', dates)
    }
}
