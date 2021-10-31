import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMotivResultsByIdToday } from '../../../actions/postMotivateResults';
import arrowRight from '../../../img/arrow-right.svg';
import { Link } from 'react-router-dom';
import appleIcon from '../../../img/apple-icon.svg';
import calendarIcon from '../../../img/calendar-icon.svg';
import hungryIcon from '../../../img/hungry-icon.svg';
import MotivateIcons from './MotivateIcons';


//class MotivateHeader extends React.Component {
    const MotivateHeader = ({ 
        user, 
        getMotivResultsByIdToday, 
        todayMotivateResult: { todayMotivateResults } }) => {
        useEffect(() => {
            getMotivResultsByIdToday(user._id);
        }, [getMotivResultsByIdToday, user._id]);
        console.log("motivate header has", todayMotivateResults );
    
//   render() {
   // let tempcheck = true;
        let motivateHeader = "";
    //    console.log("plan header props has", this.props.results)
      if(todayMotivateResults.plan2eat){
  
        motivateHeader = 

            <div className="flex flex-row w-full justify-between">
                <div className="flex">
                    <div className="flex flex-col w-48">
                        <div className="flex w-16 h-16 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5 items-center">
                        <img className="w-1/2 flex-shrink-0 mx-auto" src={appleIcon} alt="" />
                        </div>
                        <div className="">
                            <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            Your urge to eat in a way that isn’t ideal for you right now
                            </h4>
                            <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            {todayMotivateResults.temptedlevel} tempting
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="flex w-48">
                    <div className="flex flex-col">
                        <div className="flex w-16 h-16 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5 items-center">
                        <img className="w-1/2 flex-shrink-0 mx-auto" src={calendarIcon} alt="" />
                        </div>
                        <div className="">
                            <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            You planned to eat
                            </h4>
                            <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            {todayMotivateResults.plan2eat}
                            </h5>
                        </div>
                    </div>                            
                </div>
                <div className="flex w-48">
                    <div className="flex flex-col">
                        <div className="flex w-16 h-16 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5 items-center">
                        {/* <img className="w-1/2 flex-shrink-0 mx-auto" src={hungryIcon} alt="" /> */}
                        <MotivateIcons msg={todayMotivateResults.whyhungry} />
                        </div>
                        <div className="">
                            <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            The reason why you chose the planned food
                            </h4>
                            <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            {todayMotivateResults.whyhungry}
                            </h5> 
                        </div>
                    </div>                            
                </div>
            </div>
      }
      else {
        motivateHeader = 

            <div className="flex flex-row w-full justify-between">
                <div className="flex">
                    <div className="flex flex-col w-48">
                        <div className="">
                            <h4 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            It looks like you didn't create a plan for today.
                            </h4>
                            <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            Chat with Bea now
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="flex w-48 justify-end pr-10">
                    
                <Link to='/Motivate'>
                    <img src={arrowRight} alt="arrow right" className="w-24" /></Link>
                </div>
            </div>
            
    //       <div className="flex flex-row w-full justify-between">
    //       <div className="flex">
    //           <div className="flex flex-col w-96">
    //               <div className="">
    //                   <h4 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
    //                       It looks like you didn't create a plan for today.
    //                   </h4>
    //                   <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
    //                   Chat with Bea now
    //                   </h5>
    //               </div>
    //           </div>
    //       </div>
    //       <div className="flex w-48 justify-end pr-10">
              
    //       <Link to='/PlanDaily'>
    //           <img src={arrowRight} alt="arrow right" className="w-24" /></Link>
    //       </div>
    //   </div>
      }
    return (
        <div style={{ backgroundImage: "linear-gradient(to right, rgba(109, 80, 139, 1), rgba(173, 121, 226, 1), rgba(177, 208, 244, 1))" }} className="flex rounded-xl mb-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6">
        <div className="mb-4">
            <h3 className="text-sm leading-6 font-medium text-white uppercase font-black tracking-widest mb-1">
            Your motivate summary today
            </h3>                        
        </div>
        {motivateHeader}

        </div>


    )
  }
//}

MotivateHeader.propTypes = {
    getMotivResultsByIdToday: PropTypes.func.isRequired,
    motivateResult: PropTypes.object.isRequired,
    todayMotivateResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    motivateResult: state.motivateResult,
    todayMotivateResult: state.motivateResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getMotivResultsByIdToday })(MotivateHeader);


// export default MotivateHeader;