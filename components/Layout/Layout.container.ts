import { createInjector, inject, mergeProps } from "unstateless";
import {LayoutComponent} from "./Layout.component";
import {ILayoutInputProps, LayoutProps, ILayoutProps} from "./Layout.d";
import usePageTracking from "@core/lib/usePageTracking";
import { useLoginForm } from "@uac/lib/useLoginForm";

const injectLayoutProps = createInjector(({}:ILayoutInputProps):ILayoutProps => {
    const loginModal = useLoginForm();

    usePageTracking();
    return {loginModal};
});

const connect = inject<ILayoutInputProps, LayoutProps>(mergeProps(
    injectLayoutProps,
));

export const Layout = connect(LayoutComponent);
