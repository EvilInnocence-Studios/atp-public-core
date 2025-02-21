import { XDConverterProps } from "./XDConverter.d";
import styles from './XDConverter.module.scss';
import { Row, Col, Button } from 'antd';
import { DownloadOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import bannerXD from './bannerXD.jpg';

export const XDConverterComponent = ({}: XDConverterProps) => (
    <div className={styles.cmsPage}>
        <h1>CrossDresser Clothing Converter</h1>
        <div className="cms-page-content">
            <div className="xd-banner">
                <a href="http://www.evilinnocence.com/shop/store/shop-by-category/crossdresser/licenses.html">
                    <img src={bannerXD} alt="CrossDresser Clothing Conversion for Poser and DAZ Studio" />
                </a>
            </div>
            <h2>CrossDresser 4.0</h2>
            <h3>One-click clothing conversion for Poser and DAZ Studio</h3>
            <Row>
                <Col span={8}>
                    <h4>What is CrossDresser?</h4>
                    <p>Do you ever notice how some Poser figures have hundreds of clothing items to choose from, and others have almost none? Did you ever see an awesome clothing for one figure, and wish you could use it on a different one? Do you have runtimes full of clothing for older figures that you would like to use on newer ones? If so, then CrossDresser is the solution you need!</p>
                    <p>CrossDresser is a one-click clothing conversion utility for Poser and DAZ Studio. It quickly converts clothing from one figure to another. The conversion process finishes in seconds and is completely automatic. The final clothing is placed directly in your Runtime directory, and can be used immediately in Poser or DAZ Studio. Any poke-throughs that remain can then be quickly fixed with the built-in adjustment morphs. In most cases, you can convert a clothing to another figure, and have it working perfectly in just a few minutes!</p>
                </Col>
                <Col span={8}>
                    <h4>Major Features</h4>
                    <ul>
                        <li>Over 200 supported figures!</li>
                        <li>CrossDresser 4.0 has been completely re-written from the ground up to be faster, better, and more user friendly!</li>
                        <li>High quality conversions with very little distortion or jagginess.</li>
                        <li>Supports weight-mapped figures as well as regular figures.</li>
                        <li>Ability to convert selected elements with no distortion at all. Very useful for buttons, zippers, and other detailed decorations.</li>
                        <li>Ability to run multiple conversions simultaneously.</li>
                        <li>Automatically guesses which figure a clothing was made for.</li>
                        <li>More flexible figure support downloader.</li>
                        <li>Many options for customizing and tweaking your conversions.</li>
                    </ul>
                </Col>
                <Col span={8}>
                    <h4>Get it now!</h4>
                    <Button type="primary" size="large" icon={<DownloadOutlined />} href="https://evilinnocence.s3.amazonaws.com/xd-updater/XD%204%20Installer.zip">
                        Download XD Clothing Converter
                    </Button>
                    <p style={{ textAlign: 'center', width: "100%" }}>(also installs XD Morpher)<br /> (requires Windows XP, Vista, or 7)</p>
                    <Button type="primary" size="large" icon={<ShoppingCartOutlined />} href="https://www.evilinnocence.com/shop/store/shop-by-category/crossdresser/licenses.html">
                        Purchase XD Figure Licenses
                    </Button>
                    <h4>Installation Instructions</h4>
                    <ol>
                        <li>Download, unzip, and run the XD Installer application.</li>
                        <li>Choose the components and figures to install.</li>
                        <li>Purchase and install your figure licenses.</li>
                        <li>Run CrossDresser and expand your Runtime!</li>
                    </ol>
                </Col>
            </Row>
            <h2>What's new in CrossDresser 4?</h2>
            <Row>
                <Col span={12}>
                    <h3>Faster Conversions</h3>
                    <p>You no longer have to stare at a frozen interface for half an hour wondering whether your conversion is actually running. The CrossDresser algorithm has been completely re-written from the ground up to run much faster. Conversions that used to take half an hour now finish in seconds! The user interface also remains unfrozen, so you can setup and start another conversion while the previous one is still running. The conversions run simultaneously, and continually update their status in the queue window so you don't have to wonder whether they're working.</p>
                </Col>
                <Col span={12}>
                    <h3>Higher Quality Conversions</h3>
                    <p>Not only is the new conversion algorithm faster, but higher quality as well. Gone are the jagged edges and mangled details. Finely crafted details that used to get destroyed now come through the conversion perfectly. The new algorithm is uniformly smooth, even for gloves, long dresses, and other complex clothing. The new algorithm is also so fast that there is no need to trade speed for quality any more. Most times, a raw conversion will be good enough to use with only a few poke-through tweaks.</p>
                </Col>
                <Col span={12}>
                    <h3>Weight-Mapped Figure Support</h3>
                    <p>In addition to regular figures, CrossDresser also supports Poser 9's new weight-mapped figures. You can now convert all of your normal clothing to the new weight-mapped figures such as Antonia Polygon or the Weight-Mapped version of Vicky 4. When converting clothing to weight-mapped figures, CrossDresser will automatically create the appropriate weight-maps in the converted clothing so it will conform correctly to the weight-mapped figure.</p>
                </Col>
                <Col span={12}>
                    <h3>Rigid Groups</h3>
                    <p>Even with the new smoother conversions, some clothing elements such as buttons, snaps, or zippers don't look good with any sort of distortion. They end up looking squashed or stretched. To fix this issue, CrossDresser now allows you to specify materials that should be converted rigidly without any distortion at all. Once specified, these elements will keep their shapes perfectly through a conversion, and come out the other side completely undistorted!</p>
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
                        <li>Remove falloff zones from any bone, not just a few pre-specified bones.</li>
                        <li>Remove some bones completely from the final clothing.</li>
                        <li>No more need to manually specify Runtime directories.</li>
                        <li>Not more saved influences to take up space.</li>
                        <li>A perturb option for when clothing vertices decide to mis-behave.</li>
                        <li>And more...</li>
                    </ul>
                </Col>
            </Row>
        </div>
    </div>
);
