const {ig} = require('../config/ig');


const igtvService = async (req, res)=>{

  console.log(req.body.url);
  // const igtvUrl =  req.body.url || "https://www.instagram.com/tv/BqUxdWfl2ZB"

    const igtvUrl = "https://www.instagram.com/tv/BqUxdWfl2ZB"
    
    const newIgtvUrl = await ig.fetchPost(igtvUrl)
    console.log(newIgtvUrl, "newIgtvUrl");
    res.status(200).json(newIgtvUrl)
  }

module.exports = {igtvService}