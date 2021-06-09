import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import AreyouReady from "./AreyouReady";

const botName = "Bea";

const config = {
    initialMessages: [createChatBotMessage(`Let's get ready to Meditate!`), 
    createChatBotMessage(`This is the Activity to do when you would like to listen to guided meditations designed to retrain your mind for better eating.`, {
        delay: 2000,
    }),
    createChatBotMessage(`For these meditations, I have included metaphors and analogies to help you listen to your body and think about food differently.`, {
        delay: 4000,
    }),
    createChatBotMessage(`These meditations range between 3 and 7 minutes.`, {
        delay: 6000,
    }),
    createChatBotMessage(`Let me know when you are ready to begin.`, {
        widget: "areyouReady",
        delay: 8000,
    }),
],
widgets: [
    {
        widgetName: "areyouReady",
       widgetFunc: (props) => <AreyouReady {...props} />,
    },
],
  }
  
  export default config
