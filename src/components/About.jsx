import React from "react";
import Prob from "./Prob";
import Solution from "./Solution";
import Team from "./Team";
import Approach from "./Approach";
import TechStack from "./TechStack";

function About(){
    return(
        <div>
            <Prob/>
            <Solution/>
            <Approach/>
            <TechStack/>
            <Team/>
        </div>
    )
}

export default About;