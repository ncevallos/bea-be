import React from 'react'
import {Link} from 'react-router-dom';

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
        this.createChatBotMessage(<a href='https://www.mottchildren.org/health-library/zx3292' style={{color: "white"}} target="_blank" rel="noreferrer">Read Article</a>, {
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
        this.createChatBotMessage(`Luckily, I've located a great article that can help you find more filling foods.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(
            <a href='https://www.healthline.com/nutrition/15-incredibly-filling-foods' style={{color: "white"}} target="_blank" rel="noreferrer">15 Filling Foods</a>, {
            // `15 Filling Foods`
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re done reading and we can continue.`, {
            delay: 12000,
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
        const letsBeginMessage = 
        [this.createChatBotMessage(`Why do fattening foods taste so good?`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I know, you thought I was asking a rhetorical question . . . 😉`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`But there's actually a good reason!`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href='https://www.psychologytoday.com/us/blog/your-brain-food/201201/why-does-fat-taste-so-good' style={{color: "white"}} target="_blank" rel="noreferrer">Why Fat Tastes So Good </a>, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(`This article tells us that we can’t trick our bodies.`, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`But we can choose less fattening foods that still taste great!`, {
            delay: 12000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Here’s an article that can give you some ideas for foods that taste good and are healthy!`, {
            delay: 14000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href='https://www.healthline.com/nutrition/15-health-foods-that-taste-better-than-junk-foods#section10' style={{color: "white"}} target="_blank" rel="noreferrer">15 Healthy Foods </a>, {
            delay: 16000,
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
        const letsBeginMessage = 
        [this.createChatBotMessage(`I know it can be tough to cut down on sugar if you have a sweet tooth, but it's a great Goal for today! 😊`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Would you prefer to avoid sugar altogether, or to find healthy foods that taste sweet but are low in sugar?`, {
            delay: 4000,
            widget: "lesssugar",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    avoidsugar = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Avoiding sugar altogether can be tough!`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`But . . .`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`If sugar sets you off on a bad cycle, it's a great temporary goal to get you out of the habit of eating sweets.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`I've found an article that can help you transform your sugar addiction.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href='https://www.healthline.com/nutrition/15-incredibly-filling-foods' style={{color: "white"}} target="_blank" rel="noreferrer">Sugar Addiction Tips</a>, {
            delay: 10000,
            withAvatar: true
        }),
        this.createChatBotMessage(`When you’re done reading, let me know and we can continue.`, {
            delay: 12000,
            widget: "avoidsugar",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
    avoidsugar2 = () => {
        const letsBeginMessage = 
        [this.createChatBotMessage(`Now that you’ve chosen avoiding sugar as your main Goal, take a moment to imagine feeling peaceful and whole without it.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Tomorrow, we can choose again to avoid sugar, or try a different Goal for the day.`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Let me know when you’re ready to move on to your Action for today.`, {
            delay: 6000,
            widget: "avoidsugar2",
            withAvatar: true
        })];
        this.addMessageToBotState(letsBeginMessage)
    }
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
        this.createChatBotMessage(<a href='https://www.bhg.com/recipes/healthy/snacks/20-sweet-snacks-for-50-calories-or-less/' style={{color: "white"}} target="_blank" rel="noreferrer">Find Sweet Snacks</a>, {
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
        const letsBeginMessage = 
        [this.createChatBotMessage(`Remember, no foods are bad, including carbohydrates.`, {
            delay: 2000,
            withAvatar: true
        }),
        this.createChatBotMessage(`However, if you find that you don’t feel great when you eat too many carbs, then gradually cutting back is a great Goal!`, {
            delay: 4000,
            withAvatar: true
        }),
        this.createChatBotMessage(`So let's find some foods that make you feel better than indulging in those high in carbohydrates.`, {
            delay: 6000,
            withAvatar: true
        }),
        this.createChatBotMessage(`Here is a great article of great low-carb substitutes for your favorite full-carb foods!`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href='https://www.verywellfit.com/low-carb-substitutes-for-high-carb-food-2242524' style={{color: "white"}} target="_blank" rel="noreferrer">Low Carb Foods</a>, {
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
        this.createChatBotMessage(`This interactive article will help you find out how many calories you should consume based on your current weight.`, {
            delay: 8000,
            withAvatar: true
        }),
        this.createChatBotMessage(<a href='https://www.healthline.com/nutrition/how-many-calories-per-day' style={{color: "white"}} target="_blank" rel="noreferrer">Calorie Calculator</a>, {
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
