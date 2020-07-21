import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products'
import products from './products.json'
import Footer from './Components/Footer/Footer';
import { Switch, Route, BrowserRouter } from "react-router-dom";
//route renders a component based on the url
// switch stops the process of rendering all the route components at the same time /, add link to help


class App extends React.Component {
  state = {
    PRoducts: products.productss,  //this for the products route using state
  };

  filter = () => {
    const price = document.getElementById("price")
    const value = price.options[price.selectedIndex].value;
    // Original state of products
    let productsArray = this.state.PRoducts

    if (value === "LowestToHighest") {
      // setting original products to new filtered products
      productsArray = productsArray.sort(function (a, b) {
        return a.Price - b.Price
      });
    }

    if (value === "HighestToLowest") {
      // setting original products to new filtered products
      productsArray = productsArray.sort(function (a, b) {
        return b.Price - a.Price
      });
    }

    // Setting original products state to new filtered products so that page can
    // showcase new filtered products 
    this.setState({
      PRoducts: productsArray
    })
  }
  render() {

    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Switch>   {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Route path="/" exact><Home /></Route>
            <Route path="/products"  ><Products productS={this.state.PRoducts} filter={this.filter} /></Route> {/*does the same as line after */}
            <Route path="/contact"><Contact /></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;


//JSX files is an HTML-like syntax that you can use with React to (theoretically) make it easier and more intuitive to create React components.