import React from 'react'
import smileyIconGreat from '../../../img/planimgs/icon-great.png';
import smileyIconPrettyGood from '../../../img/planimgs/icon-prettygood.png';
import smileyIconHorrible from '../../../img/planimgs/icon-horrible.png';
import smileyIconNotGood from '../../../img/planimgs/icon-notgood.png';
import noEntry from '../../../img/planimgs/no-entry.png';

class PlanSmiley extends React.Component {

  render() {
      let iconurl = "";
    if(this.props.mood === "Great" || this.props.mood === "great" ){

        iconurl = 
        <img src={smileyIconGreat} alt="Great Smiley Icon" title="Great Smiley Icon" className="w-full" />
    }
    else if(this.props.mood === "Good" || this.props.mood === "good"){

        iconurl = 
        <img src={smileyIconPrettyGood} alt="Pretty Good Smiley Icon" title="Pretty Good Smiley Icon" className="w-full" />
    }
    else if(this.props.mood === "Not good" || this.props.mood === "not good"){

        iconurl = 
        <img src={smileyIconNotGood} alt="Not Good Smiley Icon" title="Not Good Smiley Icon" className="w-full" />
    }
    else if(this.props.mood === "Horrible" || this.props.mood === "horrible"){
        iconurl = 
        <img src={smileyIconHorrible} alt="Horrible Smiley Icon" title="Horrible Smiley Icon" className="w-full" />
    }
    else {
        iconurl = 
        <img src={noEntry} alt="No Entry Icon" title="No Entry Icon" className="w-full" />
    }
    
    return (
        <div className="w-full">
            {iconurl}
        </div>

    )
  }
}



export default PlanSmiley;