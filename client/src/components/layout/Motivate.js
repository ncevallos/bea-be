import React from 'react'
import { Component } from 'react';
import Testpopuptwo from "./Testpopuptwo"; 
import Videomodal from './Videomodal';
import Videoselection from './Videoselection';
import Chatbot from 'react-chatbot-kit'


import ActionProvider from '../chatbots/motivate/ActionProvider';
import MessageParser from '../chatbots/motivate/MessageParser';
import config from '../chatbots/motivate/config';

class Motivate extends Component {
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

                    <div className="block">
                        <div>
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            
                            <p>This is the Motivate Page</p>
                            <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
                            {/* <Testpopuptwo/>
                            <button  onClick={e => {
                                this.showModal();
                            }}
                            > show Modal </button> */}
                            {/* <Videoselection  onClick={e => {
                                this.showModal();
                            }} /> */}
                            {/* <Videomodal onClose={this.showModal} show={this.state.show} /> */}
                        </nav>
                        </div>
                    </div>
    )}
}

export default Motivate;