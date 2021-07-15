import React from 'react';
import differentFoods from '../../img/planimgs/different-foods.png';
import meditate from '../../img/planimgs/meditate.png';
import read from '../../img/planimgs/read.png';
import smallerAmounts from '../../img/planimgs/smaller-amounts.png';
import noEntry from '../../img/planimgs/no-entry.png';
import somethingElse from '../../img/planimgs/something-else.png';
import somethingSmall from '../../img/planimgs/somethingsmall.png';
import takeAWalk from '../../img/planimgs/take-a-walk.png';

class PlanIconsDash extends React.Component {

  render() {
      let iconurl = "";
    if(this.props.msg === "Different foods"){

        iconurl = 
        <img src={differentFoods} alt="Different foods" title="Different foods" className="w-100" />
    }
    else if(this.props.msg === "Meditate"){

        iconurl = 
        <img src={meditate} alt="Meditate" title="Meditate" className="w-100" />
    }
    else if(this.props.msg === "Read"){

        iconurl = 
        <img src={read} alt="Read" title="Read" className="w-100" />
    }
    else if(this.props.msg === "Smaller Amounts"){
        iconurl = 
        <img src={smallerAmounts} alt="Smaller Amounts" title="Smaller Amounts" className="w-100" />
    }
    else if(this.props.msg === "Eat something small"){

        iconurl = 
        <img src={somethingSmall} alt="Eat something small" title="Eat something small" className="w-100" />
    }
    else if(this.props.msg === "Something else"){

        iconurl = 
        <img src={somethingElse} alt="Something else" title="Something else" className="w-100" />
    }
    else if(this.props.msg === "Take a walk"){
        iconurl = 
        <img src={takeAWalk} alt="Take a walk" title="Take a walk" className="w-100" />
    }
    else {
        iconurl = 
        <img src={noEntry} alt="No Entry" title="No Entry" className="w-100" />
    }
    
    return (
        <div>
            {iconurl}
        </div>



    )
  }
}



export default PlanIconsDash;