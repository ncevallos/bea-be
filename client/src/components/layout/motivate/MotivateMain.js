import React from 'react'
import { Component } from 'react';
import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart';
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

<section>
  <div className="flex mx-auto p-4">
      <div className="flex flex-col flex-grow">
          <MotivateHeader />
          <MotivateSections />
      </div>
    </div>
  </section>


    )}
}

export default MotivateMain;