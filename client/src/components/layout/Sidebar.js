import React from 'react'
import { Link } from 'react-router-dom';
import dashicon from '../../img/dashboard-icon.png';
import meditateicon from '../../img/meditate-icon.png';
import motivateicon from '../../img/motivate-icon.png';
import planicon from '../../img/plan-icon.png';

export const Sidebar = () => {
    return (
        <div className="sidenav">
            <Link className="nav-link" to='/' >
             <img src={dashicon} alt='Dashboard'/>  Dashboard</Link>
            <Link className="nav-link" to='/Plan'>
            <img src={planicon} alt='Plan'/>  Plan</Link>
            <Link className="nav-link" to='/Meditate'>
            <img src={meditateicon} alt='Meditate'/>  Meditate</Link>
            <Link className="nav-link" to='/Motivate'>
            <img src={motivateicon} alt='Motivate'/>  Motivate</Link>
        </div>
    )
}

export default Sidebar;