import React from 'react'
import Chatbot from 'react-chatbot-kit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActionProvider from '../chatbots/motivate/ActionProvider';
import MessageParser from '../chatbots/motivate/MessageParser';
import config from '../chatbots/motivate/config';


export const MotivateChat = ({user}) =>  {

        return (
                    <div className="block w-full h-full">
                        <div className="fixed left-52 top-16 bottom-0 right-0">
                        <Chatbot config={config} actionProvider={ActionProvider}  messageParser={MessageParser} userid={user._id} className="h-full" />
                        </div>
                    </div>

    )
}

MotivateChat.propTypes = {
    user: PropTypes.object.isRequired
    // userlevel: PropTypes.number.isRequired
  };
  
const mapStateToProps = (state) => ({
    user: state.auth.user,
  });

export default connect(mapStateToProps)(MotivateChat);