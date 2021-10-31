import React from "react";

import "./AreyouReady.css";

const StartMindfulness = (props) => {

  const { setState, actionProvider } = props;
  const setType = async () => {
    setDisable(true)
    actionProvider.mindfulness();
  };
  const [disable, setDisable] = React.useState(false);


  return <div className="learning-options-container">
  <button
    className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
    disabled={disable}
    onClick={() => setType()}
  >
    Mindfulness Exercise
  </button>
    </div>;
};

export default StartMindfulness;