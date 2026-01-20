import { overridable } from "@core/lib/overridable";
import {HomepageProps} from "./Homepage.d";
import styles from './Homepage.module.scss';
import { Layout } from "@theming/components/Layout";

export const HomepageComponent = overridable(({classes = styles}:HomepageProps) =>
    <Layout element="homepage"/>
);
