import './StoriesContainer.css';
import React, { useEffect, useState } from "react";
import StoryCard from "../StoryCard/StoryCard";

const StoriesContainer = ({ longitude, latitude }) => {
  const [currentStories, setCurrentStories] = useState([
    {
      "id": 1,
      "type": "story",
      "attributes": {
        "title": "my cool story",
        "message": "This one time I saw a bird",
        "latitude": 13.201,
        "longitude": 9.2673,
        "distance_in_miles": 1.2
        }
      },
      {
      "id": 2,
      "type": "another story",
      "attributes": {
        "title": "my cool second story",
        "message": "This one time I saw another bird",
        "latitude": 13.201,
        "longitude": 9.2673,
        "distance_in_miles": 1.5
        }
      }
  ])

  // useEffect(() => {
  //   run fetch call of current location using longitude and latitude props
  //   set state of currentStories
  // }, [])

  const storyCards = currentStories.map((story) => {
    return (
      <StoryCard
        // key={uuid}
        title={story.atrributes.title}
        distance={story.attributes.distance_in_miles}
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
