import {UsingXDWithGenesisProps} from "./UsingXDWithGenesis.d";
import styles from './UsingXDWithGenesis.module.scss';
import cr2Export1 from './cr2-export-1.png';
import cr2Export2 from './cr2-export-2.png';
import v4ClothingImport1 from './v4-clothing-import-1.png';
import v4ClothingImport2 from './v4-clothing-import-2.png';

export const UsingXDWithGenesisComponent = ({}:UsingXDWithGenesisProps) =>
    <div className={styles.cmsPage}>
        <h1>Using XD with Genesis</h1>
        <div><p>Although we don't have direct support for Genesis clothing in XD, it is still fairly simple to convert clothing to and from Genesis with only a few extra steps. The short version:</p>
        <ul>
            <li>To convert Genesis clothing to other figures, you just need to export the clothing from DAZ Studio as a Poser CR2 file, then convert it normally.</li>
            <li>To convert another figure's clothing to Genesis, first convert it to Vicky 4 using XD, then let DAZ Studio auto-fit the clothing to Genesis.</li>
        </ul>
        <h2>Converting Genesis clothing to other figures</h2>
        <p>Due to technical limitations, XD only supports Poser's native CR2 file format. Since Genesis clothing is stored in one of DAZ Studio's various formats, you will need to convert the clothing to a CR2 before you can use XD to convert it.</p>
        <p>Fortunately, DAZ Studio ships with a standard plugin that allows you to export any item as a Poser CR2 file.</p>
        <ol>
            <li>First, load the Genesis clothing into your DAZ Studio scene, and make sure it's selected.</li>
            <li>Under the <strong>File</strong> menu in the top menu bar, select <strong>Export...</strong><br /> <img src={cr2Export1} alt="Exporting Genesis from DAZ Studio" /></li>
            <li>In the <strong>Export File</strong> dialog, make sure that <strong>Poser CR2 File (*.cr2)</strong> is selected in the <strong>Save as type:</strong> dropdown box.<br /> <img src={cr2Export2} alt="Exporting Genesis from DAZ Studio" /></li>
            <li>Save the clothing, preferably into the same Runtime folder as the original clothing.</li>
            <li>Using XD, convert the clothing to another figure as you would any other clothing. Genesis should be automatically selected as the <strong>From</strong> figure, but if it isn't, make sure you select it manually.</li>
        </ol>
        <h2>Converting clothing to Genesis from other figures</h2>
        <p>Since XD can't convert clothing directly to Genesis, we need to find another way to get there. Fortunately, DAZ Studio Pro has an Auto-Fit plugin which can convert clothing to Genesis from many of DAZ's Generation 4 figures, including vicky 4. So, to use other figure's clothing on Genesis, you need to convert the clothing to Vicky 4, then let DAZ Studio auto-fit it to Genesis.</p>
        <ol>
            <li>First, use XD to convert the other figure's clothing to Vicky 4. You will need a <a href="http://www.evilinnocence.com/v4-crossdresser-license.html">Vicky 4 XD License</a> for this step.</li>
            <li>Import the converted clothing into DAZ Studio by dragging the thumbnail from the Content Library onto your Genesis figure, and selecting <strong>Fit to Genesis</strong> in the pop-up menu.<br /> <img src={v4ClothingImport1} alt="Importing Vicky 4 Clothing into DAZ Studio" /></li>
            <li>In the auto-fit dialog, choose <strong>Victoria 4</strong> in the <strong>What figure ...</strong> dropdown box, and in the <strong>What type of item is it?</strong> dropdown box, choose the best option for that particular clothing.<br /> <img src={v4ClothingImport2} alt="Importing Vicky 4 Clothing into DAZ Studio" /></li>
            <li>Click the <strong>Accept</strong> button, and DAZ Studio should conform the converted clothing to Genesis.</li>
        </ol></div>
    </div>;
