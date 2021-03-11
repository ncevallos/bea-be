import React from "react";

import "./Options.css";

const LessSugar = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal3: type,
      lastblockvisited: "Plan Goal"
    }));

    actionProvider.avoidsugar();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal3: type,
      lastblockvisited: "Plan Goal"
    }));

    actionProvider.sweetfoods();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("Avoid Sugar")}
        >
          Avoid Sugar
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Find healthy sweets")}
        >
          Find healthy sweets
        </button>
      </div>
    </div>
  );
};


export default LessSugar;