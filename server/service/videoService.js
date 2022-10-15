const {ig} = require('../config/ig');


const videoService = async (req, res)=>{

  console.log(req.body.url);
  // const videoUrl =  req.body.url || "https://www.instagram.com/p/Ci721Wpp1oK/"

    const videoUrl = "https://www.instagram.com/reel/Ci8N8rEDQvL/"
    
    const igvideoUrl = await ig.fetchPost(videoUrl)
    console.log(igvideoUrl, "igvideoUrl");
    res.status(200).json(igvideoUrl)
  }

module.exports = {videoService}