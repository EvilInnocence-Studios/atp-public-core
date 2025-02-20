import {Poser5FurProps} from "./Poser5Fur.d";
import styles from './Poser5Fur.module.scss';
import img1 from './bucket size 32 - 2.jpg';
import img2 from './render-settings-p5.jpg';
import img3 from './bucket-size-32-arrows.jpg';
import img4 from './bucket-size-32-comparison.jpg';
import img5 from './bucket size 512.jpg';

export const Poser5FurComponent = ({}:Poser5FurProps) =>
    <div className={styles.cmsPage}>
        <h1>Rendering Displaced Fur in Poser 5</h1>
        <div>
            <p>So, you got one of those fuzzy outfits for V3, loaded it up into Poser 5, made a cool scene, and then rendered it. But what's this? It looks terrible! There are strange lines in the fur that make it look like someone gave it a really bad haircut. What happened??</p>
            <img src={img1} alt="Fur Rendering with Bucket Size 32" />
            <p>One thing you'll notice about the errant lines in the above picture is that they seem to occur at very regular intervals. If you take the time to count the pixels between the lines, you'll find them all to be exactly 32 pixels apart. This seems odd until you open the Poser 5 render settings...</p>
            <img src={img2} alt="Poser 5 Render Settings" />
            <p>First of all, if you didn't see the fur at all, you need to make sure that the "Use displacement maps" box is checked. Next, you'll notice that the default Bucket size for Poser 5 is set to 32 pixels; the same as the distance between the artifacts in the rendered image. Ah ha!</p>
            <img src={img3} alt="Fur Rendering with Bucket Size 32" />
            <p>When Poser 5 renders a picture, it renders one small block of pixels at a time. The sizes of these blocks are specified by the Bucket size parameter. If you make a grid over the rendered picture with lines where the bucket boundaries are located, you can see that the boundaries match up perfectly with the artifacts.</p>
            <img src={img4} alt="Fur Rendering with Bucket Size 32" />
            <p>You'll also notice that these artifacts usually show up near the edge of the underlying fur object, which is shown superimposed on the fur above. Apparently, when Poser 5 is rendering a bucket, it won't render fur that belongs to a part of the object that is completely outside of the bucket, even if the displacement mapped fur should extend into it. The solution to this problem is to reduce the number of bucket edges. You can do this by increasing the Bucket size parameter until the artifacts go away. Below shows what the above image looks like when the Bucket size parameter is set to 512 (the width of the image):</p>
            <img src={img5} alt="Fur Rendering with Bucket Size 512" />
            <p>Poser 6 handles the bucket boundaries better and doesn't seem to have this problem.</p>
        </div>
    </div>;
