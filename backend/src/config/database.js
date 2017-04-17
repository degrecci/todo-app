const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://admin:admin@ds163020.mlab.com:63020/todo-app')