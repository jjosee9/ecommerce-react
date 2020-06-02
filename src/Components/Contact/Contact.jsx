
import React, { useState } from 'react'


const Contact = () => {
    // const [count, setCount] = useState("default");
    return (
        <section id="contact-form" >
            <div className="container">
                <h1 className="L-heading"><span class="text-primary">Contact</span> Us</h1>
                <p>Please fill out form below to contact us</p>
                <form action="destination.php">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email"  />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
            
            {/* <p>{count}</p> */}
            {/* <button style={{width: 200}} onClick={this.changeParagraph}>click</button>
        <button style={{width: 200}} onClick={this.changeParagraphBack}>click</button> */}
            
        </section>
    )
}
export default Contact