const fs = require('fs');

const data = fs.readFileSync('./data.json', "utf-8");

const dataObj = JSON.parse(data);

// console.log(dataObj);

// const htmlTemplate = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=\, initial-scale=1.0">
//     <title>Day 8</title>
// </head>
// <body>
//     ROXO
    
//     <script src="script.js"></script>
// </body>
// </html>`;


const cardTemplate = `
<div class="product_cart">
<a href="LINK" target = '_black'><h2>TITLE</h2></a>
<p>DESC</p>
<img src="XXCS" alt="DECS">
<hr>
</div>`;

let result = [];

for(i = 0 ; i < dataObj.products.length ; i++) {
    let singleCard = cardTemplate;

    singleCard = singleCard.replace("TITLE", dataObj.products[i].title)
    .replace("DESC", dataObj.products[i].description)
    .replace("XXCS", dataObj.products[i].thumbnail)
    .replace("LINK", dataObj.products[i].images[0]);


    result.push(singleCard);
}

result = result.join(' ')

// console.log(result)

const http = require('http');

const server = http.createServer((req, res) => {
    res.end(result);
})

server.listen(1400);