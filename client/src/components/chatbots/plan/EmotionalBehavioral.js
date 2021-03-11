import React from "react";

import "./Options.css";

const EmotionalBehavioral = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      influencedeating: type,
      lastblockvisited: "Emotional Behavioral",
      waitingformsgflag: true
    }));

    actionProvider.planbadjournal();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Something emotional")}
        >
          Something emotional
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Something physical")}
        >
          Something physical
        </button>
      </div>
    </div>
  );
};


export default EmotionalBehavioral;