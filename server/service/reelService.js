const {ig} = require('../config/ig');

const ufileName = require("unique-filename");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
const path = require('path');
const fs = require('fs')
const https = require("https");

// const {makeIgReel} = require('../igLocalService/makeIgReel')


const reelService = async (req, res)=>{

  console.log(req.body.url);
  const reelUrl =  req.body.url

    // const reelUrl = "https://www.instagram.com/reel/CjPV6bMOA0a/?utm_source=ig_web_copy_link"
    
    const igReelData = await ig.fetchPost(reelUrl)

    const igReelUrl = igReelData.links[0].url

    console.log(igReelUrl, "igReelUrl");

    // take a screenshort of the downloded video 

    const igReellocalSSPath = ufileName("/public/data", "igreel"); 

    console.log(igReellocalSSPath, "igReellocalSSPath");

  // download the video from URL

  https.get(igReelUrl, igReellocalSSPath, (res) => {

    const mp4filePath = "public/data/" + igReellocalSSPath.slice(13) + ".mp4"

    console.log(mp4filePath, "mp4filePath");

    const writeStream = fs.createWriteStream(mp4filePath);
 
    res.pipe(writeStream);
 
    writeStream.on("finish", () => {
       writeStream.close();
       console.log("Download Completed!");
    })

    // take a screenshort of the downloded video 

    console.log("taking a screenshort....");

    new ffmpeg(igReelUrl).takeScreenshots({
      filename: igReellocalSSPath,
      count: 1,
      timemarks: ["1"],
      size: "320x?"
      });

      console.log("screenshort taken")

      console.log(igReellocalSSPath, "igReellocalSSPath");

  })

  const mp4filePath = igReellocalSSPath.slice(13) + ".mp4"

  const reelfilePath = mp4filePath.toString()

  console.log(reelfilePath, "reelfilePath");

  const thFilePath = igReellocalSSPath.slice(13) + ".png"

  const pngfilePath = thFilePath.toString()

  console.log(pngfilePath, "pngfilePath");

  res.send({ igReelUrl: igReelUrl, thName: pngfilePath, reelName: reelfilePath})
  }

module.exports = {reelService}