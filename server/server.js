const express = require('express');
const cors = require("cors");
const next = require('next');
const router = require('./routes/index');
const path = require('path');

const findRemoveSync = require('find-remove')
const fsPromises = require('fs/promises')
const fs = require("fs");
const https = require("https");
const ufileName = require("unique-filename");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);


require("dotenv").config();
const port = parseInt(process.env.PORT) || 3000 ;
const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();


server
.prepare()
.then(() => {
  const app = express();

  app.use(cors({
    origin: "https://www.instagram.com",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }));

  app.use('/public', express.static(path.join(__dirname, 'public')))
  app.use(express.urlencoded( {extended: true }));
  app.use(express.json());

  app.use("/api/v1", router);


  // const igReelurl = "https://instagram.fblr5-1.fna.fbcdn.net/v/t50.2886-16/10000000_400447348856614_9136334212308696856_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEwODAuY2xpcHMuaGlnaCIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=instagram.fblr5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=8rvZhMkUyXIAX-E7Jyg&edm=APfKNqwBAAAA&vs=469505978358278_3284582381&_nc_vs=HBksFQAYJEdJQ1dtQUFtMS1wcE5Hd0JBQmgtNkVtUHg4cF9icV9FQUFBRhUAAsgBABUAGCRHRm1ENEJITzdWNFNzRTRDQU1BTnA5b045U0o4YnFfRUFBQUYVAgLIAQAoABgAGwAVAAAmyI2Q5%2Brt4z8VAigCQzMsF0A3u6XjU%2FfPGBJkYXNoX2hpZ2hfMTA4MHBfdjERAHX%2BBwA%3D&_nc_rid=cfa0609add&ccb=7-5&oe=634A1C7A&oh=00_AT-T0H8N-JSkd7YLgJbRyHRGsTQR_wEyySSC_70gFBCgog&_nc_sid=74f7ba"


  // "https://scontent.cdninstagram.com/v/t50.2886-16/10000000_400447348856614_9136334212308696856_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEwODAuY2xpcHMuaGlnaCIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=instagram.fblr5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=8rvZhMkUyXIAX-E7Jyg&edm=APfKNqwBAAAA&vs=469505978358278_3284582381&_nc_vs=HBksFQAYJEdJQ1dtQUFtMS1wcE5Hd0JBQmgtNkVtUHg4cF9icV9FQUFBRhUAAsgBABUAGCRHRm1ENEJITzdWNFNzRTRDQU1BTnA5b045U0o4YnFfRUFBQUYVAgLIAQAoABgAGwAVAAAmyI2Q5%2Brt4z8VAigCQzMsF0A3u6XjU%2FfPGBJkYXNoX2hpZ2hfMTA4MHBfdjERAHX%2BBwA%3D&_nc_rid=cfa0609add&ccb=7-5&oe=634A1C7A&oh=00_AT-T0H8N-JSkd7YLgJbRyHRGsTQR_wEyySSC_70gFBCgog&_nc_sid=74f7ba";

  // download the video from URL

//   https.get(igReelurl, (res) => {
//     const filePath = ufileName("/", "igreel");

//     const Str = filePath

//     // removing character 'o'

//     var igReelPath = Str.slice(1) + ".mp4"

//     console.log(igReelPath);

//     const writeStream = fs.createWriteStream(igReelPath);
 
//     res.pipe(writeStream);
 
//     writeStream.on("finish", () => {
//        writeStream.close();
//        console.log("Download Completed!");
//     })

//     // take a screenshort of the downloded video 

//     new ffmpeg(igReelurl).takeScreenshots({
//       filename: filePath,
//       count: 1,
//       timemarks: ["1"],
//       size: "320x?"
//       });
//  })

    // const filePath = "igreel-9002269e.png"
 
    // const fileExist = fs.existsSync(filePath)

    // if (!fileExist) { 
    //     console.log('File does not exist') 
    // } else {
    //     console.log('File exists') 
    // }


  app.all('*', (req, res) => {
    return handle(req, res)
  });

  console.log(__dirname);
  
//   const emptyFolder = async (folderPath) => {
//     try {
//         // Find all files in the folder
//         const files = await fsPromises.readdir(folderPath);
//         for (const file of files) {
//             await fsPromises.unlink(path.resolve(folderPath, file));
//             console.log(`${folderPath}/${file} has been removed successfully`);
//         }
//     } catch (err){
//         console.log(err);
//     }
// }

// setInterval(()=>{emptyFolder('./public/data');}, 30000)

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  });

});