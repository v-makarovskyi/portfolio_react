import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0"
            }}
            params={{
              particles: {
                number: {
                  value: 160,
                  density: {
                    enable: true,
                    value_area: 1500,
                  },
                },
                line_linked: {
                  enable: false,
                  opacity: 0.03,
                },
                move: {
                  direction: "right",
                  speed: 0.05,
                },
                size: {
                  value: 1,
                },
                opacity: {
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05,
                  },
                },
              },
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                },
                modes: {
                  push: {
                    particles_nb: 1,
                  },
                },
              },
              retina_detect: true,
            }}
        />
    );
};

export default Particle