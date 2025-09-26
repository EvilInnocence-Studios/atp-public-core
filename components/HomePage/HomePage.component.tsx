import { sitePlugins } from "@public/index";
import { Row } from "antd";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';

export const HomePageComponent = ({}:HomePageProps) =>
    <Row className={styles.homepage} gutter={16}>
        {sitePlugins.homepage.render({})}
    </Row>;
