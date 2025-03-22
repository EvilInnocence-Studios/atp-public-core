import { Banner } from "@common/components/Banner";
import { NewProducts } from "@store/components/NewProducts";
import { Col, Row, Spin } from "antd";
import { objMap, pipe, /*prop, sort*/ } from "ts-functional";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';
import { IBanner } from "@common-shared/banner/types";
import { Index } from "ts-functional/dist/types";
import { Fader } from "@core/components/Fader";

// const sortBanners = sort.by(prop<any, any>("order")).asc;

// Group banners by order value
const groupBanners = (banners: IBanner[]):Index<IBanner[]> => banners.reduce(
    (acc:Index<IBanner[]>, banner:IBanner) => {
        const key = `${banner.order}`;
        return {...acc, [key]: [...acc[key] || [], banner]};
    },
    {}
);

const renderBanners = (lg:number) => (banners:IBanner[], order:string) => <Col lg={lg} xs={24} key={order} className={styles.hero}>
    <Fader interval={5}>
        {banners.map(banner => <Banner key={banner.id} banner={banner} />)}
    </Fader>
</Col>;

const valuesByOrder = (elements:Index<JSX.Element>) => Object.keys(elements).sort().map(key => elements[key]);

const mapBanners = (lg:number) => pipe(groupBanners, objMap(renderBanners(lg)), valuesByOrder);

export const HomePageComponent = ({largeBanners, smallBanners, isLoading}:HomePageProps) =>
    <Spin spinning={isLoading}>
        <Row className={styles.homepage} gutter={16}>
            {mapBanners(12)(largeBanners)}
            {mapBanners(8)(smallBanners)}

            <Col xs={24}>
                <NewProducts />
            </Col>
        </Row>
    </Spin>;
