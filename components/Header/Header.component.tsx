import { config } from "@config";
import { faBluesky, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AccountMenu } from "@uac/components/AccountMenu";
import { Input } from "antd";
import { HeaderProps } from "./Header.d";
import styles from './Header.module.scss';
import { Link } from "react-router-dom";
import { onInputChange } from "@core/lib/onInputChange";
import { CartBtn } from "@store/components/CartBtn";

export const HeaderComponent = ({search, setSearch, runSearch}:HeaderProps) =>
    <div className={styles.pageHeader}>
        <div className={styles.socialLinks}>
            <Link to="/">EvilInnocence</Link>
            <a href={`https://twitter.com/${config().social.twitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={`https://bsky.app/profile/${config().social.blueSky}`} target="_blank"><FontAwesomeIcon icon={faBluesky} /></a>
            <a href={`https://www.instagram.com/${config().social.instagram}`} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className={styles.cart}>
            <CartBtn />
        </div>
        <div className={styles.account}>
            <AccountMenu />
        </div>
        <div className={styles.search}>
            <Input.Search
                value={search}
                placeholder="Search"
                onChange={onInputChange(setSearch)}
                onSearch={runSearch}
            />
        </div>
    </div>;
