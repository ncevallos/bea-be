import React from "react";

import "./Options.css";

const SmallerAmounts = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      what2change: type,
      lastblockvisited: "Smaller Amounts",
    }));

    actionProvider.emotionalbehavioral();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("A little less")}
        >
          A little less
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Moderately less")}
        >
          Moderately less
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Substantially less")}
        >
          Substantially less
        </button>
      </div>
    </div>
  );
};


export default SmallerAmounts;