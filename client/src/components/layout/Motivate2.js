import React from 'react'
import { Component } from 'react';
import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart';
import appleIcon from '../../img/apple-icon.svg';
import calendarIcon from '../../img/calendar-icon.svg';
import hungryIcon from '../../img/hungry-icon.svg';

class Motivate2 extends Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
    render() {
    return (

<section>
  <div className="flex mx-auto p-4">
      <div className="flex flex-col flex-grow">
          <div style={{ backgroundImage: "linear-gradient(to right, rgba(109, 80, 139, 1), rgba(173, 121, 226, 1), rgba(177, 208, 244, 1))" }} className="flex rounded-xl mb-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6">
              <div className="mb-4">
                  <h3 className="text-sm leading-6 font-medium text-white uppercase font-black tracking-widest mb-1">
                    Your motivate summary today
                  </h3>                        
              </div>
              <div className="flex flex-row w-full justify-between">
                  <div className="flex">
                      <div className="flex flex-col w-48">
                          <div className="flex w-16 h-16 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5 items-center">
                            <img className="w-1/2 flex-shrink-0 mx-auto" src={appleIcon} alt="" />
                          </div>
                          <div className="">
                              <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                 Your urge to eat in a way that isn’t ideal for you right now
                              </h4>
                              <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                somewhat tempting
                              </h5>
                          </div>
                      </div>
                  </div>
                  <div className="flex w-48">
                      <div className="flex flex-col">
                          <div className="flex w-16 h-16 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5 items-center">
                            <img className="w-1/2 flex-shrink-0 mx-auto" src={calendarIcon} alt="" />
                          </div>
                          <div className="">
                              <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                You planned to eat
                              </h4>
                              <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                apples with peanut butter &amp; kombucha
                              </h5>
                          </div>
                      </div>                            
                  </div>
                  <div className="flex w-48">
                      <div className="flex flex-col">
                          <div className="flex w-16 h-16 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5 items-center">
                            <img className="w-1/2 flex-shrink-0 mx-auto" src={hungryIcon} alt="" />
                          </div>
                          <div className="">
                              <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                The reason why you chose the planned food
                              </h4>
                              <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                genuinely hungry
                              </h5> 
                          </div>
                      </div>                            
                  </div>
              </div>
          </div>
          <div className="flex flex-shrink">
            <div className="bg-gray-200 rounded-full p-0 flex flex-shrink">
                <div className=" py-2 px-4 rounded-full">1W</div>
                <div className="py-2 px-4 rounded-full">1M</div>
                <div className="bg-beaPurpleCorrected text-white py-2 px-4 rounded-full">3M</div>
                <div className="py-2 px-4 rounded-full">1Y</div>
                <div className="py-2 px-4 rounded-full">ALL</div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-10 my-4">
            <div className="w-96">
                <GaugeChart id="gauge-chart3"
                    nrOfLevels={2} 
                    colors={["#FFAD33", "#ECEFF1"]} 
                    arcsLength={[0.37, 0.63]}
                    arcWidth={0.45} 
                    percent={0.37} 
                    arcPadding={0}
                    cornerRadius={0}
                    textColor={"#000000"}
                    needleColor={"#58585E"}
                    needleBaseColor={"#CFD8DC"}
                    formatTextValue={value => 'Very tempted'}
                    hideText={true}
                    />
                </div>
            <div className="w-full bg-beaOrange p-2 rounded-full flex items-center justify-between">
                <div className="bg-gray-50 bg-opacity-50 uppercase font-bold text-beaOrange py-3 px-4 text-xl rounded-full">BEA's Tips</div>
                <div className="m-3 text-lg text-white">Oh no! It looks like you’re in the beginning stages of getting off track. Bea has some tips to make sure you don’t derail.</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>
          </div>
          <div className="flex flex-grow w-full">
            <div className="w-full border border-gray-200 rounded-xl p-10 mr-2">
                <div className="text-beaDarkBlue uppercase text-center font-bold">Visualizations: Triggers</div>
            </div>
            <div className="w-full border border-gray-200 rounded-xl p-10 ml-2">
                <div className="text-beaDarkBlue uppercase text-center font-bold">Visualizations: Evaluating Mood</div>
            </div>
          </div>
      </div>
    </div>
  </section>


    )}
}

export default Motivate2;