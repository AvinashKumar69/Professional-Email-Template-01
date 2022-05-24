// import React, { useRef } from 'react';
// import emailjs from 'emailjs';

// const ContactUs = () => {

//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_2epned2', 'template_46wdqow', form.current, 'ivLw-nnOrWGcfAsTS')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//         form.current.reset()
//     };

//     return (
//         <div className='h-screen'
//             style={{ background: '#434750' }}
//             ref={form} onSubmit={sendEmail}
//         >
//             <div className='w-1/2 bg-white border-2 border-gray-300 sm:w-2/3 xs:w-full mx-auto'>
//                 <form className=''>
//                     <div className=''>
//                         <label className=''>Name</label>
//                         <input className='' name='name' type='text' placeholder='Enter Your Name' required />
//                     </div>
//                     <div className=''>
//                         <label className=''>Phone Number</label>
//                         <input className='' name='number' type='tel' placeholder='Enter Your Phone Number' required />
//                     </div>
//                     <div className=''>
//                         <label className=''>Email Id</label>
//                         <input className='' name='email' type='email' placeholder='Enter Your Email Id' required />
//                     </div>
//                     <div className=''>
//                         <label className=''>Email Id</label>
//                         <textarea className='' name='message' type='message' placeholder='Enter Your Message/ Feedback' rows='3' required />
//                     </div>
//                     <button type='submit' className=''>
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default ContactUs;