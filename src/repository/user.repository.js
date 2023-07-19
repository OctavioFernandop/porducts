const userModel = require("../models/user.model");

const createUserRepository = async ({ email, password   }) =>{
    console.log('data => ', {email, password })
    try {
        return await userModel.create({email, password })
    } catch (error) {
        throw 'ERROR_TRY_TO_CREATE_A_PRODUCT'
    }
}

module.exports = {
    
    createUserRepository

}


