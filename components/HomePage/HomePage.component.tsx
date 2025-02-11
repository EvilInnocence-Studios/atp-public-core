import { Banner } from "@common/components/Banner";
import { NewProducts } from "@store/components/NewProducts";
import { Col, Row, Spin } from "antd";
import { prop, sort } from "ts-functional";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';

const sortBanners = sort.by(prop<any, any>("order")).asc;

export const HomePageComponent = ({largeBanners, smallBanners, isLoading}:HomePageProps) =>
    <Spin spinning={isLoading}>
            <Row className={styles.homepage} gutter={16}>
            {largeBanners.sort(sortBanners).map(banner => <Col lg={12} sm={24} key={banner.id} className={styles.hero}>
                <Banner banner={banner} />
            </Col>)}
            {smallBanners.sort(sortBanners).map(banner => <Col lg={8} sm={24} key={banner.id} className={styles.hero}>
                <Banner banner={banner} />
            </Col>)}
            <Col xs={24}>
                <NewProducts />
            </Col>
        </Row>
    </Spin>;
