import React from "react";

import "./Options.css";

const PlanAction = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      plangoal5: type,
      lastblockvisited: "Plan Action"
    }));

    actionProvider.afteraction();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Take a walk")}
        >
          Take a walk
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Meditate")}
        >
          Meditate
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Talk to a friend")}
        >
          Talk to a friend
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Eat something small")}
        >
          Eat something small
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Read")}
        >
          Read
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Something else")}
        >
          Something else
        </button>
      </div>
    </div>
  );
};


export default PlanAction;

