import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import { differenceInCalendarDays, format } from 'date-fns';
import parseISO from 'date-fns/parseISO';

const datesToAddClassTo = ["Sun May 02 2021 00:00:00 GMT-0400"];
const dateFormat = "yyyy";
function isSameDay(a, b) {
    console.log("a contains", a);
    // format(a, dateFormat);
    // console.log("a now contains", a);
    console.log("b contains", b);
    // format(b, dateFormat);
    let test = parseISO(b);
    console.log("b now contains", test);
    return differenceInCalendarDays(a, b) === 0;
  }
  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
        console.log("date in tileclass function is", date);
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
        return 'myClassName';
      }
    }
  }


export const CalendarPage = ({user, userlevel}) =>  {
        console.log("USer level contains", userlevel);
        console.log("USer contains", user);
        if (userlevel === '1'){
            console.log("Paid User");
        }
        if(userlevel === '0'){
            console.log("Free User");
        }
        const levelone = (
            //Should print if userlevel is 0 - only checks to see if user variable exists not which level it is
            //this should print if free but changed for demo
            // <div><h1>YOU ARE A FREE USER</h1></div>
            <div><h1>YOU ARE A PAID USER</h1></div>
        );
        const leveltwo = (
            //Should print if userlevel is 1 
            //this should print if free but changed for demo
            // <div><h1>YOU ARE A PAID USER</h1></div>            
            <div><h1>YOU ARE NOT LOGGED IN</h1></div>
        );
        return (
                    <div className="block">
                        <div>
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        { (<div>{ user ? levelone : leveltwo }</div>)}
                        </nav>
                        Test if page working
                        <Calendar
                        tileClassName={tileClassName}
                        />
                        {/* <button class="circle-div">HI</button> */}
                        </div>
                    </div>

    )
}

CalendarPage.propTypes = {
    user: PropTypes.object.isRequired,
    userlevel: PropTypes.number.isRequired
  };
  
const mapStateToProps = (state) => ({
    user: state.auth.user,
  });

export default connect(mapStateToProps)(CalendarPage);