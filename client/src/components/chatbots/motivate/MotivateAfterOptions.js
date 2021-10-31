import React from 'react'

import "./AreyouReady.css";

const MotivateAfterOptions = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      mindfulresult: type,
      lastblockvisited: "Motivate After Options"
    }));

    actionProvider.afterBetter();
  };
  const setType2 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      mindfulresult: type,
      lastblockvisited: "Motivate After Options"
    }));

    actionProvider.afterSame();
  };
  const setType3 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      mindfulresult: type,
      lastblockvisited: "Motivate After Options"
    }));

    actionProvider.afterWorse();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Better")}
        >
          Better
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("Same")}
        >
          Same
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType3("Worse")}
        >
          Worse
        </button>
      </div>
    </div>
  );
};

export default MotivateAfterOptions;
