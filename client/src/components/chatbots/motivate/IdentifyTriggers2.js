import React from "react";

import "./AreyouReady.css";

const IdentifyTriggers2 = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.genuinelyHungry();
  };
  const setType2 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.sadLonely();
  };

  const setType3 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.upset();
  };

  const setType4 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.stress();
  };

  const setType5 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.bored();
  };

  const setType6 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.anxious();
  };

  const setType7 = async (type) => {
    setDisable(true)
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2",
      waitingformsgflag: true
    }));

    actionProvider.triggerSomethingElse();
  };
  const [disable, setDisable] = React.useState(false);


  return (
    <div>
      <div className="learning-options-container">
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType("Genuinely hungry")}
        >
          Genuinely hungry
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType2("Sad/Lonely")}
        >
          Sad/Lonely
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType3("A conflict")}
        >
          A conflict
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType4("Work stress")}
        >
          Work stress
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType5("Bored")}
        >
          Bored
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType6("Anxious")}
        >
          Anxious
        </button>
        <button
          className={disable ? 'learning-option-button button-disabled' : 'learning-option-button'}
          disabled={disable}
          onClick={() => setType7("Something else")}
        >
          Something else
        </button>
      </div>
    </div>
  );
};

export default IdentifyTriggers2;