import {useState} from 'react'
import './NavBar.css'

const NavBar = () => {
    const [newStory, setNewStory] = useState(false)
    return (
        <nav className='Nav-bar'> 
        <button className='story-submit' onClick = {(e) => setNewStory(true)}>Submit a story</button>
        </nav>
    )
    
}

export default NavBar;