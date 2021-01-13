import Api from '@/services/Api'

export default {
    getCollector () {
        return Api().get('getCollector')
    },
    getItem () {
        return Api().get('getItem')
    }
}
