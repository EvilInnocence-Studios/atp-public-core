import { Banner } from "@common/components/Banner";
import { LinkList } from "@common/components/LinkList";
import { Setting } from "@common/components/Setting";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartBtn } from "@store/components/CartBtn";
import { ProductSearchInput } from "@store/components/ProductSearchInput";
import { AccountMenu } from "@uac/components/AccountMenu";
import { Link } from "react-router";
import { HeaderProps } from "./Header.d";
import styles from './Header.module.scss';

export const HeaderComponent = ({showBrandLink, showShopLink, showStoreMenu, showTopMenu, banner}:HeaderProps) => <div className={styles.header}>
    {banner && <div className={styles.banner}>
        <Banner className={styles.headerBanner} banner={banner} />
    </div>}
    {showTopMenu && <LinkList id="top" className={styles.topMenu} />}
    {showStoreMenu && <div className={styles.pageHeader}>
        <Link to="/" className={styles.homepageLink}>
            {showBrandLink && <span><Setting id="siteName" /></span>}
        </Link>
        {showShopLink && <span className={styles.shopLink}>
            <Link to="/products">
                <FontAwesomeIcon icon={faShop} />
                <span>Shop</span>
            </Link>
        </span>}
        <div className={styles.search}>
            <ProductSearchInput />
        </div>
        <div className={styles.account}>
            <AccountMenu />
        </div>
        <div className={styles.cart}>
            <CartBtn />
        </div>
    </div>}
</div>;
