import { sitePlugins } from "@common/index";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';

export const HomePageComponent = ({}:HomePageProps) =>
    <div className={styles.homepage}>
        {sitePlugins.homepage.render({})}
    </div>;
