import React, {useState} from 'react'
import Calendar from 'react-calendar';
//import './styles.css'
import '../../../Calendar.css'
import { format, compareAsc, isMonday } from 'date-fns'



//const datesToAddClassTo = ["Sun Jun 06 2021 00:00:00 GMT-0400"];
// const datesToAddClassTo = ["Sun Jun 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)"];
// //const dateFormat = "yyyy";
// function isSameDay(a, b) {
//     //console.log("a contains", a);
//     // format(a, dateFormat);
//     // console.log("a now contains", a);
//     //console.log("b contains", b);
//     // format(b, dateFormat);
//     // let test = parseISO(b);
//     // console.log("b now contains", test);
//     return a === b
//   }
//   function tileClassName(date, view ) {
//     console.log('date and view = ', date, view);
//     // Add class to tiles in month view only
//     if (view === 'month') {
//         //console.log("date in tileclass function is", date);
//       // Check if a date React-Calendar wants to check is on the list of dates to add class to
//       if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
//         console.log("Match found!");
//         return 'myClassName';
//       }
//     }
//     return 'myClassName';
//   }


export const CalendarPage = () =>  {
  const dates = ["Thu May 06 2021 00:00:00 GMT-0400 (Eastern Daylight Time)", "Fri May 07 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
  "Fri May 21 2021 00:00:00 GMT-0400 (Eastern Daylight Time)"];
  const [value, setValue] = useState(new Date());

  function parseDate (date) {
    let newDate;
  }
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
   // console.log(dateTemp);
    return 'lit';
  }

  function tileClassName({date, view}) {

    getDayOfWeek("<2021-07-24THH:MM:ssZ>");
    if (dates.find(dDate => dDate === date.toString())) {
  //    console.log("Match found!!!!!");
      return 'myClassName';
    }
   
  }
  
  function onChange(nextValue) {
  }

  return (
    <Calendar
      onChange={onChange}
      value={value}
      tileClassName={tileClassName}
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

