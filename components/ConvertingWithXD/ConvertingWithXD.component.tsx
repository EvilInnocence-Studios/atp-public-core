import { ConvertingWithXDProps } from "./ConvertingWithXD.d";
import styles from './ConvertingWithXD.module.scss';
import img from "./XD Main Screen Small.png";

export const ConvertingWithXDComponent = ({}:ConvertingWithXDProps) =>
    <div className={styles.cmsPage}>
        <h1>Converting with XD</h1>
	    <ol>
            <li>Open the XD program. You will see the main screen, as shown below. <img src={img} alt="XD Main Screen" /></li>
            <li>Choose a clothing to convert by clicking on the "..." button next to the Convert text box. After you choose the clothing cr2 file, it's name will be displayed in the "Clothing to Convert" section.</li>
            <li>In the "From" dropdown box, select the figure for whom the clothing was originally made. If the "Auto-guess From figure" box is checked, then XD will attempt to guess the from figure by analyzing the clothing.</li>
            <li>In the "To" dropdown box, select the figure to whom you wish to convert the clothing.</li>
            <li>If the clothing has a skirt or long dress, click on the "Skirt" checkbox so that the converted clothing will be properly grouped.</li>
            <li>Click on the "Convert Clothing" button to convert the clothing. The progess of the conversion will be displayed in the queue window. You can setup another conversion while the first one is still running. Most conversions will finish in only a few seconds.</li>
            <li>When the conversion is done, you can find the converted clothing in the "!Converted" folder in the same Runtime library as the original clothing.</li>
            <li>Bring the converted clothing into Poser, and conform it to the target figure. If there is any poke-through, you can fix that by using the "Conversion Adjustments" or "Fix Morphs" in XD.</li>
            <li>See the XD Help file to learn more about XD's more advanced options.</li>
        </ol>
    </div>;
