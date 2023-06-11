import React from 'react';
import logo from '../../../assets/logo2x.png'

const Footer = () => {
    return (
        <>
            <div className="footer font-roboto flex gap-24 py-24 px-40 bg-[#1B1B1B] text-white">
                <div className='w-1/4 space-y-3'>
                    <img className='w-[35%] -mt-2' src={logo} alt="" />
                    <p className='leading-7'>Welcome to SongBook, where studying music and sharing our knowledge comes foremost.</p>
                </div>
                <div className='w-1/4 space-y-3'>
                    <span className="text-white text-xl font-roboto-semibold">WORKING HOURS</span>
                    <p className="link link-hover">Monday: 10AM - 9PM</p>
                    <p className="link link-hover">Tuesday: 10AM - 9PM</p>
                    <p className="link link-hover">Wednesday: 10AM - 9PM</p>
                    <p className="link link-hover">Thursday: 10AM - 9PM</p>
                    <p className="link link-hover">Friday: 10AM - 9PM</p>
                    <p className="link link-hover">Saturday: 10AM - 5PM</p>
                    <p className="link link-hover">Sunday: Closed</p>
                </div>
                <div className='w-1/4 space-y-3'>
                    <span className="text-white text-xl font-roboto-semibold">SHORTCUT LINKS</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Teachers</a>
                    <a className="link link-hover">How to apply</a>
                    <a className="link link-hover">Upcoming events</a>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Locations</a>
                </div>
                <div className='w-1/4 space-y-3'>
                    <span className="text-white text-xl font-roboto-semibold">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="footer footer-center p-4 -mt-3 bg-base-300 text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>

        </>
    );
};

export default Footer;