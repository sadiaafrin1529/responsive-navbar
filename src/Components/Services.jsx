import React from 'react';
import { Link } from 'react-router-dom';
// import '../Components/Services.css'

const Services = () => {
  return (
    <div>
      <div className='sidebar'>
      <div className="logoo">
        <ul className='menu'>
          <li className='active'>
            <Link className='link'><i class="fas fa-tachometer-alt"></i></Link>
            <span>Dashboard</span>
          </li>
          <li>
            <Link className='link'><i class="fas fa-user"></i></Link>
            <span>Profile</span>
          </li>
          <li>
            <Link className='link'><i class="fas fa-chart-bar"></i></Link>
            <span>Statistics</span>
          </li>
          <li>
            <Link className='link'><i class="fas fa-briefcase"></i></Link>
            <span>Careers</span>
          </li>
          <li>
            <Link className='link'><i class="fas fa-question-circle"></i></Link>
            <span>FAQ</span>
          </li>
          <li>
            <Link className='link'><i class="fas fa-star"></i></Link>
            <span>Testimonials</span>
          </li>
          <li>
            <Link className='link'><i class="fas fa-cog"></i></Link>
            <span>Settings</span>
          </li>
          <li className='logout'>
            <Link className='link'><i class="fas fa-sign-out-alt"></i></Link>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>



    <div className='main-content'>
      <div className='header-wrapper'>
<div className='header-title'>
<span>Primary</span>
<h2>Dashboard</h2>
</div>
      </div>
      
    </div>
    </div>
  );
};

export default Services;