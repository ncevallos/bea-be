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
    handleLetsBegin = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`To start, let’s Rate how you are currently feeling.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`How tempted are you to eat in a way that isn't ideal for you right now?`, {
            delay: 4000,
            widget: "howtempted",
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    handleHowTempted = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`To start, let’s Rate how you are currently feeling.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`How tempted are you to eat in a way that isn't ideal for you right now?`, {
            delay: 4000,
            widget: "howtempted",
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    notAtAll = () => {
        const notAtAllMessage = 
        [this.createChatBotMessage(`I'm so glad to hear that. 🏆 Keep up the good work!`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`Let’s do a Visualization anyways to make sure you stay on this positive path.`, {
            delay: 4000,
            widget: "visualization",
        })];
        this.addMessageToBotState(notAtAllMessage)
    }
    slightSomewhat = () => {
        const slightSomewhatMessage = 
        [this.createChatBotMessage(`So you are a little bit tempted right now, but it’s okay, I’m here to help!`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`Let’s do a Visualization to help you quell your craving.`, {
            delay: 4000,
            widget: "visualization",
        })];
        this.addMessageToBotState(slightSomewhatMessage)
    }
    veryExtremely = () => {
        const veryExtremelyMessage = 
        [this.createChatBotMessage(`Oh no - I'm sorry to hear that. 🙁`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`But that's okay. I'm here to help!`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`Let’s do our daily Visualization to help you feel more in control of your eating.`, {
            delay: 6000,
            widget: "visualization",
        })];
        this.addMessageToBotState(veryExtremelyMessage)
    }
    visualization = () => {
        const visualizationMessage = 
        [this.createChatBotMessage(`A Visualization helps you evaluate how you will feel if you make a particular food choice.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`This often makes it easier to control your urges.`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`Your Visualization for the day is: Evaluating Moods`, {
            delay: 8000,
        }),
        this.createChatBotMessage(`This Visualization will help you weigh the emotional costs and benefits of eating different foods.`, {
            delay: 10000,
        }),
        this.createChatBotMessage(`First, take a moment to think about what you’re planning to eat next.`, {
            delay: 12000,
        }),
        this.createChatBotMessage(`Let me know when you’re ready.`, {
            delay: 14000,
            widget: "planningIntro",
        })];
        this.addMessageToBotState(visualizationMessage)
    }
    // evaluatingMoods = () => {
    //     const evaluatingMoodsMessage = 
    //     [this.createChatBotMessage(`Your Visualization for the day is: Evaluating Moods`, {
    //         delay: 2000,
    //     }),
    //     this.createChatBotMessage(`This Visualization will help you weigh the emotional costs and benefits of eating different foods.`, {
    //         delay: 4000,
    //     }),
    //     this.createChatBotMessage(`First, take a moment to think about what you’re planning to eat next.`, {
    //         delay: 6000,
    //     }),
    //     this.createChatBotMessage(`Let me know when you’re ready.`, {
    //         delay: 8000,
    //         widget: "planningIntro",
    //     })];
    //     this.addMessageToBotState(evaluatingMoodsMessage)
    // }
    planningPhase = () => {
        const planningPhaseMessage = 
        [this.createChatBotMessage(`Great! What are you planning to eat? Please type below: `, {
            delay: 2000,
        })];
        this.addMessageToBotState(planningPhaseMessage)
    }
    planningPhase2 = (message) => {
        console.log("Message sent over to planning phase 2 is", message);
        this.setState((state) => ({
            ...state,
            plan2eat: message,
            lastblockvisited: "Planning Phase 2",
            waitingformsgflag: false
          }));
        const planningPhaseMessage = 
        [this.createChatBotMessage(`Keeping that food in mind, let’s answer a few questions:`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`How do you feel during the Planning Phase, from when you first start thinking about food up until you take the first bite?`, {
            delay: 6000,
            widget: "planningFeel",
        })];
        this.addMessageToBotState(planningPhaseMessage)
    }
    planningPhaseLength = () => {
        const planningPhaseLengthMessage = 
        [this.createChatBotMessage(`How long does your Planning Phase generally last?`, {
            delay: 2000,
            widget: "planningLength",
        })];
        this.addMessageToBotState(planningPhaseLengthMessage)
    }
    initialEatingIntro = () => {
        const initialEatingIntroMessage = 
        [this.createChatBotMessage(`Now let's focus on the Initial Eating Phase.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`This is the time from when you take your first bite of food up until when you first start to feel full.`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`Continuing to imagine what you were planning to eat, how do you think you’d feel during this time?`, {
            delay: 6000,
            widget: "initialEatingFeel",
        })];
        this.addMessageToBotState(initialEatingIntroMessage)
    }
    initialEatingLength = () => {
        const initialEatingLengthMessage = 
        [this.createChatBotMessage(`How long do you think your Initial Eating Phase would last?`, {
            delay: 2000,
            widget: "initialEatingLength",
        })];
        this.addMessageToBotState(initialEatingLengthMessage)
    }
    fullnessIntro = () => {
        const fullnessIntroMessage = 
        [this.createChatBotMessage(`Next, let's focus on the Fullness Phase.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`This is the time when you continue to eat after you are comfortably full.`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`How do you imagine you’d feel during this time?`, {
            delay: 6000,
            widget: "fullnessFeel",
        })];
        this.addMessageToBotState(fullnessIntroMessage)
    }
    fullnessLength = () => {
        const fullnessLengthMessage = 
        [this.createChatBotMessage(`How long do you think your Fullness Phase would last?`, {
            delay: 2000,
            widget: "fullnessLength",
        })];
        this.addMessageToBotState(fullnessLengthMessage)
    }
    afterEatingIntro = () => {
        const afterEatingMessage = 
        [this.createChatBotMessage(`Lastly, let’s focus on the After Eating Phase — what happens after you stop eating and when you’re still feeling full.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`How do you imagine you’d feel during this time?`, {
            delay: 4000,
            widget: "afterEatingFeel",
        })];
        this.addMessageToBotState(afterEatingMessage)
    }
    afterEatingLength = () => {
        const afterEatingLengthMessage = 
        [this.createChatBotMessage(`How long do you think you’d continue to feel full if you eat the food/foods you were planning to eat?`, {
            delay: 2000,
            widget: "afterEatingLength",
        })];
        this.addMessageToBotState(afterEatingLengthMessage)
    }
    //below was removed due to change in script
    // feelBest1 = () => {
    //     const feelBest1Message = 
    //     [this.createChatBotMessage(`If you decide to eat the food you listed previously, in which phase do you think you’d feel the best?`, {
    //         delay: 2000,
    //         widget: "feelBest1",
    //     })];
    //     this.addMessageToBotState(feelBest1Message)
    // }
    // feelBest2 = () => {
    //     const feelBest2Message = 
    //     [this.createChatBotMessage(`In which phase would you feel the worst?`, {
    //         delay: 2000,
    //         widget: "feelBest2",
    //     })];
    //     this.addMessageToBotState(feelBest2Message)
    // }
    // feelBest3 = () => {
    //     const feelBest3Message = 
    //     [this.createChatBotMessage(`Overall, how would you feel if you decide to eat the food you were planning to eat?`, {
    //         delay: 2000,
    //         widget: "feelBest3",
    //     })];
    //     this.addMessageToBotState(feelBest3Message)
    // }
    feelBest4 = () => {
        const feelBest4Message = 
        [this.createChatBotMessage(`Take a moment now to reflect on your answers.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`When you’re ready, we’ll move on to your Mindfulness Exercise for today.`, {
            delay: 4000,
            widget: "startMindfulness",
        })];
        this.addMessageToBotState(feelBest4Message)
    }
    mindfulness = () => {
        const mindfulnessMessage = 
        [this.createChatBotMessage(`I have several different 1-minute Mindfulness Exercises we can do together.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`I’ll choose one at random, but you can always come back later to try a different one.`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`Your 1-minute mindfulness exercise for today is to STRETCH!`, {
            delay: 8000,
        }),
        this.createChatBotMessage(`Doesn't it feel good to stretch? 🤗`, {
            delay: 10000,
        }),
        this.createChatBotMessage(`Would you prefer to do your Stretch Mindfulness Exercise by continuing to message with me or by listening to my voice?`, {
            delay: 12000,
            widget: "stretchMsgorVoice",
        })];
        this.addMessageToBotState(mindfulnessMessage)
    }
    stretchMessage = () => {
        const stretchMessage = 
        [this.createChatBotMessage(`Take a slow, deep breath in . . .`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`Stretch really, really slowly for at least 10 seconds.`, {
            delay: 4000,
        }),
        this.createChatBotMessage(`If you notice any tightness . . .`, {
            delay: 6000,
        }),
        this.createChatBotMessage(`. . .  just say “ease” or "hello" to that place in your body.`, {
            delay: 8000,
        }),
        this.createChatBotMessage(`Take another 20 seconds to stretch and notice any feeling of calmness in your body.`, {
            delay: 10000,
        }),
        this.createChatBotMessage(`Now take your time to reorient yourself to the present.`, {
            delay: 12000,
        }),
        this.createChatBotMessage(`And when you are ready, we will mindfully move forward.`, {
            delay: 14000,
            widget: "motivateAfter",
        })];
        this.addMessageToBotState(stretchMessage)
    }
    motivateAfter = () => {
        const motivateAfterMessage = 
        [this.createChatBotMessage(`Thanks for taking the time to do this Motivational work!`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`After doing these exercises, how do you feel about your ability to calm your cravings?`, {
            delay: 4000,
            widget: "motivateAfterOptions",
        })];
        this.addMessageToBotState(motivateAfterMessage)
    }
    thankYouDemo = () => {
        const thankYouDemoMessage = 
        [this.createChatBotMessage(`Thanks for participating in this demo with me!`, {
            delay: 2000,
            widget: "plansubmit",
        })];
        this.addMessageToBotState(thankYouDemoMessage)
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
    dontunderstand() {
        const dontunderstandMessage = 
        [this.createChatBotMessage(`🤔`), 
        this.createChatBotMessage(`My robot brain does not compute what you just wrote.`, {
            delay: 2000,
        }),
        this.createChatBotMessage(`Scroll back up to the last place you could select a button in order to continue where we left off.`, {
            delay: 4000,
        })];
        this.addMessageToBotState(dontunderstandMessage)
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
