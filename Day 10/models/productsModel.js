const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title: String,
        price: Number
    }
);

const productModel = mongoose.model('products', productSchema);

const testProduct = new productModel({
    title: 'Test Product',
    price: 100
});

//schema -> object -> model

testProduct.save().then((res) => {
    console.log(res)
})