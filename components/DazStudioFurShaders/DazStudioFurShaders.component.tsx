import {DazStudioFurShadersProps} from "./DazStudioFurShaders.d";
import styles from './DazStudioFurShaders.module.scss';

export const DazStudioFurShadersComponent = ({}:DazStudioFurShadersProps) =>
    <div className={styles.cmsPage}>
        <h1>DAZ Studio Fur Shaders</h1>
        <div>
            <p>Don't you just love those oh-so-cute Christmas outfits offered by Evilinnocence? Wouldn't you love to be able to recreate that fur effect in DAZ|Studio? Up until recently, I believed it was impossible to get that gorgeous look. But by using some great shaders, offered for free online, <a href="http://quirkyblonde.deviantart.com/art/An-Experiment-in-Humiliation-74009380">you can get that look too</a>!</p>
            <p>Here is what you need:</p>
            <ul>
                <li>DAZ|Studio - <a href="http://www.daz3d.com">www.daz3d.com</a></li>
                <li><a href="http://cinnamon.hotusa.org/poser/mariannesposerfreebies.html">Fuzzy Wuzzy Shaders</a>. (Make sure you download the DAZ|Studio version and not the Poser version)</li>
                <li>The model of your choice, there are lots of free models available, I used Aiko 3.0 for this render.</li>
                <li>The free Christmas outfits offered at <a href="http://www.evilinnocence.com">www.evilinnocence.com</a></li>
            </ul>
            <p>The procedure is really easy.</p>
            <ol>
                <li>load your model and the outfit you've chosen.</li>
                <li>In the "scene" tab, highlight the outfit.</li>
                <li>In the surfaces tab, select "trim."</li>
                <li>Now, go back to the content tab and locate where you've put the shaders folder.</li>
                <li>Select the "fuzzy wuzzy" shader in the color you want. Alternatively, you can use your own texture and apply the "all purpose fur" shader.</li>
                <li>Add all your textures and lighting and everything else you want to put in the scene, then render.</li>
            </ol>
            <p>This procedure will work for any shader you want to use, and there are some cool ones out there.</p>
            <p>Remember, if you want to adjust the length of the fur, you can go back in the surfaces tab, select "trim" and adjust the displacement up or down.</p>
            <p>Have fun and happy rendering!</p>
        </div>
    </div>;
