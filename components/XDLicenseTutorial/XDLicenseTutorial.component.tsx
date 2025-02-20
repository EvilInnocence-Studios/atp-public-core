import {XDLicenseTutorialProps} from "./XDLicenseTutorial.d";
import styles from './XDLicenseTutorial.module.scss';
import LicenseDownloadImg from './License Download.png';
import FigureSupport1Img from './Figure Support 1.png';
import FigureSupport2Img from './Figure Support 2.png';
import FigureInstaller1Img from './Figure Installer 1.png';
import FigureInstaller2Img from './Figure Installer 2.png';

export const XDLicenseTutorialComponent = ({}:XDLicenseTutorialProps) =>
    <div className={styles.cmsPage}>
        <h1>Installing CrossDresser Figure Licenses</h1>
        <div>
            <ol>
                <li>Download the figure license either from your order confirmation email or your My Download section in your EvilInnocence account.<br /> <img src={LicenseDownloadImg} alt="CrossDresser Figure License Download" /></li>
                <li>Open CrossDresser and see if the support files are installed for your figure. If the figure does not appear in the "From" dropdown, you will need to install the support files before installing the license.<br /> <img src={FigureSupport1Img} alt="CrossDresser Figure Support" /></li>
                <li>If you need to install the figure's support files, open the XD Updater program and find your figure in the "New," "Updated," or "Skipped" figure list (it will most likely be in the "Skipped" list). Select your figure and complete the update process to install the support files.<br /> <img src={FigureSupport2Img} alt="CrossDresser Figure Support" /></li>
                <li>Run the figure installer and follow the installation instructions.<br /> <img src={FigureInstaller1Img} alt="CrossDresser Figure Installer" /></li>
                <li><strong style={{color: "#ff0000"}}>NOTE:</strong> If instead you see the following type of screen in your figure installer, then you have a CrossDresser 3 license, which is not compatible with the latest version of CrossDresser. You will need to <a href="http://www.evilinnocence.com/xd-upgrade.html">upgrade</a> your license.<br /> <img src={FigureInstaller2Img} alt="CrossDresser Figure Installer" /></li>
            </ol>
        </div>
    </div>;
