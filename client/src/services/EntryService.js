import Api from '@/services/Api'

export default {
    index () {
        return Api().get('entry/remittance')
    },
    post (entry) {
        return Api().post('entry/remittance', entry)
    }
}
