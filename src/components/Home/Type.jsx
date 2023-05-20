import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <Typewriter 
            options={{
                strings: [
                    'FrontEnd разработчик',
                    'HTML5 & CSS3 & native JS',
                    'MERN stack разработчик',
                    'ReactJs & Redux/Redux Toolkit',
                    'Участник проектов с открытым исходным кодом'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    )
}