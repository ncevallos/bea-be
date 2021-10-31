import React from 'react';
import aConflict from '../../../img/motivate/a-conflict.png';
import anxious from '../../../img/motivate/anxious.png';
import bored from '../../../img/motivate/bored.png';
import genHungry from '../../../img/motivate/gen-hungry.png';
import sadLonely from '../../../img/motivate/sad-lonely.png';
import somethingElse from '../../../img/motivate/something-else.png';
import workStress from '../../../img/motivate/work-stress.png';
import noEntry from '../../../img/planimgs/no-entry.png';

class MotivateSmiley extends React.Component {
  render() {
    console.log("props in motivate smiley was", this.props)
      let iconurl = "";
    if(this.props.msg === "Genuinely hungry"){

        iconurl = 
        <img className="w-1/2 flex-shrink-0 mx-auto"  src={genHungry} alt="Genuinely hungry" title="Genuinely hungry" />
    }
    else if(this.props.msg === "Sad/Lonely"){
        iconurl = 
        <img className="w-1/2 flex-shrink-0 mx-auto"  src={sadLonely} alt="Sad/Lonely" title="Sad/Lonely" />
    }

    else if(this.props.msg === "A conflict"){
        iconurl = 
        <img className="w-1/2 flex-shrink-0 mx-auto"  src={aConflict} alt="A conflict" title="A conflict" />
    }
    else if(this.props.msg === "Work stress"){
        iconurl = 
        <img className="w-1/2 flex-shrink-0 mx-auto"  src={workStress} alt="Work sress" title="Work sress" />
    }
    else if(this.props.msg === "Bored"){
        iconurl = 
        <img className="w-1/2 flex-shrink-0 mx-auto"  src={bored} alt="Bored" title="Bored" />
    }
    else if(this.props.msg === "Anxious"){
        iconurl = 
        <img className="w-1/2 flex-shrink-0 mx-auto"  src={anxious} alt="Anxious" title="Anxious"  />
    }
    else if(this.props.msg === "Something Else"){
        iconurl = 
        <img className="w-1/2 flex-shrink-0 mx-auto"  src={somethingElse} alt="Something else" title="Something else"  />
    }
    else {
        iconurl = 
        <img src={noEntry} alt="No Entry" title="No Entry" />
    }
    
    return (
        <div >
            {iconurl}
        </div>



    )
  }
}



export default MotivateSmiley;