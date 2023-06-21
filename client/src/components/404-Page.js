import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NotFoundPage = () => {
  return (
        <div id="not-found">
            <div className="not-found">
                <div className="not-found-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, Page not found!</h2>
                <p>The page you are looking for might have been removed or its name is changed or is temporarily unavailable.</p>
                <Link to='/'>Back To Homepage</Link>
            </div>
        </div>
  )
}

export default NotFoundPage