import React, { Fragment } from 'react'
import mountainStream from '../../../img/mountain-stream.svg';
import myData from './VideoData.json';
import HeaderPlayButton from './HeaderPlayButton';

const MeditateHeader = (props) => {


    let meditateHeaderResults = "";
    if(props.results.date){
    
        const videoid = props.results.videoid-1;
        console.log('dynamic video title should be', myData[videoid].title)
      meditateHeaderResults = 
          <Fragment>
                <div className="flex items-center px-4 border-b border-gray-200 sm:px-6 md:h-80 py-8 bg-gradient-to-t from-beaBlue to-white">
                <div className="md:pl-10 h-full w-full flex md:flex-row flex-col-reverse items-center">
                    <div className="flex flex-col lg:ml-4 ml-0 mt-2 md:w-5/12 w-full items-center md:items-start ">
                    <div className="flex flex-col mb-6 items-center mt-5 md:mt-0 md:items-start">
                        <h3 className="text-sm leading-6 font-medium text-beaTextLightGrey uppercase font-black tracking-widest mb-1">
                        Your Meditation Today
                        </h3>
                        <h2 className="text-3xl leading-6 text-beaTextGrey font-light mb-1">
                        {myData[videoid].title}
                        </h2>
                        <h4 className="text-beaTextGrey font-light">
                        {myData[videoid].length}
                        </h4>
                    </div>
                    <HeaderPlayButton title={myData[videoid].title} length={myData[videoid].length} vidurl={myData[videoid].vidurl}/>
                    </div>
                    <div className="lg:ml-4 ml-0 flex flex-column h-full items-end">
                    <img src={myData[videoid].dashimg} alt="Mountain Stream" className="w-96" />
                    </div>
                </div>
                </div>
          </Fragment>
    }
    else {
        // ANDERS THIS IS WHERE WE NEED THE NOT CHATTED WITH SECTION TO BE BUILT
      meditateHeaderResults = 
          <Fragment>
                <div className="flex items-center px-4 border-b border-gray-200 sm:px-6 md:h-80 py-8 bg-gradient-to-t from-beaBlue to-white">
                <div className="md:pl-10 h-full w-full flex md:flex-row flex-col-reverse items-center">
                    <div className="flex flex-col lg:ml-4 ml-0 mt-2 md:w-5/12 w-full items-center md:items-start ">
                    <div className="flex flex-col mb-6 items-center mt-5 md:mt-0 md:items-start">
                        <h3 className="text-sm leading-6 font-medium text-beaTextLightGrey uppercase font-black tracking-widest mb-1">
                        Your Didn't Meditate Yet Today
                        </h3>
                    </div>
                    </div>
                    <div className="lg:ml-4 ml-0 flex flex-column h-full items-end">
                    <img src={mountainStream} alt="Mountain Stream" className="w-96" />
                    </div>
                </div>
                </div>
              </Fragment>
  
    }

    return (
        <section>

                {meditateHeaderResults}
        </section>
    )
}

export default MeditateHeader;
  