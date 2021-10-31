import React, {useState} from 'react'
import Calendar from 'react-calendar';
import { useHistory } from 'react-router-dom';

//import './styles.css'
import '../../../Calendar.css'
import moment from 'moment';



export const CalendarPage = (props) =>  {


  let history = useHistory();

  const [value] = useState(new Date());

// Accepts a Date object or date string that is recognized by the Date.parse() method
  // function getDayOfWeek(date) {
  //   const months = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December'
  //   ]

  //   let month = parseInt(date.substring(6,8), 10)-1;
    
  //   let year = date.substring(1,5);
  //   let day = date.substring(9,11).concat(',');
  //   let d = months[month]+ " " + day + " " + year;
  //   const dateTemp = new Date(d);
  //   console.log("what is date temp log for", dateTemp);
  //   return 'lit';
  // }

     // console.log("Match found!!!!!");

  function tileClassName({date, view}) {

    if (props.dates.find(dDate => dDate === date.toString('yyyy-MM-dd'))) {
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
  //  console.log('value in onclick is', value);
  }
  function onClickDay(value, event) {
    let now = new Date();
    if(value <= now){
        // code to direct user to the daily page will be inserted here
        //need to first check if data was entered for that day, if not do nothing
    let newLocation = 'PlanDaily/' + moment(value).format('LL');
    //console.log('new location has this', newLocation);
    //alert('Redirect to ', newLocation);

      history.push(newLocation)
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
      activeStartDate={new Date(new Date().setDate(new Date().getDate() - 14))}
      showFixedNumberOfWeeks={true}
      value={value}
      tileClassName={tileClassName}
      onClick={onClick}
      onClickDay={onClickDay}
      showNavigation={false}
      // onViewChange={false}
      onChange={onChange}
      onActiveStartDateChange={onActiveStartDateChange}
      minDetail="month" 
   //   defaultActiveStartDate={activeStartDate}
    />
  );

}



export default CalendarPage;

