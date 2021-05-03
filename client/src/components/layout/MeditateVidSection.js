
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import peskyPatterns from '../../img/pesky-patterns.svg';
import FeaturedVideos from './FeaturedVideos';
import RecentVideos from './RecentVideos';


// class MeditateVidSection extends Component {
    const MeditateVidSection =({}) => {
        const [openTab, setOpenTab] = React.useState(2);

    // render() {
    return (
        <div className="flex px-6 py-6">
        <div className="flex flex-col w-full">


            <div className="mb-2">
            <div className="block">
                <div>
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <a
                        className={
                        "hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-t-4 font-medium text-sm" +
                        (openTab === 1
                            ? "border-beaDarkPurple text-beaDarkPurple"
                            : "border-transparent text-gray-500")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        Recent
                    </a>
                    <a
                        className={
                        "hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-t-4 font-medium text-sm" +
                        (openTab === 2
                            ? "border-beaDarkPurple text-beaDarkPurple"
                            : "border-transparent text-gray-500")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        Featured
                    </a>
                </nav>
                </div>
            </div>
            </div>

            <div className="flex md:flex-row flex-col">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <RecentVideos /> 
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <FeaturedVideos /> 
                </div>
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
                    <button type="button" className="relative inline-flex items-center px-6 py-2 shadow-none text-sm font-medium rounded-full text-beaDarkPurple hover:bg-beaDarkPurple hover:text-white transition-all border-t border-b border-l border-r border-beaDarkPurple group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

    )}
// }

export default MeditateVidSection;