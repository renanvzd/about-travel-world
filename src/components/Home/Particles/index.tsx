import Particles from "react-tsparticles";
import styles from './styles.module.scss';

export default function MyParticles() {
  return (
    <Particles
      className={styles.particles}
      params={{
        "particles": {
          "number": {
            "value": 250,
            "density": {
              "enable": true,
              "value_area": 2500
            }
          },
          "line_linked": {
            "enable": false,
          },
          "move": {
            "enable": true,
            "direction": "none",
            "speed": 0.25,
          },
          "size": {
            "value": 1.5
          },
          "opacity": {
            "anim": {
              "enable": true,
              "speed": 5,
              "opacity_min": 0.1
            }
          }
        },
        "interactivity": {
          "events": {
            "onclick": {
              "enable": true,
              "mode": "push"
            }
          },
          "modes": {
            "push": {
              "particles_nb": 1
            }
          }
        },
        "retina_detect": false
      }}>
    </Particles>
  );
}
