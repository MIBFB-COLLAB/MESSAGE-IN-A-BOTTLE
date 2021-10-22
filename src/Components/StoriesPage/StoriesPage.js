import './StoriesPage.css';
import React, { useEffect } from "react"
import StoriesContainer from "../StoriesContainer/StoriesContainer";
import Header from '../Header/Header';
import UserInstructions from '../UserInstructions/UserInstructions';

const StoriesPage = ({ longitude, latitude }) => {
  return(
    <main className="stories-page">
      <Header />
      <UserInstructions />
      <StoriesContainer longitude={longitude} latitude={latitude}/>
    </main>
  )
}

export default StoriesPage;                                                                              