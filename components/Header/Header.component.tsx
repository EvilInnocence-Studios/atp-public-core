import { config } from "@config";
import { onInputChange } from "@core/lib/onInputChange";
import { faBluesky, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartBtn } from "@store/components/CartBtn";
import { AccountMenu } from "@uac/components/AccountMenu";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { HeaderProps } from "./Header.d";
import styles from './Header.module.scss';

export const HeaderComponent = ({search, setSearch, runSearch}:HeaderProps) =>
    <div className={styles.pageHeader}>
        <div className={styles.socialLinks}>
            <Link to="/">EvilInnocence</Link>
            <a href={`https://twitter.com/${config().social.twitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={`https://bsky.app/profile/${config().social.blueSky}`} target="_blank"><FontAwesomeIcon icon={faBluesky} /></a>
            <a href={`https://www.instagram.com/${config().social.instagram}`} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className={styles.search}>
            <Input.Search
                value={search}
                placeholder="Search products"
                onChange={onInputChange(setSearch)}
                onSearch={runSearch}
            />
        </div>
        <div className={styles.account}>
            <AccountMenu />
        </div>
        <div className={styles.cart}>
            <CartBtn />
        </div>
    </div>;
