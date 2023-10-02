import React from 'react';
import '../Components/Dashboard.css';
import { Link } from 'react-router-dom';
const Topbar = ({activeMenu, setActiveMenu}) => {
    console.log(activeMenu)
    return (
       <div className='navbar'>
         <div className='container'>
            <div className='navbar-container'>
                <h3 className='logo'>Navbar</h3>
                <div className='website-navbar'>
                    <ul>
                        <li>
                            <Link className='link'>Home</Link>
                        </li>
                        <li>
                            <Link className='link'>Home</Link>
                        </li>
                        <li>
                            <Link className='link'>Home</Link>
                        </li>
                        <li>
                            <Link className='link'>Home</Link>
                        </li>
                    </ul>

                </div>
                <i onClick={()=>setActiveMenu(!activeMenu)} class="fa-solid fa-bars icon"></i>
            </div>

        </div>
       </div>
    );
};

export default Topbar;