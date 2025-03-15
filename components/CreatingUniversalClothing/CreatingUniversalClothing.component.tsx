import {CreatingUniversalClothingProps} from "./CreatingUniversalClothing.d";
import styles from './CreatingUniversalClothing.module.scss';

export const CreatingUniversalClothingComponent = ({}:CreatingUniversalClothingProps) => (
    <div className={styles.cmsPage}>
        <h1>Creating Universal Clothing</h1>
        <div>
            <p>Creating Universal Clothing upgrades for existing clothing is as simple as setting up an XD conversion. Just follow the steps below to start upgrading your Runtime.</p>
            <ol>
                <li>Open XD and load the original clothing</li>
                <li>Make sure the <strong>From</strong> figure is correct.</li>
                <li>Setup a normal XD conversion, keeping the following in mind:
                    <ul>
                        <li>If the original clothing has skirt handles already, then uncheck "Add skirt handles" and check "...except skirt handles" under "Regroup object" in the options.</li>
                        <li>Add all fix morphs that are applicable to the clothing. Even if you don't plan on adding the fix morphs into your clothing, still select all of the fix morphs that affect areas the clothing covers. This fix morph information is used by the Universal Clothing Exporter to determine which conversion adjustments to skip. Otherwise, the plugin will waste time applying adjustments that don't actually affect the clothing, causing the clothing to load slower.</li>
                        <li>If conversion adjustments for particular figures are needed, see below for how to tweak them.</li>
                    </ul>
                </li>
                <li>Once the conversion is setup, select <strong>Export Universal Clothing</strong> from the <strong>File</strong> menu.</li>
                <li>Enter the Universal Clothing parameters in the Export dialog
                    <ul>
                        <li><strong>Vendor</strong>: The person who made the original clothing.</li>
                        <li><strong>Folder Name</strong>: The folder the settings will be saved in. The final folder for the options will be in <strong>:Runtime:libraries:!Universal Clothing:VENDOR:CLOTHING</strong></li>
                        <li><strong>Display Name</strong>: The clothing name that will appear in the Universal Clothing plugin progress window.</li>
                        <li><strong>File Name</strong>: The file name of the universal CR2 file. If the original clothing is called "Sweetheart Dress," then this should be something like "Universal Sweetheart Dress" or "Universal Dress."</li>
                    </ul>
                </li>
                <li>Click OK.</li>
                <li>Refresh your content library in Poser or DAZ Studio, and the Universal Clothing should be in the same folder as the original clothing, ready to load.</li>
            </ol>
            <h2>Tweaking Universal Clothing for Individual Figures</h2>
            <p>Sometimes, the default conversion to some figures isn't quite perfect enough. If that's the case for a particular clothing, you can tweak its setting to improve the fit.</p>
            <ol>
                <li>Export the Universal Clothing files by following the instructions above</li>
                <li>Open the new "options.txt" file in the appropriate "!Universal Clothing" folder.</li>
                <li>Change "forceRebuild" to "true"</li>
                <li>Go to your XD directory and find your figure's "uc_defaults.txt" file</li>
                <li>Copy that file into the same folder as the "options.txt" file.</li>
                <li>Rename the "uc_defaults.txt" file to match your figure. The new name of the adjustments file should match the name shown in the XD "To" or "From" dropdown exactly. For example: "Vicky 4.txt"</li>
                <li>Open the renamed adjustments file and update the conversion adjustment values as needed.</li>
                <li>You can also override any parameter in the "options.txt" file by copying it to the renamed adjustments file.</li>
                <li>Save the renamed adjustments file and test out your new tweaks.</li>
                <li>When you are satisfied with the tweaks, change "forceRebuild" back to "false" in the options.txt file.</li>
                <li>Repeat the above steps for any other figures that need tweaking.</li>
            </ol>
        </div>
    </div>
);
