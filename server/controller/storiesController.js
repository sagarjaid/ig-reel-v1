const {storiesService} = require('../service/storiesService')

const storiesController = (req, res) =>{
    storiesService(req, res)
}

module.exports = {storiesController}