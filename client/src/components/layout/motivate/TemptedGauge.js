import React from 'react'
import { Fragment } from 'react';
import GaugeChart from 'react-gauge-chart';
import ReactSpeedometer from "react-d3-speedometer"

class TemptedGauge extends React.Component {
    render() {
        // console.log("tempted gauage contains", this.props)
        let iconurl = "";
        const chartStyle={
            //height: 250,
        }
        if(this.props.avgTemptationLvl === 0 ){

            iconurl = 
            <div className="w-96 items-center flex flex-col">
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
                            <p className="text-3xl font-extralight mb-0">Not at all tempted</p>
                            <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 1){

            iconurl = 
            <div className="w-96 items-center flex flex-col">
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
                            <p className="text-3xl font-extralight mb-0">Slightly tempted</p>
                            <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 2){

            iconurl = 
            <div className="w-96 items-center flex flex-col">
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
                            <p className="text-3xl font-extralight mb-0">Somewhat tempted</p>
                            <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 3){
            iconurl = 
            <div className="w-96 items-center flex flex-col">

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
                            <p className="text-3xl font-extralight mb-0">Very tempted</p>
                            <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 4){
            iconurl = 
            <div className="w-96 items-center flex flex-col">
                
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
                                <p className="text-3xl font-extralight mb-0">Extremely - Help! tempted</p>
                                <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else {
            iconurl = 
            <div className="w-96 items-center flex flex-col">
                <ReactSpeedometer 
                                maxValue={100}
                                minValue={0}
                                value={0}
                                height={175}
                                customSegmentStops={[0, 0.5, 100]}
                                segmentColors={["#FFAD33", "#eeeeee"]}
                                customSegmentLabels = {[" ", " "]}
                                needleColor="#000000"
                                startColor="#FFAD33"
                                segments={2}
                                currentValueText = " "
                                endColor="#ffffff"/>
                                <p className="text-3xl font-extralight mb-0">No data</p>
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