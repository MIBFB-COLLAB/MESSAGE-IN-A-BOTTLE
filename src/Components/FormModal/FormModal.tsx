import { createPortal } from 'react-dom';
import { useState } from 'react';
import ReactDom from 'react-dom';
import React from 'react';
import './FormModal.css';
import { PracticeForm } from '../NewStoryForm/PracticeForm';
import StoryEdit from '../StoryEdit/StoryEdit';

type Props = {
  show: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({show, setter}) => {
  const [newStory, setNewStory] = useState(null);

  return ReactDom.createPortal(
    <>
      {show && (
        <div className='why' onClick={() => setter(!show)}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            {!newStory && <PracticeForm newStory={newStory} setNewStory={setNewStory}/>}
            {newStory && <StoryEdit newStory={newStory} show={show} showSetter={setter} storySetter={setNewStory}   />}
            <button onClick={() => setter(!show)}>Close Modal</button>
          </div>
        </div>
      )}
    </>,
    document.body
  )
}

export default Modal
