import {XDRuntimeTutorialProps} from "./XDRuntimeTutorial.d";
import styles from './XDRuntimeTutorial.module.scss';
import network1 from './network_1.jpg';
import network2 from './network_2.jpg';
import network3 from './network_3.jpg';
import network4 from './network_4.jpg';
import network5 from './network_5.jpg';
import network6 from './network_6.jpg';

export const XDRuntimeTutorialComponent = ({}:XDRuntimeTutorialProps) =>
    <div className={styles.cmsPage}>
        <h1>Why can't XD find my Runtimes when they are on a networked drive?</h1>
        <div>
            <p>A common problem users encounter when trying to setup the XD is that they can't add their Runtime folders if they are located on a separate network drive. This is a limitation of the directory chooser on the Settings window: it only handles drives and directories. It can't locate a directory if the only way to get to it is through Network Places. However, you can get around this issue by <strong>mapping your external folders to a local drive</strong>.</p>
            <p>To map a network drive, first double-click on the <em>My Computer</em> icon on your Desktop. Then go to the Tools menu, and click on the "Map network drive..." item.</p>
            <p><span style={{color: "#ff0000"}}>NOTE:</span> On Windows Vista and Windows 7 computers, you may need to press the "Alt" key to show the menu bar.</p>
            <img src={network1} alt="Adding a Networked Drive" />
            <p>This will bring up the <em>Map Network Drive</em> dialog as shown below. Choose an unused drive letter (I chose Z: here), and then click on the browse button.</p>
            <img src={network2} alt="Adding a Networked Drive" />
            <p>Then locate your network folder on the following screen and click on the OK button. In my case, I selected the C drive of another computer which was already shared.</p>
            <img src={network3} alt="Adding a Networked Drive" />
            <p>Once you get back to the <em>Map Network Drive</em> dialog, you should see your network folder listed in the Folder box. Click on the finish button to map the network drive.</p>
            <img src={network4} alt="Adding a Networked Drive" />
            <p>You should now see your network folder as a new drive in the <em>My Computer</em> window.</p>
            <img src={network5} alt="Adding a Networked Drive" />
            <p>Now, when you go back to the Settings window in XD, you should see your network folder as a new drive in the Runtime drive dropdown list. You can then select this drive and browse to your networked Runtime folder.</p>
            <img src={network6} alt="Adding a Networked Drive" />
        </div>
    </div>;
