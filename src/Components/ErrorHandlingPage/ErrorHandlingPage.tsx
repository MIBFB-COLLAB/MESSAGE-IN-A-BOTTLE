import './ErrorHandlingPage.css';
import React from "react"
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'


const ErrorHandlingPage = () => {
  return (
    <div className="error-page">
      <p className="error-message">Whoops, something went wrong!</p>
      <Link to="/">
        <Button variant="outlined">TAKE ME HOME</Button>
      </Link>
    </div>
  )
};

export default ErrorHandlingPage;