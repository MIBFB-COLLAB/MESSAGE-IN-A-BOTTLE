import './StoriesPage.css';
import React, { useEffect } from "react"
import StoriesContainer from "../StoriesContainer/StoriesContainer";

const StoriesPage = () => {
  return(
    <div>
      <h1>Stories Page Header component goes here</h1>
      <h2>User Instructions component goes here</h2>
      <StoriesContainer/>
    </div>
  )
}

export default StoriesPage;                                                                              