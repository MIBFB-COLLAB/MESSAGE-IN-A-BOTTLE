import './HomePage.css';
import React from "react" 
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import UserInstructions from '../UserInstructions/UserInstructions';

const HomePage = () => {
    return (
        <section className='Home-page'>
            <Header/>
            <NavBar/>
            <UserInstructions/>
        </section>
    )
}

export default HomePage