import { createPortal } from 'react-dom';
import ReactDom from 'react-dom';
import React from 'react'
import './Modal.css'

type Props = {
  show: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({show, setter, children}) => {
  return ReactDom.createPortal(
    <>
     {show && (
       <div className='why' onClick={() => setter(!show)}>
         <div className='modal' onClick={(e) => e.stopPropagation()}>
           {children}
           <button onClick={() => setter(!show)}>Close Modal</button>
         </div>
       </div>
     )}
    </>,
    document.body
  ) 
}

export default Modal
