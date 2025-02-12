import { createInjector, inject, mergeProps } from "unstateless";
import {SocialLinksComponent} from "./SocialLinks.component";
import {ISocialLinksInputProps, SocialLinksProps, ISocialLinksProps} from "./SocialLinks.d";

const injectSocialLinksProps = createInjector(({}:ISocialLinksInputProps):ISocialLinksProps => {
    return {};
});

const connect = inject<ISocialLinksInputProps, SocialLinksProps>(mergeProps(
    injectSocialLinksProps,
));

export const SocialLinks = connect(SocialLinksComponent);
