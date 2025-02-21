import { XDMorpherProps } from "./XDMorpher.d";
import styles from './XDMorpher.module.scss';
import { Row, Col, Button } from 'antd';
import { DownloadOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Banner from './bannerXDMorphs.jpg';

export const XDMorpherComponent = ({}: XDMorpherProps) => (
    <div className={styles.cmsPage}>
        <h1>XD Morpher</h1>
        <div className="cms-page-content">
            <div className="xd-banner">
                <img src={Banner} alt="CrossDresser XD Morpher" />
            </div>
            <h2>XD Morph Adder 4.0</h2>
            <h3>Morph Adding Utility for Poser and DAZ Studio</h3>
            <Row>
                <Col span={8}>
                    <h4>What is XD Morpher?</h4>
                    <p>How many times have you found the perfect clothing for your artwork, only to find out that it didn't have the morphs you're using on your figure? Have you ever wished you could just add in the figure morphs you need rather than finding a different clothing that works for your morphed figure. Have you ever wanted morphs that you could use on any clothing for any figure? If so, then XD Morpher is the solution you need!</p>
                    <p>XD Morpher is a one-click utility for adding morphs to Poser and DAZ Studio clothing. It allows you to add comforming figure morphs to any clothing for a particular figure. It also allows you to add Universal Morphs to any supported figure if you have the corresponding CrossDresser figure license. The process finishes quickly and is completely automatic. The final morphing clothing is placed directly in your Runtime directory, and can be used immediately in Poser or DAZ Studio. Any poke-throughs that remain can then be quickly fixed with the built-in fix morphs. In most cases, you can add morphs to a clothing, and have it working perfectly in just a few minutes!</p>
                </Col>
                <Col span={8}>
                    <h4>Major Features</h4>
                    <ul>
                        <li>XD Morpher is the old "Add Morphs" tab from CrossDresser 3, now as its own program with more features.</li>
                        <li>New Universal Morphs that can be added to any supported figure.</li>
                        <li>Over 200 supported figures for Universal Morphs!</li>
                        <li>XD Morpher 4.0 has been completely re-written from the ground up to be faster, better, and more user friendly!</li>
                        <li>High quality morphs with very little distortion or jagginess.</li>
                        <li>Ability to run multiple jobs simultaneously.</li>
                        <li>Automatically guesses which figure a clothing was made for.</li>
                        <li>More flexible figure support downloader.</li>
                    </ul>
                </Col>
                <Col span={8}>
                    <h4>Get it now!</h4>
                    <Button type="primary" icon={<DownloadOutlined />} href="https://evilinnocence.s3.amazonaws.com/xd-updater/XD%204%20Installer.zip">
                        Download CrossDresser Clothing Converter
                    </Button>
                    <p style={{textAlign: "center", width: "100%"}}>(also installs CrossDresser 4)<br /> (requires Windows XP, Vista, or 7)</p>
                    <Button type="primary" icon={<ShoppingCartOutlined />} href="https://www.evilinnocence.com/shop/store/shop-by-category/crossdresser/morph-packs.html">
                        Purchase XD Morph Packs
                    </Button>
                    <h4>Installation Instructions</h4>
                    <ol>
                        <li>Download, unzip, and run the XD Installer application.</li>
                        <li>Choose the components and figures to install.</li>
                        <li>Purchase and install your morph packs.</li>
                        <li>Run XD Morpher and expand your clothing to morphed figures!</li>
                    </ol>
                </Col>
            </Row>
            <h2>What's new in XD Morpher 4?</h2>
            <Row>
                <Col span={12}>
                    <h3>Program Split</h3>
                    <p>CrossDresser 3 had the "Convert" tab for converting clothing between figures, and the "Add Morphs" tab for adding morphs into clothing for a particular feature. Some people found the interface confusing, and since the two tabs had completely different functions, we split them up into separate programs. Now we have the CrossDresser program for converting clothing, and the XD Morpher program for adding morphs into clothing.</p>
                </Col>
                <Col span={12}>
                    <h3>Faster Processing</h3>
                    <p>You no longer have to stare at a frozen interface for half an hour wondering whether your job is actually running. The core algorithms have been completely re-written from the ground up to run much faster. Jobs that used to take a half an hour or more now finish in minutes! The user interface also remains unfrozen, so you can setup and start another job while the previous one is still running. The jobs run simultaneously, and continually update their status in the queue window so you don't have to wonder whether they're working.</p>
                </Col>
                <Col span={12}>
                    <h3>Rigid Groups</h3>
                    <p>Even with the new smoother morphs, some clothing elements such as buttons, snaps, or zippers don't look good with any sort of distortion. They end up looking squashed or stretched. To fix this issue, XD Morpher now allows you to specify materials that should be morphed rigidly without any distortion at all. Once specified, these elements will keep their shapes perfectly through a conversion, and come out the other side completely undistorted!</p>
                </Col>
                <Col span={12}>
                    <h3>More Flexible Figure Support Installer</h3>
                    <p>There is no longer any need to download an entire support pack when you just want one figure in it. CrossDresser 4.0 comes with a more flexible figure support updater that allows you to download only the figure you want. The updater will show you which figures are new, which figures have been updated, and which figures you have not installed yet. The updater is also smart enough to only download the files that have changed, so you don't waste your internet bandwidth.</p>
                </Col>
                <Col span={12}>
                    <h3>Many More Features</h3>
                    <ul>
                        <li>Automatically guess which figure a clothing was made for.</li>
                        <li>Handles more file types, including compressed Poser files.</li>
                        <li>No more need to manually specify Runtime directories.</li>
                        <li>Not more saved influences to take up space.</li>
                        <li>And more...</li>
                    </ul>
                </Col>
            </Row>
        </div>
    </div>
);
