import { createInjector, inject, mergeProps } from "unstateless";
import {LayoutComponent} from "./Layout.component";
import {ILayoutInputProps, LayoutProps, ILayoutProps} from "./Layout.d";
import usePageTracking from "@core/lib/usePageTracking";

const injectLayoutProps = createInjector(({}:ILayoutInputProps):ILayoutProps => {
    usePageTracking();
    return {};
});

const connect = inject<ILayoutInputProps, LayoutProps>(mergeProps(
    injectLayoutProps,
));

export const Layout = connect(LayoutComponent);
