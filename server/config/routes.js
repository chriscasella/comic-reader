const express = require('express');

const comicController = require('../comic/comicController');

const router = express.Router();

router.route('/comic/:id/pages').get(comicController.getAllPages);
router.route('/comic/:id/:filename').get(comicController.getPage);

module.exports = router;
