const express = require('express');
const router = express.Router();
const trainingCenterController = require('../controllers/trainingCenters');

router.post('/', trainingCenterController.createTrainingCenter);
router.get('/', trainingCenterController.getAllTrainingCenters);

module.exports = router;
