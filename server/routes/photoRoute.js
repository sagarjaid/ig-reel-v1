const express = require('express')
const router = express.Router()
const {photoController} = require('../controller/photoController')


// middleware that is specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.get('/ig-photos-url', (req, res) =>{photoController(req, res)});

module.exports = router;