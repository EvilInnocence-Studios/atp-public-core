import {AboutUsProps} from "./AboutUs.d";
import styles from './AboutUs.module.scss';

export const AboutUsComponent = ({}:AboutUsProps) =>
    <div className={styles.aboutUs}>
        <h1>About Us</h1>

        <h3>Who we are</h3>
        <p>EvilInnocence.com is run by the husband and wife team of Andy (DaemonAlchemist) and Andrea (EvilInnocence). Andy does modeling, programming, and website development and maintenance. Andrea does modeling, texturing, and marketing. We've been doing 3d computer graphics for over 20 years, and we love it!</p>

        <h3>What we do</h3>
        <p>We provide 3d content for Poser and DAZ Studio. Our primary products are clothing for various figures, such as Vicky 4, Dawn, and Cookie. We also create software such as the versatile CrossDresser Utility Suite, TnT, and Fairy Magic.</p>

        <h3>How we got started</h3>
        <p>Andy got interested in 3d graphics way back in high school and started experimenting with programs such as POV-Ray. Andrea became interested in 3d graphics in college, and after graduation, decided to make it her career. She started selling content at this website and Renderosity while Andy maintained the website, and provided useful workflow-enhancement utilities.</p>
    </div>;
