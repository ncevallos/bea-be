
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import dashIcon from '../../img/dashboard-icon.svg';
import dashIconWhite from '../../img/dashboard-icon-white.svg';
import meditateIcon from '../../img/meditate-icon.svg';
import meditateIconWhite from '../../img/meditate-icon-white.svg';
import motivateIcon from '../../img/motivate-icon.svg';
import motivateIconWhite from '../../img/motivate-icon-white.svg';
import planIcon from '../../img/plan-icon.svg';
import planIconWhite from '../../img/plan-icon-white.svg';

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
    } else if (location.pathname.startsWith('/MotivateMain')) {
      setActivePage("MotivateMain");
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
              <div className="flex flex-col w-full items-center lg:items-start lg:justify-start">
                <div className="flex lg:flex-col xl:flex-col sm:flex-row p-2 space-y-0 space-x-0 lg:space-x-0 lg:space-y-1 lg:justify-start w-full justify-between px-0 lg:px-0 border-b border-gray-300">
                  <Link to='/Dashboard' className={"group rounded-2xl lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Dashboard") ? "bg-beaDarkBlue text-white" : 'text-beaTextGrey')} >
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-spacing lg:transform lg:group-hover:pl-2">
                      <img src={activePage === "Dashboard" ? dashIconWhite  : dashIcon} className="w-6" alt='Dashboard'/>
                      <span className="text-sm font-medium">Dashboard</span>
                    </div>
                  </Link>
                  <Link to='/PlanMain' className={"group rounded-2xl lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Plan") ? "bg-beaDarkBlue text-white" : 'text-beaTextGrey')} >
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-spacing lg:transform lg:group-hover:pl-2">
                      <img src={activePage === "Plan" ? planIconWhite  : planIcon} className="w-6" alt='Plan' />
                      <span className="text-sm font-medium">Plan (UI)</span>
                    </div>
                  </Link>
                  <Link to='/Plan2' className={"group rounded-2xl lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Plan2") ? "bg-beaDarkBlue text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-spacing lg:transform lg:group-hover:pl-2">
                      <img src={activePage === "Plan2" ? planIconWhite  : planIcon} className="w-6" alt='Plan' />
                      <span className="text-sm font-medium">Plan</span>
                    </div>
                  </Link>
                  {/* <Link to='/TestPlanSubmit' className={"group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "TestPlanSubmit") ? "bg-beaDarkBlue text-white" : 'text-beaTextGrey')} >
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={planicon} className="w-6" alt='TestPlanSubmit' />
                      <span className="text-sm font-medium">Test Plan Results</span>
                    </div>
                  </Link> */} 
                  <Link to='/Motivate' className={"group rounded-2xl lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Motivate") ? "bg-beaPurple text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-spacing lg:transform lg:group-hover:pl-2">
                      <img src={activePage === "Motivate" ? motivateIconWhite  : motivateIcon} className="w-6" alt='Motivate'/>
                      <span className="text-sm font-medium">Motivate </span>
                    </div>
                  </Link>
                  <Link to='/MotivateMain' className={"group rounded-2xl lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "MotivateMain") ? "bg-beaDarkOrange text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-spacing lg:transform lg:group-hover:pl-2">
                      <img src={activePage === "MotivateMain" ? motivateIconWhite  : motivateIcon} className="w-6" alt='Motivate2'/>
                      <span className="text-sm font-medium">Motivate (UI)</span>
                    </div>
                  </Link>
                  <Link to='/Meditate' className={"group rounded-2xl lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Meditate") ? "bg-beaPurpleCorrected text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-spacing lg:transform lg:group-hover:pl-2">
                      <img src={activePage === "Meditate" ? meditateIconWhite  : meditateIcon} className="w-6" alt='Meditate'/>
                      <span className="text-sm font-medium">Meditate (UI)</span>
                    </div>
                  </Link>
                  <Link to='/MeditateChat' className={"group rounded-2xl lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline " + ((activePage === "Meditate") ? "bg-beaPurpleCorrected text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-spacing lg:transform lg:group-hover:pl-2">
                      <img src={activePage === "Meditate" ? meditateIconWhite  : meditateIcon} className="w-6" alt='Meditate'/>
                      <span className="text-sm font-medium">Meditate</span>
                    </div>
                  </Link>
                </div>
                <div className="flex lg:flex-col xl:flex-col sm:flex-row p-2 space-y-0 space-x-0 lg:space-x-0 lg:space-y-1 lg:justify-start w-full justify-between px-0 lg:px-0">
                  <Link to='/Meditate' className={"group rounded-2xl lg:w-full p-3 lg:px-5 px-2.5 transition-bg bg-gray-200 hover:no-underline " + ((activePage === "Meditate") ? "bg-beaPurpleCorrected text-white" : 'text-beaTextGrey')}>
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-spacing lg:transform lg:group-hover:pl-2">
                      <svg className={activePage === "Meditate" ? "w-6 h-6 text-white"  : "w-6 h-6 text-beaPurpleCorrected"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                      <span className={"text-sm font-medium text-beaPurpleCorrected " + ((activePage === "Meditate") ? "text-white" : 'text-beaPurpleCorrected')}>Chat with Bea</span>
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