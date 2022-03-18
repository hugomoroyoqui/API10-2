const carModel = require('../models/car.model');
const carController = {};

carController.getCars = async (req, res) => {
    const cars = await carModel.find();
    res.json(cars);
};

module.exports = carController;