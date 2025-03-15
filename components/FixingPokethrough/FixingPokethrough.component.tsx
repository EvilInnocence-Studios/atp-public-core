import {FixingPokethroughProps} from "./FixingPokethrough.d";
import styles from './FixingPokethrough.module.scss';
import img from "./Poke Fix.png";

export const FixingPokethroughComponent = ({}:FixingPokethroughProps) =>
    <div className={styles.cmsPage}>
        <h1>Fixing Pokethrough with XD</h1>
        <div>So you converted a clothing to another figure, and brought it into Poser, only to discover that there is some poke-through. There are a few ways you can fix this:
            <h2>Use the Fix poke-through feature on the main window.</h2>
            <ol>
                <li>By checking the Fix poke-through checkbox, and entering a number in the box next to it, the XD will give a slight push to the entire clothing, moving it away from the figure's body. A value of 0.25 is usually large enough to fix most poke-through issues.</li>
            </ol>
            <img src={img} alt="Fixing Pokethrough with XD" />
            <h2>Use the conversion adjustment feature</h2>
            <ol>
                <li>Click on the arrow button in XD to bring up the advanced options, then click on the Conversion Adjustments panel.</li>
                <li>Where-ever you see poke-through in the clothing, increase the morph amount to fix it. Usually, values less than 0.5 are sufficient to fix most poke-through issues, but sometimes values over 1.0 are needed.</li>
                <li>Re-run the conversion and bring the clothing back into Poser. If there is still poke-through, go back to Step 1, and repeat until all of the poke-through is gone.</li>
            </ol>
        </div>
    </div>;
