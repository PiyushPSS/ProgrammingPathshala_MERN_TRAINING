function changeDocument() {
    let a = new String("Hello");
    let b = "Hello";

    if (a == b) {
        console.log("YES");
    }

    if (a === b) {
        console.log("YES");
    } else {
        console.log("NO");
    }

    document.getElementById("hclass").innerHTML = "Heading Changed";
}

// changeDocument();

function json_example() {
    const obj = {
        "Name": "Piyush",
        "Age": "21"
    }

    document.write(JSON.stringify(obj));


}

// json_example();

//in const variable, the variable cannot be reassigned because it is constant but we can change its value.

function checkIfObject(obj) {
    if(obj == null || obj == undefined) {
        return false;
    }

    if (Array.isArray(obj)) {
        return false;
    } else {
        if (typeof (obj) == "object") {
            return true;
        }
        return false;
    }
}

// console.log(checkIfObject({"1": "Piyush"}))

// console.log(checkIfObject(null));

//Null is neither object nor a type.

function forloop() {
    const arr = [1,2,3,4];

    const obj = {
        "Name": "foo",
        "Age": 120
    }

    for(i = 0 ; i < arr.length; i++) {
        console.log(arr[i]);
    }

    //This won't work.
    // for(i  = 0 ; i < 2; i++) { 
    //     console.log(obj[i]);
    // }

    for(var a in obj) {
        console.log(obj[a]);
    }

    //it is iterable using "for in" function.


    // for(var a of obj) {
    //     console.log(obj[a]);
    // }

    //it is not iterable using "for of" function.
}

// forloop();

//DOM is an API. It is a programming interface for web documents. It represents the structure of the document and allows us to change the structure of the document.

// console.log(window);

//Array is a proper class, while Iterable is its property.

// const res = document.getElementById('hclass');
// console.log(res);

//Selectors - tag, class, id, querySelector, querySelectorAll.

// const res = document.getElementsByTagName('p');
// res[0].innerHTML = "Hello";
// res[1].innerHTML = "<h1>World</h1>";
// console.log(res);

//Creating new element using JavaScript.
const NewElement = document.createElement('h1');
NewElement.id = "byjs";
NewElement.innerHTML = "Hello";
// document.body.appendChild(NewElement);

document.getElementById('para').appendChild(NewElement);

// document.getElementsByTagName('p')[0].appendChild(NewElement);

const removeElement = document.getElementById('byjs');
removeElement.remove();

// DEEP COPY AND SHALLOW COPY.

