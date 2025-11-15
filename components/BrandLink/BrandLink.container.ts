import { useSetting } from "@common/lib/setting/services";
import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { BrandLinkComponent } from "./BrandLink.component";
import { BrandLinkProps, IBrandLinkInputProps, IBrandLinkProps } from "./BrandLink.d";

const injectBrandLinkProps = createInjector(({}:IBrandLinkInputProps):IBrandLinkProps => {
    const showBrandLink = useSetting("layout.header.showBrandLink") === "true";

    return {showBrandLink};
});

const connect = inject<IBrandLinkInputProps, BrandLinkProps>(mergeProps(
    injectBrandLinkProps,
));
export const connectBrandLink = connect;

export const BrandLink = overridable<IBrandLinkInputProps>(connect(BrandLinkComponent));
