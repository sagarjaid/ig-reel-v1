const fs = require('fs')
const path = require('path');

const makeIgReel = (req, res)=>{

    console.log(req.body.thName);

    const thfilePath = req.body.thName
    const reelfilePath = req.body.reelName

    console.log(thfilePath, "makeigReel thfilePath");
    console.log(reelfilePath, "makeigReel reelfilePath");

    const FileExists = async (thfilePath, reelfilePath) => {
  
          const thfileExist = fs.existsSync(thfilePath);
          const reelfileExist = fs.existsSync(reelfilePath);

          if (!thfileExist) { 
            console.log('th File does not exist') 
        } else {
            console.log('th File exists') 
        }
        if (!reelfileExist) { 
          console.log('reel File does not exist') 
      } else {
          console.log('reel File exists') 
      }
      }

      FileExists(thfilePath, reelfilePath);
  

    // const pngfilePath =  path.resolve(__dirname +"\\temp\\", thfilePath);
    // const mp4filePath =  path.resolve(__dirname + "\\temp\\", reelfilePath);

    res.status(200).json({thUrl: thfilePath, reelUrl: reelfilePath})
    // res.status(200).json({thUrl: pngfilePath, reelUrl: mp4filePath})
    // res.download(path.resolve(__dirname, dfilePath))
  }

  module.exports = {makeIgReel}