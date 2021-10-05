import React, {useState} from 'react'
import Calendar from 'react-calendar';
//import {Navigation} from 'react-router';
import { browserHistory, useHistory, Redirect } from 'react-router';
//import { useHistory } from "react-router-dom";

//import './styles.css'
import '../../../Calendar.css'
import moment from 'moment';



export const CalendarPage = (props) =>  {
//  console.log('props in calendar.js has', props);
//  let testString = props.dates[0].[2].toString();
 //console.log('test subject will be', props.dates[2]);
 // console.log("test string contains", testString);
  // "2021-08-02T04:00:00.000Z"
  
  // const dates2 = []
  // for (let i = 0; i < props.dates[0].length; i++) {

  //   dates2.push(props.dates[0].[i]);
  // //  console.log("this was pushed", props.dates[0].[i]);
  // }
  const dates = ["2021-08-02T04:00:00.000Z", "Thu Aug 05 2021 00:00:00 GMT-0400 (Eastern Daylight Time)", "Fri Aug 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
  "Fri Aug 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)"];
  // console.log('test subject2 will be', dates[2]);
  const [value, setValue] = useState(new Date());

  // function parseDate (date) {
  //   let newDate;
  // }
// Accepts a Date object or date string that is recognized by the Date.parse() method
  function getDayOfWeek(date) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    let month = parseInt(date.substring(6,8), 10)-1;
    
    let year = date.substring(1,5);
    let day = date.substring(9,11).concat(',');
    let d = months[month]+ " " + day + " " + year;
    const dateTemp = new Date(d);
    console.log("what is date temp log for", dateTemp);
    return 'lit';
  }

  function tileClassName({date, view}) {

    if (props.dates.find(dDate => dDate === date.toString('yyyy-MM-dd'))) {
     // console.log("Match found!!!!!");
      let matchLocation = props.dates.indexOf(date.toString('yyyy-MM-dd'));
      let moodValue = props.values[matchLocation];
      switch(moodValue){
      case 4:
        return 'exhappy';
      case 3:
        return 'happy';
      case 2:
        return 'notgood';
      case 1:
          return 'sad';
      case 0:
        return  'horrible'
      default:
        return
      }
    }
  }
  function onClick(value) {
  //  console.log('valeu in onclick is', value);
  //  alert('Will send you to Plan Daily with the follow date ', value)
  }
  function onClickDay(value, event) {
    let now = new Date();
    if(value <= now){
        // code to direct user to the daily page will be inserted here
        //need to first check if data was entered for that day, if not do nothing
    //alert('Will send you to Plan Daily with the following date '+ moment(value).format('MMMM-DD-YYYY') )
    let newLocation = 'PlanDaily/' + moment(value).format('MMMM-DD-YYYY');
    console.log('new location has this', newLocation);
    alert('Redirect to ', newLocation);
    //browserHistory.push({newLocation});
   // browserHistory.push('/PlanDaily');

   // this.context.router.push('/PlanDaily');
   // <Redirect to="{newLocation}" />
  //  <Redirect push to={`/${newLocation}`} />
      <Redirect to='/PlanDaily' />
  //let history = useHistory();
    //history.push('/PlanDaily')
    }
    else {

      alert('This date has not happened yet')
    }
  }
  function onChange(value, event) {
    //  alert('in onChange ')
     // console.log('in onchange action', arguments);
  }
  function onActiveStartDateChange({ action, activeStartDate, value, view })
{
  //console.log('onActiveStartDateChange args', arguments);
}
  return (
    <Calendar
 //     onChange={onChange}
      activeStartDate={new Date(new Date().setDate(new Date().getDate() - 30))}
      showFixedNumberOfWeeks={5}
      value={value}
      tileClassName={tileClassName}
      onClick={onClick}
      onClickDay={onClickDay}
      showNavigation={false}
      onViewChange={false}
      onChange={onChange}
      onActiveStartDateChange={onActiveStartDateChange}
      minDetail="month" 
   //   defaultActiveStartDate={activeStartDate}
    />
  );




    //     return (
    //                 <div className="block">
    //                     <div>
    //                     Test if page working
    //                     <Calendar
    //                     tileClassName={tileClassName}
    //                     />
    //                     {/* <button class="circle-div">HI</button> */}
    //                     </div>
    //                 </div>

    // )
}



export default CalendarPage;

