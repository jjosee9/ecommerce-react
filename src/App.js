import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products'
import products from './products.json'
import Footer from './Components/Footer/Footer';
import { Switch, Route,BrowserRouter } from "react-router-dom";
//route renders a component based on the url
// switch stops the process of rendering all the route components at the same time /, add link to help
           

class App extends React.Component {
state = {
      products: products.products,
    };
  render() {
    console.log(this.state)
    return (
      <>
        <BrowserRouter>

          <NavBar />    
          <Switch>  
            <Route path="/home"><Home /></Route> 
            <Route path="/products"  ><Products products={this.state.products}/></Route> {/*does the same as line after*/}
            <Route path="/contact"><Contact /></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
