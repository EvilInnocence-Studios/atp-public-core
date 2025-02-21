import {CrossDresserProps} from "./CrossDresser.d";
import styles from './CrossDresser.module.scss';
import { Link } from 'react-router-dom';
import banner from "./XDmainpagebanner.jpg";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const CrossDresserComponent = ({}:CrossDresserProps) =>
    <div className={styles.cmsPage}>
        <h1>XD 4.0 Utility Suite</h1>
        <div className={styles.cmsPageContent}>
            <div className={styles.banner}>
                <Link to="/shop/store/shop-by-category/crossdresser">
                    <img src={banner} alt="CrossDresser 4.0 Utility Suite" />
                </Link>
            </div>
            <p className={styles.download}>
                <Button type="primary" size="large" onClick={() => {location.href="https://evilinnocence.s3.amazonaws.com/xd-updater/XD%204%20Installer.zip"}}>
                    <FontAwesomeIcon icon={faDownload} /> Download the XD Utility Suite
                </Button>
                <p>downloads the installer for XD, XD Morpher, and support files for Universal Clothing. (requires Windows XP or newer)</p>
            </p>
            <div className={styles.xdBlurb}>
                <h2><Link to="/universal-clothing">Universal</Link></h2>
                <p>Converting clothing from one character to another couldn't be any easier!</p>
                <p>The <Link to="/universal-clothing">Universal Clothing plugins</Link> for Poser and DAZ Studio seamlessly integrate CrossDresser technology directly into your clothing runtime.</p>
                <p>Now, converting clothing between character is no harder than loading a regular clothing.</p>
                <p>&nbsp;</p>
            </div>
            <div className={styles.xdBlurb}>
                <h2><Link to="/crossdresser-converter">XD</Link></h2>
                <p>Your favorite character will never be jealous of someone else's closet ever again!</p>
                <p><Link to="/crossdresser-converter">XD</Link> is a one-click clothing conversion utility for Poser and DAZ Studio.</p>
                <p>Instantly convert clothing from one figure to another.</p>
                <p>XD currently supports over 200 figures and the list is growing!</p>
            </div>
            <div className={styles.xdBlurb}>
                <h2><Link to="/xd-morpher">XD Morpher</Link></h2>
                <p>Fit any clothing to any character, regardless of shape and size!</p>
                <p>The <Link to="/xd-morpher">XD Morpher</Link> utility enhances your clothing by adding in full body morphs and adjustment morphs</p>
            </div>
        </div>
    </div>;
