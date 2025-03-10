import { config } from "@config";
import { faBluesky, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "react-router";
import { SocialLinksProps } from "./SocialLinks.d";
import styles from './SocialLinks.module.scss';

export const SocialLinksComponent = ({multiline, showLogo, showShopLink, showSocialLinks}:SocialLinksProps) =>
    <div className={clsx([styles.socialLinks])}>
        <Link to="/">
            {showLogo && <img src="/logo.png" />}
            EvilInnocence
        </Link>
        {multiline && <br />}
        {showSocialLinks && <>
            <a href={`https://www.facebook.com/${config().social.facebook}`} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href={`https://twitter.com/${config().social.twitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={`https://bsky.app/profile/${config().social.blueSky}`} target="_blank"><FontAwesomeIcon icon={faBluesky} /></a>
            <a href={`https://www.instagram.com/${config().social.instagram}`} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </>}
        {showShopLink && <span className={styles.shopLink}>
            <Link to="/products">Shop</Link>
        </span>}
    </div>;
