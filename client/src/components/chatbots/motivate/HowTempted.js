import React from "react";

import "./AreyouReady.css";

const HowTempted = (props) => {
 // console.log(props);
  const { setState, actionProvider } = props;
  const setType1 = async (type, type2) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      temptedlevel: type,
      temptedlevelint: type2,
      lastblockvisited: "How Tempted"
    }));

    actionProvider.notAtAll();
  };
  const setType2 = async (type, type2) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      temptedlevel: type,
      temptedlevelint: type2,
      lastblockvisited: "How Tempted"
    }));

    actionProvider.slightSomewhat();
  };
  const setType3 = async (type, type2) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      temptedlevel: type,
      temptedlevelint: type2,
      lastblockvisited: "How Tempted",
      waitingformsgflag: true
    }));

    actionProvider.veryExtremely();
  };
  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType1("Not at all", 0)}
        >
          Not at all
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("Slightly", 1)}
        >
          Slightly
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("Somewhat", 2)}
        >
          Somewhat
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType3("Very", 3)}
        >
          Very
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType3("Extremely - Help!", 4)}
        >
          Extremely - Help!
        </button>
      </div>
    </div>
  );
};



export default HowTempted;