import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <Typewriter 
            options={{
                strings: [
                    'FrontEnd разработчик',
                    'Специалист машинного обучения',
                    'MERN stack разработчик',
                    'Участник проектов с открытым исходным кодом'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    )
}