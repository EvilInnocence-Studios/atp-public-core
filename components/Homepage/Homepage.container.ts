import { createInjector, inject, mergeProps } from "unstateless";
import {HomepageComponent} from "./Homepage.component";
import {IHomepageInputProps, HomepageProps, IHomepageProps} from "./Homepage.d";
import { overridable } from "@core/lib/overridable";

const injectHomepageProps = createInjector(({}:IHomepageInputProps):IHomepageProps => {
    return {};
});

const connect = inject<IHomepageInputProps, HomepageProps>(mergeProps(
    injectHomepageProps,
));
export const connectHomepage = connect;

export const Homepage = overridable<IHomepageInputProps>(connect(HomepageComponent));
