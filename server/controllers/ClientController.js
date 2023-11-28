const Provider = require('../models/providerModel');
const Clients = require('../models/clientModel');
class ClientController {
  
    async findAll(req, res){
        try{
            const client= await Clients.find({});
            res.send(client);
        }
        catch(e){
            res.send({e})
        }
    }
    
    async findOne(req ,res){
        let {client} = req.params;
        try{
            const client = await Clients.findOne({name:client});
            res.send({prod:client});
        }
        catch(e){
            res.send({e})
        }

    }
   
         async insert (req, res) {
        let {client} = req.body;
        try{
            const found = await Clients.findOne({client})
            if(!found){

                const done = await Clients.create(client);
                res.send(done)
            } else {
                res.send('User already exists')
            }  
        }
        catch(e){
            res.send(e)
        }
    }

    
    async delete (req, res){
        console.log('delete!!!')
        let { client } = req.body;
        try{
            const removed = await Clients.findOneAndDelete({ client });
            res.send({removed});
        }
        catch(error){
            res.send({error});
        };
    }
    


    async update (req, res){
        let {client, newClient} = req.body;
        try{
            const updated = await Clients.updateOne(
                 client ,newClient
             );
            res.send({updated});
        }
        catch(error){
            res.send({error});
        };
    }


};
module.exports = new ClientController();