const {reelService} = require('../service/reelService')

const reelController = (req, res) =>{
        reelService(req, res)
}

module.exports = {reelController}