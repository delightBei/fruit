const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  icon: { type: String},
  price: { type: String },
  img: { type: String },
  image: { type: String },
  present: { type: String }
})

module.exports = mongoose.model('Item',schema)