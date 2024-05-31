const NavBar = () => {
    return (
        <div className='header-parent-container'>

            <div className='left'>
                <a href="./home">Home</a>
                <a href="./image-generator">Image Generator</a>
                <a href="./contactUs">Contact Us</a>
            </div>
            <div className='right'>
                right
            </div>
        </div>
    )
}

export default NavBar;