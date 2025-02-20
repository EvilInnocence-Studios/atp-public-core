import {XDSkirtTutorialProps} from "./XDSkirtTutorial.d";
import styles from './XDSkirtTutorial.module.scss';
import skirtTut600 from './skirt-tut_600.jpg';

export const XDSkirtTutorialComponent = ({}:XDSkirtTutorialProps) =>
    <div className={styles.cmsPage}>
        <h1>Handling Skirts and Dresses in CrossDresser</h1>
        <div>
            <p><span style={{color: "#ff0000"}}>NOTE:</span> Long skirts and dresses are not always compatible with feet conversions. If you see strange bumps on long dresses around the feet, then uncheck the "Include head, hands, and feet" checkbox and rerun the conversion.</p>
            <p>Because of the way Poser handles a figure's bone hierarchy, skirts and dresses always need special bones or movement morphs in order to pose properly around a figure's legs. For example, we use five skirt handles in our clothing items which contain skirts or dresses. These handles can be used to pose the skirt or dress. They can also be made invisible so that they don't show up in your final render.</p>
            <p>Another technique that is used to make skirts and dresses more usable is the use of movement morphs. These are morphs that allow the skirt or dress to move without the need of handles.</p>
            <p>The CrossDresser does not have the ability to transfer these custom bones or movement morphs from an original clothing item to a converted clothing item. However, it does have two features which work together to insert some basic posing ability into converted skirts and dresses.</p>
            <h2>Regrouping</h2>
            <p>By default, the CrossDresser regroups converted clothing so that the clothing bone structure matches the target figure's bone structure. This is necessary since many figures to not have the same hierarchies. For example, Vicky 3 has buttock bones between the hip bone and the thigh bones, while Vicky 4 just has thigh bones. If no regrouping is done, then there can be major posing issues, as seen in the top-left image above.</p>
            <p>However, using the regrouping feature is not enough to support skirts and dresses. The CrossDresser assigns polygons in the clothing to the nearest bone in the target figure. This means that skirts and dresses would be grouped with the leg bones, which would break the clothing when the figure is posed, as seen in the top-right image above.</p>
            <h2>"Skirt" and "Add skirt handles"</h2>
            <p>To solve this problem, the CrossDresser has a "Skirt" option which will group all skirt and dress polygons into the hip bone instead of the leg bones. The program will also add five skirt bones to the clothing figure to assist with posing:</p>
            <ul>
                <li>skirt: This moves the entire skirt or dress in all directions</li>
                <li>skirtFront: This moves the front of the skirt or dress forward.</li>
                <li>skirtBack: This moves the back of the skirt or dress backwards.</li>
                <li>skirtLeft: This moves the left of the skirt or dress to the left.</li>
                <li>skirtRight: This moves the right of the skirt or dress to the right.</li>
            </ul>
            <p>By checking the "Add skirt handles" box, the CrossDresser will also add handle geometry to the clothing, so that you don't have to try and find the skirt bones in the body part selector.</p>
            <p>As you can see in the bottom-right image, by regrouping the clothing and checking the "Skirt" and "Add skirt handles" options, the skirt or dress can be made to pose perfectly around the figure's legs. The converted skirt or dress won't have any of the custom bones or complex movement morphs of the original clothing, but it will at least be able to function.</p>
            <p>The bottom-left image is also functioning properly, but without regrouping, the clothing may not function correctly. This dress works because the dress is already grouped into the hip bone, but if another dress has a different grouping, it will probably look like the top-left image.</p>
            <p><img src={skirtTut600} alt="Skirt Conversion Case Studies" /></p>
        </div>
    </div>;
