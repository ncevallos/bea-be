import React from "react";

import "./AreyouReady.css";

const OverIndulgeSL = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      overindulgeresult: type,
      lastblockvisited: "Over Indulge"
    }));

    actionProvider.sadLonely2();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Much more sad/lonely")}
        >
          Much more sad/lonely
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("More sad/lonely")}
        >
          More sad/lonely
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("The same")}
        >
          The same
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Less sad/lonely")}
        >
          Less sad/lonely
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Much less sad/lonely")}
        >
          Much less sad/lonely
        </button>
      </div>
    </div>
  );
};

export default OverIndulgeSL;