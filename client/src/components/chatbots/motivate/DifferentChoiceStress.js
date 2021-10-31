import React from "react";

import "./AreyouReady.css";

const DifferentChoiceStress = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      differentchoice: type,
      lastblockvisited: "Different Choice"
    }));

    actionProvider.feelBest4();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Much more stressed")}
        >
          Much more stressed
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("More stressed")}
        >
          More stressed
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("The same")}
        >
          The same
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Less stressed")}
        >
          Less stressed
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Much less stressed")}
        >
          Much less stressed
        </button>
      </div>
    </div>
  );
};

export default DifferentChoiceStress;