import React from 'react'
import { Fragment } from 'react';
import GaugeChart from 'react-gauge-chart';
import ReactSpeedometer from "react-d3-speedometer"

class TemptedGauge extends React.Component {
    render() {
        // console.log("tempted gauage contains", this.props)
        let iconurl = "";
        const chartStyle={
            height: 250,
        }
        if(this.props.avgTemptationLvl === 0 ){

            iconurl = 
            <div>
                <ReactSpeedometer 
                    maxValue={100}
                    minValue={0}
                    value={0}
                    height={175}
                    customSegmentStops={[0, 100]}
                    segmentColors={["#FFAD33", "#eeeeee"]}
                    customSegmentLabels = {[" ", " "]}
                    needleColor="#000000"
                    startColor="#FFAD33"
                    segments={2}
                    currentValueText = " "
                    endColor="#ffffff"/>
                     <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                     Not at all tempted
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                        to eat in a way not ideal
                    </p>
                            {/* <p className="text-xl">Not at all tempted</p>
                            <p>to eat in a way not ideal</p> */}
            </div>
        }
        else if(this.props.avgTemptationLvl === 1){

            iconurl = 
            <div>
                   <ReactSpeedometer 
                        maxValue={100}
                        minValue={0}
                        value={30}
                        height={175}
                        customSegmentStops={[0, 30, 100]}
                        segmentColors={["#FFAD33", "#eeeeee"]}
                        customSegmentLabels = {[" ", " "]}
                        needleColor="#000000"
                        startColor="#FFAD33"
                        segments={2}
                        currentValueText = " "
                        endColor="#eeeeee"/>
                     <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                     Slightly tempted
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                        to eat in a way not ideal
                    </p>
                            {/* <p className="text-xl">Slightly tempted</p>
                            <p>to eat in a way not ideal</p> */}
            </div>
        }
        else if(this.props.avgTemptationLvl === 2){

            iconurl = 
            <div>
                <ReactSpeedometer 
                                    maxValue={100}
                                    minValue={0}
                                    value={50}
                                    height={175}
                                    customSegmentStops={[0, 50, 100]}
                                    segmentColors={["#FFAD33", "#eeeeee"]}
                                    customSegmentLabels = {[" ", " "]}
                                    needleColor="#000000"
                                    startColor="#FFAD33"
                                    segments={2}
                                    currentValueText = " "
                                    endColor="#ffffff"/>
                     <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                        Somewhat Tempted
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                        to eat in a way not ideal
                    </p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 3){
            iconurl = 
            <div >

                    <ReactSpeedometer 
                        maxValue={100}
                        minValue={0}
                        value={70}
                        height={175}
                        customSegmentStops={[0, 70, 100]}
                        segmentColors={["#FFAD33", "#eeeeee"]}
                        customSegmentLabels = {[" ", " "]}
                        needleColor="#000000"
                        startColor="#FFAD33"
                        segments={2}
                        currentValueText = " "
                        endColor="#eeeeee"/>
                        <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                        Very Tempted
                                    </h3>
                        <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                                        to eat in a way not ideal
                        </p>
                            {/* <p className="text-xl">Very tempted</p>
                            <p>to eat in a way not ideal</p> */}
            </div>
        }
        else if(this.props.avgTemptationLvl === 4){
            iconurl = 
            <div>
                
                <ReactSpeedometer 
                        maxValue={100}
                        minValue={0}
                        value={100}
                        height={175}
                        // customSegmentStops={[0, 100]}
                        // segmentColors={["#FFAD33", "#eeeeee"]}
                        customSegmentLabels = {[" ", " "]}
                        needleColor="#000000"
                        startColor="#FFAD33"
                        segments={2}
                        currentValueText = " "
                        endColor="#FFAD33"/>
                    <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                    Extremely - Help! Tempted
                                </h3>
                    <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                                    to eat in a way not ideal
                                </p>
                                {/* <p className="text-xl">Extremely - Help! tempted</p>
                                <p>to eat in a way not ideal</p> */}
            </div>
        }
        else {
            iconurl = 
            <div>
                <ReactSpeedometer 
                                maxValue={100}
                                minValue={0}
                                value={30}
                                height={175}
                                customSegmentStops={[0, 30, 100]}
                                segmentColors={["#FFAD33", "#eeeeee"]}
                                customSegmentLabels = {[" ", " "]}
                                needleColor="#000000"
                                startColor="#FFAD33"
                                segments={2}
                                currentValueText = " "
                                endColor="#ffffff"/>
                                <p className="text-xl">No data</p>
            </div>
        }
        
        return (
            <Fragment>
                {iconurl}
            </Fragment>

        )
    }
    }



export default TemptedGauge;