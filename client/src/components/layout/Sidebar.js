import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import dashicon from '../../img/dashboard-icon.svg';
import meditateicon from '../../img/meditate-icon.svg';
import motivateicon from '../../img/motivate-icon.svg';
import planicon from '../../img/plan-icon.svg';

export const Sidebar = () => {
    return (

        <div className="flex-grow w-full mx-auto lg:px-0 flex">
        <div className="flex-1 min-w-0 lg:flex">
        <div className="fixed flex lg:top-16 lg:left-0 lg:w-52 w-full h-auto bottom-0 lg:h-full md:flex-shrink-0 py-0 bg-beaGrey content-center border-t lg:border-r border-gray-200 z-50">
          <div className="flex lg:py-0 px-0 content-center w-full">
            <div className="flex justify-between w-full">
              <div className="flex space-y-8 w-full items-center lg:items-start lg:justify-start">
                <div className="flex lg:flex-col xl:flex-col sm:flex-row space-y-0 space-x-0 lg:space-x-0 lg:space-y-1 lg:justify-start w-full justify-between px-0 lg:px-0">
                  <NavLink to='/Dashboard' className="group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={dashicon} className="w-6" alt='Dashboard'/>
                      <span className="text-sm text-beaTextGrey font-medium">Dashboard</span>
                    </div>
                  </NavLink>
                  <NavLink to='/Plan' className="group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={planicon} className="w-6" alt='Plan' />
                      <span className="text-sm text-beaTextGrey font-medium">Plan</span>
                    </div>
                  </NavLink>
                  <NavLink to='/Motivate' className="group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={motivateicon} className="w-6" alt='Motivate'/>
                      <span className="text-sm text-beaTextGrey font-medium">Motivate</span>
                    </div>
                  </NavLink>
                  <NavLink to='/Meditate' className="group lg:w-full p-3 lg:px-5 px-2.5 transition-bg hover:no-underline">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2 lg:transition-transform lg:transform lg:group-hover:scale-105">
                      <img src={meditateicon} className="w-6" alt='Meditate'/>
                      <span className="text-sm text-beaTextGrey font-medium">Meditate</span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div></div>
    )
}

export default Sidebar;