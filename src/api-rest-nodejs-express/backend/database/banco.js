/**pacote de conexão com o banco mongo.Db */
/**npm i mongoose */

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest')
mongoose.Promise = global.Promise


module.exports = mongoose