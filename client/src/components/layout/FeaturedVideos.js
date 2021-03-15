
import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom';
import peskyPatterns from '../../img/pesky-patterns.svg';
import Videoselection from './Videoselection';
import clouds from '../../img/meditateimgs/clouds.png';
import cracklingfire from '../../img/meditateimgs/cracklingfire.png';
import lazyafternoon from '../../img/meditateimgs/lazyafternoon.png';
import monks from '../../img/meditateimgs/monks.png';
import moonlight from '../../img/meditateimgs/moonlight.png';
import mountainstream from '../../img/meditateimgs/mountainstream.png';
import orangegrove from '../../img/meditateimgs/orangegrove.png';
import sailboat from '../../img/meditateimgs/sailboat.png';
import twowomen from '../../img/meditateimgs/two-women.png';
import woods from '../../img/meditateimgs/woods.png';


class FeaturedVideos extends Component {
    state = {
        videolist: [
            {id: "1", title: 'Clouds', length: '5 minutes', img: clouds, imgalt: "Clouds"},
            {id: "2", title: 'Monks', length: '7 minutes', img: monks, imgalt: "Monks", vidurl: "https://vimeo.com/447565057/8cb1bf83c1"},
            {id: "3", title: 'Woods', length: '3 minutes', img: woods, imgalt: "Woods"},
            {id: "4", title: 'Moonlight', length: '3 minutes', img: moonlight, imgalt: "Moonlight"},
            {id: "5", title: 'Lazy Afternoon', length: '3 minutes', img: lazyafternoon, imgalt: "Lazy Afternoon"},
            {id: "6", title: 'Crackling Fire', length: '3 minutes', img: cracklingfire, imgalt: "Crackling Fire"},
            {id: "7", title: 'Sailboat', length: '5 minutes', img: sailboat, imgalt: "Sailboat"},
            {id: "8", title: 'Two Women', length: '7 minutes', img: twowomen, imgalt: "Two Women", vidurl: "https://vimeo.com/515546507/2fd2b94c40"},
            {id: "9", title: 'Orange Grove', length: '7 minutes', img: orangegrove, imgalt: "Orange Grove", vidurl: "https://player.vimeo.com/video/515546782"}
        ]
    }
    render() {
    return (


            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mr-4 gap-4 w-full">
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[0].title} length={this.state.videolist[0].length} img={this.state.videolist[0].img} imgalt={this.state.videolist[0].imgalt}/>
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[1].title} length={this.state.videolist[1].length} img={this.state.videolist[1].img} imgalt={this.state.videolist[1].imgalt}   vidurl={this.state.videolist[1].vidurl} />
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[2].title} length={this.state.videolist[2].length} img={this.state.videolist[2].img} imgalt={this.state.videolist[2].imgalt}  />
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[3].title} length={this.state.videolist[3].length} img={this.state.videolist[3].img} imgalt={this.state.videolist[3].imgalt}  />
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[4].title} length={this.state.videolist[4].length} img={this.state.videolist[4].img} imgalt={this.state.videolist[4].imgalt} />
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[5].title} length={this.state.videolist[5].length} img={this.state.videolist[5].img} imgalt={this.state.videolist[5].imgalt}  />
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[6].title} length={this.state.videolist[6].length} img={this.state.videolist[6].img} imgalt={this.state.videolist[6].imgalt}  />
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[7].title} length={this.state.videolist[7].length} img={this.state.videolist[7].img} imgalt={this.state.videolist[7].imgalt} vidurl={this.state.videolist[7].vidurl}   />
                <Videoselection id={this.state.videolist[0].id} title={this.state.videolist[8].title} length={this.state.videolist[8].length} img={this.state.videolist[8].img} imgalt={this.state.videolist[8].imgalt} vidurl={this.state.videolist[8].vidurl} />
            </ul>


    )}
}

export default FeaturedVideos;