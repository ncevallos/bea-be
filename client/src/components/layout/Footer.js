import React from 'react'
import { Link } from 'react-router-dom';
import dashicon from '../../img/dashboard-icon.png';
import meditateicon from '../../img/meditate-icon.png';
import motivateicon from '../../img/motivate-icon.png';
import planicon from '../../img/plan-icon.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerlinks">
            <Link to='/' >Privacy Policy</Link>
            <Link to='/Plan'>Terms &amp; Conditions </Link>
            </div>
            <div className="copyright">2020 Bea Better Eating, LLC </div>
        </div>
    )
}

export default Footer;