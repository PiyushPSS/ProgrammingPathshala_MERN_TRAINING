const fs = require('fs');
const http = require('http');
const urld = require('url');

const data = fs.readFileSync('./data.json', "utf-8");

const dataObj = JSON.parse(data);

const inputElement = `
<form action = "/product" onSubmit="/product">
<input type="search" 
name="productSearch" 
id="productSearch">
</form>
`

const cardTemplate = `
    <div class="product_cart" style="background-color: #f2f2f2;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

    margin-bottom: 10px;
    margin: auto;
    width: 50%;
    padding: 10px;">
        <a href="LINK" style="text-decoration: none;
        color: #333;">
            <h1 style="margin-bottom: 5px;">TITLE</h1>
        </a>
        <p style="font-size: 14px;
        margin-bottom: 10px;">DESC</p>
        <img src="XXCS" alt="DECS">
        <hr style="border: none;
        border-top: 1px solid #ccc;
        margin-top: 10px;">
    </div>`;

let result = [];

for (i = 0; i < dataObj.products.length; i++) {
    let singleCard = cardTemplate;

    singleCard = singleCard.replace("TITLE", dataObj.products[i].title)
        .replace("DESC", dataObj.products[i].description)
        .replace("XXCS", dataObj.products[i].thumbnail)
        .replace("LINK", `/product?productId=${i}`);

    result.push(singleCard);
}

result = result.join(' ');


const server = http.createServer((_req, res) => {
    const path = urld.parse(_req.url, true);
    const pathname = path.pathname;
    const query = path.query;

    res.writeHead(200, {
        'content-type': 'text/html'
    })

    switch (pathname) {
        case '/home':
            res.end(inputElement+result);
            break;
        case '/product':
            let id = query.productId;
            let productSearch = query.productSearch;

            console.log(id + productSearch);
            
            res.end(`
                <div>
                    <h1>${dataObj.products[id].title}</h1>
                    <img src="${dataObj.products[id].images[0]}" style="width: 250px; height: 250px;">
                    <img src="${dataObj.products[id].images[1]}" style="width: 250ps; height: 250px;">
                    <img src="${dataObj.products[id].images[2]}" style="width: 250px; height: 250px;">
                    <img src="${dataObj.products[id].images[3]}" style="width: 250px; height: 250px;">
                    <img src="${dataObj.products[id].images[1]}" style="width: 250px; height: 250px;">
                    <p style="font-size: 32px; color: blue;">${dataObj.products[id].description}</p>
                    <p style="font-size: 24px; color: green;">Price: ${dataObj.products[id].price}</p>
                    <p style="font-size: 20px; color: red; display: inline;">Rating: ${dataObj.products[id].rating}</p>
                    <p style="font-size: 20px; color: orange; display: inline; margin-left: 20px;">Stock: ${dataObj.products[id].stock}</p>
                </div>`
            );
            break;
        case '/':
            res.end(result);
            break;
        default:
            res.writeHead(404);
            res.end("PAGE NOT FOUND");
            break;
    }
});

server.listen(1400);
