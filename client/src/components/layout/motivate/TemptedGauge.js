import React from 'react'
import noEntry from '../../../img/planimgs/no-entry.png';
import { Fragment } from 'react';
import GaugeChart from 'react-gauge-chart';

class TemptedGauge extends React.Component {
    render() {
        console.log("tempted gauage contains", this.props)
        let iconurl = "";
        if(this.props.avgTemptationLvl === 0 ){

            iconurl = 
            <div className="w-96 items-center">
                <GaugeChart id="gauge-chart3"
                            nrOfLevels={1} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.0, 1.0]}
                            arcWidth={0.45} 
                            percent={0.0} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#CFD8DC"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            />
                            <p className="text-xl">Not at all tempted</p>
                            <p>to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 1){

            iconurl = 
            <div className="w-96 items-center">
                <GaugeChart id="gauge-chart3"
                            nrOfLevels={2} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.30, 0.70]}
                            arcWidth={0.45} 
                            percent={0.30} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#CFD8DC"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            />
                            <p className="text-xl">Slightly tempted</p>
                            <p>to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 2){

            iconurl = 
            <div className="w-96 items-center">
                <GaugeChart id="gauge-chart3"
                            nrOfLevels={2} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.50, 0.50]}
                            arcWidth={0.45} 
                            percent={0.50} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#CFD8DC"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            />
                            <p className="text-xl">Somewhat tempted</p>
                            <p>to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 3){
            iconurl = 
            <div className="w-96 items-center">
                <GaugeChart id="gauge-chart3"
                            nrOfLevels={2} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.70, 0.30]}
                            arcWidth={0.45} 
                            percent={0.70} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#CFD8DC"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            />
                            <p className="text-xl">Very tempted</p>
                            <p>to eat in a way not ideal</p>
            </div>
        }
        else if(this.props.avgTemptationLvl === 4){
            iconurl = 
            <div className="w-96 items-center">
                <GaugeChart id="gauge-chart3"
                                nrOfLevels={1} 
                                colors={["#FFAD33", "#ECEFF1"]} 
                                arcsLength={[1.0, 0.0]}
                                arcWidth={0.45} 
                                percent={1.00} 
                                arcPadding={0}
                                cornerRadius={0}
                                textColor={"#000000"}
                                needleColor={"#58585E"}
                                needleBaseColor={"#CFD8DC"}
                                formatTextValue={value => 'Very tempted'}
                                hideText={true}
                                />
                                <p className="text-xl">Extremely - Help! tempted</p>
                                <p>to eat in a way not ideal</p>
            </div>
        }
        else {
            iconurl = 
            <img src={noEntry} alt="No Entry Icon" title="No Entry Icon" className="w-100" />
        }
        
        return (
            <Fragment>
                {iconurl}
            </Fragment>

        )
    }
    }



export default TemptedGauge;