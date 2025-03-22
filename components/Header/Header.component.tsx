import { onInputChange } from "@core/lib/onInputChange";
import { CartBtn } from "@store/components/CartBtn";
import { AccountMenu } from "@uac/components/AccountMenu";
import { Input } from "antd";
import { Link } from "react-router";
import { HeaderProps } from "./Header.d";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

export const HeaderComponent = ({query, setQuery, runSearch}:HeaderProps) =>
    <div className={styles.pageHeader}>
        <Link to="/" className={styles.homepageLink}>
            <img src="/logo.png" />
            <span>EvilInnocence</span>
        </Link>
        <span className={styles.shopLink}>
            <Link to="/products">
                <FontAwesomeIcon icon={faShop} />
                <span>Shop</span>
            </Link>
        </span>
        <div className={styles.search}>
            <Input.Search
                value={query}
                placeholder="Search products"
                onChange={onInputChange(setQuery)}
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
