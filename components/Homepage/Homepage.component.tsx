import { overridable } from "@core/lib/overridable";
import { Layout } from "@theming/components/Layout";
import { HomepageProps } from "./Homepage.d";

export const HomepageComponent = overridable(({}:HomepageProps) =>
    <Layout element="homepage"/>
);
