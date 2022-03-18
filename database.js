const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:hugo123@cluster0.rkll0.mongodb.net/test';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conectado con MongoDB'))
.catch(err => console.log('Tienes un error: ', err));

module.exports = mongoose;