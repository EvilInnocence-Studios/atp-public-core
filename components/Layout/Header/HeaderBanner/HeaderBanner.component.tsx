import { Banner } from "@common/components/Banner";
import { HeaderBannerProps } from "./HeaderBanner.d";
import styles from './HeaderBanner.module.scss';

export const HeaderBannerComponent = ({banner}:HeaderBannerProps) => <>
    {banner && <div className={styles.banner}>
        <Banner className={styles.headerBanner} banner={banner} />
    </div>}
</>;

