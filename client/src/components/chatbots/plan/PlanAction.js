import React from "react";

import "./Options.css";

const PlanAction = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      plangoal5: type,
      lastblockvisited: "Plan Action"
    }));

    actionProvider.afteraction();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Take a walk")}
        >
          Take a walk
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Meditate")}
        >
          Meditate
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Talk to a friend")}
        >
          Talk to a friend
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Eat something small")}
        >
          Eat something small
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Read")}
        >
          Read
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType("Something else")}
        >
          Something else
        </button>
      </div>
    </div>
  );
};


export default PlanAction;

