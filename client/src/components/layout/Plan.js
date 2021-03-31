import React from 'react'
import planIllustration from '../../img/plan-illustration.svg';
import arrowRight from '../../img/arrow-right.svg';
import smileyIcon from '../../img/smiley-icon.svg';
import smileyIconExtraHappy from '../../img/smiley-icon-extrahappy.svg';
import smileyIconNeutral from '../../img/smiley-icon-neutral.svg';
import smileyIconUnhappy from '../../img/smiley-icon-unhappy.svg';
import smileyIconRound from '../../img/smiley-icon-round.svg';
import heartIcon from '../../img/heart-icon.svg';
import bowlIcon from '../../img/bowl-icon.svg';
import newspaperIcon from '../../img/newspaper-icon.svg';
import smileyIconUnhappyRound from '../../img/smiley-icon-unhappy-round.svg';
import {Line} from 'react-chartjs-2';
import chartTrendline from "chartjs-plugin-trendline";


const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        label: 'Mood',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(128,128,128,1)',
        borderCapStyle: 'butt',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 10,

        trendlineLinear: {
            style: "rgb(128, 55, 202, 1)",
            lineStyle: "dotted|solid",
            width: 2
        },

        data: [65, 59, null, 80, 81, 32, 56, 55, 40, 12, 45, 32, 23, 67, 32, 34, 21, 10, 8, 12, 56, null, 13, 18, 28, 64, 24, 31, 35, 19]
      }
    ]
  };

  const options = {
    maintainAspectRatio: true,
    spanGaps: false,
    legend:
    {
        display: false,
    },
    scales:
    {
        yAxes: [{
            display: false,
            gridLines : {
                display : false
            }
        }],
        xAxes: [{
            gridLines : {
                display : true,
                drawBorder: true,
                lineWidth: 1,
                drawOnChartArea: false
            }
        }]
    }
  };

export const Plan = () => {
    return (
        <section>
            <div className="flex mx-auto p-4">
                <div className="flex flex-col flex-grow">
                    <div style={{ backgroundImage: "url(" + planIllustration + "), linear-gradient(rgba(177, 201, 243, 0.9), rgba(173, 126, 227, 0.9), rgba(139, 99, 178, 0.9))" }} className="flex rounded-xl mb-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6">
                        <div className="mb-4">
                            <h3 className="text-sm leading-6 font-medium text-white uppercase font-black tracking-widest mb-1">
                                Your Plan Today
                            </h3>                        
                        </div>
                        <div className="flex flex-row w-full justify-between">
                            <div className="flex">
                                <div class="flex flex-col w-48">
                                    <div class="w-24 h-24 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5"></div>
                                    <div class="">
                                        <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                            Your main goal is to eat
                                        </h4>
                                        <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                            smaller amounts and to stop eating when full
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-48">
                                <div class="flex flex-col">
                                    <div class="w-24 h-24 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5"></div>
                                    <div class="">
                                        <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                            When you feel the urge to eat
                                        </h4>
                                        <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                                            take a walk
                                        </h5> 
                                    </div>
                                </div>                            
                            </div>
                            <div className="flex w-48 justify-end pr-10">
                                <img src={arrowRight} className="w-24" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <Line
                            data={data}
                            width={100}
                            height={15}
                            options={options}
                        />
                    </div>
                    <div className="bg-beaYellow plan-interactive-state">
                        <div className="sm:p-6 flex-grow">
                            <h3 className="text-2xl leading-6 font-medium text-white">
                                Keep up the good work!
                            </h3>
                            <div className="mt-2 max-w-xl text-md text-white">
                            <p>
                                Your mood eating has on average been great for the past 30 days.
                            </p>
                            </div>
                            <div className="mt-5">
                                <button type="button" className="btn-white">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                                    Stay on Track Tips
                                </button>
                            </div>
                        </div>
                        <div className="flex pr-10 align-middle">
                            <img src={smileyIconExtraHappy} className="w-36" />
                        </div>
                    </div>


                    <div className="bg-beaOrange plan-interactive-state">
                        <div className="sm:p-6 flex-grow">
                            <h3 className="text-2xl leading-6 font-medium text-white">
                                Keep up the good work!
                            </h3>
                            <div className="mt-2 max-w-xl text-md text-white">
                            <p>
                                Your mood eating has on average been pretty good for the past 30 days.
                            </p>
                            </div>
                            <div className="mt-5">
                                <button type="button" className="btn-white">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                                    Stay on Track Tips
                                </button>
                            </div>
                        </div>
                        <div className="flex pr-10 align-middle">
                            <img src={smileyIcon} className="w-36" />
                        </div>
                    </div>

                    <div className="bg-beaBlueGreen plan-interactive-state">
                        <div className="sm:p-6 flex-grow">
                            <h3 className="text-2xl leading-6 font-medium text-white">
                                Keep up the good work!
                            </h3>
                            <div className="mt-2 max-w-xl text-md text-white">
                            <p>
                                Your mood eating has on average been not good for the past 30 days.
                            </p>
                            </div>
                            <div className="mt-5">
                                <button type="button" className="btn-white">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                                    Getting Back on Track Tips
                                </button>
                            </div>
                        </div>
                        <div className="flex pr-10 align-middle">
                            <img src={smileyIconNeutral} className="w-36" />
                        </div>
                    </div>

                    <div className="bg-beaDarkBlue plan-interactive-state">
                        <div className="sm:p-6 flex-grow">
                            <h3 className="text-2xl leading-6 font-medium text-white">
                                Keep up the good work!
                            </h3>
                            <div className="mt-2 max-w-xl text-md text-white">
                            <p>
                                Your mood eating has on average been horrible for the past 30 days.
                            </p>
                            </div>
                            <div className="mt-5">
                                <button type="button" className="btn-white">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                                    Getting Back on Track Tips
                                </button>
                            </div>
                        </div>
                        <div className="flex pr-10 align-middle">
                            <img src={smileyIconUnhappy} className="w-36" />
                        </div>
                    </div>


                    <div className="bg-gradient-to-r from-beaLightBlue to-gray-50 plan-interactive-state">
                        <div className="sm:p-6 flex-grow">
                            <h3 className="text-2xl leading-6 font-thin text-gray-700">
                                Get your mood eating trends
                            </h3>
                            <div className="mt-2 max-w-xl text-md text-gray-700 font-light">
                            <p>
                                When you upgrade you’ll unlock access to all your data which will help keep you on track.
                            </p>
                            </div>
                            <div className="mt-5">
                                <button type="button" className="btn-darkPurple">       
                                    Upgrade Today
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="flex bg-white overflow-hidden border border-gray-400 rounded-xl p-4 mb-3 items-start">
                        <img src={smileyIconRound} className="w-36" />
                        <div class="px-4 py-3 sm:px-6">
                            <p class="mt-1 max-w-2xl text-sm text-gray-500 mb-0">
                                How you felt about what you ate in the past day
                            </p>
                            <h3 class="text-4xl font-medium text-gray-900 font-extralight mb-3">
                                Pretty Good
                            </h3>
                            <div class="rounded-md bg-beaLightBlue p-4">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <img src={heartIcon} className="w-5" />
                                    </div>
                                    <div class="ml-3 flex-1 md:flex md:justify-between">
                                        <p class="text-sm text-blue-700 mb-0">
                                            <strong>Something emotional</strong> helped you stay on track for the following reason:
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-1 text-sm text-gray-700 max-w-prose leading-6">
                            Having a better relationship with food and feeling good about making the right food choices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis rhoncus ipsum ac faucibus. Quisque lectus dui, dignissim non ligula vitae, commodo interdum dui. Integer consectetur ultrices tellus ac sodales. Cras efficitur ipsum risus. Sed laoreet sapien vel ex viverra faucibus. Maecenas at bibendum magna, sed aliquet nibh. Vivamus ac libero in augue maximus euismod vitae ut leo. Vestibulum quis metus malesuada, lobortis diam sit amet, lacinia velit. Donec sit amet nisl arcu. In hac habitasse platea dictumst. Cras aliquet laoreet dui vitae dignissim. Praesent laoreet pellentesque nunc accumsan scelerisque. Proin diam risus, sollicitudin at eros id, volutpat porta orci. Duis at erat quis quam mollis condimentum ut ac magna. Quisque non blandit dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In mauris felis, facilisis ut cursus vel, efficitur vitae est. Nam nec metus sodales, pretium nisi at, sollicitudin odio.
                            <br/><br/>
                            Duis volutpat malesuada ornare. Sed metus lorem, faucibus ac placerat nec, rutrum finibus dolor. Curabitur consequat rhoncus risus. Donec eleifend convallis tristique. Quisque tempus ligula eu massa auctor, a aliquam eros consequat. Aenean non est elit. Donec commodo purus nisi, eget gravida tellus lobortis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt, quam vitae feugiat gravida, metus diam elementum sem, eget ornare enim felis at nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas blandit, elit eget rhoncus laoreet, justo leo dictum purus, ac porta massa sapien non felis.
                            <br/><br/>
                            In tincidunt tellus quis lobortis efficitur. Aliquam vestibulum sapien id dui venenatis, non ornare nunc ornare. Ut rhoncus diam sed rhoncus posuere. Vivamus a nunc non elit lacinia efficitur. Mauris sit amet turpis met.
                            </p>
                        </div>
                    </div>




                    <div>
                        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <li class="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div class="flex-1 flex flex-col p-8 items-center">
                                    <span class="text-beaBlueText text-sm">Goal</span>
                                    <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon} className="w-11" />
                                    </span>
                                    <span class="mt-6 text-gray-700 text-sm font-thin">The most important goal for you to have today</span>
                                    <h2 class="mt-0 text-gray-700 text-3xl font-light">Smaller amounts and stop eating when full</h2>
                                    <span className="mt-6 p-2 border-2 border-beaLightBlue rounded-2xl flex items-center justify-center">
                                        <img src={newspaperIcon} className="w-7" />
                                    </span>
                                    <span class="mt-1 text-gray-700 text-sm font-bold uppercase tracking-wider">BEA’S RECOMMENDED READ</span>
                                    <span class="mt-1 mb-3 text-gray-700 text-sm font-light">Healthy Eating: Recognizing Your Hunger Signals</span>
                                    <button type="button" className="btn-darkPurple">       
                                        Read Article
                                    </button>
                                </div>
                            </li>
                            <li class="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div class="flex-1 flex flex-col p-8 items-center">
                                    <span class="text-beaBlueText text-sm">Goal</span>
                                    <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon} className="w-11" />
                                    </span>
                                    <span class="mt-6 text-gray-700 text-sm font-thin">The most important goal for you to have today</span>
                                    <h2 class="mt-0 text-gray-700 text-3xl font-light">Smaller amounts and stop eating when full</h2>
                                    <span className="mt-6 p-2 border-2 border-beaLightBlue rounded-2xl flex items-center justify-center">
                                        <img src={newspaperIcon} className="w-7" />
                                    </span>
                                    <span class="mt-1 text-gray-700 text-sm font-bold uppercase tracking-wider">BEA’S RECOMMENDED READ</span>
                                    <span class="mt-1 mb-3 text-gray-700 text-sm font-light">Healthy Eating: Recognizing Your Hunger Signals</span>
                                    <button type="button" className="btn-darkPurple">       
                                        Read Article
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>





                    <div class="flex flex-col max-w-full overflow-hidden">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4">
                                            <div class="flex items-center">
                                                <div class="flex flex-col items-center">
                                                        <div class="text-xs font-light text-gray-700">
                                                        Today
                                                        </div>
                                                        <div class="text-3xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                        27
                                                        </div>
                                                </div>
                                                <div class="flex ml-4 items-center justify-center">
                                                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                                                            <img src={bowlIcon} className="w-12" />
                                                    </span>
                                                    <div>
                                                        <div class="text-sm font-light text-gray-700">
                                                        Your main goal is to eat
                                                        </div>
                                                        <div class="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                            smaller amounts and<br/>
                                                            stop eating when full
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-2 py-4">
                                            <div class="flex items-center">
                                                <div class="flex ml-4 items-center justify-center">
                                                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                                                            <img src={bowlIcon} className="w-12" />
                                                    </span>
                                                    <div>
                                                        <div class="text-sm font-light text-gray-700">
                                                            When you feel the urge to eat
                                                        </div>
                                                        <div class="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                            take a walk
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <img src={smileyIconUnhappyRound} className="w-14" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4">
                                            <div class="flex items-center">
                                                <div class="flex flex-col items-center">
                                                        <div class="text-xs font-light text-gray-700">
                                                        Today
                                                        </div>
                                                        <div class="text-3xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                        27
                                                        </div>
                                                </div>
                                                <div class="flex ml-4 items-center justify-center">
                                                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                                                            <img src={bowlIcon} className="w-12" />
                                                    </span>
                                                    <div>
                                                        <div class="text-sm font-light text-gray-700">
                                                        Your main goal is to eat
                                                        </div>
                                                        <div class="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                            smaller amounts and<br/>
                                                            stop eating when full
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-2 py-4">
                                            <div class="flex items-center">
                                                <div class="flex ml-4 items-center justify-center">
                                                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                                                            <img src={bowlIcon} className="w-12" />
                                                    </span>
                                                    <div>
                                                        <div class="text-sm font-light text-gray-700">
                                                            When you feel the urge to eat
                                                        </div>
                                                        <div class="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                            take a walk
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <img src={smileyIconUnhappyRound} className="w-14" />
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>








                </div>
                <div className="w-72 min-w-72 pl-3">
                    <div className="flex justify-center items-center w-full h-72 rounded-xl bg-gray-300 w-72">
                        <button type="button" className="relative inline-flex items-center px-6 py-2 shadow-none text-sm font-medium rounded-full text-beaDarkPurple hover:bg-beaDarkPurple hover:text-white transition-all border-t border-b border-l border-r border-beaDarkPurple group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Call to Action
                        </button>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Plan;