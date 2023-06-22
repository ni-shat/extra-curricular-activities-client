import React from 'react';
import err from '../../assets/err.svg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-start bg-white'>
            <img className='h-full -mt-16 relative' src={err} alt="" />
            <Link to='/' className='absolute top-[47%] py-4 uppercase mt-64 px-14 rounded-full bg-transparent text-xl border-2 
            bg-primary text-black font-bold drop-shadow-xl shadow-xl '>Go back to home</Link>
        </div>
    );
};

export default Error;