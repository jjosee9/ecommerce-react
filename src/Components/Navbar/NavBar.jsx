
import React from 'react'
import { Link, withRouter } from 'react-router-dom' 

const navBar = () => {
    return (
        <div>
        <nav id="navbar">
        <h1 class="logo">J's Jackets</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>  
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}
export default withRouter(navBar)