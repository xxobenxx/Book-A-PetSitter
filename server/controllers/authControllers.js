const Clients = require('../models/clientModel');
const Provider = require('../models/providerModel');


const argon2 = require("argon2"); 
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;

const register = async (req, res) => {
    // this salt can be truly random with one of available npm packages
    const salt = "ela005698";
    const { email, password, password2, type }= req.body;
    
    
    if (!email || !password || !password2) {
      return res.json({ ok: false, message: "All fields required" });
    }
    if (password !== password2) {
      return res.json({ ok: false, message: "Passwords must match" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ ok: false, message: "Invalid email" });
    }

    try {

    let user;
    if(type === 'client'){                                // You check what user type you've chosen when filling up the registering/log in form: 
    user = await Clients.findOne({ email })
    }
    else if(type === 'provider'){
    user = await Provider.findOne({ email })
    };

      if (user) return res.json({ ok: false, message: "User exists!" });
      const hash = await argon2.hash(password, salt);
      // not salted, salt is appending a random string to a password to strengthen the hash
    //   const hash2 = await argon2.hash(password);
    //   // we cna see that hashes for salted and unsalted are different

      console.log("hash ==>", hash);
     
      if (type === 'client') {
        const newUser = {
          email,
          password: hash,
        };
      
      await Clients.create(newUser);
      res.json({ ok: true, message: "Successfully registered" });
      } else if (type === 'provider') {
      const newUser = {
        email,
        password: hash,
      };
  
      await Provider.create(newUser);
      res.json({ ok: true, message: "Successfully registered" });
    } 
  }
    catch (error) {
      console.log(error);
      res.json({ ok: false, error });
  }
};
    
  // the client is sending this body object
  //  {
  //     email: form.email,
  //     password: form.password
  //  }



  const login = async (req, res) => {
  
    const { email, password, password2, type }= req.body;
    if (!email || !password) {
      return res.json({ ok: false, message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ ok: false, message: "Invalid email provided" });
    }

    try {
     let user;
     let type

      user = await Clients.findOne({ email });

if(user){
type = 'client'
} else{
   user = await Provider.findOne({ email });
   if(user){
       type = 'provider'
   }

    }
  
    

      if (!user) return res.json({ ok: false, message: "Invalid user provided" });
      const match = await argon2.verify(user.password, password);
      if (match) {
        // once user is verified and confirmed we send back the token to keep in localStorage in the client and in this token we can add some data -- payload -- to retrieve from the token in the client and see, for example, which user is logged in exactly. The payload would be the first argument in .sign() method. In the following example we are sending an object with key userEmail and the value of email coming from the "user" found in line 47
        const token = jwt.sign({ userEmail: user.email, type:type }, jwt_secret, {
          expiresIn: "1h",
        }); //{expiresIn:'365d'}
        // after we send the payload to the client you can see how to get it in the client's Login component inside handleSubmit function
        res.json({ ok: true, message: "welcome back", token, email, type });
      } else return res.json({ ok: false, message: "Invalid data provided" });
    } catch (error) {
      res.json({ ok: false, error });
    }
  };


  const getCurrentUser = async (req, res) => {  
try {
  let {email, type} = req.body;
  let user 
if(type === 'client'){
user = await Clients.findOne({email})
} else if(type === 'provider'){ 
user = await Provider.findOne({email}) 
}
res.json({ ok: true, user });
  console.log(email, type);
} catch (error) {
  res.json({ ok: false, error });
}

  }


  const updateUser = async (req, res) => {
const { name, surname, address, contactNumber, description, services, email,type } = req.body;


try {
  let update
  if(type === 'client'){
update = await Clients.findOneAndUpdate({email}, {name, surname, address, contactNumber, description, services}, {new: true})
  } else if(type === 'provider'){

 update = await Provider.findOneAndUpdate({email}, { $set: {name, surname, address, contactNumber, description, services }},{new: true})


  }
  console.log(update);
  res.json({ ok: true, message: "User information updated" ,update});
} catch (error) {
  console.log(error);
  res.json({ ok: false, error });
}
};

  
  const verify_token = (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    jwt.verify(token, jwt_secret, (err, succ) => {
      err
        ? res.json({ ok: false, message: "Token is corrupted" })
        : res.json({ ok: true, succ });
    });
  };
  
  module.exports = { register, login, verify_token ,getCurrentUser, updateUser};



