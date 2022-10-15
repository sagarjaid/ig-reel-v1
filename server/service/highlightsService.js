const {ig} = require('../config/ig');


const highlightsService = async (req, res)=>{

  console.log(req.body.url);
  // const userName =  req.body.url || "sagarjaid_official"

    const userName = "rishika_min_ho"
  
    const ighighlightsUrl = await ig.fetchHighlights(userName)
    console.log(ighighlightsUrl, "ighighlightsUrl");
    res.status(200).json(ighighlightsUrl)
  }

module.exports = {highlightsService}