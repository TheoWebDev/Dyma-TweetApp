const mongoose = require('mongoose');

mongoose
    .connect('mongodb://Theo:qwe@localhost:27017/dyma', { 
        useNewUrlParser: true 
    })
    .then(() => {
        console.log('Connexion DB OK');
    })
    .catch(err => {
        console.log(err);
})