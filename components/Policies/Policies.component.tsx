import { Link } from "react-router";
import {PoliciesProps} from "./Policies.d";
import styles from './Policies.module.scss';

export const PoliciesComponent = ({}:PoliciesProps) =>
    <div className={styles.policies}>
        <h1>Policies and Procedures</h1>

        <h3>Privacy Policy</h3>

        <p>We use the following third-party services on this website and in our mobile games:</p>

        <ul>
            <li><a href="http://www.paypal.com/">PayPal</a></li>
            <li><a href="http://www.google.com/analytics/">Google Analytics</a></li>
            <li><a href="http://mailchimp.com/">Mailchimp</a></li>
            <li><a href="https://unityads.unity3d.com/">Unity Ads</a></li>
        </ul>

        <p>Any personal information that you submit to us is only used for purchasing products through our website, sending you our newsletter, or collecting aggregate traffic data. We value your privacy, and will not share your account information with any other third-parties, for any reason.</p>

        <h3>Secure Transactions</h3>

        <p>Our site uses SSL security for all login, account, and checkout pages. In addition, all payments are processed directly through PayPal, so your financial information is not stored on our server at any time.</p>

        <h3>Brokered Products</h3>

        <p>Many of our products are brokered at other sites such as <a href="http://www.daz3d.com/" target="blank">DAZ 3D</a>. Any sales, coupons, or discounts we offer at EvilInnocence.com only apply to products sold here, and not to products sold at other sites.</p>

        <h3>Program Compatibility</h3>

        <p>You can find program compatibility information on the product information page and/or in the product Readme. If you can't find this info, please ask(before purchasing if possible).</p>

        <p>Currently most products are designed to work with Poser 7 and above. Some products (particularly clothing for weight-mapped figures) are designed to work in Poser 9+. DO NOT assume the product will work in DAZ Studio just because it works in Poser. We do not currently test in DAZ Studio. Most products can be made to work in DAZ Studio with a small amount of tweaking but not all can be, especially products designed for Poser 9+. If you need to know whether a specific product will work in DAZ Studio, please ask.</p>

        <h3>Refunds</h3>

        <ul>
            <li>On Products: We have a 30-day no questions asked refund policy for all products purchased through our store.</li>
            <li>On Backstage Pass Subscriptions: We do not offer refunds for the Backstage Pass Subscription, but you can cancel your subscription at any time, and you will no longer be charged each month. Your subscription will remain active until the end of your currently paid subscription period.</li>
        </ul>

        <h3>Duplicate Purchases</h3>

        <p>If you make a duplicate purchase, please <Link to="/contacts">contact us</Link> and we will give you a refund or exchange.</p>

        <h3>Chargebacks</h3>

        <p>Do not initiate chargebacks for purchases made on our site. Please contact us and we will work with you to resolve your issue. If you need a refund, please <Link to="/contacts">contact us</Link> and ask. Any chargebacks made will result in a permanent ban from our website.</p>

        <h3>Account Terms of Use</h3>

        <p>Your account is for your own use only. Do not share your login information with other people. We reserve the right to remove accounts which are being abused to share downloads between multiple people.</p>

        <h3>Licensing</h3>

        <p>Please read the <Link to="/3d-content-license">3D Content License</Link> and <Link to="/software-license">Software License</Link>. By downloading our items and/or using our software, you are agreeing to understand and follow our licensing. If you have a question about the license agreement, please <Link to="/contacts">contact us</Link>.</p>
    </div>;
