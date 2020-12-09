import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerlinks">
            <Link to='/privacy' >Privacy Policy</Link>
            <Link to='/termsconditions'>Terms &amp; Conditions </Link>
            </div>
            <div className="copyright">2020 Bea Better Eating, LLC </div>
        </div>
    )
}

export default Footer;