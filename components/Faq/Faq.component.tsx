import { Link } from "react-router";
import {FaqProps} from "./Faq.d";
import styles from './Faq.module.scss';

export const FaqComponent = ({}:FaqProps) =>
    <div className={styles.faq}>
        <h1>Frequently Asked Questions</h1>

        <h3>How do I purchase items from the store?</h3>
        <p>Browse our <Link to="/products">store catalog</Link>, and add items to your shopping cart. If an item's cart button says "Brokered at", then it is only sold at another website, and clicking on its button will take you to that website to complete your purchase. If an item's price says "Backstage Pass Exclusive," then you need a <Link to="/backstage-pass">Backstage Pass Subscription</Link> to download that item. Once you have added all the items you want to your shopping cart, click on the PayPal button to complete your purchase. Once your order is complete, you will get an email with your order information. The items will be available in your account on the <Link to="/my-account/orders">orders</Link> or <Link to="/my-account">files</Link> tab.</p>

        <h3>Do I have to have a PayPal account to purchase?</h3>
        <p>No, we also accept credit cards directly on our website.</p>

        <h3>Can I pay with another payment method, like a check?</h3>
        <p>Yes you can. Please <Link to="/contacts">contact us</Link> and we'll work with you to complete your purchase.</p>

        <h3>Is the website secure?</h3>
        <p>Yes, our site uses SSL security for all login, account, and checkout pages. In addition, all payments are processed directly through PayPal, so your financial information is not stored on our server at any time.</p>

        <h3>What do I do if I accidentally purchase an item twice?</h3>
        <p>If you make a duplicate purchase, please <Link to="/contacts">contact us</Link> and we will give you a refund or exchange.</p>

        <h3>What if I have problems downloading my items?</h3>
        <p>Please <Link to="/contacts">contact us</Link> with the name of the item you are having trouble downloading, and we'll fix the problem as soon as we can.</p>

        <h3>What if an item is broken, or isn't working for me?</h3>
        <p>If you are having problems with a product, <Link to="/contacts">contact us</Link> with the details. If we can't fix the problem, we'll refund your money.</p>
    </div>
