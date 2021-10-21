import './ErrorHandlingPage.css';
import React from "react"

const ErrorHandlingPage = ({ errorMessage }) => {
  console.log(errorMessage)
  return (
    <div className="error-page">
      <p>{errorMessage}</p>
    </div>
  )
};

export default ErrorHandlingPage;