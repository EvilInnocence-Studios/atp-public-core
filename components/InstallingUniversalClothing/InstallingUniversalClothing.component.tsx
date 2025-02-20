import {InstallingUniversalClothingProps} from "./InstallingUniversalClothing.d";
import styles from './InstallingUniversalClothing.module.scss';
import { Link } from 'react-router-dom';

export const InstallingUniversalClothingComponent = ({}: InstallingUniversalClothingProps) => (
  <div className={styles.cmsPage}>
    <h1>Installing and Using Universal Clothing</h1>
    <div>
      <p>
        The Universal Clothing plugins for Poser and DAZ Studio rely on CrossDresser technology. In order to use Universal Clothing, you need to install CrossDresser as well as the Universal plugin. The following steps describe how to get started with using Universal Clothing.
      </p>
      <h2>Installing All Required Software</h2>
      <ol>
        <li>
          Install and/or update <Link to="/crossdresser">CrossDresser</Link>: <Link to="/xd-setup-tutorial/">Read the tutorial</Link> or <Link to="/install-crossdresser-video/">watch the video</Link> for complete instructions on how to install CrossDresser. If you already have CrossDresser installed, then run the XD Updater to get the latest version. Also make sure to update all figure you have installed.
        </li>
        <li>
          Install CrossDresser licenses: You will need a CrossDresser license for each figure you wish to use Universal Clothing on. You can purchase most of our licenses in our <Link to="/store/shop-by-category/crossdresser/licenses.html">store</Link>, and download the rest in our <Link to="/free-stuff/crossdresser-licenses.html">free stuff section</Link>. Then you can <Link to="/xd-license-tutorial/">read the tutorial</Link> or <Link to="/install-crossdresser-video/">watch the video</Link> for complete instructions on how to install the figure licenses.
        </li>
        <li>
          Download and install whichever Universal Clothing plugin you need.
          <ul>
            <li>The <Link to="http://evilinnocence.s3.amazonaws.com/xd-updater/Universal%20Clothing%20Plugin%20-%20Poser.zip">Poser plugin</Link> can be installed into any runtime.</li>
            <li>The <Link to="http://evilinnocence.s3.amazonaws.com/xd-updater/Universal%20Clothing%20Plugin%20-%20DS%20(32%20bit).zip">DAZ Studio (32 bit) plugin</Link> should be installed into your <strong>Program Files (x86)\DAZ 3d\DAZStudio4</strong> directory.</li>
            <li>The <Link to="http://evilinnocence.s3.amazonaws.com/xd-updater/Universal%20Clothing%20Plugin%20-%20DS%20(64%20bit).zip">DAZ Studio (64 bit) plugin</Link> should be installed into your <strong>Program Files\DAZ 3d\DAZStudio4</strong> directory.</li>
          </ul>
        </li>
        <li>That's it! You're now ready to download and use some Universal Clothing.</li>
      </ol>
      <h2>Using Universal Clothing</h2>
      <ol>
        <li>
          Download some Universal Clothing from our <Link to="/free-stuff/clothing/universal-clothing.html">free stuff section</Link>.
        </li>
        <li>
          Install the Universal Clothing into your content library.
          <ul>
            <li>The Universal Clothing requires the original clothing, and will not work without it. Make sure to install the Universal Clothing into the same Runtime directory as the original clothing.</li>
            <li>The Universal CR2, PY, and DSA files need to be installed in the same directory as the original clothing.</li>
            <li>If you moved the original clothing, you also need to move the CR2, PY, and DSA files to the same place.</li>
            <li>The Universal Clothing will only work on the specified version of the original clothing.</li>
            <li>For example: If the Universal Clothing says that it uses the V4 version of a clothing, it will not work on the Cookie version.</li>
          </ul>
        </li>
        <li>
          In Poser or DAZ Studio, load and select a figure.
          <ul>
            <li>The Universal Clothing plugin will only work on default versions of the figure.</li>
            <li>If you altered and/or moved the geometry files for a figure, the plugin will not be able to determine which figure you have selected.</li>
          </ul>
        </li>
        <li>
          Load a Universal Clothing.
          <ul>
            <li>In Poser, double-click the Universal Clothing. Dragging the clothing from the content library onto the figure will not activate the plugin.</li>
            <li>In DAZ Studio, either double-click the Universal Clothing, or drag it onto the figure, and select "Fit to..."</li>
            <li>If the plugin crashes, try again. Occasionally, the plugin has trouble starting quickly enough.</li>
            <li>The first time loading a clothing to a particular figure will be slow, but subsequent loads will be as fast a loading any regular clothing.</li>
          </ul>
        </li>
        <li>That's it! The clothing should load into the scene and automatically conform to your figure.</li>
      </ol>
    </div>
  </div>
);
