import React from 'react'
import { Component } from 'react';
import MotivateSections from './MotivateSections';
import MotivateHeader from './MotivateHeader';

class MotivateMain extends Component {
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

<section className="flex flex-col mt-gutter mx-gutter">
    <div className="flex">
      <div className="flex flex-col flex-grow">
          <MotivateHeader />
          <MotivateSections />
        </div>
        <div className="flex flex-shrink-0 ml-gutter w-promo">
            <div className="flex justify-center items-center w-full h-72 rounded-md bg-gray-300 w-full p-2">
                <button type="button" className="relative inline-flex items-center px-6 py-2 shadow-none text-sm font-medium rounded-full text-beaDarkPurple hover:bg-beaDarkPurple hover:text-white transition-all border-t border-b border-l border-r border-beaDarkPurple group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                Call to Action
                </button>
            </div>
        </div>    
    </div>

  </section>


    )}
}

export default MotivateMain;