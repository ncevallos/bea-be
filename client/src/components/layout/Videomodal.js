import React from 'react'

class Videomodal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if(!this.props.show){
        return null;
    }
    return (
      <div className="modal2">
      <div>Hello test modal</div>
      <div>
        <button  onClick={this.onClose}  >
          Close
        </button>
      </div>
    </div>

      // <div className="modal" id="modal">
      // <h2>Modal Window</h2>
      // <div className="content">Hello test modal</div>
      // <div className="actions">
      //   <button className="toggle-button" onClick={this.onClose}>
      //     close
      //   </button>
      // </div>
      // </div>
      // <div className="modal">
      // <div className="header"> Modal Title </div>
      // <div className="content">
      //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
      //   Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
      //   delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?</p>
      //   <br />
      //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
      //   commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
      //   explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?</p>
      // </div>
      // </div>
    )
  }
}



export default Videomodal;