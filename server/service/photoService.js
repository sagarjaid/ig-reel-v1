const {ig} = require('../config/ig');


const photoService = async (req, res)=>{

  console.log(req.body.url);
  // const igUrl =  req.body.url || "https://www.instagram.com/p/Ci721Wpp1oK/"

     const igUrl = "https://www.instagram.com/p/Ci721Wpp1oK/"

    const igPhotoUrl = await ig.fetchPost(igUrl)
    console.log(igPhotoUrl, "igPhotoUrl");
    res.status(200).json(igPhotoUrl)
  }

module.exports = {photoService}