import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import AreyouReady from "./AreyouReady";
import Begin from "./Begin";
import Begin2 from "./Begin2";
import EndChoices from './EndChoices';
import MoveOn from "./MoveOn";

const botName = "Bea";

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Let's get ready to Meditate!`), 
    createChatBotMessage(`This is the Activity to do when you would like to listen to guided meditations designed to retrain your mind for better eating.`, {
        delay: 2000,
        withAvatar: true
    }),
    createChatBotMessage(`For these meditations, I have included metaphors and analogies to help you listen to your body and think about food differently.`, {
        delay: 4000,
        withAvatar: true
    }),
    createChatBotMessage(`These meditations range between 3 and 7 minutes.`, {
        delay: 6000,
        withAvatar: true
    }),
    createChatBotMessage(`Let me know when you are ready to begin.`, {
        widget: "areyouReady",
        delay: 8000,
        withAvatar: true
    }),
],
state: {
    firstvisit: false,
    videoplayedid: "",
    videoplayedtitle: "",
},
widgets: [
    {
        widgetName: "areyouReady",
        widgetFunc: (props) => <AreyouReady {...props} />,
        mapStateToProps: ["videoplayedid", "videoplayedtitle"]
    },
    {
        widgetName: "begin",
        widgetFunc: (props) => <Begin {...props} />,
    },
    {
        widgetName: "begin2",
        widgetFunc: (props) => <Begin2 {...props} />,
    },
    {
        widgetName: "moveOn",
        widgetFunc: (props) => <MoveOn {...props} />,
    },
    {
        widgetName: "endChoices",
        widgetFunc: (props) => <EndChoices {...props} />,
        mapStateToProps: ["videoplayedid", "videoplayedtitle"]
    },
],
  }
  
  export default config
