import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import AfterEatingFeel from './AfterEatingFeel';
import AfterEatingLength from './AfterEatingLength';
import AreyouReady from "./AreyouReady";
import FeelBest1 from './FeelBest1';
import FeelBest2 from './FeelBest2';
import FeelBest3 from './FeelBest3';
import FullnessFeel from './FullnessFeel';
import FullnessLength from './FullnessLength';
import HowTempted from "./HowTempted";
import InitialEatingFeel from './InitialEatingFeel';
import InitialEatingLength from './InitialEatingLength';
import MotivateAfter from './MotivateAfter';
import MotivateAfterOptions from './MotivateAfterOptions';
import PlanningFeel from './PlanningFeel';
import PlanningIntro from './PlanningIntro';
import PlanningLength from './PlanningLength';
import StartMindfulness from './StartMindfulness';
import StretchMsgorVoice from './StretchMsgorVoice';
import Visualization from './Visualization';
import PlanSubmit from './PlanSubmit';
import IdentifyTriggers2 from './IdentifyTriggers2';
import DifferentChoiceAnxious from './DifferentChoiceAnxious';
import DifferentChoiceBored from './DifferentChoiceBored';
import DifferentChoiceGH from './DifferentChoiceGH';
import DifferentChoiceeSL from './DifferentChoiceSL';
import DifferentChoiceStress from './DifferentChoiceStress';
import DifferentChoiceUpset from './DifferentChoiceUpset';
import OverIndulgeAnxious from './OverIndulgeAnxious';
import OverIndulgeBored from './OverIndulgeBored';
import OverIndulgeGH from './OverIndulgeGH';
import OverIndulgeSL from './OverIndulgeSL';
import OverIndulgeStress from './OverIndulgeStress';
import OverIndulgeUpset from './OverIndulgeUpset';
import PlanningIntro2 from './PlanningIntro2';

const botName = "Bea";

const config = {
    botName: botName,
    customStyles: {
        botMessageBox: {
        backgroundColor: "#b58fe1",
        },
        chatButton: {
        backgroundColor: "#b58fe1",
        },
        },
    initialMessages: [createChatBotMessage(`Welcome. It’s time to Motivate!`), 
    createChatBotMessage(`This is the Activity to do when you’re struggling to make the right food choice in the moment.`, {
        delay: 2000,
        withAvatar: true,
    }),
    createChatBotMessage(`The Activity is made up of 3 different parts and will take approximately 7 minutes to complete.`, {
        delay: 4000,
        withAvatar: true
    }),
    createChatBotMessage(`First, I'll ask you to Rate how much you’re struggling.`, {
        delay: 6000,
        withAvatar: true
    }),
    createChatBotMessage(`Next, I'll ask you to Visualize different scenarios to help you evaluate what to eat next.`, {
        delay: 8000,
        withAvatar: true
    }),
    createChatBotMessage(`Lastly, I'll walk you through a 1-Minute Mindfulness Exercise to help clear your mind.`, {
        delay: 10000,
        withAvatar: true
    }),
    createChatBotMessage(`Let me know when you’re ready to begin.`, {
        widget: "areyouReady",
        delay: 12000,
        withAvatar: true
    }),
],
state: {
    waitingformsgflag: false,
    lastblockvisited: "",
    temptedlevel: "",
    temptedlevelint: "",
    vistype: "",
    plan2eat: "", //open ended
    whyhungry: "",
    overindulgeresult: "", //possibly open ended
    differentchoice: "",
    differentchoice2: "",
    planphasefeel: "",
    planphaselength: "",
    planphaseint: 0,
    iephasefeel: "",
    iephaselength: "",
    iephaseint: 0,
    fullphasefeel: "",
    fullphaselength: "",
    fullphaseint: 0,
    aefeel: "",
    aelength: "",
    aeint: 0,
    mindfultype: "",
    mindfultype2: "",
    mindfulresult: ""
    // randomnum: randomnumber()
},
widgets: [
    {
        widgetName: "areyouReady",
       widgetFunc: (props) => <AreyouReady {...props} />,
    },
    {
        widgetName: "howtempted",
       widgetFunc: (props) => <HowTempted {...props} />,
       mapStateToProps: ["waitingformsgflag", "lastblockvisited", "temptedlevel", "temptedlevelint","vistype","plan2eat","whyhungry","overindulgeresult", 
       "differentchoice", "differentchoice2", "planphasefeel", "planphaselength", "planphaseint", "iephasefeel", "iephaselength", "iephaseint", "fullphasefeel", "fullphaselength", 
       "fullphaseint", "aefeel", "aelength", "aeint", "mindfultype", "mindfultype2", "mindfulresult"]
    },
    {
        widgetName: "visualization",
       widgetFunc: (props) => <Visualization {...props} />,
    },
    {
        widgetName: "planningIntro",
       widgetFunc: (props) => <PlanningIntro {...props} />,
    },
    {
        widgetName: "planningIntro2",
       widgetFunc: (props) => <PlanningIntro2 {...props} />,
    },
    {
        widgetName: "planningFeel",
       widgetFunc: (props) => <PlanningFeel {...props} />,
    },
    {
        widgetName: "planningLength",
       widgetFunc: (props) => <PlanningLength {...props} />,
    },
    {
        widgetName: "initialEatingFeel",
       widgetFunc: (props) => <InitialEatingFeel {...props} />,
    },
    {
        widgetName: "initialEatingLength",
       widgetFunc: (props) => <InitialEatingLength {...props} />,
    },
    {
        widgetName: "fullnessFeel",
       widgetFunc: (props) => <FullnessFeel {...props} />,
    },
    {
        widgetName: "fullnessLength",
       widgetFunc: (props) => <FullnessLength {...props} />,
    },
    {
        widgetName: "afterEatingFeel",
       widgetFunc: (props) => <AfterEatingFeel {...props} />,
    },
    {
        widgetName: "afterEatingLength",
       widgetFunc: (props) => <AfterEatingLength {...props} />,
    },
    {
        widgetName: "feelBest1",
       widgetFunc: (props) => <FeelBest1 {...props} />,
    },
    {
        widgetName: "feelBest2",
       widgetFunc: (props) => <FeelBest2 {...props} />,
    },
    {
        widgetName: "feelBest3",
       widgetFunc: (props) => <FeelBest3 {...props} />,
    },
    {
        widgetName: "identifyTriggers2",
       widgetFunc: (props) => <IdentifyTriggers2 {...props} />,
    },
    {
        widgetName: "differentChoiceAnxious",
       widgetFunc: (props) => <DifferentChoiceAnxious {...props} />,
    },
    {
        widgetName: "differentChoiceBored",
       widgetFunc: (props) => <DifferentChoiceBored {...props} />,
    },
    {
        widgetName: "differentChoiceGH",
       widgetFunc: (props) => <DifferentChoiceGH {...props} />,
    },
    {
        widgetName: "differentChoiceSL",
       widgetFunc: (props) => <DifferentChoiceeSL {...props} />,
    },
    {
        widgetName: "differentChoiceStress",
       widgetFunc: (props) => <DifferentChoiceStress {...props} />,
    },
    {
        widgetName: "differentChoiceUpset",
       widgetFunc: (props) => <DifferentChoiceUpset {...props} />,
    },
    {
        widgetName: "overIndulgeAnxious",
       widgetFunc: (props) => <OverIndulgeAnxious {...props} />,
    },
    {
        widgetName: "overIndulgeBored",
       widgetFunc: (props) => <OverIndulgeBored {...props} />,
    },
    {
        widgetName: "overIndulgeGH",
       widgetFunc: (props) => <OverIndulgeGH {...props} />,
    },
    {
        widgetName: "overIndulgeSL",
       widgetFunc: (props) => <OverIndulgeSL {...props} />,
    },
    {
        widgetName: "overIndulgeStress",
       widgetFunc: (props) => <OverIndulgeStress {...props} />,
    },
    {
        widgetName: "overIndulgeUpset",
       widgetFunc: (props) => <OverIndulgeUpset {...props} />,
    },
    {
        widgetName: "startMindfulness",
       widgetFunc: (props) => <StartMindfulness {...props} />,
    },
    {
        widgetName: "stretchMsgorVoice",
       widgetFunc: (props) => <StretchMsgorVoice {...props} />,
    },
    {
        widgetName: "motivateAfter",
       widgetFunc: (props) => <MotivateAfter {...props} />,
    },
    {
        widgetName: "motivateAfterOptions",
       widgetFunc: (props) => <MotivateAfterOptions {...props} />,
    },
    {
        widgetName: "plansubmit",
       widgetFunc: (props) => <PlanSubmit {...props} />,
       mapStateToProps: ["waitingformsgflag", "lastblockvisited", "temptedlevel", "temptedlevelint","vistype","plan2eat","whyhungry","overindulgeresult", 
       "differentchoice", "differentchoice2", "planphasefeel", "planphaselength", "planphaseint", "iephasefeel", "iephaselength", "iephaseint", "fullphasefeel", "fullphaselength", 
       "fullphaseint", "aefeel", "aelength", "aeint", "mindfultype", "mindfultype2", "mindfulresult"]
    },
    
],
  }
  
  export default config
