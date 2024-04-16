const express = require('express');
// const fs = require('fs');
const fs_promise = require('fs/promises')

const app = express();

app.get('/api/product', async (req, res) => {
    // const data = fs.readFileSync("./data.json", "utf-8");
    const data = await fs_promise.readFile("./data.json", "utf-8");
    const arr =JSON.parse(data).products;
    res.json({
        status: 'success',
        results: arr.length,
        data: {
            products: arr
        }
    })
})

app.listen(1400);