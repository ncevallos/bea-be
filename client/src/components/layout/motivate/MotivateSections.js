
import React from 'react';
import MotivateWeekly from './MotivateWeekly';
import MotivateMonth from './MotivateMonth';
import MotivateThreeMonth from './MotivateThreeMonth';
// import MotivateYear from './MotivateYear';




// class MeditateVidSection extends Component {
    const MotivateSections =({}) => {
        const [openTab, setOpenTab] = React.useState(1);

    // render() {
    return (
        <div>
        {/* <div className="flex px-6 py-6">
        <div className="flex flex-col w-full"> */}

          <div className="flex flex-shrink">
                <nav className="bg-gray-200 rounded-full p-0 flex flex-shrink" aria-label="Tabs">
                    <a
                        className={
                        "" +
                        (openTab === 1
                            ? "bg-beaPurpleCorrected text-white py-2 px-4 rounded-full"
                            : "py-2 px-4 rounded-full")
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
                            ? "bg-beaPurpleCorrected text-white py-2 px-4 rounded-full"
                            : "py-2 px-4 rounded-full")
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
                            ? "bg-beaPurpleCorrected text-white py-2 px-4 rounded-full"
                            : "py-2 px-4 rounded-full")
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
                            ? "bg-beaPurpleCorrected text-white py-2 px-4 rounded-full"
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
                            ? "bg-beaPurpleCorrected text-white py-2 px-4 rounded-full"
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

            <div className="flex md:flex-row flex-col">
            <div className={openTab === 1 ? "block w-full mr-3" : "hidden"} id="link1">
                     <MotivateWeekly />
                </div>
                <div className={openTab === 2 ? "block w-full mr-3" : "hidden"} id="link2">
                     <MotivateMonth />
                </div>
                <div className={openTab === 3 ? "block w-full mr-3" : "hidden"} id="link2">
                     <MotivateThreeMonth />
                </div>
                {/* <div className={openTab === 4 ? "block w-full mr-3" : "hidden"} id="link2">
                     <MotivateYear />
                </div>
                <div className={openTab === 5 ? "block w-full mr-3" : "hidden"} id="link2">
                    This will display the content within tab five
                </div> */}
            </div>
        {/* </div>
        </div> */}

        </div>
    )}
// }

export default MotivateSections;