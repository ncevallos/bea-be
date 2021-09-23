import React from 'react'
import { Component } from 'react';
import Chatbot from 'react-chatbot-kit'


import ActionProvider from '../../chatbots/meditate/ActionProvider';
import MessageParser from '../../chatbots/meditate/MessageParser';
import config from '../../chatbots/meditate/config';

class MeditateChat extends Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
    render() {
    return (

                    <div className="block m-2">
                        <div>
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            
                            <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
                      
                        </nav>
                        </div>
                    </div>
    )}
}

export default MeditateChat;