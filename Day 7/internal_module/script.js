// const fs = require('fs')

// const data = fs.readFileSync('./myReadMe.txt', {encoding: 'utf8'});

// console.log(data.toString());

// const b = new Buffer.from('abc');

// console.log(b)

// const fs = require('fs');

// fs.writeFileSync('./logs.txt', 'Checking');



// console.log(data.toString());
// console.log('end');

//promise api, synchronous api, async api
//file stream in node

// const topromise = require('fs/promises');
// const pr = topromise.readFile('./myReadMe.txt', {encoding: 'utf-8'})
// console.log('start')
// pr.then((res) => {
//     console.log(res);
// })
// console.log('end');


// const fs = require('fs')
// fs.readFile('./myReadMe.txt', { encoding: 'utf8' }, (err,data) => {
//     console.log(data);
// });

// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log("Received");
//     console.log(req.url);
//     res.writeHead(200, {
//         'content-type': 'text/html'
//     })
//     res.end("<h2>HELLO</h2><h4>Hello H4</h4>"); //only takes in string
// });

// server.listen(1400, () => {
//     console.log("CHECKED");
// });

//npm nodemon
//http nodejs
//status quote in http communication


const http = require('http')

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    CHECK

    <script src="script.js"></script>
</body>
</html>`

const cardTemplate = `
    <div class='product-card'>
        <h3>_TITLE_</h3>
        <p>_PARAGRAPH_</p>
    </div>
`

const card1 = cardTemplate.replace('_TITLE_', 'Motorola Moto G36')
        .replace("_PARAGRAPH_", "LOREM IPSUM")

const page = htmlTemplate.replace('CHECK', card1);

const server = http.createServer((req, res) => {
    console.log("Received");
    console.log(req.url);
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.end(page); //only takes in string
});

server.listen(1400, () => {
    console.log("Up and Running...");
});