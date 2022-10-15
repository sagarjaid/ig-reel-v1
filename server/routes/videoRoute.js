const express = require('express')
const router = express.Router()
const {videoController} = require('../controller/videoController')


// middleware that is specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.get('/ig-video-url', (req, res) =>{videoController(req, res)});

module.exports = router;