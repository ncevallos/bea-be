import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import {
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
    TakeAction } from "./Options";

const botName = "Bea";

const config = {
    botName: botName,
    customStyles: {
        botMessageBox: {
        backgroundColor: "#329CCC",
        },
        chatButton: {
        backgroundColor: "#329CCC",
        },
        },
    initialMessages: [createChatBotMessage(`Great! Let’s make a new Plan for the day!`), 
    createChatBotMessage(`Image goes here`, {
        delay: 2000,
    }),
    createChatBotMessage(`This isn't a 'diet plan', but a way for us to reflect before making some general goals together.`, {
        delay: 4000,
    }),
    createChatBotMessage(`This Activity will involve chatting with me for the next 7 minutes.`, {
        delay: 6000,
    }),
    createChatBotMessage(`Are you ready to start?`, {
        widget: "optionsblock1",
        delay: 8000,
    }),
],
widgets: [
    {
        widgetName: "optionsblock1",
       widgetFunc: (props) => <OptionsBlock1 {...props} />,
    },
    {
        widgetName: "optionsblock2",
       widgetFunc: (props) => <OptionsBlock2 {...props} />,
    },
    {
        widgetName: "optionsblock3",
       widgetFunc: (props) => <OptionsBlock3 {...props} />,
    },
    {
        widgetName: "plangoodblock",
       widgetFunc: (props) => <PlanGoodBlock {...props} />,
    },
    {
        widgetName: "planbadblock",
       widgetFunc: (props) => <PlanBadBlock {...props} />,
    },
    {
        widgetName: "plangoal",
       widgetFunc: (props) => <PlanGoal {...props} />,
    },
    {
        widgetName: "plangoal2",
       widgetFunc: (props) => <PlanGoal2 {...props} />,
    },
    {
        widgetName: "smallerportions",
       widgetFunc: (props) => <SmallerPortions {...props} />,
    },
    {
        widgetName: "stopfull",
       widgetFunc: (props) => <StopFull {...props} />,
    },
    {
        widgetName: "stopfull2",
       widgetFunc: (props) => <StopFull2 {...props} />,
    },
    {
        widgetName: "morefilling",
       widgetFunc: (props) => <MoreFilling {...props} />,
    },
    {
        widgetName: "morefilling2",
       widgetFunc: (props) => <MoreFilling2 {...props} />,
    },
    {
        widgetName: "foodchoices",
       widgetFunc: (props) => <FoodChoices {...props} />,
    },
    {
        widgetName: "lessfat",
       widgetFunc: (props) => <LessFat {...props} />,
    },
    {
        widgetName: "lessfat2",
       widgetFunc: (props) => <LessFat2 {...props} />,
    },
    {
        widgetName: "lesssugar",
       widgetFunc: (props) => <LessSugar {...props} />,
    },
    {
        widgetName: "avoidsugar",
       widgetFunc: (props) => <AvoidSugar {...props} />,
    },
    {
        widgetName: "avoidsugar2",
       widgetFunc: (props) => <AvoidSugar2 {...props} />,
    },
    {
        widgetName: "sweetfoods",
       widgetFunc: (props) => <SweetFoods {...props} />,
    },
    {
        widgetName: "sweetfoods2",
       widgetFunc: (props) => <SweetFoods2 {...props} />,
    },
    {
        widgetName: "fewercarbs",
       widgetFunc: (props) => <FewerCarbs {...props} />,
    },
    {
        widgetName: "fewercarbs2",
       widgetFunc: (props) => <FewerCarbs2 {...props} />,
    },
    {
        widgetName: "fewercalories",
       widgetFunc: (props) => <FewerCalories {...props} />,
    },
    {
        widgetName: "fewercalories2",
       widgetFunc: (props) => <FewerCalories2 {...props} />,
    },
    {
        widgetName: "somethingelse",
       widgetFunc: (props) => <SomethingElse {...props} />,
    },
    {
        widgetName: "takeaction",
       widgetFunc: (props) => <TakeAction {...props} />,
    },
]
  }
  
  export default config
