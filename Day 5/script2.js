
// const res = fetch("https://dummyjson.com/products/1");
// res.then(() => {
//     console.log(res);
// })


fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))

