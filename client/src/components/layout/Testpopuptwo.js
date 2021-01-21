import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Videomodal } from './Videomodal';
import Videoselection from './Videoselection';


export const Testpopuptwo = () => {
    return (
            <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            nested
        >
            {close => (
            <Videomodal/>
            )}
        </Popup>
    )
}

export default Testpopuptwo;