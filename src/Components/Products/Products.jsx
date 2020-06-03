import React, { useState } from 'react'
import Product from './Product'


//this component Products has the filter and the div to pass in App.js

const Products = (props) => {
    return (
        <>

            <div className="price-filter">

                <select id="price" className="form-control" onChange={props.filter}>
                    <option value="Price">Price</option>
                    <option value="LowestToHighest">Lowest to Highest</option>
                    <option value="HighestToLowest">Highest to Lowest</option>
                </select>

            </div>


            <div className="grid-container">
                <Product products={props.productS} />    {/*return the product component with the json data */}
            </div>
        </>
    )
}
export default Products