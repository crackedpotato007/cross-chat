const mongoose = require('mongoose')
 const token = require('./config')

 module.exports = async () => {
   await mongoose.connect(token.Mongo, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     keepAlive: true,
     useFindAndModify: false,
   }, (err) => {
console.log(err)
   })
}