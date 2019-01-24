var mongoose = require('mongoose')
var env = process.env.NODE_ENV || 'development';

mongoose.Promise=global.Promise
console.log('env *****', env);

process.env.PORT = 3000;
process.env.MONGODB_URI = 'mongodb://localhost:27017/WebPortal';

mongoose.connect( process.env.MONGODB_URI , { useNewUrlParser: true } );

module.exports = {mongoose}