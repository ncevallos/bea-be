import React from 'react';
import { Videodata } from "../../layout/meditate/Videodata";
import ReactPlayer from "react-player";

// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    randomnumber(){
        //random number generator for the random response blocks
        const min = 1;
        const max = 8;
        let rand = min + Math.random() * (max - min);
        console.log("random number produces equals", rand);
        rand = Math.floor(rand);
        console.log("random number now contains", rand);    
        return (rand-1);
    }
    randomnumber2(){
        //random number generator for the random response blocks
        const min = 1;
        const max = 3;
        let rand = min + Math.random() * (max - min);
        console.log("random number2 produces equals", rand);
        rand = Math.floor(rand);
        console.log("random number2 now contains", rand);    
        return (rand-1);
    }
    greet() {
        const greetingMessage = this.createChatBotMessage("Hello friend");
        this.updateChatbotState(greetingMessage)
    }
    handleLetsBegin = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`First, find a quiet place where you can sit and relax without distraction.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Make sure you’re not driving or doing anything else where it might be dangerous to be in a relaxed state.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`After you find a comfortable spot, I will ask you to press the “Play” button to hear today’s recording. `, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Upon doing that, you can gently close your eyes.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Are you sitting someplace comfortably and ready to begin?`, {
            delay: 12000,
            widget: "begin",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }

    videoPlay = () => {
        const randnum = this.randomnumber();
        const vidData = Videodata[randnum];
        console.log("random video data has", vidData);
        this.setState((state) => ({
            ...state,
            videoplayedid: vidData.id,
            videoplayedtitle: vidData.title,
          }));
        const letsBeginMessage = 
        [this.createChatBotMessage(`Wonderful 😊`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Go ahead and press the play button below to listen to your Meditation for today.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`After you find a comfortable spot, I will ask you to press the “Play” button to hear today’s recording. `, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(<><div style={{textAlign: 'center'}}>Today's Video: {vidData.title} <br /></div><div style={{ width: 400, height: 300 }}><ReactPlayer
                className="react-player"
                controls={true}
                width="100%"
                height="100%"
                url={vidData.vidurl}
                playsinline={true} /></div></>, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re finished listening to the recording, take some time to readjust to your surroundings.`, {
            delay: 20000,
            withAvatar: true
        }),
        this.createChatBotMessage(`And when you’re ready, we will mindfully move on.`, {
            delay: 22000,
            widget: "moveOn",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }

    endChoices = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`I hope you enjoyed your Meditation and that you’re feeling relaxed.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`<embed image>`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, I’ll have a different recording for you to enjoy.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Would you like to visit your Dashboard to listen to past recordings, do another Activity, or end for now?`, {
            delay: 12000,
            widget: "endChoices",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    otheractivity = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Now that you are done listening to recordings, what would you like to do next?`, {
            delay: 2000,
            widget: "activitieschoices",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    nofoulwords() {
        const nofoulwordsMessage = 
        [this.createChatBotMessage(`I can tell by what you just wrote that you are upset, and that is of course okay.`), 
        this.createChatBotMessage(`Sometimes our language is a genuine expression of how we feel.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`For these meditations, I have included metaphors and analogies to help you listen to your body and think about food differently.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`That being said, I work best when you just press buttons.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Please scroll up to the last place you could make a selection in order to continue.`, {
            delay: 8000,
            withAvatar: true
        })];
        // this.updateChatbotState(nofoulwordsMessage)
        this.addMessageToBotState(nofoulwordsMessage)
    }
    emergency() {
        const emergencyMessage = 
        [this.createChatBotMessage(`Oh no! I'm so sorry to hear that you’re feeling so badly.`), 
        this.createChatBotMessage(`Please know that however down you feel, you are never alone.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Call the National Suicide Prevention Lifeline at 1-800-273-8255 to get help.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`If your need is more urgent, PLEASE call 911 right away or go to your nearest emergency room.`, {
            delay: 6000,
            withAvatar: true
        })];
        // this.updateChatbotState(emergencyMessage)
        this.addMessageToBotState(emergencyMessage)
    }
    findtherapist() {
        const therapyMessage = 
        [this.createChatBotMessage(`I'm glad you’re ready to take that step!`), 
        this.createChatBotMessage(`I've located a number of therapists in your area that specialize in issues with food and eating.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Please press below and I will redirect you.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`And if I can still be of help, we can continue at any time!`, {
            delay: 6000,
            withAvatar: true
        })];
        this.addMessageToBotState(therapyMessage)
        // this.createChatBotMessage("I'm glad you’re ready to take that step!");
        // this.updateChatbotState(therapyMessage)
    }
    endBlocks = () => {
        //this block can happen one out of two ways, so both ways are defined and then as a result of
        //random number, user is sentto eitehr Identifying trigger or evaluating moods visualization
    
        const randnum = this.randomnumber2();
        const block1 = 
        [this.createChatBotMessage(`If at any time you’d like me to help you find a therapist, you can type the word "Therapist" in the chat or press the button below.`, {
            delay: 2000,
            widget: "therapist",
            withAvatar: true
        }),
        this.createChatBotMessage(`Otherwise, come back when you're ready and we can get started again!`, {
            delay: 4000,
            widget: "mainBranching2",
            withAvatar: true
        })];
        const block2 = 
        [this.createChatBotMessage(`Life is full of ups and downs, but the fact that you’re showing up to work toward your goal means that you’re on the right path.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I'm here whenever you need me, so come back when you’re ready.`, {
            delay: 4000,
            widget: "mainBranching",
            withAvatar: true
        })];
        const block3 = 
        [this.createChatBotMessage(`In the words of Albert Einstein, "A person who never made a mistake never tried anything new."`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I'll be here when you’re ready to try again!`, {
            delay: 4000,
            widget: "mainBranching",
            withAvatar: true
        })];
        const block4 = 
        [this.createChatBotMessage(`"In any given moment we have two options: to step forward into growth or step back into safety." - B.F. Skinner`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I look forward to helping you continue on your path to growth.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re ready to do more, let me know.`, {
            delay: 6000,
            widget: "mainBranching",
            withAvatar: true
        })];
        const block5 = 
        [this.createChatBotMessage(`You’ve done great so far!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`In the words of Sayadaw U Tejaniya, "When you climb a mountain, you do it step by step; what is important is the step you are taking now."`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I'm just here to remind you to keep taking steps.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😉`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re ready to get started again, I’ll be right here for you.`, {
            delay: 10000,
            widget: "mainBranching2",
            withAvatar: true
        })];
        const block6 = 
        [this.createChatBotMessage(`In the words of Margaret Thatcher, "You may have to fight a battle more than once to win it."`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let's win this together!`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I'm here any time you’re ready to work together again.`, {
            delay: 6000,
            widget: "mainBranching2",
            withAvatar: true
        })];
        const block7 = 
        [this.createChatBotMessage(`If you have a moment, close your eyes and take a few deep breaths before moving on with your day.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Just a few breaths can clear the mind.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I'll be here whenever you’re ready to get started again.`, {
            delay: 6000,
            widget: "mainBranching3",
            withAvatar: true
        })];
        const block8 = 
        [this.createChatBotMessage(`It can be hard to stay on track, but it’s easier if your track allows for some breaks or sways from time to time.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`In the words of Sam Levenson, “Don’t watch the clock; do what it does. Keep going.”`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I'll be here whenever you’re ready to keep going again!`, {
            delay: 4000,
            widget: "mainBranching2",
            withAvatar: true
        })];
        const block9 = 
        [this.createChatBotMessage(`In the words of H. G. Wells, “If you fell down yesterday, stand up today.”`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Or perhaps you can still stand up today even if you didn’t fall yesterday ;-)`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I'll be here whenever you want to work on standing again!`, {
            delay: 4000,
            widget: "mainBranching2",
            withAvatar: true
        })];
        const block10 = 
        [this.createChatBotMessage(`In the words of Walter Elliot, “Perseverance is not a long race; it is many short races one after the other.”`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`While eating isn’t a race, staying on track can be thought of as many races, not one long race from which you fail if not perfect.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I'll be here whenever you want to continue moving forward!`, {
            delay: 4000,
            widget: "mainBranching2",
            withAvatar: true
        })];
        if(randnum === 1){
            this.addMessageToBotState(block1)
        }
        else if(randnum === 2){
            this.addMessageToBotState(block2)
        }
        else if(randnum === 3){
            this.addMessageToBotState(block3)
        }
        else if(randnum === 4){
            this.addMessageToBotState(block4)
        }
        else if(randnum === 5){
            this.addMessageToBotState(block5)
        }
        else if(randnum === 6){
            this.addMessageToBotState(block6)
        }
        else if(randnum === 7){
            this.addMessageToBotState(block7)
        }
        else if(randnum === 8){
            this.addMessageToBotState(block8)
        }
        else if(randnum === 9){
            this.addMessageToBotState(block9)
        }
        else{
            this.addMessageToBotState(block10)
        }
       // this.addMessageToBotState(visualizationMessage)
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
