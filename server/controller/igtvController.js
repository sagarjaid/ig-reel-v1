const {igtvService} = require('../service/igtvService')

const igtvController = (req, res) =>{
        igtvService(req, res)
}

module.exports = {igtvController}