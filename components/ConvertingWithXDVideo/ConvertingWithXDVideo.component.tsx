import { YouTube } from "@core/components/YouTube";
import {ConvertingWithXDVideoProps} from "./ConvertingWithXDVideo.d";
import styles from './ConvertingWithXDVideo.module.scss';

export const ConvertingWithXDVideoComponent = ({}:ConvertingWithXDVideoProps) =>
    <div className={styles.cmsPage}>
        <h1>Converting with CrossDresser Video</h1>
        <YouTube videoId="7m2PPkJg2Yc" />
    </div>;
