const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const UserModel = require('../../models/User');
const PlanResults = require('../../models/PlanResults');
// const { getDate } = require('date-fns');
// const { endOfDay } = require('date-fns/esm');


// @route    POST api/planResults
// @desc     Post Plan Conversation Results
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
        howdoyoufeel,
        howdoyoufeelint,
        planjournal,
        stayedontrack,
        planbadblock,
        what2change,
        influencedeating,
        whathappened,
        somethingelsebad,
        plangoal,
        plangoal2,
        plangoal3,
        plangoal4,
        plangoal5,
    } = req.body;
    // const { name, email, password } = req.body;
    planResults = new PlanResults({
      user,
      lastblockvisited,
      howdoyoufeel,
      howdoyoufeelint,
      planjournal,
      stayedontrack,
      planbadblock,
      what2change,
      influencedeating,
      whathappened,
      somethingelsebad,
      plangoal,
      plangoal2,
      plangoal3,
      plangoal4,
      plangoal5
      
  });
    try {
      console.log("in find one and update try")
    const start = new Date();
    start.setHours(0,0,0,0);
    const end = new Date();
    end.setHours(23,59,59,999);
    //   let user = await User.findOne({ email });
    // let results = await PlanResults.findOneAndUpdate(
     // let results = await PlanResults.findOne(
         let results = await PlanResults.findOneAndUpdate(
      { user : req.params.id, date : {"$gte": start, $lt: end}},
      { $set: planResults },
      { new: true, upsert: true, setDefaultsOnInsert: true, returnNewDocument: true }
    );

      if (results) {
          // const payload = {
          //   user: {
          //     id: user.id
          //   }
          console.log("there is already a post for this day")
          };
    
          
    //       console.log('Login Success');
    //       res.status(200).send('Login Success!');
    //   }
    //   else {
        // console.log("in plan results");
        // planResults = new PlanResults({
        //     user,
        //     lastblockvisited,
        //     howdoyoufeel,
        //     howdoyoufeelint,
        //     planjournal,
        //     stayedontrack,
        //     planbadblock,
        //     what2change,
        //     influencedeating,
        //     whathappened,
        //     somethingelsebad,
        //     plangoal,
        //     plangoal2,
        //     plangoal3,
        //     plangoal4,
        //     plangoal5
            
        // });
        // await planResults.save();

  

        console.log('Plan Results Saved Success');
        res.status(200).send('Plan Results Saved Success!');
    //   }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/planResults
// @desc     Get all plan results for associated user
// @access   Public
// router.get('/', async (req, res) => {
//   try {
//     const start = new Date();
//     // const results = await PlanResults.find({ user : req.user.id});
//     //user : "60217a517f2b961147d214f0", 
//     const results = await PlanResults.find({ user : "60217a517f2b961147d214f0"}
//     ).sort( { date: -1 });

//     if(!results){
//       return res.status(400).json({msg: "There are no results for this user"});
//     }
//     let results2 = fillInDates(results);
//     res.json(results2);
//   } catch(err){
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @route    GET api/planResults
// @desc     Get all plan results for associated user
// @access   Public
// will be plan 30 days back, after coding is done.

// CODE BELOW IS THE ORIGINAL GET RESULTS BY ID FOR 30 DAYS - COMMENTED OUT TO WORK ON DEVELOPING SUMMARY ALGORITHM

// router.get('/:id', async (req, res) => {
//   try {
//         let end = moment().subtract(30, 'days');

//         // let start = Date.now();
//         // end = start + (30 * 86400000);
//       //  console.log('end contains ', end);
//         //const results = await PlanResults.find({ user : req.params.id}
//         //user : "60217a517f2b961147d214f0", 
//         // const results = await PlanResults.find({ user : "60217a517f2b961147d214f0"}
//        const results = await PlanResults.find({ user : req.params.id, date : {$gte: end}}
//         ).sort( { date: -1 });

//     if(!results){
//       return res.status(400).json({msg: "There are no results for this user"});
//     }
//   //  res.json(results);
//     let results2 = fillInDates(results);
//     res.json(results2);
//   } catch(err){
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });







//this is the boilerplate for summary call

router.get('/:id', async (req, res) => {
  try {
        let end = moment().subtract(30, 'days');

        // let start = Date.now();
        // end = start + (30 * 86400000);
      //  console.log('end contains ', end);
        //const results = await PlanResults.find({ user : req.params.id}
        //user : "60217a517f2b961147d214f0", 
        // const results = await PlanResults.find({ user : "60217a517f2b961147d214f0"}
       const results = await PlanResults.find({ user : req.params.id, date : {$gte: end}}
        ).sort( { date: -1 });

    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }
  //  res.json(results);
    let results2 = createSummary(results);
    res.json(results2);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




// @route    GET api/planResults/summary
// @desc     Get all plan results for associated user
// @access   Public
// will be plan 30 days back, after coding is done.
router.get('summary/:id', async (req, res) => {
  try {
        let end = moment().subtract(30, 'days');

      //  console.log('end contains ', end);
       const results = await PlanResults.find({ user : req.params.id, date : {$gte: end}}
        ).sort( { date: -1 });

    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }
  //  res.json(results);
    let results2 = createSummary(results);
  //  let results2 = fillInDates(results);
    res.json(results2);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/planResults/today
// @desc     Get all plan results for associated user
// @access   Public
router.get('/today/:id/:date', async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0,0,0,0);
    const end = new Date();
    end.setHours(23,59,59,999);
    //const sentDate = req.params.date;
    console.log("in get today sent params are", req.params.date);
    if(req.params.date){
      console.log("date was sent")
    } else{
      console.log("date was not sent")
    }
    // const results = await PlanResults.find({ user : req.user.id});
    //user : "60217a517f2b961147d214f0", 
    const results = await PlanResults.findOne({ user : req.params.id, date : {"$gte": start, $lt: end}}
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

// @route    GET api/previousDay/:id
// @desc     Get specific day of plan results for associated user
// @access   Public
router.get('/previousDay/:id/', async (req, res) => {
  try {
    // const start = new Date();
    // start.setHours(0,0,0,0);
    // const end = new Date();
    // end.setHours(23,59,59,999);
    //const sentDate = req.params.date;
    console.log("in get today sent params are", req.params);
    // const results = await PlanResults.find({ user : req.user.id});
    //user : "60217a517f2b961147d214f0", 
    // const results = await PlanResults.findOne({ user : req.params.id, date : {"$gte": start, $lt: end}}
    // );    

    const results = await PlanResults.findOne({ _id : req.params.id});


    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }
    res.json(results);
    console.log("results found in previous day find results ", results)
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

createSummary = (results) => {
  summaryArray = 
    {summaryStats: {
      avgMood: 0,
      great: 0,
      good: 0,
      notgood: 0,
      horrible: 0,
      // stayedontrack: "",
      // stayedontrackpct: 0,
      favgoal: "",
      favgoalpct: 0,
      favgoal2: "",
      favgoal2pct: 0,
      favaction: "",
      favactionpct: 0,
    },
    dates: [],
    values: []
  };
  let numOfResults = results.length;
  let moodTotal = 0;
  let avgMood = 0.0;
  let greatCnt = 0.0;
  let goodCnt = 0.0;
  let notgoodCnt = 0.0;
  let horribleCnt = 0.0;
  //for stayedontrack
  let emotionalCnt = 0;
  let physicalCnt = 0;
  //for plangoal
  let smAmtCnt = 0;
  let diffFdCnt = 0;
  //for plangoal2
  let stopFull = 0;
  let fewCalories = 0;
  let moreFilling = 0;
  //plangoal5
  let plangoal = [
    {x: 0, name: "Take a walk"},
    {x: 0, name: "Meditate"},
    {x: 0, name: "Talk to a friend"},
    {x: 0, name: "Eat something small"},
    {x: 0, name: "Read"},
    {x: 0, name: "Something else"}
  ]

  for (let i = 0; i < numOfResults; i++) {
    //add in the howdoyoufeelint to avgMood
    moodTotal += results[i].howdoyoufeelint;
    // console.log("how do you feel int results has", results[i].howdoyoufeelint)
    // console.log("moodTotal now has", moodTotal);
    switch(results[i].howdoyoufeel){
      case "Great":
        greatCnt +=1
        break;
      case "Good":
        goodCnt +=1
        break;
      case "Not good":
        notgoodCnt +=1
        break;
      case "Horrible":
        horribleCnt +=1
        break;
    }
    switch(results[i].stayedontrack){
      case "Something emotional":
        emotionalCnt +=1
        break;
      case "Something physical":
        physicalCnt +=1
        break;
    }
    switch(results[i].plangoal){
      case "Smaller Amounts":
        smAmtCnt +=1
        break;
      case "Different foods":
        diffFdCnt +=1
        break;
    }
    switch(results[i].plangoal2){
      case "More filling foods":
        moreFilling +=1
        break;
      case "Fewer Calories":
        fewCalories +=1
        break;
    }
    //console.log("plan goal has", plangoal[0].Takeawalk)
    switch(results[i].plangoal5){
      case "Take a walk":
        plangoal[0].x += 1;
        break;
      case "Meditate":
        plangoal[1].x += 1;
        break;
      case "Talk to a friend":
        plangoal[2].x += 1;
        break;
      case "Eat something small":
        plangoal[3].x += 1;
        break;
      case "Read":
        plangoal[4].x += 1;
        break;
      case "Something else":
        plangoal[5].x += 1;
        break;
    }

  }
  //divide avgMood by number of results and round up
    avgMood = Math.round(moodTotal/numOfResults);
    // summaryArray[0].summaryStats.avgMood = avgMood;
    summaryArray.summaryStats.avgMood = avgMood;
  //create percentages of great, pretty good, not good, and horrible
  // summaryArray[0].summaryStats.great = Math.round(greatCnt/numOfResults * 100)
  // summaryArray[0].summaryStats.good = Math.round(goodCnt/numOfResults * 100)
  // summaryArray[0].summaryStats.notgood = Math.round(notgoodCnt/numOfResults * 100)
  // summaryArray[0].summaryStats.horrible = Math.round(horribleCnt/numOfResults * 100)
  summaryArray.summaryStats.great = Math.round(greatCnt/numOfResults * 100)
  summaryArray.summaryStats.good = Math.round(goodCnt/numOfResults * 100)
  summaryArray.summaryStats.notgood = Math.round(notgoodCnt/numOfResults * 100)
  summaryArray.summaryStats.horrible = Math.round(horribleCnt/numOfResults * 100)
  if(emotionalCnt > physicalCnt){
    // summaryArray[0].summaryStats.stayedontrackpct = Math.round(emotionalCnt/numOfResults * 100)
    // summaryArray[0].summaryStats.stayedontrack = "Something emotional"
    summaryArray.summaryStats.stayedontrackpct = Math.round(emotionalCnt/numOfResults * 100)
    summaryArray.summaryStats.stayedontrack = "Something emotional"
  }
  else{
    summaryArray.summaryStats.stayedontrackpct = Math.round(physicalCnt/numOfResults * 100)
    summaryArray.summaryStats.stayedontrack = "Something physical"
    // summaryArray[0].summaryStats.stayedontrackpct = Math.round(physicalCnt/numOfResults * 100)
    // summaryArray[0].summaryStats.stayedontrack = "Something physical"
  }
  if(smAmtCnt > diffFdCnt){
    // summaryArray[0].summaryStats.favgoalpct = Math.round(smAmtCnt/numOfResults * 100)
    // summaryArray[0].summaryStats.favgoal = "Smaller amounts"    
    summaryArray.summaryStats.favgoalpct = Math.round(smAmtCnt/numOfResults * 100)
    summaryArray.summaryStats.favgoal = "Smaller amounts"
  }
  else{
    // summaryArray[0].summaryStats.favgoalpct = Math.round(diffFdCnt/numOfResults * 100)
    // summaryArray[0].summaryStats.favgoal = "Different foods"
    summaryArray.summaryStats.favgoalpct = Math.round(diffFdCnt/numOfResults * 100)
    summaryArray.summaryStats.favgoal = "Different foods"
  }
  if(moreFilling > fewCalories){
    // summaryArray[0].summaryStats.favgoal2pct = Math.round(moreFilling/numOfResults * 100)
    // summaryArray[0].summaryStats.favgoal2 = "More filling foods"
    summaryArray.summaryStats.favgoal2pct = Math.round(moreFilling/numOfResults * 100)
    summaryArray.summaryStats.favgoal2 = "More filling foods"
  }
  else{
    // summaryArray[0].summaryStats.favgoal2pct = Math.round(fewCalories/numOfResults * 100)
    // summaryArray[0].summaryStats.favgoal2 = "Fewer Calories"
    summaryArray.summaryStats.favgoal2pct = Math.round(fewCalories/numOfResults * 100)
    summaryArray.summaryStats.favgoal2 = "Fewer Calories"
  }

  let xMax = Math.max(...Array.from(plangoal, o => o.x));
  let maxXObject = plangoal.find(o => o.x === xMax);
  // summaryArray[0].summaryStats.favactionpct = Math.round(maxXObject.x/numOfResults * 100);
  // summaryArray[0].summaryStats.favaction = maxXObject.name;
  summaryArray.summaryStats.favactionpct = Math.round(maxXObject.x/numOfResults * 100);
  summaryArray.summaryStats.favaction = maxXObject.name;
  let newArray = fillInLineGraph(results);
  // summaryArray.push({values: newArray[0].values});
  // summaryArray.push({dates: newArray[0].dates});
  summaryArray.dates.push(newArray[0].dates);
  summaryArray.values.push(newArray[0].values);
  // summaryArray[values].push(newArray[0].values);
  // let newResults = fillInDates(results);
  // summaryArray.push({results: newResults});
 //console.log('summary array at end has', summaryArray);
  return summaryArray;
 // return results;
}



createDateArray = () => {
    var resolution = 30;
    thirtyDays = [];
    start = Date.now();
    end = start + (30 * 86400000);
    delta = start - end;
    // delta = end - start

    for (let i = 0; i < resolution; i++) {
      let t = (delta / resolution) * i
      thirtyDays.push(new Date(start + t))
    }
    return thirtyDays;

}

fillInDates = (results) => {
  const resultsArr = results;
  let thirtyDayArray = createDateArray();

    finalArray = [];
    let rsltsArrayCounter = 0;
  for (let i = 0; i < thirtyDayArray.length; i++) {
    if(rsltsArrayCounter >= results.length){
      let daysLeft = (thirtyDayArray.length - i);
      while(daysLeft >= 0){
        finalArray.push({date:thirtyDayArray[i], howdoyoufeelint: 0, userSubmission: false});
       // console.log("thirtyday array",thirtyDayArray[i])
        i++;
        daysLeft--;
      }
      break;
    }
    if(moment(thirtyDayArray[i]).format("MMM Do YYYY") === moment(results[rsltsArrayCounter].date).format("MMM Do YYYY")){
     // console.log('match found in results');
      finalArray.push(results[rsltsArrayCounter])
      rsltsArrayCounter++;
    }
    else {
     //console.log('match not found in results');
      finalArray.push({date:thirtyDayArray[i], howdoyoufeelint: 0, userSubmission: false});
     // rsltsArrayCounter++;
    }
   // let t = (delta / resolution) * i
   // thirtyDays.push(new Date(start + t))
  }
//console.log("final array contains", finalArray);
  return finalArray;
}

fillInLineGraph = (results) => {
  const resultsArr = results;
  let thirtyDayArray = createDateArray();

    finalArray = [{dates:[], values:[]}];
    let rsltsArrayCounter = 0;
  for (let i = 0; i < thirtyDayArray.length; i++) {
    if(rsltsArrayCounter >= results.length){
      let daysLeft = (thirtyDayArray.length - i);
      while(daysLeft >= 0){
        finalArray[0].dates.push(thirtyDayArray[i]);
        finalArray[0].values.push(0);
       // console.log("thirtyday array",thirtyDayArray[i])
        i++;
        daysLeft--;
      }
      break;
    }
    if(moment(thirtyDayArray[i]).format("MMM Do YYYY") === moment(results[rsltsArrayCounter].date).format("MMM Do YYYY")){
     // console.log('match found in results');
        finalArray[0].dates.push(thirtyDayArray[i]);
        finalArray[0].values.push(results[rsltsArrayCounter].howdoyoufeelint);
     // finalArray.push(results[rsltsArrayCounter])
      rsltsArrayCounter++;
    }
    else {
     //console.log('match not found in results');
      finalArray[0].dates.push(thirtyDayArray[i]);
      finalArray[0].values.push(0);
     // rsltsArrayCounter++;
    }
   // let t = (delta / resolution) * i
   // thirtyDays.push(new Date(start + t))
  }
//console.log("final array contains", finalArray);
  return finalArray;
}

module.exports = router;

//in the future will have to do findOne and if so findAndModify to today's entry