const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type:String },
  password: { type:String ,
  select:false },
})


module.exports = mongoose.model('AdminUser' ,schema)