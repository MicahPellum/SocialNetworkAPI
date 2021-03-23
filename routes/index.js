const router = require('express').Router();
// const htmlRoutes = require('./html/html-routes');
const apiRoutes = require('./API/index.js')

router.use('/API', apiRoutes)


// router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;