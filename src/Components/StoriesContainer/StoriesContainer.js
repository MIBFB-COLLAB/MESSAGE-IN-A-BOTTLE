import './StoriesContainer.css';
import React, { useEffect } from "react"

const StoriesContainer = ({ longitude, latitude }) => {
  const [currentStories, setCurrentStories] = useState([])

  // useEffect(() => {
  //   run fetch call of current location using longitude and latitude props
  //   set state of currentStories
  // }, [])

  const storyCards = currentStories.map((story) => {
    return (
      <StoryCard
        // key={uuid}
      />
    )
  })

  return (
    <section className="stories-container">
      <h2>These are the Story Cards</h2>
      <div>
        { storyCards }
      </div>
    </section>
  )
}

export default StoriesContainer;
