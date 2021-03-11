import React from "react";

import "./Options.css";

const PlanGoal = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal: type,
      lastblockvisited: "Plan Goal"
    }));

    actionProvider.smallerportions();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      plangoal: type,
      lastblockvisited: "Plan Goal"
    }));

    actionProvider.foodchoices();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("Smaller Amounts")}
        >
          Smaller Amounts
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Different foods")}
        >
          Different foods
        </button>
      </div>
    </div>
  );
};


export default PlanGoal;