
import React from 'react';
import MiniMotivateWeekly from './MiniMotivateWeekly';
import MiniMotivateMonth from './MiniMotivateMonth';
import MiniMotivateThreeMonth from './MiniMotivateThreeMonth';
import MiniPlanWeekly from './MiniPlanWeekly';
import MiniPlanMonth from './MiniPlanMonth'
import MiniPlanThreeMonth from './MiniPlanThreeMonth';
// import { Component } from 'react';
// import { Link } from 'react-router-dom';
// import peskyPatterns from '../../../img/pesky-patterns.svg';



    const DashboardSections =({}) => {
        const [openTab, setOpenTab] = React.useState(1);

    // render() {
    return (
        <div>
                <div className="flex justify-center w-full mb-3">
                <nav className="bg-gray-200 rounded-full p-0 flex flex-shrink" aria-label="Tabs">
                    <a
                        className={
                        "" +
                        (openTab === 1
                            ? "bg-beaGreenBlue text-white py-2 px-4 rounded-full"
                            : "py-2 px-4 text-gray-900 rounded-full")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        1W
                    </a>
                    <a
                        className={
                        "" +
                        (openTab === 2
                            ? "bg-beaGreenBlue text-white py-2 px-4 rounded-full"
                            : "py-2 px-4 text-gray-900 rounded-full")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        1M
                    </a>
                    <a
                        className={
                        "" +
                        (openTab === 3
                            ? "bg-beaGreenBlue text-white py-2 px-4 rounded-full"
                            : "py-2 px-4 text-gray-900 rounded-full")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        3M
                    </a>
                    {/* <a
                        className={
                        "" +
                        (openTab === 4
                            ? "bg-beaGreenBlue text-white py-2 px-4 rounded-full"
                            : "py-2 px-4 rounded-full")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(4);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        1Y
                    </a>
                    <a
                        className={
                        "" +
                        (openTab === 5
                            ? "bg-beaGreenBlue text-white py-2 px-4 rounded-full"
                            : "py-2 px-4 rounded-full")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(5);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        ALL
                    </a> */}
                </nav>
                </div>
                
                <div>
                    {/* Trying to comment out to see for spacing */}
            {/* <div className="flex md:flex-row flex-col"> */}
            <div className={openTab === 1 ? "block w-full mr-3" : "hidden"} id="link1">
                <MiniPlanWeekly />
                <MiniMotivateWeekly />
                    {/*This will display the content within tab 1W*/}
                </div>
                <div className={openTab === 2 ? "block w-full mr-3" : "hidden"} id="link2">
                <MiniPlanMonth />
                <MiniMotivateMonth />
                    {/*This will display the content within tab 1M*/}
                </div>
                <div className={openTab === 3 ? "block w-full mr-3" : "hidden"} id="link2">
                    {/*This will display the content within tab 3M*/}             
                <MiniPlanThreeMonth />
                <MiniMotivateThreeMonth />
                </div>
                {/* <div className={openTab === 4 ? "block w-full mr-3" : "hidden"} id="link2">
                    This will display the content within tab 1Y
                </div>
                <div className={openTab === 5 ? "block w-full mr-3" : "hidden"} id="link2">
                    This will display the content within tab ALL
                </div> */}
            </div>
        {/* </div>
        </div> */}

        </div>
    )}
// }

export default DashboardSections;