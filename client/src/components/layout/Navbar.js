import React from 'react'
import logo from '../../img/bea-logo.png';
import wave from '../../img/dashboard-navbarwave.jpg';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg">
             <img
            src={logo}
            alt='Bea'
            /> 
             <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0"> 
        {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to='Dashboard' >Help Center</Link>
            </li>
            </ul>  */}
                </div>
            <div className="mx-auto my-2 order-0 order-md-1 position-relative notop">
        <img src={wave} 
            alt='Bea'/>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        <span className="navbar-toggler-icon"></span>
    </button>
</div>
            <div className="navbar-collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to='/Helpcenter' >Help Center</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/Settings'>Settings</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/'>...</Link>
            </li>
        </ul>
    </div>

         </nav>
 
    )
}

export default NavBar;