import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const NotFoundPage = () => {
    return (
        <React.Fragment>
           <Header/>
           Page not found. Got to <Link to='/dashboard'>Home page</Link> 
        </React.Fragment>
    )
}

export default NotFoundPage
