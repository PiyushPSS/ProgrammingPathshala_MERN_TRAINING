//This removes a particular child of it.
// const rem = document.getElementsByTagName('div');
// const child = document.getElementById('pid');
// rem[0].removeChild(pid);



//This removes all the childs of it.
// rem[0].remove();



// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

// const rem = document.querySelector('div');
// rem.remove();



// A string containing one or more selectors to match against. This string must be a valid CSS selector string; if it's not, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more information about using selectors to identify elements. Multiple selectors may be specified by separating them using commas.



//we can select any element using nth-child.
// document.querySelector('div').removeChild(document.querySelector('p:nth-of-type(2)'));



//Opens a new window.
// window.open("https://www.google.com");



//Events in Javascript.
function getInfo() {
    //append adds the text at the end of the element.
    // document.querySelector('p').append(" Changed");

    //prepend adds the text at the beginning of the element.
    // document.querySelector('p').prepend("Prepend is used ");

    const but = document.querySelector("button");
    if(but.style.backgroundColor == "red") {
        but.style.backgroundColor = "white";
        but.innerText = "White";
    } else {
        document.querySelector('button').style.backgroundColor = "red";
        but.innerText = "Red";
    }
}




