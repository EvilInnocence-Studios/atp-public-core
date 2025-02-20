import { XDLocationTutorialProps } from "./XDLocationTutorial.d";
import styles from './XDLocationTutorial.module.scss';
import settings from "./settings screen override.jpg";

export const XDLocationTutorialComponent = ({}:XDLocationTutorialProps) =>
    <div className={styles.cmsPage}>
        <h1>Where is my converted clothing</h1>
        <div>
            <p>The CrossDresser supports multiple Runtime folders, so it can be confusing sometimes to find out where your converted clothing has been saved.</p>
            <h2>Default locations</h2>
            <p>By default, the CrossDresser saves converted clothing in the <strong>!Converted:</strong> folder in the same Runtime as the original clothing.</p>
            <p>For example, let's say you have two Runtime directories defined: Poser 5, and Daz Studio. If you have a clothing item in some folder in the figures library in Poser 5, then any converted clothing made from this item will get saved in the</p>
            <p><strong>Poser 5:Runtime:libraries:character:!Converted:</strong></p>
            <p>folder. If another clothing is located in your Daz Studio content library, then the converted clothing for this item will be saved in the</p>
            <p><strong>Daz Studio:content:Runtime:libraries:character:!Converted:</strong></p>
            <p>folder.</p>
            <h2>Overriding the default locations</h2>
            <p>If you want the converted clothing to go to a specific place, you can override the default location in the Advanced Settings. To get to the Settings window, click on the right arrow button and click on the Output section. You can override the output locations for the converted clothing's OBJ file and CR2 file by checking the appropriate boxes in the Advanced Options Section. You can then manually set the new file names for the converted clothing by clicking on the appropriate file selection buttons.</p>
            <img src={settings} alt="Overriding CrossDresser File Locations" />
        </div>
    </div>;
