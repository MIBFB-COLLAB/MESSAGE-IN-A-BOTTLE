import './StoriesPage.css';
import React, { useEffect } from "react"
import StoriesContainer from "../StoriesContainer/StoriesContainer";
import Header from '../Header/Header';
import UserInstructions from '../UserInstructions/UserInstructions';

const StoriesPage = () => {
  return(
    <main className="stories-page">
      <Header />
      <UserInstructions />
      <StoriesContainer/>
    </main>
  )
}

export default StoriesPage;                                                                              