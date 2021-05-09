
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Link, Nav, NavLink, useLocation } from 'react-router-dom';
import dashicon from '../../img/dashboard-icon.svg';
import meditateicon from '../../img/meditate-icon.svg';
import motivateicon from '../../img/motivate-icon.svg';
import planicon from '../../img/plan-icon.svg';

export const Sidebar = () => {    
  const location = useLocation();
  const [activePage, setActivePage] = useState("Dashboard");

  //the home page contact form picture col needs to be set col-lg-6 so that it wraps correctly
  useEffect(() => {
    //Here an active page is defined depending on the pathname, then below if the respective Link
    //matches activePage then the appropriate bg-background class is appended to className
    if (location.pathname.startsWith('/Plan2')) {
      setActivePage("Plan2");
    } else if (location.pathname.startsWith('/Plan')) {
      setActivePage("Plan");
    } else if (location.pathname.startsWith('/TestPlanSubmit')) {
      setActivePage("TestPlanSubmit");
    } else if (location.pathname.startsWith('/Motivate2')) {
      setActivePage("Motivate2");
    } else if (location.pathname.startsWith('/Motivate')) {
      setActivePage("Motivate");
    } else if (location.pathname.startsWith('/Meditate')) {
      setActivePage("Meditate");
    } else if (location.pathname === '/') {
      setActivePage("Dashboard");
    } else {
      setActivePage("Dashboard");
    }
  }, [location]);
    // const active = {
    //   backgroundColor: bgcolor
    // };
    return (

        <div className="flex-grow w-full mx-auto lg:px-0 flex">
        <div className="flex-1 min-w-0 lg:flex">
        <div className="fixed flex lg:top-16 lg:left-0 lg:w-52 w-full h-auto bottom-0 lg:h-full md:flex-shrink-0 py-0 bg-beaGrey content-center border-t lg:border-r border-gray-200 z-50">
          <div className="flex lg:py-0 px-0 content-center w-full">
            <div className="flex justify-between w-full">
              <div className="flex space-y-8 w-full items-center lg:items-start lg:justify-start">
                <div className="flex lg:flex-col xl:flex-col sm:flex-row space-y-0 space-x-0 lg:space-x-0 lg:space-y-1 lg:justify-start w-full justify-between px-0 lg:px-0" >
                  <Link to='/Dashboard' className={"group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Dashboard") ? "bg-beaDarkBlue text-white" : 'text-beaTextGrey')} >
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={dashicon} className="w-6" alt='Dashboard'/>
                      <span className="text-sm font-medium">Dashboard </span>
                    </div>
                  </Link>
                  <Link to='/Plan' className={"group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Plan") ? "bg-beaDarkBlue text-white" : 'text-beaTextGrey')} >
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={planicon} className="w-6" alt='Plan' />
                      <span className="text-sm font-medium">Plan (UI)</span>
                    </div>
                  </Link>
                  <Link to='/Plan2' className={"group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Plan2") ? "bg-beaDarkBlue text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={planicon} className="w-6" alt='Plan' />
                      <span className="text-sm font-medium">Plan</span>
                    </div>
                  </Link>
                  <Link to='/TestPlanSubmit' className={"group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "TestPlanSubmit") ? "bg-beaDarkBlue text-white" : 'text-beaTextGrey')} >
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={planicon} className="w-6" alt='TestPlanSubmit' />
                      <span className="text-sm font-medium">Test Plan Results</span>
                    </div>
                  </Link>
                  <Link to='/Motivate' className={"group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Motivate") ? "bg-beaPurple text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={motivateicon} className="w-6" alt='Motivate'/>
                      <span className="text-sm font-medium">Motivate </span>
                    </div>
                  </Link>
                  <Link to='/Motivate2' className={"group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Motivate2") ? "bg-beaDarkOrange text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={motivateicon} className="w-6" alt='Motivate2'/>
                      <span className="text-sm font-medium">Motivate (UI)</span>
                    </div>
                  </Link>
                  <Link to='/Meditate' className={"group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Meditate") ? "bg-beaPurpleCorrected text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={meditateicon} className="w-6" alt='Meditate'/>
                      <span className="text-sm font-medium">Meditate</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div></div>
    );
  }


export default Sidebar;