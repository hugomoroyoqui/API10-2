const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');

router.get('/', carController.getCars);

module.exports = router;