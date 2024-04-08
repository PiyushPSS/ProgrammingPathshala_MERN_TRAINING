
// const res = fetch("https://dummyjson.com/products/1");
// res.then(() => {
//     console.log(res);
// })


fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))

const req = fetch("https://dummyjson.com/products/1");
const res = req.then(rep => rep.json());
res.then((data) => {
    console.log(data);
}).catch(() => {
    console.log("Catch caught");
});