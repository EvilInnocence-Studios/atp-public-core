import { sitePlugins } from "@common/index";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';
import { overridable } from "@core/lib/overridable";

export const HomePageComponent = overridable(({}:HomePageProps) =>
    <div className={styles.homepage}>
        {sitePlugins.homepage.render({})}
    </div>
);
