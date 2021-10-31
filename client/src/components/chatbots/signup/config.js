import { createChatBotMessage } from 'react-chatbot-kit';

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

//state and widgets go here
};

export default config;