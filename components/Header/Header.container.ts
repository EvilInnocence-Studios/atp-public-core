import { createInjector, inject, mergeProps } from "unstateless";
import { HeaderComponent } from "./Header.component";
import { HeaderProps, IHeaderInputProps, IHeaderProps } from "./Header.d";
import { useSetting } from "@common/lib/setting/services";

const injectHeaderProps = createInjector(({}:IHeaderInputProps):IHeaderProps => {
    const siteName = useSetting("siteName");

    return {siteName};
});

const connect = inject<IHeaderInputProps, HeaderProps>(mergeProps(
    injectHeaderProps,
));

export const Header = connect(HeaderComponent);
