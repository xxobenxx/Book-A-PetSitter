const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
  name: {
        type: String,
        unique: true,
      },

  email: {
        type: String,
        unique: true,
        required: true,
      },

  password: {type: String,
    unique: true,
    required: true,},

     
  address: {
         type: String,
        unique: true,
      },
},

{strictQuery: false});

module.exports =  mongoose.model('client', clientSchema);