const {photoService} = require('../service/photoService')

const photoController = (req, res) =>{
        photoService(req, res)
}

module.exports = {photoController}