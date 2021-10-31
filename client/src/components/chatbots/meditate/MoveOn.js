import React from "react";

import "./AreyouReady.css";

const MoveOn = (props) => {
  const { actionProvider } = props;
  const setType = async () => {
    setDisable(true)
    actionProvider.endChoices();
  };
  const [disable, setDisable] = React.useState(false);


  return <div className="learning-options-container">
  <button
    className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
    disabled={disable}
    onClick={() => setType()}
  >
    Move On
  </button>
    </div>;

};

export default MoveOn;