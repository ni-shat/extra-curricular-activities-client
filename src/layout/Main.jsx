import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
    return (
        <div className='bg-white'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;