const Joi = require('joi')

module.exports = {
    post(req, res, next) {
        const schema = {
            date: Joi.required(),
            collectorId: Joi.required(),
            itemId: Joi.required(),
            amount: Joi.required()
        }

        const { error, value } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'date':
                    res.status(400).send({
                        error: "Invalid date"
                    })
                    break
                case 'collectorId':
                    res.status(400).send({
                        error: "Invalid collector"
                    })
                    break
                case 'itemId':
                    res.status(400).send({
                        error: "Invalid item"
                    })
                    break
                case 'amount':
                    res.status(400).send({
                        error: "Invalid amount"
                    })
                    break
                default:
                    res.status(400).send({
                        error: "Invalid registration"
                    })
                    break
            }
        } else {
            next()
        }
    }
}