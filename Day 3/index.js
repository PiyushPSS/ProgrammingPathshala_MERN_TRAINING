// const a = "message";

// console.log(a);

// // JavaScript Variables can be declared in 4 ways:

// // Automatically. Scope is function level. Can be defined multiple times.

// b = 19;

// // Using var. Oldest keyword. Function scope. Can be defined multiple times.

// var c = "Hello";
// var d = 10;

// // Using let. Let has a block level scope. Cannot be defined multiple times.

// let z = 100;

// // Using const

// const j = "Constant";

// function en() {
//     for(i = 0; i < 5 ; i++) {
//         console.log(i);
//     }
// }

// en();

// //Undefined vs null.
// //Parseint vs number.

// //array.

// let str = "12";
// let age = 12;

// // == and === in JS

// if(str == age) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// if(str === age) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }


// const names = "Piyush";
// const filler = "My name is";

// const result = `${filler} ${names}`;
// console.log(result);

// function print(str) {
//     if(!str) {
//         console.log("str is undefined");
//     }

//     return str;
// }

// print();

//function declaration
function print() {
    console.log("declaration");
}

//function assignment {named} 

const a = function print() {
    console.log("--");
}


//function assignment {unnamed} 

const b = function () {
    console.log("--");
}

///Using arrow notation in function

const c = () => {
    console.log("--");
}

//Different methods of initialization of objects.

// const obj = new Object();
// obj[1] = '1';
// obj[2] = '2';
// obj[3] = '13';

// console.log(obj);

// const obj = {};
// obj[1] = '1';
// obj[2] = '2';
// obj[3] = '13';

// console.log(obj);


const obj = {
    1: '1h',
    2: '2h'
};


// console.log(obj[1]);

const value = prompt("Enter the value");

console.log(obj[value]);