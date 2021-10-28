import React from 'react'
import ReactPlayer from "react-player"

class Videomodal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if(!this.props.show){
        return null;
    }
    return (
      <div className="modal3">
        <div className="modal-content3">
          <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={this.props.vidurl}
            controls = "true"
            width="100%"
            height="100%"
          />
          </div>
      <div>
      Video Title: {this.props.title}<br/>
      Length: {this.props.length}<br/>
      </div>
      <div>
        <button  onClick={this.onClose}  >
          Close
        </button>
      </div>
    </div>
      </div>

    )
  }
}



export default Videomodal;