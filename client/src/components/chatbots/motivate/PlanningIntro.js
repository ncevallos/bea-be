import React from "react";

import "./AreyouReady.css";

const PlanningIntro = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      vistype: type,
      lastblockvisited: "Planning Intro",
      waitingformsgflag: true
    }));

    actionProvider.planningPhase();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Planning")}
        >
          I've got it!
        </button>
      </div>
    </div>
  );
};


export default PlanningIntro;