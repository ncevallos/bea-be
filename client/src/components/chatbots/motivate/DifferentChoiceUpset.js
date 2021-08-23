import React from "react";

import "./AreyouReady.css";

const DifferentChoiceUpset = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      differentchoice: type,
      lastblockvisited: "Different Choice"
    }));

    actionProvider.feelBest4();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Much more upset")}
        >
          Much more upset
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("More upset")}
        >
          More upset
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("The same")}
        >
          The same
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Less upset")}
        >
          Less upset
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Much less upset")}
        >
          Much less upset
        </button>
      </div>
    </div>
  );
};

export default DifferentChoiceUpset;