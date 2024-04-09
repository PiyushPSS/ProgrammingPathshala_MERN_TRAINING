const figlet = require('figlet');

function figcall() {
    figlet('Hello', (err, data) => {
        console.log(data);
    });
}

// figcall();
