import { YouTube } from "@core/components/YouTube";
import {UsingFairyMagicProps} from "./UsingFairyMagic.d";
import styles from './UsingFairyMagic.module.scss';

export const UsingFairyMagicComponent = ({}:UsingFairyMagicProps) =>
    <div className={styles.cmsPage}>
        <h1>Using Fairy Magic</h1>
        <YouTube videoId="m-rwT-eyp8w" />
    </div>;
