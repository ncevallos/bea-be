import React from 'react'
import { Fragment } from 'react';
import ReactSpeedometer from "react-d3-speedometer"

class ChoiceGauge extends React.Component {
    render() {
        // console.log("choice gauage contains", this.props)
        let iconurl = "";
        const chartStyle={
            height: 250,
        }
        if(this.props.differentChoice === 'Much worse' || 
        this.props.differentChoice === 'Much more sad' ||
        this.props.differentChoice === 'Much more upset' ||
        this.props.differentChoice === 'Much more stressed' ||
        this.props.differentChoice === 'Much more bored' ||
        this.props.differentChoice === 'Much more anxious' ){

            iconurl = 
            <div className="w-96 items-center" style={{display: "inline-block"}}>
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
                    <span className="mt-6 text-gray-700 text-sm font-thin">If you made a different choice, you felt</span><br/>
                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.differentChoice}</h2>
            </div>
        }
        else if(this.props.differentChoice === 'Somewhat worse' || 
        this.props.differentChoice === 'More sad/lonely' ||
        this.props.differentChoice === 'More upset' ||
        this.props.differentChoice === 'More stressed' ||
        this.props.differentChoice === 'More bored' ||
        this.props.differentChoice === 'More anxious' ){
            iconurl = 
            <div className="w-96 items-center" style={{display: "inline-block"}}>
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
                        <span className="mt-6 text-gray-700 text-sm font-thin">If you made a different choice, you felt</span><br/>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.differentChoice}</h2>
            </div>
        }
        else if(this.props.differentChoice === 'The same' ){

            iconurl = 
            <div className="w-96 items-center" style={{display: "inline-block"}}>
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
                                    <span className="mt-6 text-gray-700 text-sm font-thin">If you made a different choice, you felt</span><br/>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.differentChoice}</h2>
            </div>
        }
        else if(this.props.differentChoice === 'Somewhat better' || 
        this.props.differentChoice === 'Less sad/lonely' ||
        this.props.differentChoice === 'Less upset' ||
        this.props.differentChoice === 'Less stressed' ||
        this.props.differentChoice === 'Less bored' ||
        this.props.differentChoice === 'Less anxious' ){
            iconurl = 
            <div className="w-96 items-center" style={{display: "inline-block"}}>

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
                        <span className="mt-6 text-gray-700 text-sm font-thin">If you made a different choice, you felt</span><br/>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.differentChoice}</h2>
            </div>
        }
        else if(this.props.differentChoice === 'Much better' || 
        this.props.differentChoice === 'Much less sad/lonely' ||
        this.props.differentChoice === 'Much less upset' ||
        this.props.differentChoice === 'Much less stressed' ||
        this.props.differentChoice === 'Much less bored' ||
        this.props.differentChoice === 'Much less anxious' ){
            iconurl = 
            <div className="w-96 items-center" style={{display: "inline-block"}}>
                
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
                        <span className="mt-6 text-gray-700 text-sm font-thin">If you made a different choice, you felt</span><br/>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.differentChoice}</h2>
            </div>
        }
        else {
            iconurl = 
            <div className="w-96 items-center" style={{display: "inline-block"}}>
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



export default ChoiceGauge;