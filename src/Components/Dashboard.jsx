import React, { useState } from 'react';
import '../Components/Dashboard.css';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
const Dashboard = () => {
    const [activeMenu, setActiveMenu]= useState(false)
    return (
        <div style={{position:"relative"}}>
        <Topbar setActiveMenu={setActiveMenu} 
        activeMenu={activeMenu}/>
        <div className={activeMenu ? "dashboard  ActiveMobileMenu ": "dashboard"}> 
        
            <div >
                <h3>Dashboard</h3>
                <div>
                    <ul  className='dashboard-menu'>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                        <li >
                            <Link className='dashboard-link'>Home</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;