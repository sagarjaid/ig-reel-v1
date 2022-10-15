const {ig} = require('../config/ig');


const storiesService = async (req, res)=>{

  console.log(req.body.url);
  // const userName =  req.body.url || "sagarjaid_official"

    const userName = "rishika_min_ho"
  
    const igStoriesUrl = await ig.fetchStories(userName)
    console.log(igStoriesUrl, "igStoriesUrl");
    res.status(200).json(igStoriesUrl)
  }

module.exports = {storiesService}