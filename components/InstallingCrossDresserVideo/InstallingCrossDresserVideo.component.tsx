import { YouTube } from "@core/components/YouTube";
import {InstallingCrossDresserVideoProps} from "./InstallingCrossDresserVideo.d";
import styles from './InstallingCrossDresserVideo.module.scss';

export const InstallingCrossDresserVideoComponent = ({}:InstallingCrossDresserVideoProps) =>
    <div className={styles.cmsPage}>
        <h1>Installing XD Video</h1>
        <YouTube videoId="ue3TDD0E7SI" />
    </div>;
