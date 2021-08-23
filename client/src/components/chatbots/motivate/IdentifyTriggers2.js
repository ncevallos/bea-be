import React from "react";

import "./AreyouReady.css";

const IdentifyTriggers2 = (props) => {
  const { setState, actionProvider } = props;
  const setType = async (type) => {
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.genuinelyHungry();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.sadLonely();
  };

  const setType3 = async (type) => {
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.upset();
  };

  const setType4 = async (type) => {
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.stress();
  };

  const setType5 = async (type) => {
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.bored();
  };

  const setType6 = async (type) => {
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2"
    }));

    actionProvider.anxious();
  };

  const setType7 = async (type) => {
    setState((state) => ({
      ...state,
      whyhungry: type,
      lastblockvisited: "Identify Triggers2",
      waitingformsgflag: true
    }));

    actionProvider.triggerSomethingElse();
  };


  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType("Genuinely hungry")}
        >
          Genuinely hungry
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("Sad/Lonely")}
        >
          Sad/Lonely
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType3("A conflict")}
        >
          A conflict
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType4("Work stress")}
        >
          Work stress
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType5("Bored")}
        >
          Bored
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType6("Anxious")}
        >
          Anxious
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType7("Something else")}
        >
          Something else
        </button>
      </div>
    </div>
  );
};

export default IdentifyTriggers2;