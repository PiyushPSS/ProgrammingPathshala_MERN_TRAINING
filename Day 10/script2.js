const express = require('express')
const mongoose = require('mongoose');

const productRouter = require('./controllers/productRoute.js');

const app = express();

app.use('/api/products', productRouter);

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster1.pyq5ppt.mongodb.net/$_DBNAME_$?retryWrites=true&w=majority&appName=Cluster1';

const databaseUserName = 'piyushpratapsingh67';
const databasePassword = "piyush123"
const databaseName = 'Amazon-backend';

const dbLink = url.replace('$_USERNAME_$', databaseUserName).replace('$_PASSWORD_$', databasePassword).replace('$_DBNAME_$', databaseName);


mongoose.connect(dbLink).then(
    ()=>{
        console.log('*_____Connected to the database_____*');
    }
);

app.listen(1400, () => {
    console.log("CONNECTED");
});

const productsModel = require('./models/productsModel.js');