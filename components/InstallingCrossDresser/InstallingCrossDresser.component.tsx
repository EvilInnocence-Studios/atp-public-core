import {InstallingCrossDresserProps} from "./InstallingCrossDresser.d";
import styles from './InstallingCrossDresser.module.scss';
import { Link } from 'react-router-dom';
import updaterInstallerImg from './Updater Installer.png';
import vcRuntimeInstallerNewImg from './VC++ Runtime Installer New.png';
import vcRuntimeInstallerImg from './VC++ Runtime Installer.png';
import updaterStep1Img from './Updater 1.png';
import updaterStep2Img from './Updater 2.png';
import updaterStep3Img from './Updater 3.png';

export const InstallingCrossDresserComponent = ({}:InstallingCrossDresserProps) =>
    <div className={styles.cmsPage}>
        <h1>Installing XD</h1>
        <ol>
            <li>Visit the <Link to="/crossdresser">XD homepage</Link> and download the free updater program.</li>
            <li>Unzip and run the updater installer and follow the on-screen instructions.<br /> <img src={updaterInstallerImg} alt="XD Updater Installer" /></li>
            <li>When prompted, install the Visual Studio 2010 Runtime.<br /> <img src={vcRuntimeInstallerNewImg} alt="Visual C++ Runtime Installer" /></li>
            <li>If you already have the runtime installed, you will instead be prompted to "Repair" or "Remove" it. Either Repair it, or cancel the runtime installer.<br /> <img src={vcRuntimeInstallerImg} alt="Visual C++ Runtime Installer" /></li>
            <li>When the updater runs, click next on the components screen.<br /> <img src={updaterStep1Img} alt="XD Updater Step 1" /></li>
            <li>Choose the figures you want to install from the figure lists. Each figure can take a while to download, so only install the figures you need right now. You can always run the installer again later to install more figures.<br /> <img src={updaterStep2Img} alt="XD Updater Step 2" /></li>
            <li>When the downloads are finished, run the XD 4.exe program to start XD. <img src={updaterStep3Img} alt="XD Updater Step 3" /></li>
        </ol>
    </div>;
