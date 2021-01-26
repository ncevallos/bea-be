import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import  Videomodal  from './Videomodal';
import Videoselection from './Videoselection';


export const Testpopuptwo = () => {
    return (
            <Popup
            trigger={<button className="button"> Open Modal </button>}
            // trigger={<Videoselection title="test" length="5" />}
            modal
            nested
        >
            {close => (
        <div className="modal2">
        <div className="header"> Modal Title </div>
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?</p>
        </div>
        </div>
            )}
        </Popup>
    )
}

export default Testpopuptwo;