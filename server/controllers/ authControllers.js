


const { email, password, password2, type } = req.body;


let user
if(type === 'client'){                                // You check what user type you've chosen when filling up the registering/log in form: 
user = await Clients.findOne({ email })
} else if(type === 'provider'){
user = await Providers.findOne({ email })
}
