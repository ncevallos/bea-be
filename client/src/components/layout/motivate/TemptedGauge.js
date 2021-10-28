import React from 'react'
import noEntry from '../../../img/planimgs/no-entry.png';
import { Fragment } from 'react';
import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart';

class TemptedGauge extends React.Component {
    render() {
        console.log("tempted gauage contains", this.props)
        let iconurl = "";
        const chartStyle={
            //height: 250,
        }
        if(this.props.avgTemptationLvl === 0 ){

            iconurl = 
            <div className="w-96 items-center flex flex-col">
                <GaugeChart id={this.props.id}
                            nrOfLevels={1} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.0, 1.0]}
                            arcWidth={0.45} 
                            percent={0.0} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#58585E"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            style={chartStyle}
                            />
                            <p className="text-3xl font-extralight mb-0">Not at all tempted</p>
                            <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 1){

            iconurl = 
            <div className="w-96 items-center flex flex-col">
                <GaugeChart id={this.props.id}
                            nrOfLevels={2} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.30, 0.70]}
                            arcWidth={0.45} 
                            percent={0.30} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#58585E"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            style={chartStyle}
                            />
                            <p className="text-3xl font-extralight mb-0">Slightly tempted</p>
                            <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 2){

            iconurl = 
            <div className="w-96 items-center flex flex-col">
                <GaugeChart id={this.props.id}
                            nrOfLevels={2} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.50, 0.50]}
                            arcWidth={0.45} 
                            percent={0.50} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#58585E"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            style={chartStyle}
                            />
                            <p className="text-3xl font-extralight mb-0">Somewhat tempted</p>
                            <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 3){
            iconurl = 
            <div className="w-96 items-center flex flex-col">
                <GaugeChart id={this.props.id}
                            nrOfLevels={2} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.70, 0.30]}
                            arcWidth={0.45} 
                            percent={0.70} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#58585E"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            style={chartStyle}
                            />
                            <p className="text-3xl font-extralight mb-0">Very tempted</p>
                            <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 4){
            iconurl = 
            <div className="w-96 items-center flex flex-col">
                <GaugeChart id={this.props.id}
                                nrOfLevels={1} 
                                colors={["#FFAD33", "#ECEFF1"]} 
                                arcsLength={[1.0, 0.0]}
                                arcWidth={0.45} 
                                percent={1.00} 
                                arcPadding={0}
                                cornerRadius={0}
                                textColor={"#000000"}
                                needleColor={"#58585E"}
                                needleBaseColor={"#58585E"}
                                formatTextValue={value => 'Very tempted'}
                                hideText={true}
                                style={chartStyle}
                                />
                                <p className="text-3xl font-extralight mb-0">Extremely - Help! tempted</p>
                                <p className="font-light">to eat in a way not ideal</p>
            </div>
        }
        else {
            iconurl = 
            <div className="w-96 items-center flex flex-col">
                {/* <GaugeChart id="gauge-chart05" */}
                <GaugeChart id={this.props.id}
                                nrOfLevels={1} 
                                colors={["#FFAD33", "#ECEFF1"]} 
                                arcsLength={[0.00, 1.0]}
                                arcWidth={0.45} 
                                percent={0.01} 
                                arcPadding={0}
                                cornerRadius={0}
                                textColor={"#000000"}
                                needleColor={"#58585E"}
                                needleBaseColor={"#58585E"}
                                formatTextValue={value => 'Very tempted'}
                                hideText={true}
                                style={chartStyle}
                                />
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