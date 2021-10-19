import React from 'react';
// import differentFoods from '../../../img/planimgs/different-foods.png';
// import meditate from '../../../img/planimgs/meditate.png';
// import read from '../../../img/planimgs/read.png';
// import smallerAmounts from '../../../img/planimgs/smaller-amounts.png';
// import noEntry from '../../../img/planimgs/no-entry.png';
// import somethingElse from '../../../img/planimgs/something-else.png';
// import somethingSmall from '../../../img/planimgs/somethingsmall.png';
// import takeAWalk from '../../../img/planimgs/take-a-walk.png';
import differentFoods from '../../../img/planimgs/differentFoods.png';
import meditate from '../../../img/planimgs/MeditateN.png';
import read from '../../../img/planimgs/readN.png';
import smallerAmounts from '../../../img/planimgs/smallerAmount.png';
import noEntry from '../../../img/planimgs/no-entry.png';
import somethingElse from '../../../img/planimgs/somethingElse.png';
import somethingElse2 from '../../../img/planimgs/somethingElse.png';
import somethingSmall from '../../../img/planimgs/EatSomethingSmall.png';
import takeAWalk from '../../../img/planimgs/take-a-walk.png';

import fewerCalories from '../../../img/planimgs/fewerCalories.png';
import somethingEmotional from '../../../img/planimgs/somethingEmotional.png';
import somethingPhysical from '../../../img/planimgs/somethingPhysical.png';
import talkToAFriend from '../../../img/planimgs/talkToAFriend.png';
import StopWhenFull from '../../../img/planimgs/StopWhenFull.png';
import MoreFillingFoods from '../../../img/planimgs/MoreFillingFoods.png';
import lessFat from '../../../img/planimgs/lessFat.png';
import lessSugar from '../../../img/planimgs/lessSugar.png';
import lessCarbs from '../../../img/planimgs/lessCarbs.png';

class PlanIconsSmall extends React.Component {

  render() {
      let iconurl = "";
    if(this.props.msg === "Different foods"){

        iconurl = 
        <img src={differentFoods} alt="Different foods" title="Different foods"className="w-5" />
    }
    else if(this.props.msg === "Smaller Amounts"){
        iconurl = 
        <img src={smallerAmounts} alt="Smaller Amounts" title="Smaller Amounts" className="w-5"/>
    }

    else if(this.props.msg === "Stop when full"){
        iconurl = 
        <img src={StopWhenFull} alt="Stop when full" title="Stop when full" className="w-5"/>
    }
    else if(this.props.msg === "More filling foods"){
        iconurl = 
        <img src={MoreFillingFoods} alt="More filling foods" title="More filling foods" className="w-5"/>
    }
    else if(this.props.msg === "Less fat"){
        iconurl = 
        <img src={lessFat} alt="Less fat" title="Less fat" className="w-5"/>
    }
    else if(this.props.msg === "Less sugar"){
        iconurl = 
        <img src={lessSugar} alt="Less sugar" title="Less sugar"  className="w-5"/>
    }
    else if(this.props.msg === "Fewer carbs"){
        iconurl = 
        <img src={lessCarbs} alt="Fewer carbs" title="Fewer carbs"  className="w-5"/>
    }
    else if(this.props.msg === "Fewer Calories"){
        iconurl = 
        <img src={fewerCalories} alt="Fewer Calories" title="Fewer Calories" className="w-5"/>
    }



    else if(this.props.msg === "Something Else"){
        iconurl = 
        <img src={somethingElse2} alt="Something else" title="Something else" className="w-5" />
    }
    else if(this.props.msg === "Take a walk"){
        iconurl = 
        <img src={takeAWalk} alt="Take a walk" title="Take a walk" className="w-5" />
    }
    else if(this.props.msg === "Meditate"){
        iconurl = 
        <img src={meditate} alt="Meditate" title="Meditate" className="w-5" />
    }
    else if(this.props.msg === "Talk to a friend"){
        iconurl = 
        <img src={talkToAFriend} alt="Talk to a friend" title="Talk to a friend" className="w-5" />
    }
    else if(this.props.msg === "Eat something small"){
        iconurl = 
        <img src={somethingSmall} alt="Eat something small" title="Eat something small" className="w-5"/>
    }
    else if(this.props.msg === "Read"){
        iconurl = 
        <img src={read} alt="Read" title="Read" className="w-5" />
    }
    else if(this.props.msg === "Something else"){
        iconurl = 
        <img src={somethingElse} alt="Something else" title="Something else" className="w-5" />
    }
    else if(this.props.msg === "Something emotional"){
        iconurl = 
        <img src={somethingEmotional} alt="Something emotional" title="Something emotional" className="w-5" />
    }
    else if(this.props.msg === "Something physical"){
        iconurl = 
        <img src={somethingPhysical} alt="Something physical" title="Something physical" className="w-5" />
    }
    else {
        iconurl = 
        <img src={noEntry} alt="No Entry" title="No Entry" className="w-5" />
    }
    
    return (
        <div className="w-full">
            {iconurl}
        </div>



    )
  }
}



export default PlanIconsSmall;