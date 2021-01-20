import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        // <div className="footer">
        //     <div className="footerlinks">
        //     <Link to='/privacy' >Privacy Policy</Link>
        //     <Link to='/termsconditions'>Terms &amp; Conditions </Link>
        //     </div>
        //     <div className="copyright">2020 Bea Better Eating, LLC </div>
        // </div>
        
        //Anders' layout below 
        <div className="lg:bg-gray-200 p-4 mb-20 lg:mb-0 lg:ml-52">
        <div className="flex items-center flex-col lg:flex-row">
        <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-blue-700 hidden lg:block">
            <Link to='/privacy' className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600 pr-3 border-r border-gray-400">Privacy Policy</Link>
            <Link to='/termsconditions' className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600 pl-3">Terms &amp; Conditions</Link>
            </p>
            <p className="mt-3 lg:mr-3 text-sm md:mt-0 md:ml-6">
            ©2020 Bea Better Eating, LLC
            </p>
        </div>
        </div>
        </div>
    )
}

export default Footer;