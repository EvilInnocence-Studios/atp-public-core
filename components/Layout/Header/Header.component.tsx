import { LinkList } from "@common/components/LinkList";
import { BrandLink } from "@public/components/BrandLink";
import { CartBtn } from "@store/components/CartBtn";
import { ProductSearchInput } from "@store/components/ProductSearchInput";
import { ShopLink } from "@store/components/ShopLink";
import { AccountMenu } from "@uac/components/AccountMenu";
import { HeaderProps } from "./Header.d";
import styles from './Header.module.scss';
import { HeaderBanner } from "./HeaderBanner";
import { Col, Row } from "antd";

export const HeaderComponent = ({showStoreMenu, showTopMenu, showFirstColumn }:HeaderProps) => <div className={styles.header}>
    <HeaderBanner />
    {showTopMenu && <LinkList id="top" className={styles.topMenu} />}
    {showStoreMenu && <Row className={styles.pageHeader}>
        {showFirstColumn && <Col xs={24} lg={9} className={styles.links}>
            <BrandLink />
            &nbsp;
            <ShopLink />
        </Col>}
        <Col xs={16} lg={{span: 6, push: showFirstColumn ? 0 : 9}} className={styles.search}>
            <ProductSearchInput />
        </Col>
        <Col xs={8} lg={{span: 9, push: showFirstColumn ? 0 : 9}} className={styles.account}>
            <AccountMenu />
            <CartBtn />
        </Col>
    </Row>}
</div>;
