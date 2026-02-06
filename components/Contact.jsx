import React from 'react'
import { Form } from 'react-router-dom'

const Contact = () => {
    
    const handleclick = (formData)=>{
        console.log(formData)
        const data =  Object.fromEntries(formData.entries())
            console.log(data)
    }
    
  return (
    <section className='section-contact' >
        <h2 className='container-title' >Contact Us</h2>

        <div className='contact-wrapper container' >
            <form action={handleclick}>
            <input type="text" className='form-control' autoFocus='off' autoComplete='off ' placeholder='enter your name' required  name="username" />
            <input type="email" className='form-control' autoComplete='off' placeholder='enter your e-mail' required  name="email" />
            <textarea name="message" spellCheck='false' placeholder='enter tour message' rows={'10'} className='form-control' id=""></textarea>

            <button value="send" type='submit' style={{textAlign:"center"}} >Send</button>
        </form>
        </div>
    </section>
  )
}

export default Contact