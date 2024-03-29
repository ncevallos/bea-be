

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
        const max = 4;
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
        console.log("random number produces equals", rand);
        rand = Math.floor(rand);
        console.log("random number now contains", rand);    
        return (rand-1);
    }
    greet() {
        const greetingMessage = this.createChatBotMessage("Hello friend");
        this.updateChatbotState(greetingMessage)
    }
    handleLetsBegin = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`To start, let’s Rate how you are currently feeling.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`How tempted are you to eat in a way that isn't ideal for you right now?`, {
            delay: 4000,
            widget: "howtempted",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    handleHowTempted = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`To start, let’s Rate how you are currently feeling.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`How tempted are you to eat in a way that isn't ideal for you right now?`, {
            delay: 4000,
            widget: "howtempted",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    notAtAll = () => {
        const notAtAllMessage = 
        [this.createChatBotMessage(`I'm so glad to hear that. 🏆 Keep up the good work!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let’s do a Visualization anyways to make sure you stay on this positive path.`, {
            delay: 4000,
            widget: "visualization",
            withAvatar: true
        })];
        this.addMessageToBotState(notAtAllMessage)
    }
    slightSomewhat = () => {
        const slightSomewhatMessage = 
        [this.createChatBotMessage(`So you are a little bit tempted right now, but it’s okay, I’m here to help!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let’s do a Visualization to help you quell your craving.`, {
            delay: 4000,
            widget: "visualization",
            withAvatar: true
        })];
        this.addMessageToBotState(slightSomewhatMessage)
    }
    veryExtremely = () => {
        const veryExtremelyMessage = 
        [this.createChatBotMessage(`Oh no - I'm sorry to hear that. 🙁`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`But that's okay. I'm here to help!`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let’s do our daily Visualization to help you feel more in control of your eating.`, {
            delay: 6000,
            widget: "visualization",
            withAvatar: true
        })];
        this.addMessageToBotState(veryExtremelyMessage)
    }
    visualization = () => {
        //this block can happen one out of two ways, so both ways are defined and then as a result of
        //random number, user is sentto eitehr Identifying trigger or evaluating moods visualization

        const randnum = this.randomnumber2();
        const moodsVisualizationMessage = 
        [this.createChatBotMessage(`A Visualization helps you evaluate how you will feel if you make a particular food choice.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This often makes it easier to control your urges.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Your Visualization for the day is: Evaluating Moods`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This Visualization will help you weigh the emotional costs and benefits of eating different foods.`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`First, take a moment to think about what you’re planning to eat next.`, {
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re ready.`, {
            delay: 14000,
            widget: "planningIntro",
            withAvatar: true
        })];
        const triggersVisualizationMessage = 
        [this.createChatBotMessage(`A Visualization helps you evaluate how you will feel if you make a particular food choice.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This often makes it easier to control your urges.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Your Visualization for the day is: Identifying Triggers`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This Visualization will help you weigh the emotional costs and benefits of eating different foods.`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`First, take a moment to think about what you’re planning to eat next.`, {
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re ready.`, {
            delay: 14000,
            widget: "planningIntro2",
            withAvatar: true
        })];
        console.log('randnum in visualization contains ', randnum)
        if(randnum === 1){
            this.addMessageToBotState(moodsVisualizationMessage)
        }
        else{
            this.addMessageToBotState(triggersVisualizationMessage)
        }
       // this.addMessageToBotState(visualizationMessage)
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
            withAvatar: true
        })];
        this.addMessageToBotState(planningPhaseMessage)
    }
    planningPhaseopt2 = () => {
        const planningPhaseMessage = 
        [this.createChatBotMessage(`When you know, please enter that food choice here: `, {
            delay: 2000,
            withAvatar: true
        })];
        this.addMessageToBotState(planningPhaseMessage)
    }
    planningPhas2ealt = (message) => {
        console.log("Message sent over to planning phase 2 is", message);
        this.setState((state) => ({
            ...state,
            plan2eat: message,
            lastblockvisited: "Planning Phase 2 alt",
            waitingformsgflag: false
          }));
        const planningPhaseMessage = 
        [this.createChatBotMessage(`Keeping that food in mind, let’s answer a few questions:`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`How do you feel during the Planning Phase, from when you first start thinking about food up until you take the first bite?`, {
            delay: 6000,
            widget: "planningFeel",
            withAvatar: true
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
            withAvatar: true
        }),
        this.createChatBotMessage(`How do you feel during the Planning Phase, from when you first start thinking about food up until you take the first bite?`, {
            delay: 6000,
            widget: "planningFeel",
            withAvatar: true
        })];
        this.addMessageToBotState(planningPhaseMessage)
    }
    planningPhaseLength = () => {
        const planningPhaseLengthMessage = 
        [this.createChatBotMessage(`How long does your Planning Phase generally last?`, {
            delay: 2000,
            widget: "planningLength",
            withAvatar: true
        })];
        this.addMessageToBotState(planningPhaseLengthMessage)
    }
    initialEatingIntro = () => {
        const initialEatingIntroMessage = 
        [this.createChatBotMessage(`Now let's focus on the Initial Eating Phase.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This is the time from when you take your first bite of food up until when you first start to feel full.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Continuing to imagine what you were planning to eat, how do you think you’d feel during this time?`, {
            delay: 6000,
            widget: "initialEatingFeel",
            withAvatar: true
        })];
        this.addMessageToBotState(initialEatingIntroMessage)
    }
    initialEatingLength = () => {
        const initialEatingLengthMessage = 
        [this.createChatBotMessage(`How long do you think your Initial Eating Phase would last?`, {
            delay: 2000,
            widget: "initialEatingLength",
            withAvatar: true
        })];
        this.addMessageToBotState(initialEatingLengthMessage)
    }
    fullnessIntro = () => {
        const fullnessIntroMessage = 
        [this.createChatBotMessage(`Next, let's focus on the Fullness Phase.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This is the time when you continue to eat after you are comfortably full.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`How do you imagine you’d feel during this time?`, {
            delay: 6000,
            widget: "fullnessFeel",
            withAvatar: true
        })];
        this.addMessageToBotState(fullnessIntroMessage)
    }
    fullnessLength = () => {
        const fullnessLengthMessage = 
        [this.createChatBotMessage(`How long do you think your Fullness Phase would last?`, {
            delay: 2000,
            widget: "fullnessLength",
            withAvatar: true
        })];
        this.addMessageToBotState(fullnessLengthMessage)
    }
    afterEatingIntro = () => {
        const afterEatingMessage = 
        [this.createChatBotMessage(`Lastly, let’s focus on the After Eating Phase — what happens after you stop eating and when you’re still feeling full.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`How do you imagine you’d feel during this time?`, {
            delay: 4000,
            widget: "afterEatingFeel",
            withAvatar: true
        })];
        this.addMessageToBotState(afterEatingMessage)
    }
    afterEatingLength = () => {
        const afterEatingLengthMessage = 
        [this.createChatBotMessage(`How long do you think you’d continue to feel full if you eat the food/foods you were planning to eat?`, {
            delay: 2000,
            widget: "afterEatingLength",
            withAvatar: true
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
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re ready, we’ll move on to your Mindfulness Exercise for today.`, {
            delay: 4000,
            widget: "startMindfulness",
            withAvatar: true
        })];
        this.addMessageToBotState(feelBest4Message)
    }
    identifyTriggers2 = (message) => {
        console.log("Message sent over to identify triggers2 is", message);
        this.setState((state) => ({
            ...state,
            plan2eat: message,
            lastblockvisited: "Identify Triggers2",
            waitingformsgflag: false
          }));
        const feelBest4Message = 
        [this.createChatBotMessage(`Of the reasons listed below, which best describes why you want to eat right now?`, {
            delay: 2000,
            widget: "identifyTriggers2",
            withAvatar: true
        })];
        this.addMessageToBotState(feelBest4Message)
    }   
    genuinelyHungry = () => {
        const Message = 
        [this.createChatBotMessage(`Being completely honest with yourself, how much worse or better would you feel if you overindulge?`, {
            delay: 2000,
            widget: "overIndulgeGH",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    genuinelyHungry2 = () => {
        const Message = 
        [this.createChatBotMessage(`How much more worse or better would you be if you make a different choice?`, {
            delay: 2000,
            widget: "differentChoiceGH",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    sadLonely = () => {
        const Message = 
        [this.createChatBotMessage(`Being completely honest with yourself, how much more or less sad or lonely would you feel if you overindulge?`, {
            delay: 2000,
            widget: "overIndulgeSL",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    sadLonely2 = () => {
        const Message = 
        [this.createChatBotMessage(`How much more or less sad or lonely would you feel if you make a different choice?`, {
            delay: 2000,
            widget: "differentChoiceSL",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    upset = () => {
        const Message = 
        [this.createChatBotMessage(`Being completely honest with yourself, how much more or less upset would you feel if you overindulge?`, {
            delay: 2000,
            widget: "overIndulgeUpset",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    upset2 = () => {
        const Message = 
        [this.createChatBotMessage(`How much more or less upset would you be if you make a different choice?`, {
            delay: 2000,
            widget: "differentChoiceUpset",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    stress = () => {
        const Message = 
        [this.createChatBotMessage(`Being completely honest with yourself, how much more or less stressed would you feel if you overindulge?`, {
            delay: 2000,
            widget: "overIndulgeStress",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    stress2 = () => {
        const Message = 
        [this.createChatBotMessage(`How much more or less stressed would you be if you make a different choice?`, {
            delay: 2000,
            widget: "differentChoiceStress",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    bored = () => {
        const Message = 
        [this.createChatBotMessage(`Being completely honest with yourself, how much more or less bored would you feel if you overindulge?`, {
            delay: 2000,
            widget: "overIndulgeBored",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    bored2 = () => {
        const Message = 
        [this.createChatBotMessage(`How much more or less bored would you be if you make a different choice?`, {
            delay: 2000,
            widget: "differentChoiceBored",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    anxious = () => {
        const Message = 
        [this.createChatBotMessage(`Being completely honest with yourself, how much more or less anxious would you feel if you overindulge?`, {
            delay: 2000,
            widget: "overIndulgeAnxious",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    anxious2 = () => {
        const Message = 
        [this.createChatBotMessage(`How much more or less anxious would you be if you make a different choice?`, {
            delay: 2000,
            widget: "differentChoiceAnxious",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }   
    triggerSomethingElse = () => {
        const Message = 
        [this.createChatBotMessage(`What is triggering you today?`, {
            delay: 2000,
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }  
    triggerSomethingElse2 = (message) => {
        console.log("Message sent over to trigger something else 2 is", message);
        this.setState((state) => ({
            ...state,
            differentchoice2: message,
            lastblockvisited: "Trigger Something else",
            waitingformsgflag: false
          }));
        const Message = 
        [this.createChatBotMessage(`Now hold that reason in your mind as you answer the following questions.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Being completely honest, how much worse or better would you feel about that trigger if you overindulged?`, {
            delay: 6000,
            widget: "overIndulgeGH",
            withAvatar: true
        })];
        this.addMessageToBotState(Message)
    }
    mindfulness = () => {

        const randnum = this.randomnumber();
        this.setState((state) => ({
            ...state,
            lastblockvisited: "Trigger Something else",
          }));
        const stretchMessage = 
        [this.createChatBotMessage(`I have several different 1-minute Mindfulness Exercises we can do together.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I’ll choose one at random, but you can always come back later to try a different one.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Your 1-minute mindfulness exercise for today is to STRETCH!`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Doesn't it feel good to stretch? 🤗`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Would you prefer to do your Stretch Mindfulness Exercise by continuing to message with me or by listening to my voice?`, {
            delay: 12000,
            widget: "stretchMsgorVoice",
            withAvatar: true
        })];
        const stopMessage = 
        [this.createChatBotMessage(`I have several different 1-minute Mindfulness Exercises we can do together.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I’ll choose one at random, but you can always come back later to try a different one.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Your 1-minute mindfulness exercise for today is to STOP!`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`We all need to just STOP every once in a while. 😉`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Would you prefer to do your STOP Mindfulness Exercise by continuing to message with me or by listening to my voice?`, {
            delay: 12000,
            widget: "stretchMsgorVoice",
            withAvatar: true
        })];

        const breatheMessage = 
        [this.createChatBotMessage(`I have several different 1-minute Mindfulness Exercises we can do together.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I’ll choose one at random, but you can always come back later to try a different one.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Your 1-minute mindfulness exercise for today is to BREATHE!`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I can't think of anything more important. 😉`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Would you prefer to do your Breathe Mindfulness Exercise by continuing to message with me or by listening to my voice?`, {
            delay: 12000,
            widget: "stretchMsgorVoice",
            withAvatar: true
        })];
        const chantMessage = 
        [this.createChatBotMessage(`I have several different 1-minute Mindfulness Exercises we can do together.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I’ll choose one at random, but you can always come back later to try a different one.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Your 1-minute mindfulness exercise for today is to CHANT!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let's make this chant your new mantra. 😉`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Would you prefer to do your Chant Mindfulness Exercise by continuing to message me or by listening to my voice?`, {
            delay: 6000,
            widget: "stretchMsgorVoice",
            withAvatar: true
        })];

        if(randnum === 1){
            this.addMessageToBotState(stopMessage)
        }
        else if(randnum === 2){
            this.addMessageToBotState(chantMessage)
        }
        else if(randnum === 3){
            this.addMessageToBotState(breatheMessage)
        }
        else{
            this.addMessageToBotState(stretchMessage)
        }
  //      this.addMessageToBotState(mindfulnessMessage)
    }
    stretchMessage = () => {
        const stretchMessage = 
        [this.createChatBotMessage(`Take a slow, deep breath in . . .`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Stretch really, really slowly for at least 10 seconds.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`If you notice any tightness . . .`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`. . .  just say “ease” or "hello" to that place in your body.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Take another 20 seconds to stretch and notice any feeling of calmness in your body.`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Now take your time to reorient yourself to the present.`, {
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(`And when you are ready, we will mindfully move forward.`, {
            delay: 14000,
            widget: "motivateAfter",
            withAvatar: true
        })];
        this.addMessageToBotState(stretchMessage)
    }

    stretchVoice = () => {
        const stretchMessage = 
        [this.createChatBotMessage(`Great! Let's get started!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Make sure you're sitting someplace where you feel safe closing your eyes and relaxing.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😌`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re ready, press the play button below.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`(Insert Play button)`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`And when you’re fully aware again, we will mindfully move forward.`, {
            delay: 14000,
            widget: "motivateAfter",
            withAvatar: true
        })];
        this.addMessageToBotState(stretchMessage)
    }
    stopMessage = () => {
        const stopMessage = 
        [this.createChatBotMessage(`Great! Let's get started.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Take a slow, deep breath in . . .`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😌`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`S: Stand up and breathe. Feel your connection to the earth.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`T: Tune in to your body. Take notice of any calming sensations and let go of any tension.`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`O: Observe something pleasant in your environment and be grateful for its presence.`, {
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(`P: Possibility. Ask yourself what is possible to change and what you can do to achieve it.`, {
            delay: 14000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Now slowly breathe in and out and let this mindful feeling settle in.`, {
            delay: 16000,
            withAvatar: true
        }),
        this.createChatBotMessage(`And when you are ready, we will mindfully move forward.`, {
            delay: 18000,
            widget: "motivateAfter",
            withAvatar: true
        })];
        this.addMessageToBotState(stopMessage)
    }
    breatheMessage = () => {
        const stopMessage = 
        [this.createChatBotMessage(`Let's get ready to Breathe!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Take a slow, deep breath in . . .`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😌`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Focus on your breath.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When your mind wanders, as it will, just nudge your attention back to your breath.`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Or you can focus on bringing in positivity while you breathe in . . .`, {
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(`And focus on letting go of negativity as you breathe out.`, {
            delay: 14000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Continue to focus on your breath for at least one minute.`, {
            delay: 16000,
            withAvatar: true
        }),
        this.createChatBotMessage(`And when you are ready, we will mindfully move forward.`, {
            delay: 18000,
            widget: "motivateAfter",
            withAvatar: true
        })];
        //depending on the random number the appropriate mindful excercise will be add to state
        this.addMessageToBotState(stopMessage)
    }
    chantMessage = () => {
        const stopMessage = 
        [this.createChatBotMessage(`Great! Let's get started with our chant.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Take a slow, deep breath in . . .`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😌`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Exhale`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Now repeat:`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`"May I be happy."`, {
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(`"May I be well."`, {
            delay: 14000,
            withAvatar: true
        }),
        this.createChatBotMessage(`"May I be filled with kindness and peace."`, {
            delay: 16000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Continue to repeat these phrases for at least one minute.`, {
            delay: 18000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Focus only on positive energy as you breathe in and out.`, {
            delay: 20000,
            withAvatar: true
        }),
        this.createChatBotMessage(`And when you are ready, we will mindfully move forward.`, {
            delay: 22000,
            widget: "motivateAfter",
            withAvatar: true
        })];
        this.addMessageToBotState(stopMessage)
    }
    motivateAfter = () => {
        const motivateAfterMessage = 
        [this.createChatBotMessage(`Thanks for taking the time to do this Motivational work!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`After doing these exercises, how do you feel about your ability to calm your cravings?`, {
            delay: 4000,
            widget: "motivateAfterOptions",
            withAvatar: true
        })];
        this.addMessageToBotState(motivateAfterMessage)
    }
    afterBetter = () => {
        const motivateAfterMessage = 
        [this.createChatBotMessage(` I'm so glad to hear it helped!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😎`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`You've finished you Motivate Activity for the day`, {
            delay: 8000,
            widget: "plansubmit",
            withAvatar: true
        })];
        this.addMessageToBotState(motivateAfterMessage)
    }
    afterSame = () => {
        const motivateAfterMessage = 
        [this.createChatBotMessage(`I'm sorry to hear it didn't help!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Hopefully we can try again later and find something that can help you more.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`You've finished you Motivate Activity for the day`, {
            delay: 8000,
            widget: "plansubmit",
            withAvatar: true
        })];
        this.addMessageToBotState(motivateAfterMessage)
    }
    afterWorse = () => {
        const motivateAfterMessage = 
        [this.createChatBotMessage(`Oh no! The last thing we want is for you to feel worse!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😕`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I’ll make a note of it so we can try a different approach later.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`You've finished you Motivate Activity for the day`, {
            delay: 10000,
            widget: "plansubmit",
            withAvatar: true
        })];
        this.addMessageToBotState(motivateAfterMessage)
    }
    thankYouDemo = () => {
        const thankYouDemoMessage = 
        [this.createChatBotMessage(`Thanks for participating in this demo with me!`, {
            delay: 2000,
            widget: "plansubmit",
            withAvatar: true
        })];
        this.addMessageToBotState(thankYouDemoMessage)
    }
    otheractivity = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Since you just finished Motivating, let's do a different Activity.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`What would you like to Plan or Meditate?`, {
            delay: 4000,
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
    dontunderstand() {
        const dontunderstandMessage = 
        [this.createChatBotMessage(`🤔`), 
        this.createChatBotMessage(`My robot brain does not compute what you just wrote.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Scroll back up to the last place you could select a button in order to continue where we left off.`, {
            delay: 4000,
            withAvatar: true
        })];
        this.addMessageToBotState(dontunderstandMessage)
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
