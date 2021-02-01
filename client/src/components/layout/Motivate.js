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
        <section >
        <div className="flex-grow w-full mx-auto lg:px-0 flex">
        <div className="flex-1 min-w-0 lg:flex">
        <div className="bg-white lg:min-w-0 lg:flex-1 z-20 lg:ml-52 mt-16">

            <div className="flex md:flex justify-center mt-0">
            <div className="flex flex-col min-w-0 items-center mt-0">

            </div>
            </div>
                <div className="flex px-6 py-6">
                <div className="flex flex-col w-full">


                    <div className="mb-2">
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
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    )}
}

export default Motivate;