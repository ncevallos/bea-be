import React from "react";

import "./Options.css";

const WelcomeBlock1 = (props) => {
  const options = [
    { text: "I'm ready!", handler: props.actionProvider.welcomeblock1, id: 1 },
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

const WelcomeBlock2 = (props) => {
    const options = [
      { text: "I'm ready!", handler: props.actionProvider.welcomeblock2, id: 1 },
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
  const WelcomeBlock3 = (props) => {
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
 

  const PlanBadBlock = (props) => {
    const options = [
      { text: "Smaller amounts", handler: props.actionProvider.smalleramounts, id: 1 },
      { text: "Different foods", handler: props.actionProvider.differentfoods, id: 2 }
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


  const DifferentFoods = (props) => {
    const options = [
      { text: "Less fat", handler: props.actionProvider.emotionalbehavioral, id: 1 },
      { text: "Less sugar", handler: props.actionProvider.emotionalbehavioral, id: 2 },
      { text: "Less carbs", handler: props.actionProvider.emotionalbehavioral, id: 3 },
      { text: "Fewer calories", handler: props.actionProvider.emotionalbehavioral, id: 4 },
      { text: "Something else", handler: props.actionProvider.somethingelsebad, id: 5 }
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


  // const PlanGoal = (props) => {
  //   const options = [
  //     { text: "Keep going", handler: props.actionProvider.plangoal, id: 1 }
  //   ];
  
  //   const optionsMarkup = options.map((option) => (
  //     <button
  //       className="learning-option-button"
  //       key={option.id}
  //       onClick={option.handler}
  //     >
  //       {option.text}
  //     </button>
  //   ));
  
  //   return <div className="learning-options-container">{optionsMarkup}</div>;
  // };
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
      { text: "Let's continue", handler: props.actionProvider.lesssugar2, id: 1 }
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

  const LessSugar2 = (props) => {
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

  // const TakeAction = (props) => {
  //   const options = [
  //     { text: "Take a walk", handler: props.actionProvider.afteraction, id: 1 },
  //     { text: "Meditate", handler: props.actionProvider.afteraction, id: 2 },
  //     { text: "Talk to a friend", handler: props.actionProvider.afteraction, id: 3 },
  //     { text: "Eat something small", handler: props.actionProvider.afteraction, id: 4 },
  //     { text: "Read", handler: props.actionProvider.afteraction, id: 5 },
  //     { text: "Something else", handler: props.actionProvider.afteraction, id: 6 }
  //   ];
  //   const optionsMarkup = options.map((option) => (
  //     <button
  //       className="learning-option-button"
  //       key={option.id}
  //       onClick={option.handler}
  //     >
  //       {option.text}
  //     </button>
  //   ));
  
  //   return <div className="learning-options-container">{optionsMarkup}</div>;
  // };

  const EndActivity = (props) => {
    const options = [
      { text: "End Activity", handler: props.actionProvider.endactivity, id: 1 }
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
    WelcomeBlock1,
    WelcomeBlock2,
    WelcomeBlock3,
    PlanBadBlock,
    StopFull,
    StopFull2,
    MoreFilling,
    MoreFilling2,
    LessFat,
    LessFat2,
    LessSugar,
    LessSugar2,
    AvoidSugar,
    AvoidSugar2,
    SweetFoods,
    SweetFoods2,
    FewerCarbs,
    FewerCarbs2,
    FewerCalories,
    FewerCalories2,
    SomethingElse,
    // TakeAction,
    EndActivity

};