import React from "react";

import "./AreyouReady.css";

const DifferentChoiceGH = (props) => {
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
          onClick={() => setType("Much worse")}
        >
          Much worse
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Somewhat worse")}
        >
          Somewhat worse
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("The same")}
        >
          The same
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Somewhat better")}
        >
          Somewhat better
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Much better")}
        >
          Much better
        </button>
      </div>
    </div>
  );
};

export default DifferentChoiceGH;