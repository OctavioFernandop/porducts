const userModel = require('../models/user.model')

const createUserRepository = async ({ id, password, email }) => {
  console.log('data => ', { id, password, email })

  try {
    return await userModel.create({ id, password, email })
  } catch (error) {
    console.log(error)
    throw 'ERROR_TRY_TO_CREATE_A_PRODUCT'
  }
}

module.exports = {
  createUserRepository,
}
