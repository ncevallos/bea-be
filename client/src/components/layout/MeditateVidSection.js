
import React from 'react'
import { Link } from 'react-router-dom';
import peskyPatterns from '../../img/pesky-patterns.svg';
import Videoselection from './Videoselection';

export const MeditateVidSection = () => {
    return (
        <div className="flex px-6 py-6">
        <div className="flex flex-col w-full">


            <div className="mb-2">
            <div className="block">
                <div>
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <Link to="/Meditate" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-t-4 font-medium text-sm">
                    Recent
                    </Link>
                    <Link to="/Meditate" className="border-beaDarkPurple text-beaDarkPurple whitespace-nowrap py-4 px-1 border-t-4 font-medium text-sm" aria-current="page">
                    Featured
                    </Link>
                </nav>
                </div>
            </div>
            </div>

            <div className="flex md:flex-row flex-col">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mr-4 gap-4 w-full">
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg">
                <Link to="/Meditate#" className="group">
                <div className="flex-1 flex flex-col p-8 bg-beaLightBlue rounded-lg h-40">

                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex relative -mr-px w-0 flex-1 inline-flex items-center justify-start py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                        <button type="button" className="relative inline-flex items-center px-3 transition-all py-3 border border-transparent text-sm font-medium border border-beaDarkPurple rounded-full text-beaDarkPurple group-hover:bg-beaDarkPurple group-hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 210 210">
                            <path d="M179.07,105L30.93,210V0L179.07,105z"/>
                        </svg>            
                        </button>
                        <div className="flex flex-col ml-3">
                        <span className="text-left">Clouds</span>
                        <span className="text-left">5 minutes</span>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
            </li>
            <Videoselection />
            <Videoselection />
            <Videoselection />
            </ul>
            <ul className="md:w-96 w-full">
            <li className="col-span-1 flex flex-col text-center border border-beaBorderGrey border-opacity-50 py-6 bg-white rounded-lg divide-y divide-gray-200">
                <div className="flex-1 flex flex-col">
                <img className="w-full flex-shrink-0 mx-auto" src={peskyPatterns} alt="" />
                <div className="px-4">
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">Reveal those pesky patterns</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between mb-4">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">The more you chat with Bea, the better she’ll be able to identify what’s hindering your progress.</dd>
                    <dt className="sr-only">Role</dt>
                    </dl>
                    <button type="button" className="relative inline-flex items-center px-6 py-2 shadow-sm text-sm font-medium rounded-full text-beaDarkPurple hover:bg-beaDarkPurple hover:text-white transition-all border border-1 border-beaDarkPurple group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>       
                    Chat with Bea Now
                    </button>
                </div>
                </div>
            </li>
            </ul>
            </div>
        </div>
        </div>

    )
}

export default MeditateVidSection;