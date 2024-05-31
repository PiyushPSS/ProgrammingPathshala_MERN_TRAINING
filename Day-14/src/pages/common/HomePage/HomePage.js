import NavBar from "../navbar/navBar";

import "./homePage.css";

const homepage = () => {
    return (
        <div>
            <NavBar />
            <div className="home-page-container">
                <h1>Home Page</h1>
                <p>Welcome to the home page</p>
            </div>
        </div>
    )
}

export default homepage;