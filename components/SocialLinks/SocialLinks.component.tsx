import { config } from "@config";
import { faBluesky, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { SocialLinksProps } from "./SocialLinks.d";
import styles from './SocialLinks.module.scss';
import clsx from "clsx";

export const SocialLinksComponent = ({multiline, showLogoWhenSmall}:SocialLinksProps) =>
    <div className={clsx([styles.socialLinks, showLogoWhenSmall && styles.shrink])}>
        <Link to="/">EvilInnocence</Link>
        {multiline && <br />}
        <a href={`https://twitter.com/${config().social.twitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href={`https://bsky.app/profile/${config().social.blueSky}`} target="_blank"><FontAwesomeIcon icon={faBluesky} /></a>
        <a href={`https://www.instagram.com/${config().social.instagram}`} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>;
