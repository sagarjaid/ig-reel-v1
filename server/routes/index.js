const express = require('express')
const router = express.Router()
const profileRoute = require('./profileRoute')
const photoRoute = require('./photoRoute')
const reelRoute = require('./reelRouter')
const musicRoute = require('./musicRoute')
const videoRoute = require('./videoRoute')
const igtvRoute = require('./igtvRoute')
const storiesRoute = require('./storiesRoute')
const highlightsRoute = require('./highlightsRoute')
const makeReelRoute = require('./makeReelRoute')




router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

// define the about route

router.use(profileRoute);
router.use(photoRoute);
router.use(reelRoute);
router.use(musicRoute);
router.use(videoRoute);
router.use(igtvRoute);
router.use(storiesRoute);
router.use(highlightsRoute);
router.use(makeReelRoute)


module.exports = router;