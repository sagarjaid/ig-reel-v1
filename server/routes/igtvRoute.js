const express = require('express')
const router = express.Router()
const {igtvController} = require('../controller/igtvController')


// middleware that is specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.get('/ig-igtv-url', (req, res) =>{igtvController(req, res)});

module.exports = router;