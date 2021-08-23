import React from "react";

import "./AreyouReady.css";

const OverIndulgeAnxious = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      overindulgeresult: type,
      lastblockvisited: "Over Indulge"
    }));

    actionProvider.anxious2();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Much more anxious")}
        >
          Much more anxious
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("More anxious")}
        >
          More anxious
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("The same")}
        >
          The same
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Less anxious")}
        >
          Less anxious
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Much less anxious")}
        >
          Much less anxious
        </button>
      </div>
    </div>
  );
};

export default OverIndulgeAnxious;