import './Header.css';
import React from "react"



const Header = () => {
    return (
        <header>
            <nav>
                <h1>Message in a bottle</h1>
                <button className='story-submit'>Submit a story</button>
            </nav>
        </header>
    )
}


export default Header;