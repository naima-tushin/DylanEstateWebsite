import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Pages/Navbar';

const Root = () => {
    return (
        <div className='bg-[#122B49]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;