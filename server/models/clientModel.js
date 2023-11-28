const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
        type: String,
        unique: true,
        required: true,
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
        required: true,
      },
},

{strictQuery: false});

module.exports =  mongoose.model('client', clientSchema);