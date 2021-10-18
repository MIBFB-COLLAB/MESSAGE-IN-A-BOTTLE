import './StoryEdit.css';
import React from "react"

const StoryEdit = () => {

    return (
        <form className='edit-story-form'>
            <textarea
                type="text"
                className="message"
                placeholder="type your story here"
                value=''
                required
                
            />
            
        </form>
    )
}

export default StoryEdit;