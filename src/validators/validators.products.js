const {check}  = require('express-validator')

const { validateResult } = require('../helpers/helpers.product')

const validateProduct = [
    check('sku')
        .exists()
        .isString()
        .not()
        .isEmpty(),
    check('price')
        .exists()
        .isNumeric()
        .not()
        .isEmpty()
        .custom((value) => {
            if(value <= 0){
                throw new  Error ('price can not be less than 0')
            }

            if(typeof value === 'string'){
                throw new  Error ('price can not be string type')
            }

            return true
        }),
    check('name')
        .exists()
        .isString()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {validateProduct}