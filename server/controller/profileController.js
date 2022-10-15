const {profileService} = require('../service/profileService')

const profileController = (req, res) =>{
    profileService(req, res)
}

module.exports = {profileController}