import './HomePage.css';
import React from "react" 
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
const HomePage = () => {
    return (
        <section className='HomePage'>
            <Header/>
            <NavBar/>
        </section>
    )
}

export default HomePage