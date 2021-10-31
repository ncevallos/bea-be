const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const UserModel = require('../../models/User');
const MotivateResults = require('../../models/MotivateResults');


// @route    POST api/motivateResults
// @desc     Post Motivate Conversation Results
// @access   Public
router.post(
  '/',
  // auth,
  async (req, res) => {
      console.log("body contains", req.body);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const {
        user,
        lastblockvisited,
        temptedlevel,
        temptedlevelint,
        vistype,
        plan2eat, //open ended
        whyhungry,
        overindulgeresult, //possibly open ended
        differentchoice,
        differentchoice2,
        planphasefeel,
        planphaselength,
        planphaseint,
        iephasefeel,
        iephaselength,
        iephaseint,
        fullphasefeel,
        fullphaselength,
        fullphaseint,
        aefeel,
        aelength,
        aeint,
        mindfultype,
        mindfultype2,
        mindfulresult,
    } = req.body;
    // const { name, email, password } = req.body;

    try {
    //   let user = await User.findOne({ email });

    //   if (user) {
    //       const payload = {
    //         user: {
    //           id: user.id
    //         }
    //       };
    
          
    //       console.log('Login Success');
    //       res.status(200).send('Login Success!');
    //   }
    //   else {
        console.log("in motivate results");
        motivateResults = new MotivateResults({
            user,
            lastblockvisited,
            temptedlevel,
            temptedlevelint,
            vistype,
            plan2eat, //open ended
            whyhungry,
            overindulgeresult, //possibly open ended
            differentchoice,
            differentchoice2,
            planphasefeel,
            planphaselength,
            planphaseint,
            iephasefeel,
            iephaselength,
            iephaseint,
            fullphasefeel,
            fullphaselength,
            fullphaseint,
            aefeel,
            aelength,
            aeint,
            mindfultype,
            mindfultype2,
            mindfulresult
            
        });
        // user = new User({
        //     name,
        //     email,
        //     password
        // });

        // await user.save();
        await motivateResults.save();

        // const payload = {
        //   user: {
        //     id: user.id
        //   }
        // };
  

        console.log('Motivate Results Saved Success');
        res.status(200).send('Motivate Results Saved Success!');
    //   }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


// @route    GET api/motivateResults/today
// @desc     Get today's motivate results for associated user
// @access   Public
router.get('/today/:id/', async (req, res) => {
  console.log('reached get motivate results today', req.params)
  try {
    const start = new Date();
    start.setHours(0,0,0,0);
    const end = new Date();
    end.setHours(23,59,59,999);
    //const sentDate = req.params.date;
    // console.log("in get today sent params are", req.params.date);
    // if(req.params.date){
    //   console.log("date was sent")
    // } else{
    //   console.log("date was not sent")
    // }
    // const results = await PlanResults.find({ user : req.user.id});
    //user : "60217a517f2b961147d214f0", 
    const results = await MotivateResults.findOne({ user : req.params.id, date : {"$gte": start, $lt: end}}
    );    

    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }

    res.json(results);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/motivateResults
// @desc     Get all motivate results for associated user within the specified amount of days
// @access   Public
router.get('/:id/:days', async (req, res) => {
  try {        
    let end = moment().subtract(req.params.days, 'days');
    // const results = await PlanResults.find({ user : req.user.id});
    // const results = await MotivateResults.find({ user : "60217a517f2b961147d214f0"});
    console.log("in get all has this for params", req.params)
    const results = await MotivateResults.find({ user : req.params.id, date : {$gte: end}}
      ).sort( { date: -1 });


    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }

    let results2 = createSummary(results);
    res.json(results2);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


createSummary = (results) => {
    summaryArray = 
    {summaryStats: {
      aeplanningAvg: 0,
      avgTemptationLvl: 0,
      fullnessAvg: 0,
      planPhaseAvg: 0,
      ieAvg: 0,
      lessThanTen: 0,
      tenToThirty: 0,
      thirtyToOne: 0,
      oneToTwo: 0,
      overTwoHr: 0,
      temptedlevel: [],
      temptedDates: [],
      phaseFeel: [],
      lengthFeel: [],
      differentChoice: "1",
      overindulgeresult: "2",
      whyHungry: "3",
      phaseFeel: [],
      phaseLength: []
    },
    temptedlvl: [],
    temptedDates: [],
    planned2eat: [],
    plan2eat: []
    // dates: [],
    // values: []
  };
  let numOfResults = results.length;
  let numOfEvalResults = 0;
  let numOfTriggersResults = 0;
  let temptationTotal = 0;
  let avgTemptationLvl = 0.0;
  let planPhaseAvg = 0.0;
  let ieAvg = 0.0;
  let fullnessAvg = 0.0;
  let aeplanningAvg = 0.0;
  let overTwoHr = 0;
  let lessThanTen = 0;
  let thirtyToOne = 0;
  let tenToThirty = 0;
  let oneToTwo = 0;
  let tempArray = [];
  let indulgeResults = [];
  let differentChoiceResults = [];
  let plan2eatAll = [];
  let whyhungryResults = []

  let differentChoice = [
    {x: 0, name: "Take a walk"},
    {x: 0, name: "Meditate"},
    {x: 0, name: "Talk to a friend"},
    {x: 0, name: "Eat something small"},
    {x: 0, name: "Read"},
    {x: 0, name: "Something else"}
  ]
  for (let i = 0; i < numOfResults; i++) {
    //add in the howdoyoufeelint to avgMood
    temptationTotal += results[i].temptedlevelint;
    let templvl = results[i].temptedlevelint;
    let day2push = moment(results[i].date).format('ddd MMM Do')   
   // let day2push = moment(results[i].date).format('ddd MM Do YYYY');
   // summaryArray.templvl[day2push] = templvl;
    summaryArray.summaryStats.temptedDates.push(day2push);    
    summaryArray.summaryStats.temptedlevel.push(templvl);     
    //summaryArray.templvl.push({date:day2push, temptedlevel: templvl});    
    summaryArray.temptedDates.push(day2push);    
    summaryArray.temptedlvl.push(templvl);    
    //tempArray[day2push] = templvl;
    summaryArray.planned2eat.push(results[i].plan2eat)
    plan2eatAll.push(results[i].plan2eat)

    if(results[i].vistype === "Planning"){
      numOfEvalResults++;
      addLengths = (item2check) => {
        if(item2check === "Up to 10 minutes"){
          lessThanTen += 1;

        } else if (item2check === "10 to 30 minutes"){
          tenToThirty += 1;
          
        } else if (item2check === "30 minutes to 1 hour"){
          thirtyToOne += 1;
          
        } else if (item2check === "1 to 2 hours"){
          oneToTwo += 1;
          
        } else if (item2check === "More than 2 hours"){
          overTwoHr += 1;
          
        } else {

        }
      }// end addLengths

      planPhaseAvg += results[i].planphaseint;
      ieAvg += results[i].iephaseint;
      fullnessAvg += results[i].fullphaseint;
      aeplanningAvg += results[i].aeint;
      addLengths(results[i].fullphaselength);
      addLengths(results[i].iephaselength);
      addLengths(results[i].planphaselength);
      addLengths(results[i].aelength);
    } // ends if for the planning visualization type
    else {
      //whyhungry overindulgeresult differentchoice
      indulgeResults.push(results[i].overindulgeresult)
      whyhungryResults.push(results[i].whyhungry)
      differentChoiceResults.push(results[i].differentchoice)
      //will push ALL into an array then after loop will summarize results to see how many each item occured and push highest appearing item
    } // ends else for the triggers visualization type

    // addLengths(results[i].fullphaselength);
    // addLengths(results[i].iephaselength);
    // addLengths(results[i].planphaselength);
    // addLengths(results[i].aelength);

    } //ends the for loop
    

    summaryArray.summaryStats.overindulgeresult = mostFrequent(indulgeResults, indulgeResults.length);
    summaryArray.summaryStats.whyHungry = mostFrequent(whyhungryResults, whyhungryResults.length);
    summaryArray.summaryStats.differentChoice = mostFrequent(differentChoiceResults, differentChoiceResults.length);

    const arr = ["Mac n Cheese", "Grilled Cheese", "Steak and Eggs", "Porter house dinner", "Eggs Benedict", "Mac n Cheese"];
    const counts = {};
    
      for (const num of plan2eatAll) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }    
      for (const [key, value] of Object.entries(counts)) {
        summaryArray.plan2eat.push({x: key, y: value})
      }
  avgTemptationLvl = Math.round(temptationTotal/numOfResults);
  //for phaseFeel we push the results in this Order 
  //Planning, Initial Eating, Fullness, After Eating
  //because that is how it will display in the graph
  summaryArray.summaryStats.phaseFeel.push(Math.round(planPhaseAvg/numOfEvalResults));
  summaryArray.summaryStats.phaseFeel.push(Math.round(ieAvg/numOfEvalResults));
  summaryArray.summaryStats.phaseFeel.push(Math.round(fullnessAvg/numOfEvalResults));
  summaryArray.summaryStats.phaseFeel.push(Math.round(aeplanningAvg/numOfEvalResults));

  //we then push the length each phase lasted in ascending order 
  summaryArray.summaryStats.phaseLength.push(lessThanTen);
  summaryArray.summaryStats.phaseLength.push(tenToThirty);
  summaryArray.summaryStats.phaseLength.push(thirtyToOne);
  summaryArray.summaryStats.phaseLength.push(oneToTwo);
  summaryArray.summaryStats.phaseLength.push(overTwoHr);

  // console.log('number of eval results has', numOfEvalResults);
  summaryArray.summaryStats.planPhaseAvg = Math.round(planPhaseAvg/numOfEvalResults);
  //console.log('planphaseavg divided', Math.round(planPhaseAvg/numOfEvalResults));

  summaryArray.summaryStats.ieAvg = Math.round(ieAvg);
  // //summaryArray.summaryStats.ieAvg = Math.round(ieAvg/numOfEvalResults);
  // console.log('ieAvg', ieAvg);
  // console.log('ieAvg divided', Math.round(ieAvg/numOfEvalResults));


  summaryArray.summaryStats.fullnessAvg = Math.round(fullnessAvg);
  // console.log('fullnessAvg', fullnessAvg);
 // summaryArray.summaryStats.fullnessAvg = Math.round(fullnessAvg/numOfEvalResults);
  // console.log('fullnessAvg divided', Math.round(fullnessAvg/numOfEvalResults));

  summaryArray.summaryStats.aeplanningAvg = Math.round(aeplanningAvg/numOfEvalResults);
  //console.log('aeplanningAvg divided', Math.round(aeplanningAvg/numOfEvalResults));

  summaryArray.summaryStats.avgTemptationLvl = avgTemptationLvl;
  summaryArray.summaryStats.lessThanTen = lessThanTen;
  summaryArray.summaryStats.tenToThirty = tenToThirty;
  summaryArray.summaryStats.thirtyToOne = thirtyToOne;
  summaryArray.summaryStats.oneToTwo = oneToTwo;
  summaryArray.summaryStats.overTwoHr = overTwoHr;
  summaryArray.summaryStats.lengthFeel.push(lessThanTen);
  summaryArray.summaryStats.lengthFeel.push(tenToThirty);
  summaryArray.summaryStats.lengthFeel.push(thirtyToOne);
  summaryArray.summaryStats.lengthFeel.push(oneToTwo);
  summaryArray.summaryStats.lengthFeel.push(overTwoHr);
  //summaryArray.templvl.push(tempArray);
 // console.log("summary array in motivate contains", summaryArray);
  return summaryArray
}

mostFrequent = (arr, n) => {
       // Sort the array
       arr.sort();
           
       // find the max frequency using linear
       // traversal
       let max_count = 1, res = arr[0];
       let curr_count = 1;
          
       for (let i = 1; i < n; i++)
       {
           if (arr[i] == arr[i - 1])
               curr_count++;
           else
           {
               if (curr_count > max_count)
               {
                   max_count = curr_count;
                   res = arr[i - 1];
               }
               curr_count = 1;
           }
       }
      
       // If last element is most frequent
       if (curr_count > max_count)
       {
           max_count = curr_count;
           res = arr[n - 1];
       }
       return res;
}

module.exports = router;