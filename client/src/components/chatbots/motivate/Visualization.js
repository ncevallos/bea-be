import React from "react";

import "./AreyouReady.css";

const Visualization = (props) => {
  const { setState, actionProvider } = props;
  const setType = async () => {
    setDisable(true)
    actionProvider.visualization();
  };
  const [disable, setDisable] = React.useState(false);

  return <div className="learning-options-container">
  <button
    className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
    disabled={disable}
    onClick={() => setType()}
  >
    Do Visualization
  </button>
    </div>;
};

export default Visualization;