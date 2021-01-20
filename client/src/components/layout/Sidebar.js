import React from 'react'
import { Link } from 'react-router-dom';
import dashicon from '../../img/dashboard-icon.png';
import meditateicon from '../../img/meditate-icon.png';
import motivateicon from '../../img/motivate-icon.png';
import planicon from '../../img/plan-icon.png';

export const Sidebar = () => {
    return (

        <div className="flex-grow w-full mx-auto lg:px-0 flex">
        <div className="flex-1 min-w-0 lg:flex">
        <div className="fixed flex lg:top-16 lg:left-0 lg:w-52 w-full h-auto bottom-0 lg:h-full md:flex-shrink-0 py-1 bg-beaGrey content-center border-t lg:border-r border-gray-200 z-50">
          <div className="flex pl-4 pr-3 lg:py-6 sm:pl-6 lg:pl-0 lg:pl-3 content-center w-full">
            <div className="flex justify-between w-full">
              <div className="flex space-y-8 w-full items-center lg:items-start lg:justify-start">
                <div className="flex lg:flex-col flex-row space-y-0 space-x-0 lg:space-x-0 lg:space-y-1 lg:justify-start w-full justify-between px-2 lg:px-0">
                  <Link to='/'  className="group hover:bg-gray-300 lg:w-full p-3 lg:px-5 px-2.5 rounded-lg transition-bg lg:transition-transform lg:transform lg:hover:scale-105">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2">
                      <img src={dashicon} className="w-6" alt='Dashboard'/>
                      <span className="text-sm text-beaTextGrey font-medium">Dashboard</span>
                    </div>
                  </Link>
                  <Link to='/Plan' className="group hover:bg-gray-300 lg:w-full p-3 lg:px-5 px-2.5 rounded-lg transition-bg lg:transition-transform lg:transform lg:hover:scale-105">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2">
                      <img src={planicon} className="w-6" alt='Plan' />
                      <span className="text-sm text-beaTextGrey font-medium">Plan</span>
                    </div>
                  </Link>
                  <Link to='/Motivate' className="group hover:bg-gray-300 lg:w-full p-3 lg:px-5 px-2.5 rounded-lg transition-bg lg:transition-transform lg:transform lg:hover:scale-105">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2">
                      <img src={motivateicon} className="w-6" alt='Motivate'/>
                      <span className="text-sm text-beaTextGrey font-medium">Motivate</span>
                    </div>
                  </Link>
                  <Link to='/Meditate' className="group hover:bg-gray-300 lg:w-full p-3 lg:px-5 px-2.5 rounded-lg transition-bg lg:transition-transform lg:transform lg:hover:scale-105">
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-2">
                      <img src={meditateicon} className="w-6" alt='Meditate'/>
                      <span className="text-sm text-beaTextGrey font-medium">Meditate</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div></div>
    )
}

export default Sidebar;