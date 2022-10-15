const express = require('express')
const router = express.Router()
const {highlightsController} = require('../controller/highlightsController')


// middleware that is specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.get('/ig-highlights-url', (req, res) =>{highlightsController(req, res)});

module.exports = router;