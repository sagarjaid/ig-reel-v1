const {ig} = require('../config/ig');


const musicService = async (req, res)=>{

  console.log(req.body.url);
  // const musicUrl =  req.body.url || "https://www.instagram.com/p/Ci721Wpp1oK/"

    const musicUrl = "https://www.instagram.com/reel/Ci8N8rEDQvL/"
    
    const igmusicUrl = await ig.fetchPost(musicUrl)
    console.log(igmusicUrl, "igReelUrl");
    res.status(200).json(igmusicUrl)
  }

module.exports = {musicService}