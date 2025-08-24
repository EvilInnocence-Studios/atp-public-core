import { useSetting } from "@common/lib/setting/services";
import usePageTracking from "@core/lib/usePageTracking";
import { useScript } from "@core/lib/useScript";
import { useLoginForm } from "@uac/lib/useLoginForm";
import { createInjector, inject, mergeProps } from "unstateless";
import { LayoutComponent } from "./Layout.component";
import { ILayoutInputProps, ILayoutProps, LayoutProps } from "./Layout.d";

const injectLayoutProps = createInjector(({}:ILayoutInputProps):ILayoutProps => {
    const mailchimpScript = useSetting("mailchimpPopupScript");
    useScript(mailchimpScript);

    const loginModal = useLoginForm();

    usePageTracking();
    return {loginModal};
});

const connect = inject<ILayoutInputProps, LayoutProps>(mergeProps(
    injectLayoutProps,
));

export const Layout = connect(LayoutComponent);
