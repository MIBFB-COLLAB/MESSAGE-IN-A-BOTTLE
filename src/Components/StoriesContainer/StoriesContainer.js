import './StoriesContainer.css';
import React, { useEffect } from "react"

const StoriesContainer = (props) => {
  return (
    <div>
      <h2>These are the Story Cards</h2>
      <section>
        { storyCards }
      </section>
    </div>
  )
}

export default StoriesContainer;
