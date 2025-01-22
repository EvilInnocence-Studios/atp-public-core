import { createInjector, inject, mergeProps } from "unstateless";
import {AboutUsComponent} from "./AboutUs.component";
import {IAboutUsInputProps, AboutUsProps, IAboutUsProps} from "./AboutUs.d";

const injectAboutUsProps = createInjector(({}:IAboutUsInputProps):IAboutUsProps => {
    return {};
});

const connect = inject<IAboutUsInputProps, AboutUsProps>(mergeProps(
    injectAboutUsProps,
));

export const AboutUs = connect(AboutUsComponent);
