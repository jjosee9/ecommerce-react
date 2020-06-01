
import React, {useState} from 'react'


const Contact = () => {
    const [count, setCount] = useState("default");
    return (
       <section id="contact-form" >
    <div class="container">
        <h1 class="L-heading"><span class="text-primary">Contact</span> Us</h1>
        <p>Please fill out form below to contact us</p>
        <form action="destination.php">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name"/>
        </div> 
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" required/>
        </div>    
        <div class="form-group">
            <label for="message">Message</label>
            <textarea  name="message" id="message"></textarea>
        </div>  
        <button type="submit" class="btn">Submit</button>  
        </form>
    </div>
    <p>{count}</p>
        {/* <button style={{width: 200}} onClick={this.changeParagraph}>click</button>
        <button style={{width: 200}} onClick={this.changeParagraphBack}>click</button> */}
              <button onClick={() => setCount("yuh")}>
        Click me
      </button>
    </section>
    )
}
export default Contact