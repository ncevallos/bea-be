import React from "react";

import "./AreyouReady.css";

const DifferentChoiceStress = (props) => {
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
          onClick={() => setType("Much more stressed")}
        >
          Much more stressed
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("More stressed")}
        >
          More stressed
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("The same")}
        >
          The same
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Less stressed")}
        >
          Less stressed
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Much less stressed")}
        >
          Much less stressed
        </button>
      </div>
    </div>
  );
};

export default DifferentChoiceStress;