const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
let productSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required:true
  },
  description: {
    type: String,
  },
  cat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service' 
  },
  photo: {
    type: String,
  },
  p1: {
    type: String,
  },
  p2: {
    type: String,
  },
  p3: {
    type: String,
  },
  p4: {
    type: String,
  },
  p5: {
    type: String,
  },
  p6: {
    type: String,
  },
}, {
    timestamps : true
  })
var Products = mongoose.model('Product',productSchema);

module.exports = Products;
