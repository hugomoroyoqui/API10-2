const carModel = require('../models/car.model');
const carController = {};

carController.getCars = async (req, res) => {
    const cars = await carModel.find();
    res.json(cars);
};


carController.addCar = async (req, res) => {
    const car = new carModel(req.body);
    await car.save();
    res.json({ 'status': 'Auto almacenado exitosamente!'});
};

module.exports = carController;