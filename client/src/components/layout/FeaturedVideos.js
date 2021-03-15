
import React from 'react'
import { Component } from 'react';
import Videoselection from './Videoselection';
import { Videodata } from "./Videodata";


class FeaturedVideos extends Component {
    render() {
    return (


            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mr-4 gap-4 w-full">
                        {Videodata.map((data, key) => {
                            return (
                                <div key={key}>
                                <Videoselection
                                    id={data.id}
                                    title={data.title}
                                    length={data.length}
                                    img={data.img}
                                    imgalt={data.imgalt}
                                    vidurl={data.vidurl}
                                />
                                </div>
                            );
                            })}
            </ul>


    )}
}

export default FeaturedVideos;