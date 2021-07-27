import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.svg';
import Popup from 'reactjs-popup';
import wave from '../../img/dashboard-navbarwave.jpg';
import meditateIconLarge from '../../img/meditate-icon-large.svg';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const NavBar = ({auth: {isAuthenticated, loading }, logout}) => {

    const [bgcolor, setBGColor] = useState("#2898ec");
    const location = useLocation();
  
    //a background color is defined depending on the pathname and then below
    //the navbar's background is defined to the bgColor that is defined here
    useEffect(() => {
      if (location.pathname.startsWith('/Plan')) {
        setBGColor("#329CCC");
      } else if (location.pathname.startsWith('/Motivate2')) {
        setBGColor("#E56F06");
      } else if (location.pathname.startsWith('/Motivate')) {
        setBGColor("#AD79E2");
      } else if (location.pathname.startsWith('/Meditate')) {
        setBGColor("#8037CA");
      } else if (location.pathname === '/') {
        setBGColor("#329CCC");
      }  else if (location.pathname === '/Dashboard') {
        setBGColor("#329CCC");
      } else {
        setBGColor("2898ec");
      }
    }, [location]);
    const authLinks = (
        <Popup trigger={<button className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white" id="user-menu" aria-haspopup="true">
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


        </button>} position="bottom right">
        <div className="px-2 pt-2 pb-3">
            <Link to='/' className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800">Dashboard</Link>
            <Link to='/' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Support</Link>
        </div>
        <div className="pt-4 pb-3 border-t border-indigo-800">
            <div className="px-2">
            <Link to='/' className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Your Profile</Link>
            <Link to='/' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Settings</Link>
            {/* <Link to='/' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign out</Link> */}
            <a onClick={logout} href='#!' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign Out</a>
            </div>
        </div>
        </Popup>
        );
        const guestLinks = (
            <Popup trigger={<button className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white" id="user-menu" aria-haspopup="true">
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
    
    
            </button>} position="bottom right">
            <div className="px-2 pt-2 pb-3">
                <Link to='/' className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800">Dashboard</Link>
                <Link to='/' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Support</Link>
                <Link to='/login' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Log In</Link>
                <Link to='/register' className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign Up</Link>
            </div>
            </Popup>
            );
    return ( 
        <nav className="fixed w-screen top-0 flex-shrink-0 backdrop-blur bg-opacity-60 z-40 px-6 " style={{backgroundColor:bgcolor}} >
        {/* <nav className="fixed w-screen top-0 flex-shrink-0 bg-beaPurpleCorrected backdrop-blur bg-opacity-60 z-40 px-6 {bgcolor}" style={{backgroundColor:bgcolor}}> */}
        <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

            <div className="flex items-center mr-9">
            <div className="flex-shrink-0lg:px-0">
                <img className="h-6 w-auto" src={logo} alt="Workflow" />
            </div>
            </div>

            <div className="flex xl:hidden">
            <Popup trigger={<button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>} position="bottom right">
                {/* below here goes code for mobile menu  */}
                <div className="fixed overflow-scroll top-15 -mt-0.5 left-0 w-full h-full py-1 border-t-4 border-beaDarkPurple divide-y divide-beaBorderGrey bg-gray-50 backdrop-blur bg-opacity-60">
                    <div className="space-y-2 py-2">
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5 hover:no-underline" role="menuitem">Help Center</Link>
                    </div>
                    <div className="space-y-2 py-2">
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5 hover:no-underline" role="menuitem">Account Details</Link>
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Manage Subscription</Link>
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Notifications</Link>
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">My Data</Link>
                    </div>
                    <div className="space-y-2 py-2">
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5 hover:no-underline" role="menuitem">About Us</Link>
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Bea Blog</Link>
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Contact Us</Link>
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Privacy Policy</Link>
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Terms &amp; Conditions</Link>
                    </div>
                    <div className="space-y-2 py-2">
                        <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Sign Out</Link>
                    </div>
                    <div className="space-y-2 py-2">
                        <Link to='/' className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">
                            <svg class="w-4 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Facebook icon</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            Facebook
                        </Link>
                        <Link to='/' className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">
                            <svg class="w-4 mr-1.5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                            Instagram
                        </Link>
                        <Link to='/' className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">
                            <svg class="w-4 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitter icon</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                            Twitter
                        </Link>
                        <Link to='/' className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">
                            <svg class="w-4 mr-1.5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest icon</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
                            Pinterest
                        </Link>
                    </div>
                </div>
                    </Popup>

            </div>

            <div className="hidden xl:block">
            <div className="flex items-center justify-end">
                <div className="flex">
                <Link to='/' className="px-8 py-2 rounded-md text-sm font-bold tracking-wide text-white hover:text-white">Help Center</Link>
                <Popup trigger={<div className="px-8 py-2 text-sm font-bold tracking-wide text-white hover:text-white cursor-pointer select-none"> Settings</div>} position="bottom center">
                    <div className="origin-top-right fixed right-4 -mt-1 w-48 py-1 border-t-4 border-beaDarkPurple ring-inset ring-1 ring-beaBorderGrey divide-y divide-beaBorderGrey bg-gray-50 backdrop-blur bg-opacity-60" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <div>
                            <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5 hover:no-underline" role="menuitem">How Bea Works</Link>
                            <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">About the Bea Team</Link>
                            <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Bea Chatter</Link>
                            <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Contact Us</Link>
                        </div>
                        <div>
                            <Link to='/' className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">
                                <svg className="w-4 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Facebook icon</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                Facebook
                            </Link>
                            <Link to='/' className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">
                                <svg className="w-4 mr-1.5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                                Instagram
                            </Link>
                            <Link to='/' className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">
                                <svg className="w-4 mr-1.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitter icon</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                Twitter
                            </Link>
                            <Link to='/' className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">
                                <svg className="w-4 mr-1.5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest icon</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
                                Pinterest
                            </Link>
                        </div>
                    </div> 
                </Popup>
                </div>


                <div className="ml-4 relative flex-shrink-0">
                <div>
                    <Popup trigger={<button className="flex text-sm rounded-full text-white focus:outline-none" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <div className="flex items-center h-6 bg-transparent">
                        <svg className="bg-transparent" width="20px" height="4px" viewBox="0 0 20 4" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="Designs-for-Development" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Meditate-Landing-(Paid-Member---recent)" transform="translate(-1383.000000, -31.000000)">
                                    <path d="M0,-1 L1440,-1 L1440,66 C1174.88262,66 1016.78219,66 965.698713,66 C889.073495,66 870.259441,23.70292 816,23.70292 C761.740559,23.70292 748.575215,66 653.741049,66 C590.518272,66 372.271256,66 -1,66 L0,-1 Z" id="header"></path>
                                    <g id="more" transform="translate(1383.000000, 31.000000)" fill="#FFFFFF">
                                        <circle id="Oval" cx="2" cy="2" r="2"></circle>
                                        <circle id="Oval-Copy" cx="10" cy="2" r="2"></circle>
                                        <circle id="Oval-Copy-2" cx="18" cy="2" r="2"></circle>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>


                    </button>} position="bottom right">

                    <div className="origin-top-right fixed right-4 mt-0.5 w-48 py-1 border-t-4 border-beaDarkPurple ring-inset ring-1 ring-beaBorderGrey divide-y divide-beaBorderGrey bg-gray-50 backdrop-blur bg-opacity-60" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <div>
                            <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5 hover:no-underline" role="menuitem">Dashboard</Link>
                            <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Support</Link>
                        </div>
                        <div>
                            <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5 hover:no-underline" role="menuitem">Your Profile</Link>
                            <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Settings</Link>
                            <a onClick={logout} href="#!"k to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-0.5" role="menuitem">Sign Out</a>
                        </div>
                    </div> 
                    </Popup>
                </div>

                </div>
            </div>
            </div> 
        </div>
        </div>

{/* 
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
</div> */}
        </nav>
 
    )
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = (state) => ({
    auth: state.auth
  });

export default connect(mapStateToProps, {logout})(NavBar);