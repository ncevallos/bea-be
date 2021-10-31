import React from "react";

import "./AreyouReady.css";

const FeelBest1 = (props) => {

  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    actionProvider.feelBest3();
  };
  const [disable, setDisable] = React.useState(false);


  return  (
    <div className="learning-options-container">
      <button
        className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
        disabled={disable}
        onClick={() => setType()}
      >
        Planning Phase
      </button>
      <button
        className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
        disabled={disable}
        onClick={() => setType()}
      >
        Initial Eating Phase
      </button>
      <button
        className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
        disabled={disable}
        onClick={() => setType()}
      >
        Fullness Phase
      </button>
      <button
        className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
        disabled={disable}
        onClick={() => setType()}
      >
        After Eating Phase
      </button>
    </div>
    )
};

export default FeelBest1;