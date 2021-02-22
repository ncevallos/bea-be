import React from "react";

import "./Options.css";

const OptionsBlock1 = (props) => {
  const options = [
    { text: "I'm ready!", handler: props.actionProvider.chatblock1, id: 1 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

const OptionsBlock2 = (props) => {
    const options = [
      { text: "I'm ready!", handler: props.actionProvider.chatblock2, id: 1 },
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  }; 
  const OptionsBlock3 = (props) => {
    const options = [
      { text: "Great 😁", handler: props.actionProvider.plangood, id: 1 },
      { text: "Pretty Good 🙂", handler: props.actionProvider.plangood, id: 2 },
      { text: "Not Good 🙁", handler: props.actionProvider.planbad, id: 3 },
      { text: "Horrible 😩", handler: props.actionProvider.planbad, id: 4 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  const PlanGoodBlock = (props) => {
    const options = [
        { text: "Something emotional", handler: props.actionProvider.plangoodjournal, id: 1 },
        { text: "Something physical", handler: props.actionProvider.plangoodjournal, id: 2 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const PlanBadBlock = (props) => {
    const options = [
      { text: "Something emotional", handler: props.actionProvider.plangood, id: 1 },
      { text: "Something physical", handler: props.actionProvider.plangood, id: 2 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const PlanGoal = (props) => {
    const options = [
      { text: "Keep going", handler: props.actionProvider.plangoal, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  const PlanGoal2 = (props) => {
    const options = [
      { text: "Smaller Amounts", handler: props.actionProvider.smallerportions, id: 1 },
      { text: "Different foods", handler: props.actionProvider.foodchoices, id: 2 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  const SmallerPortions = (props) => {
    const options = [
      { text: "Stop when full", handler: props.actionProvider.stopfull, id: 1 },
      { text: "More filling foods", handler: props.actionProvider.morefilling, id: 2 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  const StopFull = (props) => {
    const options = [
      { text: "Let's continue", handler: props.actionProvider.stopfull2, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  const StopFull2 = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.takeaction, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const MoreFilling = (props) => {
    const options = [
      { text: "Let's continue", handler: props.actionProvider.morefilling2, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const MoreFilling2 = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.takeaction, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const FoodChoices = (props) => {
    const options = [
      { text: "Less fat", handler: props.actionProvider.lessfat, id: 1 },
      { text: "Less sugar", handler: props.actionProvider.lesssugar, id: 2 },
      { text: "Fewer carbs", handler: props.actionProvider.fewercarbs, id: 3 },
      { text: "Fewer Calories", handler: props.actionProvider.fewercalories, id: 4 },
      { text: "Something else", handler: props.actionProvider.somethingelse, id: 5 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const LessFat = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.lessfat2, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const LessFat2 = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.takeaction, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  const LessSugar = (props) => {
    const options = [
      { text: "Avoid Sugar", handler: props.actionProvider.avoidsugar, id: 1 },
      { text: "Find healthy sweets", handler: props.actionProvider.sweetfoods, id: 2 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const AvoidSugar = (props) => {
    const options = [
      { text: "Let's continue", handler: props.actionProvider.avoidsugar2, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const AvoidSugar2 = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.takeaction, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const SweetFoods = (props) => {
    const options = [
      { text: "Let's Continue", handler: props.actionProvider.sweetfoods2, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const SweetFoods2 = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.takeaction, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  const FewerCarbs = (props) => {
    const options = [
      { text: "Let's Continue", handler: props.actionProvider.fewercarbs2, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const FewerCarbs2 = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.takeaction, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
  const FewerCalories = (props) => {
    const options = [
      { text: "Let's Continue", handler: props.actionProvider.fewercalories2, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const FewerCalories2 = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.takeaction, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const SomethingElse = (props) => {
    const options = [
      { text: "I'm ready", handler: props.actionProvider.takeaction, id: 1 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };

  const TakeAction = (props) => {
    const options = [
      { text: "Take a walk", handler: props.actionProvider.lessfat, id: 1 },
      { text: "Meditate", handler: props.actionProvider.lesssugar, id: 2 },
      { text: "Talk to a friend", handler: props.actionProvider.fewercarbs, id: 3 },
      { text: "Eat something small", handler: props.actionProvider.fewercalories, id: 4 },
      { text: "Read", handler: props.actionProvider.somethingelse, id: 5 },
      { text: "Something else", handler: props.actionProvider.somethingelse, id: 6 }
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
export {
    OptionsBlock1,
    OptionsBlock2,
    OptionsBlock3,
    PlanGoodBlock,
    PlanBadBlock,
    PlanGoal,
    PlanGoal2,
    SmallerPortions,
    StopFull,
    StopFull2,
    MoreFilling,
    MoreFilling2,
    FoodChoices,
    LessFat,
    LessFat2,
    LessSugar,
    AvoidSugar,
    AvoidSugar2,
    SweetFoods,
    SweetFoods2,
    FewerCarbs,
    FewerCarbs2,
    FewerCalories,
    FewerCalories2,
    SomethingElse,
    TakeAction

};