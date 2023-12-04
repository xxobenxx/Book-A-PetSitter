const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  name: {
        type: String,

       
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
    service :{ type: String},
    price:{  type: Number},
    _id:false
  }
],    
  address: {
         type: String,

        
  },
      description: {
      type: String,
      
      },

  certification : {
      type: Boolean,
  
  },
  picture: {
    type: String,
    
    },
      
},

{strictQuery: false});

module.exports =  mongoose.model('provider', providerSchema);