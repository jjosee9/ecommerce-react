import React from 'react'


// this is for my card(product divs)
const Product = (props) => {

    return (
        <>                                      {/*.map is an array method, */}
            {props.products.map((product) => (    //product is from product file.jsx returning data
                <div key={product.id} className="cards">
                    <div >
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