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
            <button
                type="submit"
                className="take-home"
            >
                All done! Take me Home
            </button>
            <button
                type="submit"
                className="story-submit-button"
            >
                Submit my Edits
            </button>
            <button
                type="submit"
                className="story-delete-button"
            >
                Delete Story
            </button>
        </form>
    )
}

export default StoryEdit;