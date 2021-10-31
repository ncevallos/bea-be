import React from "react";

import "./Options.css";

const SmallerPortions = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Smaller Portions",
    }));

    actionProvider.stopfull();
  };
  const setType2 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      plangoal2: type,
      lastblockvisited: "Smaller Portions",
    }));

    actionProvider.morefilling();
  };

  const [disable, setDisable] = React.useState(false);
  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType1("Stop when full")}
        >
          Stop when full
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("More filling foods")}
        >
          More filling foods
        </button>
      </div>
    </div>
  );
};


export default SmallerPortions;