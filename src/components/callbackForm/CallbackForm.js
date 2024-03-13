import React, { useEffect } from 'react'
import './callbackForm.css'

function CallbackForm() {
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      },[])
  return (
    <>
        <div className='form-section'>
            <h2>Callback Form</h2>
            <form>
                <div className='name-input same-input'>
                    <input type='name' placeholder='Enter Your Name' required/>
                </div>
                <div className='phone-input same-input'>
                    <input type='tel' name='phone' placeholder='Enter Your Phone No.' required />
                </div>
                <div className='email-input same-input'>
                    <input type='email' name='email' placeholder='Enter Your Email' required />
                </div>
                <div className='message-input same-input'>
                    <input type='email' name='email' placeholder='Enter Your Email' required />
                </div>
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default CallbackForm
