
const apiRouter = require('./api.route');
const assetRouter = require('./asset.route');
const artRouter = require('./art.route');

const Router = require('express').Router;
const router = new Router();

router.use('/api', apiRouter);
router.use('/assets', assetRouter);
router.use('/arts', artRouter);

module.exports =  router;
