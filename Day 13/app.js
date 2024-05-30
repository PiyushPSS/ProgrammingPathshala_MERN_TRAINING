// const parent = document.getElementById('root');

// const root = ReactDOM.createRoot(parent);

// const heading = React.createElement('h1', {}, "Hello");

// const str = "Hello";

// const heading2 = <h1>{str}</h1>;

// const li1 = React.createElement('li', {}, "Item 1");
// const li2 = React.createElement('li', {}, "Item 2");

// const arr = {li1,li2};



// const list = React.createElement('ul', {}, [li1, li2]);

// root.render(heading);
// root.render(list);

// const heading = <h1>Hello from React!</h1>;
// root.render(heading);


// const ReactDOM = require('react-dom/client');

import ReactDOM from 'react-dom';
import React from 'react';

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const heading = React.createElement('h1', {}, "Working with React!");

root.render(heading);