import React from 'react'
import Chatbot from 'react-chatbot-kit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActionProvider from '../chatbots/plan/ActionProvider';
import MessageParser from '../chatbots/plan/MessageParser';
import config from '../chatbots/plan/config';


export const Plan2 = ({user}) =>  {
        console.log("USer level contains", user.userlevel);
        console.log("USer contains", user);
        if (user.userlevel === 1){
            console.log("Paid User");
        }
        if(user.userlevel === 0){
            console.log("Free User");
        }
        // const levelone = (
        //     //Should print if userlevel is 0 - only checks to see if user variable exists not which level it is
        //     //this should print if free but changed for demo
        //     // <div><h1>YOU ARE A FREE USER</h1></div>
        //     <div><h1>YOU ARE A PAID USER</h1></div>
        // );
        // const leveltwo = (
        //     //Should print if userlevel is 1 
        //     //this should print if free but changed for demo
        //     // <div><h1>YOU ARE A PAID USER</h1></div>            
        //     <div><h1>YOU ARE NOT LOGGED IN</h1></div>
        // );
        return (
                    <div className="block w-full h-full">
                        <div className="fixed left-52 top-16 bottom-0 right-0">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {/* { (<div>{ user ? levelone : leveltwo }</div>)} */}
                        </nav>

                        <Chatbot config={config} actionProvider={ActionProvider}  messageParser={MessageParser} userid={user._id} className="h-full" />
                        {/* <button class="circle-div">HI</button> */}
                        </div>
                    </div>

    )
}

Plan2.propTypes = {
    user: PropTypes.object.isRequired
    // userlevel: PropTypes.number.isRequired
  };
  
const mapStateToProps = (state) => ({
    user: state.auth.user,
  });

export default connect(mapStateToProps)(Plan2);