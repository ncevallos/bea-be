import React, { useState }  from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import reflection from '../../../img/plan-reflection.png';
import HowDoYouFeel from './HowDoYouFeel';
import PlanGoodBlock from './PlanGoodBlock';
import PlanBadBlock from './PlanBadBlock';
import PlanAction from './PlanAction';
import SmallerAmounts from './SmallerAmounts';
import SmallerPortions from './SmallerPortions';
import EmotionalBehavioral from './EmotionalBehavioral';
import DifferentFoods from './DifferentFoods';
import PlanGoal from './PlanGoal';
import LessSugar from './LessSugar';
import FoodChoices from './FoodChoices';
import PlanSubmit from './PlanSubmit';
// import SomethingElse from './SomethingElse';
import {
    WelcomeBlock1,
    WelcomeBlock2,
    WelcomeBlock3,
    StopFull,
    StopFull2,
    MoreFilling,
    MoreFilling2,
    LessFat,
    LessFat2,
    AvoidSugar,
    AvoidSugar2,
    SweetFoods,
    SweetFoods2,
    FewerCarbs,
    FewerCarbs2,
    FewerCalories,
    FewerCalories2,
    SomethingElse,
    TakeAction,
    EndActivity } from "./Options";

const botName = "Bea";
// const randomnumber = () =>{
//     //random number generate for the random response blocks
//     const min = 1;
//     const max = 4;
//     let rand = min + Math.random() * (max - min);
//     console.log("random number produces equals", rand);
//     rand = Math.round(rand);
//     console.log("random number now contains", rand);
//     return rand;
// }
const config = {
    botName: botName,
    // Defines an object of custom components that will replace the stock chatbot components. 
    customComponents: {
       // Replaces the default header
    //   header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
    //   // Replaces the default bot avatar
    //   botAvatar: (props) => <FlightBotAvatar {...props} />,
    //   // Replaces the default bot chat message container
    //   botChatMessage: (props) => <CustomChatMessage {...props} />,
    //   // Replaces the default user icon
    //   userAvatar: (props) => <MyUserAvatar {...props} />,
    //   // Replaces the default user chat message
    //   userChatMessage: (props) => <MyUserChatMessage {...props} />
    },
    customStyles: {
        botMessageBox: {
        backgroundColor: "#329CCC",
        },
        chatButton: {
        backgroundColor: "#329CCC",
        },
        },
    initialMessages: [createChatBotMessage(`Great! Let’s make a new Plan for the day!`), 
    createChatBotMessage(
        <img src={reflection} alt="Workflow" title="Workflow" style={{width: "250px"}} />, {
        delay: 2000,
        withAvatar: true
    }),
    createChatBotMessage(`This isn't a 'diet plan', but a way for us to reflect before making some general goals together.`, {
        delay: 4000,
        withAvatar: true
    }),
    createChatBotMessage(`This Activity will involve chatting with me for the next 7 minutes.`, {
        delay: 6000,
        withAvatar: true
    }),
    createChatBotMessage(`Are you ready to start?`, {
        // widget: "optionsblock1",
        widget: "welcomeblock1",
        delay: 8000,
        withAvatar: true
    }),
],

state: {
    waitingformsgflag: false,
    lastblockvisited: "",
    howdoyoufeel: "",
    howdoyoufeelint: "",
    planjournal: "",
    stayedontrack: "",
    planbadblock: "",
    what2change: "",
    influencedeating: "",
    whathappened: "",
    somethingelsebad: "",
    plangoal: "",
    plangoal2: "",
    plangoal3: "",
    plangoal4: "",
    plangoal5: ""
    // randomnum: randomnumber()
},
widgets: [
    {
        widgetName: "howdoyoufeel",
       widgetFunc: (props) => <HowDoYouFeel {...props} />,
       mapStateToProps: ["waitingformsgflag", "lastblockvisited","howdoyoufeel","howdoyoufeelint","planjournal","stayedontrack","planbadblock", 
       "what2change", "influencedeating", "whathappened", "somethingelsebad", "plangoal", "plangoal2", "plangoal3", "plangoal4", "plangoal5"]
    },
    {
        widgetName: "welcomeblock1",
       widgetFunc: (props) => <WelcomeBlock1 {...props} />,
    },
    {
        widgetName: "welcomeblock2",
       widgetFunc: (props) => <WelcomeBlock2 {...props} />,
    },
    {
        widgetName: "welcomeblock3",
       widgetFunc: (props) => <WelcomeBlock3 {...props} />,
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
    // {
    //     widgetName: "plangoal2",
    //    widgetFunc: (props) => <PlanGoal2 {...props} />,
    // },
    {
        widgetName: "smallerportions",
       widgetFunc: (props) => <SmallerPortions {...props} />,
    },
    {
        widgetName: "smalleramounts",
       widgetFunc: (props) => <SmallerAmounts {...props} />,
    },
    {
        widgetName: "differentfoods",
       widgetFunc: (props) => <DifferentFoods {...props} />,
    },
    {
        widgetName: "emotionalbehavioral",
       widgetFunc: (props) => <EmotionalBehavioral {...props} />,
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
       widgetFunc: (props) => <PlanAction {...props} />,
    },
    {
        widgetName: "endactivity",
       widgetFunc: (props) => <EndActivity {...props} />,
    },
    {
        widgetName: "plansubmit",
       widgetFunc: (props) => <PlanSubmit {...props} />,
       mapStateToProps: ["waitingformsgflag", "lastblockvisited","howdoyoufeel","howdoyoufeelint","planjournal","stayedontrack","planbadblock", 
       "what2change", "influencedeating", "whathappened", "somethingelsebad", "plangoal", "plangoal2", "plangoal3", "plangoal4", "plangoal5"]
    },
]
  }
  
  export default config
