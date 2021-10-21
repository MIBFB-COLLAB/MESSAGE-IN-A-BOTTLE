import './StoryEdit.css';
import {useState} from "react"
import { editNewStory, deleteStory } from '../../apiCalls';

const StoryEdit = ({newStory}) => {
    const [title, setTitle] = useState(newStory.data.title);
    const [message, setMessage] = useState(newStory.data.message);
    const latitude = newStory.data.latitude
    const longitude = newStory.data.longitude
    const id = newStory.data.id
    const [left, setLeft] = useState(1000);

    const setCharacterLimit = (e) => {
        let input = e.target.value;
        setMessage(e.target.value)
        setLeft(1000 - input.length);
    }

    const submitMessage = () => {
        const newStory = {
            title,
            message,
            longitude,
            latitude,
        };
        editNewStory(newStory,id).then((data) => console.log(data));
    };
    
    const deleteNewStory = () => {
        deleteStory(id).then((data) => console.log(data))
    }
    
    return (
        <form className='edit-story-form'>
            <p>
                Your story successfully been added to Message in a Bottle.
                <br/>
                Please take a moment to review, edit or remove your story.
                <br/>
                Once you have exited this screen, you are unable to make any further changes.
            </p>
            Title:
            <input
        type="text"
        className="title"
        name="title"
        placeholder="title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
            />
            Message:
            <textarea
                type="text"
                name="text"
                className="message"
                placeholder="type your story here"
                maxLength={left}
                value={message}
                required
                onChange={(e) => setCharacterLimit(e)}
            />
            <h2>{left} characters left</h2>
            <button
                type="submit"
                className="take-home"
            >
                All done! Take me Home
            </button>
            <button
                type="submit"
                className="story-submit-button"
                onClick={() => submitMessage()}
            >
                Submit my Edits
            </button>
            <button
                type="submit"
                className="story-delete-button"
                onClick={() => deleteNewStory()}
            >
                Delete Story
            </button>
        </form>
    )
}

export default StoryEdit;