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
// @desc     Get all motivate results for associated user
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
      avgTemptationLvl: 0,
      planPhaseAvg: "",
      ieAvg: 0,
      fullnessAvg: "",
      aeplanningAvg: 0,
      lessThanTen: 0,
      tenToThirty: 0,
      thirtyToOne: 0,
      oneToTwo: 0,
      overTwoHr: 0,
    },
    templvl: [],
    planned2eat: [],
    // dates: [],
    // values: []
  };
  let numOfResults = results.length;
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

  for (let i = 0; i < numOfResults; i++) {
    //add in the howdoyoufeelint to avgMood
    temptationTotal += results[i].temptedlevelint;
    planPhaseAvg += results[i].planphaseint;
    ieAvg += results[i].iephaseint;
    fullnessAvg += results[i].fullphaseint;
    aeplanningAvg += results[i].aeint;
    let templvl = results[i].temptedlevelint;
    let day2push = moment(results[i].date).format('ddd MMM Do')   
   // let day2push = moment(results[i].date).format('ddd MM Do YYYY');
   // summaryArray.templvl[day2push] = templvl;
    summaryArray.templvl.push({date:day2push, temptedlevel: templvl});    
    //tempArray[day2push] = templvl;
    summaryArray.planned2eat.push(results[i].plan2eat)

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
    }


    addLengths(results[i].fullphaselength);
    addLengths(results[i].iephaselength);
    addLengths(results[i].planphaselength);
    addLengths(results[i].aelength);

    }
  
 // console.log("results contains", results[1].date)
  // below pushes summary statistics to summary stats array
  avgTemptationLvl = Math.round(temptationTotal/numOfResults);

  summaryArray.summaryStats.planPhaseAvg = Math.round(planPhaseAvg/numOfResults);
  summaryArray.summaryStats.ieAvg = Math.round(ieAvg/numOfResults);
  summaryArray.summaryStats.fullnessAvg = Math.round(fullnessAvg/numOfResults);
  summaryArray.summaryStats.aeplanningAvg = Math.round(aeplanningAvg/numOfResults);
  summaryArray.summaryStats.avgTemptationLvl = avgTemptationLvl;
  summaryArray.summaryStats.lessThanTen = lessThanTen;
  summaryArray.summaryStats.tenToThirty = tenToThirty;
  summaryArray.summaryStats.thirtyToOne = thirtyToOne;
  summaryArray.summaryStats.oneToTwo = oneToTwo;
  summaryArray.summaryStats.overTwoHr = overTwoHr;
  //summaryArray.templvl.push(tempArray);
 // console.log("summary array in motivate contains", summaryArray);
  return summaryArray
}

module.exports = router;