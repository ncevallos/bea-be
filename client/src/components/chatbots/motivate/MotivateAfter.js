import React from "react";

import "./AreyouReady.css";

const MotivateAfter = (props) => {
  const { setState, actionProvider } = props;
  const setType = async () => {
    setDisable(true)
    actionProvider.motivateAfter();
  };
  const [disable, setDisable] = React.useState(false);


  return <div className="learning-options-container">
  <button
    className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
    disabled={disable}
    onClick={() => setType()}
  >
    Move Forward
  </button>
    </div>;
};

export default MotivateAfter;