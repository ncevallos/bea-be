import React from "react";

import "./AreyouReady.css";

const OverIndulgeBored = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      overindulgeresult: type,
      lastblockvisited: "Over Indulge"
    }));

    actionProvider.bored2();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Much more bored")}
        >
          Much more bored
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("More bored")}
        >
          More bored
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("The same")}
        >
          The same
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Less bored")}
        >
          Less bored
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Much less bored")}
        >
          Much less bored
        </button>
      </div>
    </div>
  );
};

export default OverIndulgeBored;