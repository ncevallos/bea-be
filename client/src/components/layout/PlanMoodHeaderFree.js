import React from 'react'
import smileyIcon from '../../img/smiley-icon.svg';
import smileyIconExtraHappy from '../../img/smiley-icon-extrahappy.svg';
import smileyIconNeutral from '../../img/smiley-icon-neutral.svg';
import smileyIconUnhappy from '../../img/smiley-icon-unhappy.svg';
import smileyIconRound from '../../img/smiley-icon-round.svg';

class PlanMoodHeaderFree extends React.Component {

  render() {
    return (
        <div className="bg-gradient-to-r from-beaLightBlue to-gray-50 plan-interactive-state">
        <div className="sm:p-6 flex-grow">
            <h3 className="text-2xl leading-6 font-thin text-gray-700">
                Get your mood eating trends <br/>
                {/* {planResults[0].howdoyoufeel} */}
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


    )
  }
}



export default PlanMoodHeaderFree;