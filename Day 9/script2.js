const express = require('express');

const app = express();

app.get('/product', (_req, res) => {
    res.send("This is the product page GET");
})

app.post('/product', (_req, res) => {
    res.send("This is the product page POST");
})

app.patch('/product', (_req, res) => {
    res.send("This is the product page DEL");
})

app.delete('/product', (_req, res) => {
    res.send("This is the product page PATCH");
})



app.listen(1400);