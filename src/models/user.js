const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  
  edad: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  pais: {
    type: String,
    required: true
  }



});

module.exports = mongoose.model('User', userSchema);