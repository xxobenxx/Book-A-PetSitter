

    const express = require('express'), 
    app = express(),
    mongoose = require('mongoose')
    var cors = require('cors')
    require('dotenv').config()
    
    const authRoute = require('./routes/authRoutes')
    // const clientRoute = require('./routes/clientRoute')
    // const providerRoute = require('./routes/providerRoute')
  
    

    app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

async function connecting(){
    try {
        await mongoose.connect('mongodb+srv://kerken:axwa03K96f9B4Vey@cluster0.fxscq2r.mongodb.net/?retryWrites=true&w=majority')
        console.log('Connected to the DB')
    } catch ( error ) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!');
    }
    }

    app.use('/auth', require('./routes/authRoutes'));
    
    
    const path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


const PORT = process.env.PORT || 3000; // Use the PORT provided by Heroku

connecting().then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});