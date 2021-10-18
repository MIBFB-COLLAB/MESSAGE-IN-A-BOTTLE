import './Header.css';
import {useState} from 'react';
import MicroModal from 'react-micro-modal';
import { NewStoryForm } from '../NewStoryForm/NewStoryForm';
import StoryEdit from '../StoryEdit/StoryEdit';

const Header = () => {
  const [newStory, setNewStory] = useState(null)
  console.log(newStory)
  return (
    <header className="Header">
      <h1> Welcome to Message in a Bottle </h1>
      {!newStory && <MicroModal
        backdrop='static'
        trigger={(open) => (
          <div onClick={open}>
            <button className="story-submit">Submit a story</button>
          </div>
        )}
      > 
      {(close) => {
          return (
            <article>
              <h3>Create Your Message</h3>
              <NewStoryForm setNewStory={setNewStory}/>
            </article>
          );
        }}
      </MicroModal>
      }
      {newStory && 
      <MicroModal
        trigger={(open) => (
          <StoryEdit newstory={newStory}/>
        )}
        >
          {(close) => {
            return(
              <StoryEdit newStory={newStory}/>
            )
          }}
      </MicroModal>
      }
        
    </header>
  );
};

export default Header;
