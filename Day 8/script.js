const fs = require('fs');

const data = fs.readFileSync('./data.json', "utf-8");

const dataObj = JSON.parse(data);

// console.log(dataObj);


const cardTemplate = `
<div class="product_cart">
<a href="LINK"><h2>TITLE</h2></a>
<p>DESC</p>
<img src="XXCS" alt="DECS">
<hr>
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

result = result.join(' ')

// console.log(result)

const http = require('http');

const urld = require('url');

const server = http.createServer((_req, res) => {

    // const urls = url.parse(_req.url);
    // const myUrl = new URL("http://localhost:1400/" + route);
    // console.log(urls)
    const path = urld.parse(_req.url, true);
    const pathname = path.pathname
    const query = path.query;

    switch (pathname) {
        case '/home':
            res.end(result);
            break;
        case '/product':
            // res.end('PRODUCTS PAGE');
            res.end(
                `<div>
                    <h2>${dataObj.products[query.productId].title}</h2>
                    <img src="${dataObj.products[query.productId].thumbnail}">
                    <p>${dataObj.products[query.productId].description}</p>
                    </div>`
            )
            break;
        case '/':
            res.end(result);
            break;
        default:
            res.end("PAGE NOT FOUND");
            res.writeHead(404);
            break;
    }
})

server.listen(1400);

