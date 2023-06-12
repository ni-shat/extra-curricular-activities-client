import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-white'>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;