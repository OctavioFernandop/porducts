const {createUserRepository} = require("../repository/user.repository")
const controller = {}

controller.createUserControllers = async (req, res) => {
    
    // console.log( "error =>...", req.body)
    try {

        const createUser = await createUserRepository(req.body)
        es.status(201).send(createUser)
    } catch (error) {
        
        res.status(500).send(error)
        
    }
}

module.exports = controller

    
