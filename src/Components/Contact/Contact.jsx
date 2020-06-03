
import React from 'react'


const Contact = () => {
    return (
        <section id="contact-form" >
            <div className="container">
                <h1 className="L-heading">Contact Us</h1>
                <p>Please fill out form below to contact us</p>
                <form action="destination.php">
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label >Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>

        </section>
    )
}
export default Contact