import React from 'react'
import smileyIcon from '../../../img/smiley-icon.svg';
import smileyIconExtraHappy from '../../../img/smiley-icon-extrahappy.svg';
import smileyIconNeutral from '../../../img/smiley-icon-neutral.svg';
import smileyIconUnhappy from '../../../img/smiley-icon-unhappy.svg';
import { Fragment } from 'react';

class PlanMoodSidebar extends React.Component {

    render() {
        console.log("props has", this.props);
        let control = this.props.avgMood;
        let planmood = "";
      if(control === 4){

        planmood = 
            <div className="bg-beaYellow plan-interactive-state mb-gutter">
            <div className="sm:p-6 flex-grow">
                <h3 className="text-3xl leading-6 font-light text-white">
                    Wow! You are doing fantastic!
                </h3>
                <div className="mt-2 max-w-xl text-md text-white">
                <p>
                  You felt GREAT about your eating more than any other for the past 30 days.
                </p>
                </div>
                <div className="mt-5">
                    {/*<button type="button" className="btn-white">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                        Stay on Track Tips
                    </button>*/}
                </div>
            </div>
            <div className="flex pr-10 align-middle">
                <img src={smileyIconExtraHappy} alt="Extra Happy Smiley" className="w-32" />
            </div>
        </div>
      }
      else if(control === 3){
  
        planmood = 
          <div className="bg-beaOrange plan-interactive-state mb-gutter">
          <div className="sm:p-6 flex-grow">
              <h3 className="text-3xl leading-6 font-light text-white">
                  Keep up the good work!
              </h3>
              <div className="mt-2 max-w-xl text-md text-white">
              <p>
                  You felt PRETTY GOOD about your eating more than any other for the past 30 days.
              </p>
              </div>
              <div className="mt-5">
                  {/*<button type="button" className="btn-white">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                      Stay on Track Tips
                    </button>*/}
              </div>
          </div>
          <div className="flex pr-10 align-middle">
              <img src={smileyIcon} alt="Smiley Icon" className="w-32" />
          </div>
      </div>
      }
      else if(control === 2){
  
        planmood = 
            <div className="bg-beaBlueGreen plan-interactive-state mb-gutter">
            <div className="sm:p-6 flex-grow">
                <h3 className="text-3xl leading-6 font-light text-white">
                    We have some work to do, but that's okay!
                </h3>
                <div className="mt-2 max-w-xl text-md text-white">
                <p>
                  You felt NOT GOOD about your eating more than any other for the past 30 days.
                </p>
                </div>
                <div className="mt-5">
                    <button type="button" className="btn-white">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                        Getting Back on Track Tips
                    </button>
                </div>
            </div>
            <div className="flex pr-10 align-middle">
                <img src={smileyIconNeutral} alt="Neutral Smiley Face" className="w-32" />
            </div>
        </div>
      }
      else if(control === 1){
        planmood = 
          <div className="bg-beaDarkBlue plan-interactive-state mb-gutter">
          <div className="sm:p-6 flex-grow">
              <h3 className="text-3xl leading-6 font-light text-white">
                  I see that you are struggling, but we are here to help!
              </h3>
              <div className="mt-2 max-w-xl text-md text-white">
              <p>
                  You felt HORRIBLE about your eating more than any other for the past 30 days.
              </p>
              </div>
              <div className="mt-5">
                  <button type="button" className="btn-white">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                      Getting Back on Track Tips
                  </button>
              </div>
          </div>
          <div className="flex pr-10 align-middle">
              <img src={smileyIconUnhappy} alt="Unhappy Smiley Icon" className="w-32" />
          </div>
      </div>
      }
      else {
        planmood = 
          <div className="bg-gradient-to-r from-beaLightBlue to-gray-50 plan-interactive-state mb-gutter">
          <div className="sm:p-6 flex-grow">
              <h3 className="text-3xl leading-6 font-light text-gray-700">
                  Get your mood eating trends
              </h3>
              <div className="mt-2 max-w-xl text-md text-gray-700 font-light">
              <p>
                  When you upgrade you’ll unlock access to all your data which will help keep you on track.
              </p>
              </div>
              <div className="mt-5">
                  <button type="button" className="btn-darkPurple">       
                      Upgrade Today
                  </button>
              </div>
          </div>
      </div>
      }

    return (
    <Fragment>  {planmood}
    </Fragment>


    )
  }
}



export default PlanMoodSidebar;