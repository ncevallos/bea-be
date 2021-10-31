import React from "react";

import "./AreyouReady.css";

const InitialEatingLength = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      iephaselength: type,
      lastblockvisited: "Initial Eating Length"
    }));

    actionProvider.fullnessIntro();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Up to 10 minutes")}
        >
          Up to 10 minutes
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("10 to 30 minutes")}
        >
          10 to 30 minutes
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("30 minutes to 1 hour")}
        >
          30 minutes to 1 hour
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("1 to 2 hours")}
        >
          1 to 2 hours
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("More than 2 hours")}
        >
          More than 2 hours
        </button>
      </div>
    </div>
  );
};

export default InitialEatingLength;