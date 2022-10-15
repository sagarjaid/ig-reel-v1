const express = require('express')
const router = express.Router()
const {musicController} = require('../controller/musicController')


// middleware that is specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.get('/ig-music-url', (req, res) =>{musicController(req, res)});

module.exports = router;