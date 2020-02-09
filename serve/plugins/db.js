module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/fruit',{
    useNewUrlParser: true,useUnifiedTopology: true
  })
  .then(() => {console.log('连接成功')})
  .catch(err=>{console.log('wrong')})

  require('require-all')(__dirname + '/../models')

}