import React from "react";

import "./Options.css";

const LessSugar = (props) => {
  const { setState, actionProvider } = props;
  const setType1 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      plangoal3: type,
      lastblockvisited: "Plan Goal"
    }));

    actionProvider.avoidsugar();
  };
  const setType2 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      plangoal3: type,
      lastblockvisited: "Plan Goal"
    }));

    actionProvider.sweetfoods();
  };

  const [disable, setDisable] = React.useState(false);
  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType1("Avoid Sugar")}
        >
          Avoid Sugar
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("Find healthy sweets")}
        >
          Find healthy sweets
        </button>
      </div>
    </div>
  );
};


export default LessSugar;