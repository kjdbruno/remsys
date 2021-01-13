const GeneralController = require('./controller/GeneralController')

const EntryPolicy = require('./policy/EntryPolicy')
const EntryController = require('./controller/EntryController')

const ReportController = require('./controller/ReportController')
module.exports = (app) => {
    // General
    app.get('/getCollector', GeneralController.getCollector)
    app.get('/getItem', GeneralController.getItem)
    app.get('/entry/remittance', EntryController.index)
    app.post('/entry/remittance', EntryController.post)
    app.post('/report/remittance', ReportController.getReport)
    app.get('/dashboard/collection', ReportController.index)
}