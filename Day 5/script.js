let arr = [2, 3, 4, 5, 6];

function printArr(arr) {
    //for in array.
    for (i in arr) {
        console.log(arr[i]);
    }

    //Using anonymous functions.
    arr.forEach(anon);


    //Using forEach.
    arr.forEach((element, index, array) => {
        console.log("element: " + element + " Index: " + index + " Array: " + array);
    });


    //Using Map function.
    arr.map((element, index, array) => {
        console.log("element: " + element + " Index: " + index + " Array: " + array);
    });
}

const anon = function printpretty(element) {
    console.log(element + " " + ":");
}

printArr(arr);


//window setTimeOut.
window.setTimeout(e => {
    console.log("hello");
}, 5000);


//setTimeout Using function.
window.setTimeout(timeoutFunction, 5000);

function timeoutFunction() {
    console.log("Running");
}

