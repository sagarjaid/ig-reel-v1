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

  app.use("/new/v1", router);

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

module.exports = server;