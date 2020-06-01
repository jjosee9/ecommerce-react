
import React from 'react'
import { Link, withRouter } from 'react-router-dom' 

const navBar = () => {
    return (
        <div>
        <nav id="navbar">
        <h1 class="logo">J's Jacketss</h1>
          <ul>
            <li>
              <Link to="/home">Home</Link>  
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