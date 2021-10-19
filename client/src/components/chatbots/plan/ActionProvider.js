import React from 'react'

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
        //random number generator for the random response blocks this has max 5
        const min = 1;
        const max = 5;
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
    welcomeblock1 = () => {
        //A random number is produced in this first black that will run for the whole entirity
        // this.randomnumber();
        const letsBeginMessage = 
        [this.createChatBotMessage(`Great! 👍`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`For this Activity, we will first Reflect on your past eating.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Next, we will decide upon a main Goal for the day and find ways to help you reach that Goal.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Finally, we will decide upon an Action to take if the urge to overindulge arises.`, {
            delay: 8000,
            withAvatar: true,
            widget: "welcomeblock2",
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    welcomeblock2 = () => {
        const randnum = this.randomnumber();
        const randnum2 = this.randomnumber();
        console.log("We should now be able to see global randnum", randnum);
        const randblock = ["Welcome back!",
         "I'm glad you’re ready to create a new Plan for the day!", 
         "Welcome back! You've been doing great so far."]
         const randblock2 = ["Let’s jump right in and come up with a new Plan for today.",
          "Let’s begin by Reflecting briefly on your past before moving forward.", 
          "Let's create a new Plan and see where we can do some fine tuning."]
        const letsBeginMessage = 
        [this.createChatBotMessage(randblock[randnum], {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(randblock2[randnum2], {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`To get started, how do you feel about what you ate in the past day?`, {
            delay: 6000,
            widget: "howdoyoufeel",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    plangood = () => {
        const randnum = this.randomnumber();
        const randblock = ["Doesn't it feel great to know that you stayed on track?",
         "Nothing is as (ful)filling as staying on track!", "Doesn't it feel great to know that you stayed on track?"]
        const letsBeginMessage = 
        [this.createChatBotMessage(`I'm happy to hear that!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(randblock[randnum], {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`What do you think helped you stay on track?`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This can be something emotional like feeling positive or something physical such starting the day with a filling meal.`, {
            delay: 8000,
            widget: "plangoodblock",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    plangoodjournal = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Can you tell me more about what helped you stay on track?`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`You can type a brief response below:`, {
            delay: 4000,
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    plangoodjournal2 = (message) => {
        console.log("Message sent over to good journal is", message);
        this.setState((state) => ({
            ...state,
            planjournal: message,
            lastblockvisited: "Plan Good Journal",
            waitingformsgflag: false
          }));
        const letsBeginMessage = 
        [this.createChatBotMessage(`Thanks! `, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😁`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I’ll save your entry in your Plan Journal so you can look back on it later.`, {
            delay: 6000,
            widget: "plangoal",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    planbad = () => {
        const randnum = this.randomnumber();
        const randnum2 = this.randomnumber();
        const randblock = ["It's not about staying on the horse... PICTURE",
         "But let's focus on moving forward.", 
         "The goal isn't to be perfect, but to identify patterns and make gradual changes if you aren’t 100 percent happy with your eating right now."]
         const randblock2 = ["It's about making sure you get back up after you fall!",
          "The more we beat ourselves up, the more likely we are to repeat the same cycle.", 
          "Change takes time, but you can do this!"]
        const letsBeginMessage = 
        [this.createChatBotMessage(`I'm sorry to hear that. 😞`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(randblock[randnum], {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(randblock2[randnum2], {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let’s briefly discuss and then find ways to make sure you are happier tomorrow. `, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`If you were to do it differently, which of the options below would you choose?`, {
            delay: 10000,
            widget: "planbadblock",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }

    smalleramounts = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`How much less would have been ideal?`, {
            delay: 2000,
            widget: "smalleramounts",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }

    differentfoods = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`If you were to do it differently, what would you have changed about the foods that you chose?`, {
            delay: 4000,
            widget: "differentfoods",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }

    planbadjournal = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Can you tell me a little bit more about what happened?`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`You can type a brief response below:`, {
            delay: 4000,
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    planbadjournal2 = (message) => {
        this.setState((state) => ({
            ...state,
            planjournal: message,
            lastblockvisited: "Plan Bad Journal",
            waitingformsgflag: false
          }));
        const letsBeginMessage = 
        [this.createChatBotMessage(`Thanks for letting me know!`, {
                delay: 2000,
                withAvatar: true
            }),
            this.createChatBotMessage(`I’ll save your entry in your Plan Journal so you can look back and identify patterns.`, {
                delay: 4000,
                withAvatar: true
            }),
            this.createChatBotMessage(`Now that we’ve Reflected upon the past, let’s focus on moving forward.`, {
                delay: 7000,
                withAvatar: true
            }),
            this.createChatBotMessage(`In general, what feels like the most important Goal for you to have today?`, {
                delay: 9000,
                withAvatar: true,
                widget: "plangoal",
            })];
        this.addMessageToBotState(letsBeginMessage)
    }

    emotionalbehavioral = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Can you think of anything that happened recently that might have influenced your eating?`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This can be something emotional like feeling sad after a conflict with a loved one, or something physical such as skipping breakfast.`, {
            delay: 4000,
            widget: "emotionalbehavioral",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }

    plangoal = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Now that we’ve Reflected upon the past, let’s focus on moving forward.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`In general, what feels like the most important Goal for you to have today?`, {
            delay: 4000,
            widget: "plangoal",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    smallerportions = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Great! I can help you find ways to eat smaller amounts.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Would you prefer to stop eating when you’re full, or to choose foods that are more filling so you aren't as hungry?`, {
            delay: 4000,
            widget: "smallerportions",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    stopfull = () => {
        const randnum = this.randomnumber2();
        const randblock = ["https://www.intuitiveeating.org/10-principles-of-intuitive-eating/",
         "https://www.wikihow.com/Know-when-You%27re-Full", 
         "https://www.eatingrecoverycenter.com/blog/signs-symptoms/I-Cant-Tell-When-Im-Full",
        "https://www.health.harvard.edu/blog/how-to-stop-eating-all-that-tasty-but-unhealthy-stuff-202109212597",
        "https://www.rachelmmolenda.com/blog/recognizing-hunger-signals"]
        const randblock2 = ["10 principles of intuitive eating/",
         "How to know when you're full", 
         "I Cant Tell When I'm Full",
        "Listen to your hunger cues",
        "Recognizing hunger signals"]
        const letsBeginMessage = 
        [this.createChatBotMessage(`I know - it can be hard to stop when it tastes so good!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Sometimes we get confused by cravings and emotions and we forget to listen to our bodies.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Luckily, I've found an article that can help you learn to listen to your body again.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href={randblock[randnum]} style={{color: "black"}} target="_blank" rel="noreferrer">{randblock2[randnum]}</a>, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re ready, let me know and we can continue.`, {
            delay: 10000,
            widget: "stopfull2",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    stopfull2 = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Remember, your main Goal for today is to stop eating when you’re full.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Imagine how good that will feel in your body at the end of the day.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can expand on this same Goal or choose a new one.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re ready, we can move on to the Action you will take if you get a craving that doesn’t align with your Goal.`, {
            delay: 8000,
            widget: "smallerportions",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    morefilling = () => {
        const randnum = this.randomnumber2();
        const randblock = ["https://www.medicalnewstoday.com/articles/324078#:~:text=Eating%20foods%20that%20satisfy%20hunger,unhealthful%20foods%20are%20not%20satiating",
         "https://www.everydayhealth.com/weight-loss-pictures/foods-that-help-to-lose-weight.aspx", 
         "https://www.verywellfit.com/what-to-eat-if-always-hungry-4077290",
        "https://www.webmd.com/diet/obesity/features/foods-that-curb-hunger#1",
        "https://time.com/84888/the-food-the-mysteriously-makes-you-feel-full-explained/"]
        const randblock2 = ["What are the most filling foods",
         "8 Foods that help you lose weight and satisfy your stomach", 
         "Foods to eat if you're always hungry",
        "High-Water, High-Fiber Foods that Curb Hunger",
        "The food that mysteriously makes you feel full, explained"]
        const letsBeginMessage = 
        [this.createChatBotMessage(`That's always a great choice!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`😎`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Research shows that when we choose more filling foods, we’re less likely to overeat.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Luckily, I have found some information to help you along your journey.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I’ve selected one at random today, but you can always come back to read a different one later!`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(
            <a href={randblock[randnum]}  style={{color: "black"}} target="_blank" rel="noreferrer">1{randblock2[randnum]}</a>, {
            // `15 Filling Foods`
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re done reading and we can continue.`, {
            delay: 14000,
            widget: "morefilling",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    morefilling2 = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Remember, your main Goal for today is to choose more filling foods.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Think about what kind of filling foods you would enjoy.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Imagine how good it will feel to make these healthy choices.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can continue to work on choosing more filling foods, or we can create a new Goal for the day.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re ready to come up with an Action to take if the urge to overindulge strikes.`, {
            delay: 10000,
            widget: "morefilling2",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    lessfat = () => {
        const randnum = this.randomnumber2();
        const randblock = ["https://www.nhs.uk/live-well/eat-well/eat-less-saturated-fat/#:~:text=trim%20visible%20fat%20and%20take,on%20olive%20or%20sunflower%20oils",
         "https://www.healthline.com/nutrition/healthy-low-fat-foods", 
         "https://www.medicinenet.com/script/main/art.asp?articlekey=56665",
        "https://www.healthline.com/nutrition/low-calorie-foods",
        "https://www.prevention.com/food-nutrition/healthy-eating/a20473168/the-best-spices-to-make-low-fat-food-tastier/"]
        const randblock2 = ["How to eat less saturated fat",
         "13 Low-Fat Foods That Are Good For Your Health", 
         "How to make low-calorie, low-fat food taste like high-fat food",
        "13 Low-Calorie Foods that are surprisingly filling",
        "How to make low-fat food tastier"]
        const letsBeginMessage = 
        [this.createChatBotMessage(`Great choice!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(` It’s important to note that some fats are healthy, so we don’t want to eliminate anything`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`But, if you find that you are reaching for fatty foods more than you would like…`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(` Then let’s work together to find a way to moderate.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(` Education is the key to change, so I’ve located some articles to help!`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Please click below for your daily article!`, {
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href={randblock[randnum]}  style={{color: "black"}} target="_blank" rel="noreferrer">{randblock2[randnum]}</a>, {
            delay: 14000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re ready and we can continue.`, {
            delay: 18000,
            widget: "lessfat",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    lessfat2 = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Take some time now to reflect on your Goal of eating less fat today.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Hopefully the articles gave you some good ideas!`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can come back to eating less fattening foods, or choose a different goal for the day.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re ready and we can move on to your Action for today.`, {
            delay: 8000,
            widget: "lessfat2",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    lesssugar = () => {
        const randnum = this.randomnumber2();
        const randblock = ["https://nutritiouslife.com/eat-empowered/4-reasons-why-you-have-sugar-cravings/",
         "https://www.webmd.com/diet/ss/slideshow-sugar-addiction", 
         "https://www.everydayhealth.com/diet-nutrition/foods-that-can-help-fight-sugar-cravings/",
        "https://www.healthline.com/health/food-nutrition/why-am-i-craving-sweets#stop-the-craving",
        "https://www.fitnessbash1.com/low-calorie-snacks/"]
        const randblock2 = ["4 Reasons why you have sugar cravings",
         "The Truth about Sugar Addictions", 
         "20 Foods That Help Fight Sugar Cravings",
        "Why am I craving Sweets",
        "15 Low Calorie Snacks"]
        const letsBeginMessage = 
        [this.createChatBotMessage(`I know it can be tough to cut down on sugar if you have a sweet tooth, but it's a great Goal for today! 😊`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Remember, the goal is never to eliminate anything altogether, but I have a lot of education about sugar that can help you move towards your goal of moderation.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I’ve chosen one at random today, but you can come back and read a different one later.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href={randblock[randnum]} style={{color: "black"}} target="_blank" rel="noreferrer">{randblock2[randnum]}</a>, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re done reading and we can continue.`, {
            delay: 4000,
            withAvatar: true,
            widget: "lesssugar",
        }),
    ];
        this.addMessageToBotState(letsBeginMessage)
    }
    lesssugar2 = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`ake a moment to think about what foods you’d like to eat today that taste sweet but don't have a lot of sugar. `, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Eating some of these foods instead of sugary foods is your main Goal for today.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can expand on this same Goal, or choose a new one for the day.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Next, we’ll make an Action plan for what to do if the urge strikes. Let me know when you’re ready to move on.`, {
            delay: 4000,
            withAvatar: true,
            widget: "lesssugar2",
        }),
    ];
        this.addMessageToBotState(letsBeginMessage)
    }
    // avoidsugar = () => {
    //     const letsBeginMessage = 
    //     [this.createChatBotMessage(`Avoiding sugar altogether can be tough!`, {
    //         delay: 2000,
    //         withAvatar: true
    //     }),
    //     this.createChatBotMessage(`But . . .`, {
    //         delay: 4000,
    //         withAvatar: true
    //     }),
    //     this.createChatBotMessage(`If sugar sets you off on a bad cycle, it's a great temporary goal to get you out of the habit of eating sweets.`, {
    //         delay: 6000,
    //         withAvatar: true
    //     }),
    //     this.createChatBotMessage(`I've found an article that can help you transform your sugar addiction.`, {
    //         delay: 8000,
    //         withAvatar: true
    //     }),
    //     this.createChatBotMessage(<a href='https://www.healthline.com/nutrition/15-incredibly-filling-foods' style={{color: "black"}} target="_blank" rel="noreferrer">Sugar Addiction Tips</a>, {
    //         delay: 10000,
    //         withAvatar: true
    //     }),
    //     this.createChatBotMessage(`When you’re done reading, let me know and we can continue.`, {
    //         delay: 12000,
    //         widget: "avoidsugar",
    //         withAvatar: true
    //     })];
    //     this.addMessageToBotState(letsBeginMessage)
    // }
    // avoidsugar2 = () => {
    //     const letsBeginMessage = 
    //     [this.createChatBotMessage(`Now that you’ve chosen avoiding sugar as your main Goal, take a moment to imagine feeling peaceful and whole without it.`, {
    //         delay: 2000,
    //         withAvatar: true
    //     }),
    //     this.createChatBotMessage(`Tomorrow, we can choose again to avoid sugar, or try a different Goal for the day.`, {
    //         delay: 4000,
    //         withAvatar: true
    //     }),
    //     this.createChatBotMessage(`Let me know when you’re ready to move on to your Action for today.`, {
    //         delay: 6000,
    //         widget: "avoidsugar2",
    //         withAvatar: true
    //     })];
    //     this.addMessageToBotState(letsBeginMessage)
    // }
    foodchoices = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Our food choices don't need to be perfect, but it's great to start out with a general plan.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`What would you like to be the main focus of your food choices for today?`, {
            delay: 4000,
            widget: "foodchoices",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    sweetfoods = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Great choice! 😀`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`If you’re craving sugar, I always think it's helpful to find an alternative so you don't feel deprived.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Here’s an article that will help you find sweet snacks under 50 calories.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href='https://www.bhg.com/recipes/healthy/snacks/20-sweet-snacks-for-50-calories-or-less/' style={{color: "black"}} target="_blank" rel="noreferrer">Find Sweet Snacks</a>, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re done reading and we can continue.`, {
            delay: 10000,
            widget: "sweetfoods",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    sweetfoods2 = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Take a moment to think about what foods you’d like to eat today that taste sweet but don't have a lot of sugar.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Eating some of these foods instead of sugary foods is your main Goal for today.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can expand on this same Goal, or choose a new one for the day.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Next, we’ll make an Action plan for what to do if the urge strikes. Let me know when you’re ready to move on.`, {
            delay: 8000,
            widget: "sweetfoods2",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    fewercarbs = () => {
        const randnum = this.randomnumber2();
        const randblock = ["https://www.verywellfit.com/low-carb-substitutes-for-high-carb-food-2242524",
         "https://trueyouweightloss.com/blog/refined-and-complex-carbs-how-to-make-the-right-choice/", 
         "https://share.upmc.com/2018/10/what-are-healthy-carbs/",
        "https://www.healthline.com/nutrition/12-healthy-high-carb-foods#TOC_TITLE_HDR_2",
        "https://www.verywellfit.com/do-carbs-make-you-gain-weight-4047400"]
        const randblock2 = ["High Protein and Low Carb Vegetarian Foods",
         "Refined and Complex Carbs: How to make the right choice", 
         "What are healthy Carbs",
        "12 High Carb Foods that are actually super healthy",
        "Do Carbs make you gain weight"]
        const letsBeginMessage = 
        [this.createChatBotMessage(`Remember, no foods are bad, including carbohydrates.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`However, if you find that you don’t feel great when you eat too many carbs...`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`... then gradually cutting back is a great Goal!`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`So let's get some more information about carbs to help you on your journey.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Read below for your article of the day!`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href={randblock[randnum]} style={{color: "black"}} target="_blank" rel="noreferrer">{randblock2[randnum]}</a>, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re ready, let me know and we can continue.`, {
            delay: 12000,
            widget: "fewercarbs",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    fewercarbs2 = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Take a moment to think about which foods will taste great and make you feel great too!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Although your Goal is to eat fewer carbs, the best way to accomplish this is Goal is to focus on the foods you ‘want’ to eat, and not the foods that you don’t.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can come back to this or make a new Goal for the day.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you are ready to move on to your Action for today.`, {
            delay: 8000,
            widget: "fewercarbs2",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    fewercalories = () => {
        const randnum = this.randomnumber2();
        const randblock = ["https://www.everydayhealth.com/weight/fewer-calories-stalls-metabolism.aspx",
         "https://www.healthline.com/nutrition/how-many-calories-per-day#average-calorie-needs", 
         "https://www.verywellfit.com/how-many-calories-to-lose-weight-3495659",
        "https://discovergoodnutrition.com/2016/09/cutting-calories/",
        "https://www.verywellfit.com/how-to-cut-calories-for-weight-loss-3495810"]
        const randblock2 = ["Can Eating Too Few Calories Stall Your Metabolism",
         "How Many Calories Should You Eat per Day to Lose Weight?", 
         "How Many Calories Should I Eat in a Day",
        "Why Drastic Calorie Cutting May Backfire",
        "How to cut calories for weight loss"]
        const letsBeginMessage = 
        [this.createChatBotMessage(`Great! Let's take a more specific look at how much less you should aim to eat.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Many people try to cut out too much, but then they fall off track and overindulge.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Instead, I recommend making small, incremental changes so you’ll be more likely to stay on track.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I have found some articles to help you decide what’s right for you and how to stay on track.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href={randblock[randnum]} style={{color: "black"}} target="_blank" rel="noreferrer">{randblock2[randnum]}</a>, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re ready, let me know and we can continue.`, {
            delay: 12000,
            widget: "fewercalories",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    fewercalories2 = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`After reading this article, take a moment to think about how you’ll accomplish your Goal of eating fewer calories, and how good that will feel.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I don't suggest counting calories unless that's something you already do.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Instead, I recommend being mindful of your intake in general.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can come back to this or make a new Goal for the day.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you are ready to move on to your Action for today.`, {
            delay: 10000,
            widget: "fewercalories2",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    somethingelsefoods = () => {
        const letsBeginMessage = 
        [
        this.createChatBotMessage(`Please write briefly below how you would have liked it to be different:`, {
            delay: 2000,
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }

    somethingelsefoods2 = (message) => {
        this.setState((state) => ({
            ...state,
            somethingelsebad: message,
            lastblockvisited: "Something Else Foods"
          }));
        const letsBeginMessage = 
        [this.createChatBotMessage(`Can you think of anything that happened recently that might have influenced your eating?`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This can be something emotional like feeling sad after a conflict with a loved one, or something physical such as skipping breakfast.`, {
            delay: 4000,
            widget: "emotionalbehavioral",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }

    somethingelse = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Great! It sounds like you have something else in mind, so let's work on it together.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`What would you like to be your goal for today?`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`You can type briefly below:`, {
            delay: 6000,
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    somethingelse2 = (message) => {
        this.setState((state) => ({
            ...state,
            plangoal3: message,
            lastblockvisited: "Something Else"
          }));
        const letsBeginMessage = 
        [this.createChatBotMessage(`Thank you for sharing! Let's work on making this Goal a reality.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`First, take a moment to visualize how nice it would feel to accomplish this Goal.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Next, take a moment to think about what you need to do differently today to accomplish this Goal.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`What is it that you need to do differently? You can type briefly below:`, {
            delay: 8000,
            withAvatar: true
        }),];
        this.addMessageToBotState(letsBeginMessage)
    }
    somethingelse3 = (message) => {
        this.setState((state) => ({
            ...state,
            plangoal4: message,
            lastblockvisited: "Something Else",
            waitingformsgflag: false
          }));
        const letsBeginMessage = 
        [this.createChatBotMessage(`Okay! Make sure to do what you need to do to reach that Goal.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can attempt this Goal again, or choose a new one.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re ready and we can move on to your Action for today.`, {
            delay: 6000,
            widget: "somethingelse",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    takeaction = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Let's decide on your Action for today.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This Action will help you quiet your mind if you feel the urge to overindulge.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Research shows that when there’s no real need for food, cravings tend to last just a few minutes.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Distracting yourself with something positive can calm that craving.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`If you feel that urge arising, which Action appeals the most to you today?`, {
            delay: 10000,
            widget: "takeaction",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    afteraction = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Great choice! If you feel tempted to eat in a way that is not healthy for you, go ahead and take that Action.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`You might be feeling better already!`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`So now we’ve Reflected upon your past eating, created a Goal for the day, and decided on the Action to take to quiet your cravings.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`What would you like to do next?`, {
            delay: 8000,
            widget: "plansubmit",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    nofoulwords() {
        const nofoulwordsMessage = 
        [this.createChatBotMessage(`I can tell by what you just wrote that you are upset, and that is of course okay.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Sometimes our language is a genuine expression of how we feel.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`For these meditations, I have included metaphors and analogies to help you listen to your body and think about food differently.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`That being said, I work best when you just press buttons.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Please scroll up to the last place you could make a selection in order to continue.`, {
            delay: 10000,
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
