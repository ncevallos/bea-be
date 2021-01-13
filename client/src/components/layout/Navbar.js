import React from 'react'
import logo from '../../img/bea-logo.png';
import wave from '../../img/dashboard-navbarwave.jpg';
import meditateIconLarge from '../../img/meditate-icon-large.svg';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return ( 
//         <nav className="navbar navbar-expand-lg">
//              <img
//             src={logo}
//             alt='Bea'
//             /> 
//              <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0"> 
//         {/* <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//                 <Link className="nav-link" to='Dashboard' >Help Center</Link>
//             </li>
//             </ul>  */}
//                 </div>
//             <div className="mx-auto my-2 order-0 order-md-1 position-relative notop">
//         <img src={wave} 
//             alt='Bea'/>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
//         <span className="navbar-toggler-icon"></span>
//     </button>
// </div>
//             <div className="navbar-collapse w-100 dual-collapse2 order-2 order-md-2">
//         <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//                 <Link className="nav-link" to='/Helpcenter' >Help Center</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to='/Settings'>Settings</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to='/'>...</Link>
//             </li>
//         </ul>
//     </div>

//          </nav>
//Anders' layout below
        <nav className="fixed w-screen top-0 flex-shrink-0 bg-beaPurple z-40">
        <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

            <div className="flex items-center mr-9">
            <div className="flex-shrink-0 px-4 lg:px-0">
                <img className="h-6 w-auto" src={logo} alt="Workflow" />
            </div>
            </div>

            <div className="flex flex-col items-center justify-end h-full -ml-24 lg:ml-32 xl:ml-96 bg-arc bg-contain bg-no-repeat bg-bottom w-72 py-0">
            <img src={meditateIconLarge} className="w-8" alt="Meditate"/>
            </div>

            <div className="flex xl:hidden">

            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
            </div>

            <div className="hidden xl:block">
            <div className="flex items-center justify-end">
                <div className="flex">
                <Link to='/' className="px-8 py-2 rounded-md text-sm font-bold tracking-wide text-white hover:text-white">Help Center</Link>
                <Link to='/' className="px-8 py-2 rounded-md text-sm font-bold tracking-wide text-white hover:text-white">Settings</Link>
                </div>

                <div className="ml-4 relative flex-shrink-0">
                <div>
                    <button className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>

                    <svg width="20px" height="4px" viewBox="0 0 20 4" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Designs-for-Development" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Meditate-Landing-(Paid-Member---recent)" transform="translate(-1383.000000, -31.000000)">
                                <path d="M0,-1 L1440,-1 L1440,66 C1174.88262,66 1016.78219,66 965.698713,66 C889.073495,66 870.259441,23.70292 816,23.70292 C761.740559,23.70292 748.575215,66 653.741049,66 C590.518272,66 372.271256,66 -1,66 L0,-1 Z" id="header" fill="#AD79E2"></path>
                                <g id="more" transform="translate(1383.000000, 31.000000)" fill="#FFFFFF">
                                    <circle id="Oval" cx="2" cy="2" r="2"></circle>
                                    <circle id="Oval-Copy" cx="10" cy="2" r="2"></circle>
                                    <circle id="Oval-Copy-2" cx="18" cy="2" r="2"></circle>
                                </g>
                            </g>
                        </g>
                    </svg>


                    </button>
                </div>

                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View Profile</Link>
                    <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</Link>
                    <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</Link>
                </div> 

                </div>
            </div>
            </div>
        </div>
        </div>


        <div className="hidden lg:hidden">
        <div className="px-2 pt-2 pb-3">
            <Link to='/' className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800">Dashboard</Link>
            <Link to='/' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Support</Link>
        </div>
        <div className="pt-4 pb-3 border-t border-indigo-800">
            <div className="px-2">
            <Link to='/' className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Your Profile</Link>
            <Link to='/' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Settings</Link>
            <Link to='/' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign out</Link>
            </div>
        </div>
        </div>
        </nav>
 
    )
}

export default NavBar;