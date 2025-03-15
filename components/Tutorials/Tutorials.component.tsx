import {TutorialsProps} from "./Tutorials.d";
import styles from './Tutorials.module.scss';
import { Link } from 'react-router';

export const TutorialsComponent = ({}:TutorialsProps) =><div className={styles.cmsPage}>
    <h1>Tutorials</h1>
    <ul className={styles.tutorials}>
        <li className={styles.tutorialItem}>
            <h2><Link to="/installing-universal-clothing/">
            Installing and Using Universal Clothing</Link></h2>
            <div>
            How to install and use the Universal Clothing plugin and Universal Clothing items.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/creating-universal-clothing/">
            Creating Universal Clothing</Link></h2>
            <div>
            How to universalize any existing Poser or DAZ Studio clothing.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/xd-setup-tutorial/">
            Installing XD</Link></h2>
            <div>
            How to download and install the XD clothing conversion utility.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/install-crossdresser-video/">
            Installing XD Video</Link></h2>
            <div>
            How to download and install the XD clothing conversion utility.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/xd-conversion-tutorial/">
            Converting with XD</Link></h2>
            <div>
            How to use the XD clothing conversion utility.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/using-crossdresser-video/">
            Converting with XD Video</Link></h2>
            <div>
            How to use the XD clothing conversion utility.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/using-crossdresser-with-genesis/">
            Using XD with Genesis</Link></h2>
            <div>
            How to use the XD to convert clothing to and from DAZ's Genesis figure.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/xd-pose-tutorial/">
            Fixing Pokethrough with XD</Link></h2>
            <div>
            How to fix poke-through on converted clothing.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/xd-skirt-tutorial/">
            Handling Skirts and Dresses in XD</Link></h2>
            <div>
            Tips for converting skirts and dresses with the XD clothing conversion utility.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/xd-location-tutorial/">
            Where is my converted clothing</Link></h2>
            <div>
            How to find out where on your computer converted clothing is saved.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/xd-license-tutorial/">
            Installing XD Figure Licenses</Link></h2>
            <div>
            How to install figure licenses for the XD clothing conversion utility.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/xd-pose-fix-tutorial/">
            Why is my converted clothing breaking when I pose it?</Link></h2>
            <div>
            How to fix issues when conforming converted clothing to the target figure.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/xd-runtime-tutorial/">
            Why can't XD find my Runtimes when they are on a networked drive?</Link></h2>
            <div>
            How to add network folders to XD's Runtime list.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/using-tnt/">
            Using TnT Video</Link></h2>
            <div>
            How to use the TnT utility to simplify the process of creates figures with flexible tentacles or tails.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/using-fairy-magic/">
            Using Fairy Magic Video</Link></h2>
            <div>
            How to use the Fairy Magic utility to add effects to your Poser scenes.</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/daz-studio-fur-shaders/">
            DAZ Studio Fur Shaders</Link></h2>
            <div>
            Using displaced fur materials in DAZ Studio (courtesy of quickyblonde1980)</div>
        </li>
        <li className={styles.tutorialItem}>
            <h2><Link to="/rendering-fur-in-poser-5/">
            Rendering Displaced Fur in Poser 5</Link></h2>
            <div>
            Fixing rendering problems with displaced fur in Poser 5.</div>
        </li>
    </ul>
</div>;
