import React, {Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import PlanSmiley from './PlanSmiley';
import PlanIcons from './PlanIcons';


// export const PlanMonthlyLineItem = (props) => {
  class PlanMonthlyLineItem extends React.Component {
    constuctor() {
        this.GoToDate = this.GoToDate.bind(this);
      }
      state = {
          redirect: false
      }
      GoToDate = (date) => {
        console.log('in go to date', date);
      //  alert("you clicked on", date)
        let url = '/PlanDaily/' + date;
        console.log("url contains", url);
        // let history = useHistory();
    //  <Redirect to={url}/>
     <Redirect to='/PlanMain'/>
     this.setState({redirect: true })
    }


    render() {
   let lineItem;
   let today = (moment(this.props.date).format('MMMM-DD-YYYY'));
   const { redirect } = this.state;
       
   if (redirect) {
    let url = '/PlanDaily/' + today;
       return <Redirect push to={url}/>
    //    return <Redirect push to="/PlanDaily"/>
   }
   if(this.props.userSubmission){
        lineItem =    
        // <Link to ={'/PlanDaily/' + moment(this.props.date).format('MMMM-DD-YYYY')}>
        // <div onClick={this.GoToDate(today)}>
      //  <tr key={this.props._id} onClick={e => this.GoToDate(today)}>
        <tr key={this.props._id} onClick={e => this.GoToDate(today)}>
        <td className="px-6 py-4">
            <div className="flex items-center">
                <div className="flex flex-col items-center w-12">
                        <div className="text-xs font-light text-gray-700">
                            {/* Need to implement a check for if today write today */}
                        {moment(this.props.date).format('ddd')}
                        </div>
                        <div className="text-3xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                        {moment(this.props.date).format('D')}
                        </div>
                </div>
                <div className="flex ml-4 items-center justify-center">
                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                        <div className="w-12"><PlanIcons msg={this.props.plangoal} /></div>
                    </span>
                    <div>
                        <div className="text-sm font-light text-gray-700">
                        Your main goal is to eat
                        </div>
                        <div className="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                        {this.props.plangoal} and<br/>
                        {this.props.plangoal2}
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td className="px-2 py-4">
            <div className="flex items-center">
                <div className="flex ml-4 items-center justify-center">
                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                        <div className="w-12"><PlanIcons msg={this.props.plangoal5} /></div>
                    </span>
                    <div>
                        <div className="text-sm font-light text-gray-700">
                            When you feel the urge to eat
                        </div>
                        <div className="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                        {this.props.plangoal5}
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            {/* <img src={smileyIconUnhappyRound} alt="Unhappy Smiley Icon" className="w-14" />
             */}
             <div className="w-12"><PlanSmiley mood={this.props.howdoyoufeel}/></div>
        </td>
    </tr>
    // </div>
    //   </Link>
   } else {
    lineItem =    
        <tr key={this.props._id}>
        <td className="px-6 py-4">
            <div className="flex items-center">
                <div className="flex flex-col items-center w-12">
                        <div className="text-xs font-light text-gray-700">
                            {/* Need to implement a check for if today write today */}
                        {moment(this.props.date).format('ddd')}
                        </div>
                        <div className="text-3xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                        {moment(this.props.date).format('D')}
                        </div>
                </div>
                <div className="flex ml-4 items-center justify-center">
                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                        <div className="w-12"><PlanIcons msg={this.props.plangoal} /></div>
                    </span>
                    <div>
                        <div className="text-sm font-light text-gray-700">
                        </div>
                        <div className="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                        Skipped Day
                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>

    }
    return (
            <Fragment>
                {lineItem}
                </Fragment>
    )
}
  }

export default PlanMonthlyLineItem;