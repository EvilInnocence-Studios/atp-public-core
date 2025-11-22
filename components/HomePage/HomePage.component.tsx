import { sitePlugins } from "@common/index";
import { HomePageProps } from "./HomePage.d";
import styles from './HomePage.module.scss';
import { overridable } from "@core/lib/overridable";

export const HomePageComponent = overridable(({ classes = styles }: HomePageProps) =>
    <div className={classes.homepage}>
        {sitePlugins.homepage.render({})}
    </div>
);
