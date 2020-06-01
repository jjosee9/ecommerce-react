import React, {useState} from 'react'
import Product from './Product'
import Filter from './Filter'
// import Filter from "./Filter/Filter"

const Products = (props) => {
    const [count, setCount] = useState("");
    const filter = () => {
        const hello = document.getElementById("hey")
        var value = hello.options[hello.selectedIndex].value;
        setCount(value)
        if (value === "LowestToHighest") {

            props.products.sort(function(a, b){return a.Price-b.Price});
       
        }
        if (value === "HighestToLowest") {
            props.products.sort(function(a, b){return b.Price-a.Price});


            }
    }

    console.log(count)
    return (
        <>
        <h1>Products</h1>
        <div className="row">
       <div className="col-md=4">
         products found
       </div>
       <div className="col-md=4">
           <label >
             <select id="hey" className="form-control" onChange={() => filter()}
            >
                 <option value="">Select</option>
                 <option value="LowestToHighest">Lowest to Highest</option>
                 <option value="HighestToLowest">Highest to Lowest</option>
            </select>  
           </label>
       </div>
       <div className="col-md=4"></div>

   </div>
        {/* <Filter size={this.state.size} sort={this.state.sort} handlrChangeSize={this.handlrChangeSize}
        handleChangeSort={this.handleChangeSort} count={this.state.filteredProducts.lenght} /> */}
        <hr/>
      
        <div className="grid-container">
            <Product products={props.products}/>
        </div>
        </>
    )
}
export default Products