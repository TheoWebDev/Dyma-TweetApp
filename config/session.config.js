const { app } = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

app.use(session)({
    secret: 'i am a secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 24
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttle: 60 * 60 * 24 * 14
    })
})