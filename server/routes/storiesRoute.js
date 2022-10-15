const express = require('express')
const router = express.Router()
const {storiesController} = require('../controller/storiesController')


// middleware that is specific to this router

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.get('/ig-stories-url', (req, res) =>{storiesController(req, res)});

module.exports = router;