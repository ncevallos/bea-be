import React from 'react'

// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet() {
        const greetingMessage = this.createChatBotMessage("Hello friend");
        this.updateChatbotState(greetingMessage)
    }

    nofoulwords() {
        const nofoulwordsMessage = 
        [this.createChatBotMessage(`I can tell by what you just wrote that you are upset, and that is of course okay.`), 
        this.createChatBotMessage(`Sometimes our language is a genuine expression of how we feel.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`For these meditations, I have included metaphors and analogies to help you listen to your body and think about food differently.`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`That being said, I work best when you just press buttons.`, {
            delay: 6000,
        }),
        this.createChatBotMessage(`Please scroll up to the last place you could make a selection in order to continue.`, {
            delay: 8000,
        })];
        // this.updateChatbotState(nofoulwordsMessage)
        this.addMessageToBotState(nofoulwordsMessage)
    }
    emergency() {
        const emergencyMessage = 
        [this.createChatBotMessage(`Oh no! I'm so sorry to hear that you’re feeling so badly.`), 
        this.createChatBotMessage(`Please know that however down you feel, you are never alone.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`Call the National Suicide Prevention Lifeline at 1-800-273-8255 to get help.`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`If your need is more urgent, PLEASE call 911 right away or go to your nearest emergency room.`, {
            delay: 6000,
        })];
        // this.updateChatbotState(emergencyMessage)
        this.addMessageToBotState(emergencyMessage)
    }
    findtherapist() {
        const therapyMessage = 
        [this.createChatBotMessage(`I'm glad you’re ready to take that step!`), 
        this.createChatBotMessage(`I've located a number of therapists in your area that specialize in issues with food and eating.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`Please press below and I will redirect you.`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`And if I can still be of help, we can continue at any time!`, {
            delay: 6000,
        })];
        this.addMessageToBotState(therapyMessage)
        // this.createChatBotMessage("I'm glad you’re ready to take that step!");
        // this.updateChatbotState(therapyMessage)
    }
    updateChatbotState(message) {
 
        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state.
         
            
           this.setState(prevState => ({
                ...prevState, messages: [...prevState.messages, message]
            }))
          }
    addMessageToBotState = (messages) => {
            if (Array.isArray(messages)) {
              this.setState((prevState) => ({
                ...prevState,
                messages: [...prevState.messages, ...messages],
              }));
            } else {
              this.setState((prevState) => ({
                ...prevState,
                messages: [...prevState.messages, messages],
              }));
            }
          };
  }
  
  export default ActionProvider;
