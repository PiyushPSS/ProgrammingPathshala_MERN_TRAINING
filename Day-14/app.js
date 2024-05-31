import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./src/pages/common/navbar/navBar";
import homepage from "./src/pages/common/HomePage/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter();

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = () => {
    return <homepage />;
};

root.render(<App />);