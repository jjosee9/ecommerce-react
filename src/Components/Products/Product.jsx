import React from 'react'



const Product = (props) => {
    console.log("hello", props.products)
    return (
        <>
            {props.products.map((product) => (
                <div >
                <div key={product.name} >
                    <img src={product.image} className="images" />
                    <p> {product.name}</p>
                    <p>Price: ${product.Price}</p>
                    <p>Description: {product.description}</p>
                </div>
                </div>
            ))}
        </>
    )
}
export default Product