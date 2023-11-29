import React from "react";
import sphp from '../../Images/homeImages/nphp.jpeg';
import '../../data/fonts.css'

function Timeline(){
    const innerHeight = 300;
    return(
        <div className=" flex flex-col items-center justify-center">
            <div>
          <img style={{height: innerHeight}} src={sphp} />
        </div>
            <div className="text-white lg:text-9xl md:text-8xl sm:text-7xl text-6xl my-5" style={{fontFamily: 'Syne'}}>
                TIMELINE
            </div>
            <div className="text-white lg:text-8xl md:text-7xl sm:text-6xl text-5xl" style={{fontFamily: 'Syne'}}>
                COMING
            </div>
            <div className="text-white lg:text-8xl md:text-7xl sm:text-6xl text-5xl" style={{fontFamily: 'Syne'}}>
                SOON
            </div>
        </div>
    )
}

export default Timeline;