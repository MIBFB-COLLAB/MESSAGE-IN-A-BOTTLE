import './StoryEdit.css';
import {useState} from "react"

const StoryEdit = ({newStory}) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    console.log(newStory)
    return (
        <form className='edit-story-form'>
            <p>
                Your story successfully been added to Message in a Bottle.
                <br/>
                Please take a moment to review, edit or remove your story.
                <br/>
                Once you have exited this screen, you are unable to make any further changes.
            </p>
            <input
        type="text"
        className="title"
        placeholder="title"
        value={title}
        required
        // onChange={(e) => setTitle(e.target.value)}
      />
            <textarea
                type="text"
                className="message"
                placeholder="type your story here"
                value="message"
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