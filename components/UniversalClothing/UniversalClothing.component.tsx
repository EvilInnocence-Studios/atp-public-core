import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { UniversalClothingProps } from "./UniversalClothing.d";
import styles from './UniversalClothing.module.scss';
import banner from "./bannerUNV.jpg";

export const UniversalClothingComponent = ({}: UniversalClothingProps) => (
    <div className={styles.cmsPage}>
        <h1>Universal Clothing</h1>
        <div className="cms-page-content">
            <div className="xd-banner">
                <a href="http://www.evilinnocence.com/shop/free-stuff/clothing/universal-clothing.html">
                    <img src={banner} alt="XD Universal Clothing" />
                </a>
            </div>
            <h2>Universal Clothing for Poser and DAZ Studio</h2>
            <h3>An XD Plugin</h3>
            <Row>
                <Col span={8}>
                    <h4>What is Universal Clothing?</h4>
                    <p>The Universal Clothing plugins for Poser and DAZ Studio provide a new hassle-free way to use any clothing on any figure automatically. You no longer need to think about which XD settings to use to get the best conversion, because the plugin takes care of that for you. Just load a Universal Clothing directly from your content library like you would any other clothing item. The Universal Clothing plugin will convert the clothing automatically and then load it into your scene already conformed to your character. It couldn't be any simpler!</p>
                </Col>
                <Col span={8}>
                    <h4>Major Features</h4>
                    <ul>
                        <li>Over 160 supported figures!</li>
                        <li>Automatically use any clothing on any supported figures directly in Poser or DAZ Studio.</li>
                        <li>Works just like a regular clothing.</li>
                        <li>High quality conversions with very little distortion or jagginess.</li>
                        <li>Supports weight-mapped figures as well as regular figures.</li>
                        <li>Easily create universal "upgrades" for any existing clothing right from XD.</li>
                        <li>Ability to tweak universal clothing for particular figures for more perfect fits.</li>
                        <li>Share your Universal Clothing upgrades with other artists.</li>
                    </ul>
                </Col>
                <Col span={8}>
                    <h4>Get it now!</h4>
                    <p>Download whichever plugin is appropriate for your system</p>
                    <ul className="plugin-links">
                        <li><a href="http://evilinnocence.s3.amazonaws.com/xd-updater/Universal%20Clothing%20Plugin%20-%20Poser.zip">Poser Plugin</a></li>
                        <li><a href="http://evilinnocence.s3.amazonaws.com/xd-updater/Universal%20Clothing%20Plugin%20-%20DS%20(32%20bit).zip">DAZ Studio Plugin (32-bit)</a></li>
                        <li><a href="http://evilinnocence.s3.amazonaws.com/xd-updater/Universal%20Clothing%20Plugin%20-%20DS%20(64%20bit).zip">DAZ Studio Plugin (64-bit)</a></li>
                    </ul>
                    <Button type="primary" size="large" icon={<DownloadOutlined />} href="https://evilinnocence.s3.amazonaws.com/xd-updater/XD%204%20Installer.zip">
                        Download Support Files
                    </Button>
                    <p style={{ textAlign: 'center', width: "100%" }}></p>
                    <h4>Installation Instructions</h4>
                    <ol>
                        <li>Download and install XD.</li>
                        <li>Purchase or download free XD figure licenses.</li>
                        <li>Install the Universal Clothing plugin (links above).</li>
                        <li>Download and install Universal Clothing.</li>
                    </ol>
                </Col>
            </Row>
            <h2>More Information about Universal Clothing</h2>
            <Row>
                <Col span={12}>
                    <h3>Automatic figure detection and conversion</h3>
                    <p>Even though XD was a breeze to use, the Universal Clothing plugin makes the process even easier. All you need to do is load a Universal Clothing from your Poser or DAZ Studio content library. The plugin will automatically detect which figure you have selected, then run a hands-free conversion to that figure. Then, the plugin will load the newly converted clothing into your scene, and automatically conform it to your figure. Also, the conversion only needs to happen once per figure. The next time you load the Universal Clothing to that figure, it will load just as fast as a normal clothing.</p>
                </Col>
                <Col span={12}>
                    <h3>High Quality Conversions</h3>
                    <p>The Universal Clothing plugins use XD technology, so you'll get the same high quality conversions. Not only is the XD 4.0 conversion algorithm faster than previous versions, but higher quality as well. Gone are the jagged edges and mangled details. Finely crafted details that used to get destroyed now come through the conversion perfectly. The new algorithm is uniformly smooth, even for gloves, long dresses, and other complex clothing. The new algorithm is also so fast that there is no need to trade speed for quality any more. Most times, a raw conversion will be good enough to use with only a few poke-through tweaks.</p>
                </Col>
                <Col span={12}>
                    <h3>Weight-Mapped Figure Support</h3>
                    <p>In addition to regular figures, the Universal Clothing plugin also supports Poser's weight-mapped figures. You can convert all of your normal clothing to weight-mapped figures such as Antonia Polygon or the Weight-Mapped version of Vicky 4. When converting clothing to weight-mapped figures, XD will automatically create the appropriate weight-maps in the converted clothing so it will conform correctly to the weight-mapped figure.</p>
                </Col>
                <Col span={12}>
                    <h3>Easily Universalize Any Existing Clothing</h3>
                    <p>Have a favorite clothing that isn't Universal? You don't have to wait for the creator to universalize it. You can do it yourself. Just set up a normal conversion for the clothing in XD, then use the new Universal Clothing Exporter to upgrade it to a Universal Clothing. There's no mucking about in convoluted Poser, Python, or Dazscript files. The Exporter takes care of everything for you.</p>
                </Col>
            </Row>
        </div>
    </div>
);
