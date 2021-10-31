import React from "react";

import "./AreyouReady.css";

const Begin2 = (props) => {
  const { actionProvider } = props;
  const setType = async () => {
    setDisable(true)
    actionProvider.handleLetsBegin();
  };
  const [disable, setDisable] = React.useState(false);


  return <div className="learning-options-container">
  <button
    className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
    disabled={disable}
    onClick={() => setType()}
  >
    Yes
  </button>
    </div>;
};

export default Begin2;