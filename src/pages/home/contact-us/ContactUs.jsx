import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaMobile } from 'react-icons/fa';
import call from '../../../assets/call.png'
import mail2 from '../../../assets/mail-2.png'
import bgPng from '../../../assets/about-png.png'
import drums from '../../../assets/drums.png'

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8jc0m47', 'template_55juox9', form.current, 'SmZriU9JvFFRGcplG')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your message is sent!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='my-8 w-[90%] mx-auto flex  gap-6 justify-between'>
            <div className='relative'>
                <div>
                    <h3 className='font-monoton opacity-10 text-gray-500 uppercase whitespace-nowrap'>Contact Us</h3>
                    <h6 className='text-4xl poppin font-semibold uppercase -mt-4'>GET IN TOUCH</h6>
                    <p className='text-base poppin text-gray-400 mt-3 font-light'>Have questions or want to collaborate? We're excited to hear from you! </p>
                </div>
                <div>
                    <p className='text-xl poppin font-medium uppercase mt-6 mb-5'>Bangladesh</p>
                    <div className='flex gap-3 my-3 text-gray-500 font-light poppin'>
                        <img className='w-4 h-4' src={call} alt="" />
                        <p>+8801782837873</p>
                    </div>
                    <div className='flex gap-3 text-gray-500 font-light poppin'>
                        <img className='w-4 h-4' src={mail2} alt="" />
                        <p>talento@info.com</p>
                    </div>
                </div>
                <div className='absolute opacity-80 -bottom-6 right-64'>
                    <img className='w-[60%]' src={bgPng} alt="" />
                </div>
                <div className='absolute opacity-0 -bottom-6 right-40 opacity-'>
                    <img className='w-[50%]' src={drums} alt="" />
                </div>
            </div>


            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='w-2/4 mt-16'>
                <form ref={form} onSubmit={sendEmail} className='flex text-black flex-col md:w-full mx-auto'>
                    <div className='flex gap-4'>
                        <input className='border border-gray-300 px-4 py-4 text-black mb-3.5 md:mb-4 w-full md:w-full mt-1' type="text" name="user_name" placeholder='Full Name' />
                        <input className='border border-gray-300 px-4 py-4 text-black mb-3.5 md:mb-4 w-full md:w-full mt-1' type="email" name="user_email" placeholder='Enter Address' />
                    </div>
                    <textarea rows="6" className='border border-gray-300 px-4 py-4 text-black mb-3.5 md:mb-4 w-full md:w-full mt-1' name="message" placeholder='Write a Message' />
                    <input className=' px-20 py-3 w-fit hover:bg-opacity-5 transition-all duration-300   hover:text-white mb-3.5 md:mb-4 hover:cursor-pointer md:mt-1 mt-2 bg-red-400 font-semibold text-white uppercase' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;