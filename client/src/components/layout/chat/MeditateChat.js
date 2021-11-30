import React from 'react'
import Chatbot from 'react-chatbot-kit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActionProvider from '../chatbots/meditate/ActionProvider';
import MessageParser from '../chatbots/meditate/MessageParser';
import config from '../chatbots/meditate/config';


export const MeditateChat = ({user}) =>  {

        return (
                    <div className="block w-full h-full">
                        <div className="fixed left-52 top-16 bottom-0 right-0">
                        <Chatbot config={config} actionProvider={ActionProvider}  messageParser={MessageParser} userid={user._id} className="h-full" />
                        </div>
                    </div>

    )
}

MeditateChat.propTypes = {
    user: PropTypes.object.isRequired
    // userlevel: PropTypes.number.isRequired
  };
  
const mapStateToProps = (state) => ({
    user: state.auth.user,
  });

export default connect(mapStateToProps)(MeditateChat);