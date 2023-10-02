import React, { useState } from 'react';
// import '../Components/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [activeHam,setActiveHam] = useState(false);
    const menuBar =
        <>
            <li>Home</li>
            <li>About</li>
            <li><Link className='link' style={{textDecoration:"none",color:"aliceblue"}} to="/dashboard">Dashboard</Link></li>
            <li>Contact</li>
        </>
    return (
        <div className='navbar-container'>
            <nav >
                <div className='nav-container'>
                    {/* <h1 className='logo'>Nav Brand</h1> */}
                    <div>
                        <ul className='nav-list'>
                            {menuBar}
                        </ul>
                    </div>
                    
                        <button className={ activeHam ?'hamburger active-hamburger' : 'hamburger'}
                        onClick={()=>setActiveHam(!activeHam)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                    
                </div>

            </nav>
            {activeHam && <div className="nav-dropdown">
                {menuBar}
            </div>}
        </div>
    );
};

export default Navbar;