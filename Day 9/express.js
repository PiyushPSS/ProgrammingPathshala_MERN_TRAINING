const express = require('express');
const fs_promise = require('fs/promises')

// const fs = require('fs');

const app = express();

app.use(express.json());


//For getting the data.

app.get('/api/product', async (_req, res) => {
    // const data = fs.readFileSync("./data.json", "utf-8");
    const data = await fs_promise.readFile("./data.json", "utf-8");
    const arr = JSON.parse(data).products;
    res.json({
        status: 'success',
        results: arr.length,
        data: {
            products: arr
        }
    })
});


//For posting the data by id.
app.post('/api/product', async (req, res) => {
    const data = req.body;
    data.id = 121;
    console.log(data);

    const db = await fs_promise.readFile("./data.json", "utf-8");
    const arr = JSON.parse(db);
    const length = arr.length;
    const newProduct = data;
    if (length == 0) {
        newProduct.id = 1;
        arr.push(newProduct);
    } else {
        newProduct.id = arr[length - 1].id + 1;
    }
    arr.push(newProduct);
    fs_promise.writeFile("./data.json", JSON.stringify(arr));
    res.send({
        status: 'success',
        data: {
            product: arr
        }
    });
});


//For updating the data.

app.put('/api/product/:id', async (req, res) => {  

    const arr = JSON.parse(await fs_promise.readFile("./data.json", "utf-8"));
    const reqId = req.params.id;
    const data = req.body;

    data.id = reqId;

    const newArr = arr.map((elem) => {
        if(elem.id == reqId) {
            return data;
        } else {
            return elem;
        }
    })

    fs_promise.writeFile('./data.json', JSON.stringify(newArr));
    res.json({
        status: 'success',
        data: {
            product: newArr
        }
    })
});


//For deleting the data.

app.delete('/api/product/:id', async (req, res) => {
    const arr = JSON.parse(await fs_promise.readFile("./data.json", "utf-8"));

    const reqId = req.params.id;

    const newArr = arr.filter((elem) => {
        if(elem.id == reqId) {
            return false;
        } else {
            return true;
        }
    })

    fs_promise.writeFile('./data.json', JSON.stringify(newArr));

    res.send(newArr);

});
app.listen(1400);

//splice, map, flatmap