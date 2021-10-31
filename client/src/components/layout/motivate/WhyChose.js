import React from 'react'
import { Fragment } from 'react';
import MotivateIcons from './MotivateIcons';

class WhyChose extends React.Component {
    render() {
        // console.log("why chose component contains", this.props)
        let iconurl = "";
        const chartStyle={
            height: 250,
        }     
        if(this.props.whyHungry === 'Genuinely hungry' ){

            iconurl = 
            <div className="w-96 items-center">
            <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                <div className="w-12"> <MotivateIcons msg={this.props.whyHungry} /></div>
            </span>
                <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.whyHungry}</h2>
            </div>
        }
        else if(this.props.whyHungry === 'Sad/Lonely' ){
            iconurl = 
            <div className="w-96 items-center">
            <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                <div className="w-12"> <MotivateIcons msg={this.props.whyHungry} /></div>
            </span>
                <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.whyHungry}</h2>
            </div>
        }
        else if(this.props.whyHungry === 'The same' ){

            iconurl = 
            <div className="w-96 items-center">
            <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                <div className="w-12"> <MotivateIcons msg={this.props.whyHungry} /></div>
            </span>
                <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.whyHungry}</h2>
            </div>
        }
        else if(this.props.whyHungry === 'A conflict' ){
            iconurl = 
            <div className="w-96 items-center">
            <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                <div className="w-12"> <MotivateIcons msg={this.props.whyHungry} /></div>
            </span>
                <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.whyHungry}</h2>
            </div>
        }
        else if(this.props.whyHungry === 'Work stress' ){
            iconurl = 
            <div className="w-96 items-center">
            <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                <div className="w-12"> <MotivateIcons msg={this.props.whyHungry} /></div>
            </span>
                <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.whyHungry}</h2>
            </div>
        }
        else if(this.props.whyHungry === 'Bored' ){
            iconurl = 
            <div className="w-96 items-center">
            <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                <div className="w-12"> <MotivateIcons msg={this.props.whyHungry} /></div>
            </span>
                <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.whyHungry}</h2>
            </div>
        }
        else if(this.props.whyHungry === 'Anxious' ){
            iconurl = 
            <div className="w-96 items-center">
            <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                <div className="w-12"> <MotivateIcons msg={this.props.whyHungry} /></div>
            </span>
                <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.whyHungry}</h2>
            </div>
        }
        else if(this.props.whyHungry === 'Something else' ){
            iconurl = 
            <div className="w-96 items-center">
            <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                <div className="w-12"> <MotivateIcons msg={this.props.whyHungry} /></div>
            </span>
                <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                <h2 className="mt-0 text-gray-700 text-3xl font-light">{this.props.whyHungry}</h2>
            </div>
        }
        else {
            iconurl = 
            <div className="w-96 items-center">
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



export default WhyChose;