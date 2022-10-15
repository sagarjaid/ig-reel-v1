const express = require('express')
const router = express.Router()
const {reelController} = require('../controller/reelController')
const {makeIgReel} = require('../igLocalService/makeIgReel')


// middleware that is specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.post('/ig-reel-url', (req, res) =>{reelController(req, res)});

module.exports = router;