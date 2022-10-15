const express = require('express')
const router = express.Router()
const {profileController} = require('../controller/profileController')


// middleware that is specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.get('/ig-pp-url', (req, res) =>{profileController(req, res)});

module.exports = router;