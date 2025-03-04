import { onInputChange } from "@core/lib/onInputChange";
import { CartBtn } from "@store/components/CartBtn";
import { AccountMenu } from "@uac/components/AccountMenu";
import { Input } from "antd";
import { SocialLinks } from "../SocialLinks";
import { HeaderProps } from "./Header.d";
import styles from './Header.module.scss';

export const HeaderComponent = ({query, setQuery, runSearch}:HeaderProps) =>
    <div className={styles.pageHeader}>
        <SocialLinks showLogoWhenSmall showShopLink/>
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
