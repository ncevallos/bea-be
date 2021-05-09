import React from "react";

import "./Options.css";

const HowDoYouFeel = (props) => {
  const { setState, actionProvider } = props;
    //uncommenting below will allow you to keep track ofthe state changes throughout
    //the chat
    // console.log(props);
  const setType1 = async (type) => {
    setState((state) => ({
      ...state,
      howdoyoufeel: type,
      lastblockvisited: "How Do You Feel",
    }));

    actionProvider.plangood();
  };
  const setType2 = async (type) => {
    setState((state) => ({
      ...state,
      howdoyoufeel: type,
      lastblockvisited: "How Do You Feel",
    }));

    actionProvider.planbad();
  };

  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => setType1("great")}
        >
          Great 😁
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType1("good")}
        >
          Pretty Good 🙂
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("not good")}
        >
          Not Good 🙁
        </button>
        <button
          className="learning-option-button"
          onClick={() => setType2("horrible")}
        >
          Horrible 😩
        </button>
      </div>
    </div>
  );
};


export default HowDoYouFeel;