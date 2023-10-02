import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            {/* <h5>This is footer</h5> */}
        </div>
    );
};

export default Main;