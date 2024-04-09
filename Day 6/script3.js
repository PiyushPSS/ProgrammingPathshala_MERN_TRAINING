// const n = require('./script2.js');

const {sum, mul}= require('./script2.js');
// n.fn1(2,3);
// n.fn2(3,3);

sum(3,5)
mul(2,3)


console.log('start')

async function callAPI() {
    const pr = new Promise((res, re) => {
        console.log('promise 1....');

        setTimeout(() => {
            console.log("timeout 1")
        }, 5000)
    })

    console.log('end')
}

callAPI();