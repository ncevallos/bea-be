import React from 'react'
import Chatbot from 'react-chatbot-kit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActionProvider from '../chatbots/plan/ActionProvider';
import MessageParser from '../chatbots/plan/MessageParser';
import config from '../chatbots/plan/config';


export const PlanChat = ({user}) =>  {

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

PlanChat.propTypes = {
    user: PropTypes.object.isRequired
    // userlevel: PropTypes.number.isRequired
  };
  
const mapStateToProps = (state) => ({
    user: state.auth.user,
  });

export default connect(mapStateToProps)(PlanChat);