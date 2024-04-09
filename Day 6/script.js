console.log("HELLO");

setTimeout(() => {
    console.log("CHECKING");
}, 0);

console.log("Intermediate");
console.log("END");

//fetch api has the higher priority than the setTimeout.

//__________________________________________
//work done:
//inversion of control.
//promise in js.
//map function
//filter in array/objects
//reduce function 
//latency, response time and processing time.
//IP ADDRESS, Mac address, Router, ISP, Internet, DNS, HTTPS, HTTP
//await function

//__________________________________________
//how to create a new promise...

const pr = new Promise((resolve, rejected) => {
    //Three states of Promise:
    //pending
    //resolved or fulfilled
    //rejected.

    if (true) {
        resolve("HELLO");
    } else {
        rejected("NO");
    }

});

console.log(pr);

pr.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


const arr = [10, 20, 30];

const ans = arr.map(a => a * 2)

console.log(arr);
console.log(ans);

const fil = arr.filter((a) => {
    if (a > 15) {
        return a;
    }
})

console.log(fil)


const city = [
    'delhi', 'mumbai', 'chennai', 'russia', 'usa', 'India'
]

const filtercity = city.filter((a) => {
    if (a.toLowerCase().includes('i')) {
        return true;
    } else {
        return false;
    }
})

console.log(filtercity)