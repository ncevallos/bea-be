
import React, { useState } from 'react'
import Videoselection from './Videoselection';
import myData from './VideoData.json';
import clouds from '../../../img/meditateimgs/clouds.png';
import cracklingfire from '../../../img/meditateimgs/cracklingfire.png';
import lazyafternoon from '../../../img/meditateimgs/lazyafternoon.png';
import monks from '../../../img/meditateimgs/monks.png';
import moonlight from '../../../img/meditateimgs/moonlight.png';
import orangegrove from '../../../img/meditateimgs/orangegrove.png';
import sailboat from '../../../img/meditateimgs/sailboat.png';
import twowomen from '../../../img/meditateimgs/two-women.png';
import woods from '../../../img/meditateimgs/woods.png';

const RecentVideos =(props) => {
    const [videolist, setVideolist] = useState(          [
        {id: "1", title: 'Clouds', length: '5 minutes', img: clouds, imgalt: "Clouds"},
        {id: "2", title: 'Monks', length: '7 minutes', img: monks, imgalt: "Monks"},
        {id: "3", title: 'Woods', length: '3 minutes', img: woods, imgalt: "Woods"},
        {id: "4", title: 'Moonlight', length: '3 minutes', img: moonlight, imgalt: "Moonlight"},
        {id: "5", title: 'Lazy Afternoon', length: '3 minutes', img: lazyafternoon, imgalt: "Lazy Afternoon"},
        {id: "6", title: 'Crackling Fire', length: '3 minutes', img: cracklingfire, imgalt: "Crackling Fire"},
        {id: "7", title: 'Sailboat', length: '5 minutes', img: sailboat, imgalt: "Sailboat"},
        {id: "8", title: 'Two Women', length: '7 minutes', img: twowomen, imgalt: "Two Women"},
        {id: "9", title: 'Orange Grove', length: '7 minutes', img: orangegrove, imgalt: "Orange Grove"}
    ])
        // console.log("props in recent videos has", props);
    return (

            
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mr-4 gap-4 w-full">
                  {props.results.map((data, key) => {
                            return (
                                <div key={key}>
                                 <Videoselection id={myData[data.videoid-1].id} 
                                    title={myData[data.videoid-1].title} 
                                    length={myData[data.videoid-1].length} 
                                    img={videolist[data.videoid-1].img} 
                                    imgalt={myData[data.videoid-1].imgalt} />
                                </div>

                            );
                            })}
            </ul>


    )}
// }

export default RecentVideos;