import './StoryEdit.css';
import React from "react"

const StoryEdit = () => {

    return (
        <form className='edit-story-form'>
            <p>
                Your story successfully been added to Message in a Bottle.
                <br/>
                Please take a moment to review, edit or remove your story.
                <br/>
                Once you have exited this screen, you are unable to make any further changes.
            </p>
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