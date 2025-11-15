import { Banner } from "@common/components/Banner";
import { HeaderBannerProps } from "./HeaderBanner.d";
import styles from './HeaderBanner.module.scss';
import { overridable } from "@core/lib/overridable";

export const HeaderBannerComponent = overridable(({banner}:HeaderBannerProps) => <>
    {banner && <div className={styles.banner}>
        <Banner className={styles.headerBanner} banner={banner} />
    </div>}
</>);

