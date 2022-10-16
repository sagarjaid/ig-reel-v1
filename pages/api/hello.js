/*eslint no-octal: "error"*/

import { getCookie } from "insta-fetcher";

// const { igApi, getCookie} = require("insta-fetcher")
// const {ig} = require('../../component/ig')

export default async function handler (req, res){
  //const session_id = await getCookie("careerdekhoco", "8898720799");

  // var newSessionId = String('csrftoken=2Dspyd1uQ046SZSnV1u5NjdNixELhzor; rur="RVA\\05453803448050\\0541697476890:01f719077e156b38a455fab042a281f5351a1ded3bc2c98808e817841a8fbf53dffc58d4"; sessionid=53803448050%3AgsF5smjoLhV8aL%3A19%3AAYdEtwQlimDMTR2uvT_mxHK-ZPOXgHMPfTqoXz5EZg; ds_user_id=53803448050')

  // const newSessionId = String("csrftoken=ZdgpSqlRd4QmKzkLbVe5KxlEa8IvaBJ8; rur=\"RVA\0543587651637\0541697474421:01f7f59dd2485632edef395d72a985bfdd267f486f7ebc5133603f9d1db0c4e7f0c9f629\"; sessionid=3587651637%3AYJaVNxNihq6msP%3A24%3AAYfimPa2w5JFrdHF-KtWZFXV6DFtflvou6ogCEr-tQ; ds_user_id=3587651637")
  // const ig = new igApi(newSessionId);

  // console.log(newSessionId);
  // console.log(typeof newSessionId)
  // // console.log(typeof(session_id));
  // // const body = JSON.parse(req.body);
  // console.log(req.query);

  if(req.method === "GET"){
    // try {
    //     res.status(200).json({ hello: 'world!'});
    //   } catch (err) {
    //     res.status(500).json(err)
    //   }

    try{
      // const videoUrl = req.query.url
      // const igVideoData = await ig.fetchPost(videoUrl);
      // const igVideoUrl = igVideoData.links[0].url
      // console.log(igVideoUrl, "igVideoUrl");
      res.status(200).json({igVideoUrl: "igVideoUrl"});
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