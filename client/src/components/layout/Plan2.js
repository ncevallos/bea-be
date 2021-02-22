import React from 'react'
import Chatbot from 'react-chatbot-kit';
import Popup from 'reactjs-popup';
import chatbubble from '../../img/chat-icon.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import ActionProvider from '../chatbots/plan/ActionProvider';
import MessageParser from '../chatbots/plan/MessageParser';
import config from '../chatbots/plan/config';


export const Plan2 = ({user, userlevel}) =>  {
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
                        <Popup trigger={<button className="circle-div"><img className="chatbubble" src={chatbubble} alt="Workflow" /></button>} position="top right">
                        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
                        </Popup>
                        {/* <button class="circle-div">HI</button> */}
                        </div>
                    </div>

    )
}

Plan2.propTypes = {
    user: PropTypes.object.isRequired,
    userlevel: PropTypes.number.isRequired
  };
  
const mapStateToProps = (state) => ({
    user: state.auth.user,
  });

export default connect(mapStateToProps)(Plan2);