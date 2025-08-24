import { BannerList } from "@common/components/BannerList";
import { NewProducts } from "@store/components/NewProducts";
import { Col, Row } from "antd";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';

export const HomePageComponent = ({}:HomePageProps) =>
    <Row className={styles.homepage} gutter={16}>
        <BannerList tag="homepageLarge" columns={2} />
        <BannerList tag="homepageSmall" columns={3} />

        <Col xs={24}>
            <NewProducts />
        </Col>
    </Row>;
