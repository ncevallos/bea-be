import React from 'react'
import { Fragment } from 'react';
import ReactSpeedometer from "react-d3-speedometer"

class OverindulgeGauge extends React.Component {
    render() {
        // console.log("overindulge result gauage contains", this.props)
        let iconurl = "";
        const chartStyle={
            height: 250,
        }     
        if(this.props.overindulgeresult === 'Much worse' || 
        this.props.overindulgeresult === 'Much more sad' ||
        this.props.overindulgeresult === 'Much more upset' ||
        this.props.overindulgeresult === 'Much more stressed' ||
        this.props.overindulgeresult === 'Much more bored' ||
        this.props.overindulgeresult === 'Much more anxious' ){

            iconurl = 
            <div className="w-96 items-center">
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
                    <span className="mt-6 text-gray-700 text-sm font-thin">If you overindulged, you felt</span><br/>
                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.overindulgeresult}</h2>
            </div>
        }
        else if(this.props.overindulgeresult === 'Somewhat worse' || 
        this.props.overindulgeresult === 'More sad/lonely' ||
        this.props.overindulgeresult === 'More upset' ||
        this.props.overindulgeresult === 'More stressed' ||
        this.props.overindulgeresult === 'More bored' ||
        this.props.overindulgeresult === 'More anxious' ){
            iconurl = 
            <div className="w-96 items-center">
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
                        <span className="mt-6 text-gray-700 text-sm font-thin">If you overindulged, you felt</span><br/>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.overindulgeresult}</h2>
            </div>
        }
        else if(this.props.overindulgeresult === 'The same' ){

            iconurl = 
            <div className="w-96 items-center">
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
                                    <span className="mt-6 text-gray-700 text-sm font-thin">If you overindulged, you felt</span><br/>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.overindulgeresult}</h2>
            </div>
        }
        else if(this.props.overindulgeresult === 'Somewhat better' || 
        this.props.overindulgeresult === 'Less sad/lonely' ||
        this.props.overindulgeresult === 'Less upset' ||
        this.props.overindulgeresult === 'Less stressed' ||
        this.props.overindulgeresult === 'Less bored' ||
        this.props.overindulgeresult === 'Less anxious' ){
            iconurl = 
            <div className="w-96 items-center">

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
                        <span className="mt-6 text-gray-700 text-sm font-thin">If you overindulged, you felt</span><br/>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.overindulgeresult}</h2>
            </div>
        }
        else if(this.props.overindulgeresult === 'Much better' || 
        this.props.overindulgeresult === 'Much less sad/lonely' ||
        this.props.overindulgeresult === 'Much less upset' ||
        this.props.overindulgeresult === 'Much less stressed' ||
        this.props.overindulgeresult === 'Much less bored' ||
        this.props.overindulgeresult === 'Much less anxious' ){
            iconurl = 
            <div className="w-96 items-center">
                
                <ReactSpeedometer 
                        maxValue={100}
                        minValue={0}
                        value={100}
                        height={175}
                        // customSegmentStops={[0, 100]}
                        // segmentColors={["#FFAD33", "#eeeeee"]}
                        customSegmentLabels = {[" ",' ']}
                        needleColor="#000000"
                        startColor="#FFAD33"
                        segments={2}
                        currentValueText = " "
                        endColor="#FFAD33"/>
                        <span className="mt-6 text-gray-700 text-sm font-thin">If you overindulged, you felt</span><br/>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.overindulgeresult}</h2>
            </div>
        }
        else {
            iconurl = 
            <div className="w-96 items-center">
                <ReactSpeedometer 
                                maxValue={100}
                                minValue={0}
                                value={0}
                                height={175}
                                display={"inline-block"}
                                customSegmentStops={[0, 0.5, 100]}
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



export default OverindulgeGauge;