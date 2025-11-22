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
import { overridable } from "@core/lib/overridable";

export const HeaderComponent = overridable(({ showStoreMenu, showTopMenu, showFirstColumn, classes = styles }: HeaderProps) => <div className={classes.header}>
    <HeaderBanner />
    {showTopMenu && <LinkList id="top" className={classes.topMenu} />}
    {showStoreMenu && <Row className={classes.pageHeader}>
        {showFirstColumn && <Col xs={24} lg={9} className={classes.links}>
            <BrandLink />
            &nbsp;
            <ShopLink />
        </Col>}
        <Col xs={16} lg={{ span: 6, push: showFirstColumn ? 0 : 9 }} className={classes.search}>
            <ProductSearchInput />
        </Col>
        <Col xs={8} lg={{ span: 9, push: showFirstColumn ? 0 : 9 }} className={classes.account}>
            <AccountMenu />
            <CartBtn />
        </Col>
    </Row>}
</div>);
