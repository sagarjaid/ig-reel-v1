const {videoService} = require('../service/videoService')

const videoController = (req, res) =>{
        videoService(req, res)
}

module.exports = {videoController}