const {highlightsService} = require('../service/highlightsService')

const highlightsController = (req, res) =>{
    highlightsService(req, res)
}

module.exports = {highlightsController}