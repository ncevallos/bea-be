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
        console.log("in plan results");
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
        // user = new User({
        //     name,
        //     email,
        //     password
        // });

        // await user.save();
        await planResults.save();

        // const payload = {
        //   user: {
        //     id: user.id
        //   }
        // };
  

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
router.get('/:id', async (req, res) => {
  try {
        let end = moment().subtract(30, 'days');

        // let start = Date.now();
        // end = start + (30 * 86400000);
        // console.log('end contains ', end);
        // const results = await PlanResults.find({ user : req.user.id});
        //user : "60217a517f2b961147d214f0", 
        // const results = await PlanResults.find({ user : "60217a517f2b961147d214f0"}
        const results = await PlanResults.find({ user : req.params.id, date : {$gte: end}}
        ).sort( { date: -1 });

    if(!results){
      return res.status(400).json({msg: "There are no results for this user"});
    }
    let results2 = fillInDates(results);
    res.json(results2);
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/planResults/today
// @desc     Get all plan results for associated user
// @access   Public
router.get('/today/:id', async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0,0,0,0);
    const end = new Date();
    end.setHours(23,59,59,999);
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
      while(daysLeft > 0){
        finalArray.push({date:thirtyDayArray[i], howdoyoufeelint: 0, userSubmission: false});
        //console.log("thirtyday array",thirtyDayArray[i])
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
     // console.log('match not found in results');
      finalArray.push({date:thirtyDayArray[i], howdoyoufeelint: 0, userSubmission: false});
    }
   // let t = (delta / resolution) * i
   // thirtyDays.push(new Date(start + t))
  }
 //console.log(finalArray);
  return finalArray;
}

module.exports = router;

//in the future will have to do findOne and if so findAndModify to today's entry