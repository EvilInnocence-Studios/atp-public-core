import { Banner } from "@common/components/Banner";
import { HeaderBannerProps } from "./HeaderBanner.d";
import styles from './HeaderBanner.module.scss';
import { overridable } from "@core/lib/overridable";

export const HeaderBannerComponent = overridable(({ banner, classes = styles }: HeaderBannerProps) => <>
    {banner && <div className={classes.banner}>
        <Banner className={classes.headerBanner} banner={banner} />
    </div>}
</>);

