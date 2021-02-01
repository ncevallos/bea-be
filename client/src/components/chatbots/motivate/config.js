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

const botName = "Bea";

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Welcome. It’s time to Motivate!`), 
    createChatBotMessage(`This is the Activity to do when you’re struggling to make the right food choice in the moment.`, {
        delay: 2000,
        withAvatar: false,
    }),
    createChatBotMessage(`The Activity is made up of 3 different parts and will take approximately 7 minutes to complete.`, {
        delay: 4000,
    }),
    createChatBotMessage(`First, I'll ask you to Rate how much you’re struggling.`, {
        delay: 6000,
    }),
    createChatBotMessage(`Next, I'll ask you to Visualize different scenarios to help you evaluate what to eat next.`, {
        delay: 8000,
    }),
    createChatBotMessage(`Lastly, I'll walk you through a 1-Minute Mindfulness Exercise to help clear your mind.`, {
        delay: 10000,
    }),
    createChatBotMessage(`Let me know when you’re ready to begin.`, {
        widget: "areyouReady",
        delay: 12000,
    }),
],
widgets: [
    {
        widgetName: "areyouReady",
       widgetFunc: (props) => <AreyouReady {...props} />,
    },
    {
        widgetName: "howtempted",
       widgetFunc: (props) => <HowTempted {...props} />,
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
    
],
  }
  
  export default config