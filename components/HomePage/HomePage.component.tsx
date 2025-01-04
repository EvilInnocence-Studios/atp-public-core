import { Col, Row } from "antd";
import {HomePageProps} from "./HomePage.d";
import styles from './HomePage.module.scss';
import { ProductList } from "@store/components/ProductList";
import { NewProducts } from "@store/components/NewProducts";

export const HomePageComponent = ({}:HomePageProps) =>
    <Row className={styles.homepage} gutter={16}>
        <Col lg={12} sm={24} className={styles.hero}>
            <img src="https://picsum.photos/1024/512" />
        </Col>
        <Col lg={12} sm={24} className={styles.hero}>
            <img src="https://picsum.photos/1024/512" />
        </Col>
        <Col lg={8} sm={24} className={styles.hero}>
            <img src="https://picsum.photos/1024/512" />
        </Col>
        <Col lg={8} sm={12} className={styles.hero}>
            <img src="https://picsum.photos/1024/512" />
        </Col>
        <Col lg={8} sm={12} className={styles.hero}>
            <img src="https://picsum.photos/1024/512" />
        </Col>
        <Col xs={24}>
            <NewProducts />
        </Col>
    </Row>;
