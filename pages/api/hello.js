/*eslint no-octal: "error"*/

import {igApi, getCookie } from "insta-fetcher";

// const { igApi, getCookie} = require("insta-fetcher")
// const {ig} = require('../../component/ig')

export default async function handler (req, res){
  // const session_id = await getCookie("careerdekhoco", "8898720799");

  // console.log(session_id);
  
  var newSessionId = String('csrftoken=2LUKWnLBP0Ou7zCcw1kk4ToVdnUmAq2Q; rur="RVA\\05453803448050\\0541697478741:01f7d628f236996e8bdeefc268be6086e45b678d28fe9accf8228760af2c65464b18a3cf"; sessionid=53803448050%3AlqGIxWe7kkadFi%3A28%3AAYd2PA5Cz0jb-wzMAlGqtHj2oCV96gFn0GPa-y47wg; ds_user_id=53803448050')

  // const newSessionId = String("csrftoken=ZdgpSqlRd4QmKzkLbVe5KxlEa8IvaBJ8; rur=\"RVA\0543587651637\0541697474421:01f7f59dd2485632edef395d72a985bfdd267f486f7ebc5133603f9d1db0c4e7f0c9f629\"; sessionid=3587651637%3AYJaVNxNihq6msP%3A24%3AAYfimPa2w5JFrdHF-KtWZFXV6DFtflvou6ogCEr-tQ; ds_user_id=3587651637")
  const ig = new igApi(newSessionId);

  console.log(newSessionId);
  console.log(typeof newSessionId)
  // console.log(typeof(session_id));
  // const body = JSON.parse(req.body);
  console.log(req.query);

  if(req.method === "GET"){
    // try {
    //     res.status(200).json({ hello: 'world!'});
    //   } catch (err) {
    //     res.status(500).json(err)
    //   }

    try{
      const videoUrl = req.query.url
      const igVideoData = await ig.fetchPost(videoUrl);
      const igVideoUrl = igVideoData.links[0].url
      console.log(igVideoUrl, "igVideoUrl");
      res.status(200).json({igVideoUrl: igVideoUrl});
    }catch(err){
      res.status(500).json(err);
    }

    }
  // // const videoUrl =  req.body.url || "https://www.instagram.com/reel/Ci8N8rEDQvL/"

  //   const videoUrl = "https://www.instagram.com/reel/Ci8N8rEDQvL/"

  //   if(req.method === "POST"){
  //     try{
  //       const videoUrl = "https://www.instagram.com/reel/Ci8N8rEDQvL/"
  //       const igVideoData = await ig.fetchPost(videoUrl);
  //       const igVideoUrl = igVideoData.links[0].url
  //       console.log(igVideoUrl, "igVideoUrl");
  //       res.status(200).json({igVideoUrl: igVideoUrl});
  //     }catch(err){
  //       res.status(500).json(err);
  //     }
  //  }

  // res.status(200).json({ hello: 'world!'});
}