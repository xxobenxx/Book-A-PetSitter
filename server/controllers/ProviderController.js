const Provider = require('../models/providerModel');
const Clients = require('../models/clientModel');
class ProviderController {
  
    async findAll(req, res){
        try{
            const provider= await Provider.find({});
            res.send(provider);
        }
        catch(e){
            res.send({e})
        }
    }
    
    async findOne(req ,res){
        let {provider} = req.params;
        try{
            const provider = await Provider.findOne({name:provider});
            res.send({prod:provider});
        }
        catch(e){
            res.send({e})
        }

    }
   
         async insert (req, res) {
            console.log('add new!')
        let {provider} = req.body;
        try{
            const found = await Provider.findOne({provider})
            if(!found){

                const done = await Provider.create(provider);
                res.send(done)
            } else {
                res.send('Pet Sitter already exists')
            }  
        }
        catch(e){
            res.send(e)
        }
    }

    
    async delete (req, res){
        console.log('delete!!!')
        let {provider} = req.body;
        try{
            const removed = await Provider.deleteOne({ provider });
            res.send({removed});
        }
        catch(error){
            res.send({error});
        };
    }
    


    async update (req, res){
        console.log('update!')
        let {provider, newProvider} = req.body;
        try{
            const updated = await Provider.updateOne(
                 provider ,newProvider
             );
            res.send({updated});
        }
        catch(error){
            res.send({error});
        };
    }


};
module.exports = new ProviderController();