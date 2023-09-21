import { useRef, useState } from 'react';
import { MySubHeader } from "../components/MySubHeader"
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import {  } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



export const Footer = () => {
    const form = useRef();
    const [formUserName, setFormUserName] = useState('')
    const [formUserEmail, setFormUserEmail] = useState('')
    const [formUserMessage, setFormUserMessage] = useState('')

    const notify = () => toast.success('Your message has been sent! I will get back to you ASAP', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cu0f3hf', 'template_uzer46i', form.current, 'QQIQKCJhbm8iZeSbA')

        emailjs.sendForm('service_cu0f3hf', 'template_uzer46i', form.current, 'QQIQKCJhbm8iZeSbA')
        .then((result) => {
            console.log(result.text);
            notify();
            setFormUserName('')
            setFormUserEmail('')
            setFormUserMessage('')

        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="pb-8 my-custom-bg bg-black px-10">
            <MySubHeader title='Get in touch' />

            <div className='flex mb-4 text-purple-900 flex-col md:flex-row container'>
                <div className='flex text-center justify-center w-full pb-4 md:pb-0 md:w-1/3 md:flex-col md:justify-start'>
                    <div className='text-3xl md:mb-4 border-4 border-yellow-500 rounded w-fit aspect-square p-2 md:mx-auto mx-2 bg-yellow-500'>
                        <a href="https://wa.me/+447960545799" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </div>
                    <div className='text-3xl md:mb-4 border-4 border-yellow-500 rounded w-fit aspect-square p-2 mx-2 md:mx-auto bg-yellow-500'>
                        <a href="mailto:shiba.cdeb@gmail.com" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                    <div className='text-3xl border-4 border-yellow-500 rounded w-fit aspect-square p-2 mx-2 md:mx-auto bg-yellow-500'>
                        <a href="https://www.linkedin.com/in/shiba-deb-2099b6105/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>

                <div className='text-left w-full md:w-2/3'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='text-gray-100'>Your name</label>
                        <input type="text" name="user_name" placeholder="You name" className='w-full mb-2 px-1 rounded' value={ formUserName } onChange={ e => setFormUserName(e.target.value) } />
                        <label className='text-gray-100'>Your email</label>
                        <input type="email" name="user_email" className='w-full mb-2 px-1 rounded' placeholder='Your email'  value={ formUserEmail } onChange={ e => setFormUserEmail(e.target.value) } />
                        <label className='text-gray-100'>Your message</label>
                        <textarea name="user_message" placeholder='Your message' className='w-full mb-2 px-1 rounded'  value={ formUserMessage } onChange={ e => setFormUserMessage(e.target.value) } />
                        <input type="submit" value="Send" className='bg-red-900 px-4 py-2 rounded text-gray-100 hover:cursor-pointer' />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}