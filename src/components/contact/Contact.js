import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = e => {
        e.preventDefault()
        emailjs
      .sendForm(
        "service_hs3uxo8",
        "template_byzaeta",
        formRef.current,
        "user_GmdLu8IJM2Va4hoA1Wo5v"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
    }

    return (
        <div className='c'>
            <div className='c-bg'>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Contact</h1>
                </div>
                <div className='c-right'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && '#333'}} rows="5" placeholder="Message" name="message" />
                        <button className='c-button'>Submit</button>
                        { done && <p>Thanks for contacting</p> }
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact