const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
  name: {
        type: String,
        
      },

  surname: {
        type: String,
      },
      
      address: {
        type: String,
      
     },
  
  contactNumber: {
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
      _id:false
    }
  ], 

     
  address: {
         type: String,
       
      },
  
      picture: {
        type: String,
        
        },

},

{strictQuery: false});

module.exports =  mongoose.model('client', clientSchema);