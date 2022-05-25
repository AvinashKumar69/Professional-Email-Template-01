import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, useToast } from '@chakra-ui/react';

const ContactUs = () => {

    const form = useRef();
    const toast = useToast()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2epned2', 'template_46wdqow', form.current, 'ivLw-nnOrWGcfAsTS')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='h-screen'
            style={{ background: '#434750' }}
        >
            <div className='w-96 bg-white border-2 border-gray-300 rounded-3xl p-5 sm:w-96 xs:w-full mx-auto'>
                <form className='flex flex-col items-center justify-center'
                    ref={form} onSubmit={sendEmail}
                >
                    <div className='flex flex-col items-start justify-center'>
                        <label className='text-gray-500 font-bold'>Name</label>
                        <input className='rounded-lg border-2 border-gray-300 w-80 p-2' name='name' type='text' placeholder='Enter Your Name' required />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <label className='text-gray-500 font-bold'>Phone Number</label>
                        <input className='rounded-lg border-2 border-gray-300 w-80 p-2' name='number' type='tel' placeholder='Enter Your Phone Number' required />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <label className='text-gray-500 font-bold'>Email Id</label>
                        <input className='rounded-lg border-2 border-gray-300 w-80 p-2' name='email' type='email' placeholder='Enter Your Email Id' required />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <label className='text-gray-500 font-bold'>Message</label>
                        <textarea className='rounded-lg border-2 border-gray-300 w-80 p-2' name='message' type='message' placeholder='Enter Your Message/ Feedback' rows='3' required />
                    </div>
                    <button type='submit' className='border-2 border-gray-900 p-2 rounded-lg font-bold mt-2 bg-blue-400 text-white font-serif'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;