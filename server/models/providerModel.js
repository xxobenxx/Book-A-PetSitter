const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
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

  services: [
    {
    service :{ type: String,unique: true,required: true},
    price:{  type: Number,required: true},
    _id:false
  }
],    
  address: {
         type: String,
        unique: true,
        required: true,
  },
      description: {
      type: String,
      required: true,
      },

  certification : {
      type: Boolean,
      required: true,
  },
      
},

{strictQuery: false});

module.exports =  mongoose.model('provider', providerSchema);