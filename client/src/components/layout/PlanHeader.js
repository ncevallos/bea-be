import React from 'react'
import planIllustration from '../../img/plan-illustration.svg';
import arrowRight from '../../img/arrow-right.svg';

class PlanHeader extends React.Component {

  render() {

    console.log("plan mood header has this for props", this.props.results);
    return (
        <div style={{ backgroundImage: "url(" + planIllustration + "), linear-gradient(rgba(177, 201, 243, 0.9), rgba(173, 126, 227, 0.9), rgba(139, 99, 178, 0.9))" }} className="flex rounded-xl mb-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6">
        <div className="mb-4">
            <h3 className="text-sm leading-6 font-medium text-white uppercase font-black tracking-widest mb-1">
                Your Plan Today
            </h3>                        
        </div>
        <div className="flex flex-row w-full justify-between">
            <div className="flex">
                <div className="flex flex-col w-48">
                    <div className="w-24 h-24 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5"></div>
                    <div className="">
                        <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            Your main goal is to eat
                        </h4>
                        <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            smaller amounts and to stop eating when full
                        </h5>
                    </div>
                </div>
            </div>
            <div className="flex w-48">
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5"></div>
                    <div className="">
                        <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            When you feel the urge to eat
                        </h4>
                        <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            take a walk
                        </h5> 
                    </div>
                </div>                            
            </div>
            <div className="flex w-48 justify-end pr-10">
                <img src={arrowRight} alt="arrow right" className="w-24" />
            </div>
        </div>
    </div>


    )
  }
}



export default PlanHeader;