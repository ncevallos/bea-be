import React, { useEffect, Component, match } from 'react'
import { Link } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit'

import PlanActionProvider from '../../chatbots/plan/ActionProvider';
import PlanMessageParser from '../../chatbots/plan/MessageParser';
import Planconfig from '../../chatbots/plan/config';

import MeditateActionProvider from '../../chatbots/meditate/ActionProvider';
import MeditateMessageParser from '../../chatbots/meditate/MessageParser';
import Meditateconfig from '../../chatbots/meditate/config';

import MotivateActionProvider from '../../chatbots/motivate/ActionProvider';
import MotivateMessageParser from '../../chatbots/motivate/MessageParser';
import Motivateconfig from '../../chatbots/motivate/config';

import {
    useParams,
    useRouteMatch
  } from "react-router-dom";

  export const Chat = () => {

    let { path, url } = useRouteMatch();
    let chatbotId = url;
    // useEffect(() => {
    //     console.log('use effect was run in chat.js',  match.params.chatbot)
    //     chatbotId = match.params.chatbot;
    // }, [  match.params.chatbot]);
    let chatdisplay = ''
    if(chatbotId === '/chat/plan'){
        chatdisplay = 
        <div>
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <div className="block w-full h-full">
                <div className="fixed left-52 pl-3 pb-2 top-16 bottom-0 right-0">
                    <Chatbot config={Planconfig} actionProvider={PlanActionProvider} 	    messageParser={PlanMessageParser} />
                </div>
            </div>
        </nav>
        </div>
    }
    else if(chatbotId === '/chat/meditate'){
        chatdisplay = 
        <div>
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <Chatbot config={Meditateconfig} actionProvider={MeditateActionProvider} 	    messageParser={MeditateMessageParser} />
            
        </nav>
        </div>
    }
    else if(chatbotId === '/chat/motivate'){
        chatdisplay = 
        <div>
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <Chatbot config={Motivateconfig} actionProvider={MotivateActionProvider} 	    messageParser={MotivateMessageParser} />
      
        </nav>
        </div>
    }
    else {
        chatdisplay = 
        <div>
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <Link to='/chat/plan' className="btn-darkPurpleInvert">
                        Plan
                        </Link>
                        <Link to='/chat/meditate' className="btn-darkPurpleInvert">
                        Meditate
                        </Link>                    
                        <Link to='/chat/motivate' className="btn-darkPurpleInvert">
                        Motivate
                        </Link>
        </nav>
        </div>
    }
    return (

                    <div className="block m-2">
                        {chatdisplay}
                    </div>
    )}
// }

export default Chat;