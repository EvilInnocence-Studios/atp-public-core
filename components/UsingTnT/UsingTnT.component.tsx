import { YouTube } from "@core/components/YouTube";
import {UsingTnTProps} from "./UsingTnT.d";
import styles from './UsingTnT.module.scss';

export const UsingTnTComponent = ({}:UsingTnTProps) =>
    <div className={styles.cmsPage}>
        <h1>Using TnT</h1>
        <YouTube videoId="myDyfUqfs34" />
    </div>;
