const {ig} = require('../config/ig');


const profileService = async (req, res)=>{

  console.log(req.body.url);
  // const userName =  req.body.url || "sagarjaid_official"

    const userName = "sagarjaid_official"
  
    const profilePicUrl = await ig.fetchUser(userName)
    console.log(profilePicUrl, "profilePicUrlzz");
    res.status(200).json(profilePicUrl)
  }

module.exports = {profileService}