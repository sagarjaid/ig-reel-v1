const {musicService} = require('../service/musicService')

const musicController = (req, res) =>{
        musicService(req, res)
}

module.exports = {musicController}