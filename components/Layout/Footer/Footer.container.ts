import { createInjector, inject, mergeProps } from "unstateless";
import { FooterComponent } from "./Footer.component";
import { FooterProps, IFooterInputProps, IFooterProps } from "./Footer.d";

const injectFooterProps = createInjector(({}:IFooterInputProps):IFooterProps => {
    return {};
});

const connect = inject<IFooterInputProps, FooterProps>(mergeProps(
    injectFooterProps,
));

export const Footer = connect(FooterComponent);
