import { useSetting } from "@common/lib/setting/services";
import { overridable } from "@core/lib/overridable";
import { useLocation } from "react-router";
import { createInjector, inject, mergeProps } from "unstateless";
import { HeaderComponent } from "./Header.component";
import { HeaderProps, IHeaderInputProps, IHeaderProps } from "./Header.d";

const injectHeaderProps = createInjector(({}:IHeaderInputProps):IHeaderProps => {
    const showTopMenu   = useSetting("layout.header.showTopMenu"  ) === "true";
    const showBrandLink = useSetting("layout.header.showBrandLink") === "true";
    const showShopLink  = useSetting("layout.header.showShopLink" ) === "true";

    const showFirstColumn = showBrandLink || showShopLink;

    // Only show the store menu on store-related routes
    const route = useLocation().pathname;
    const isStoreRoute = route.startsWith("/products") || route.startsWith("/cart") || route.startsWith("/my-account");
    const showStoreMenu = useSetting("layout.header.showStoreMenu") === "true" && isStoreRoute;

    return {showStoreMenu, showTopMenu, showFirstColumn};
});

const connect = inject<IHeaderInputProps, HeaderProps>(mergeProps(
    injectHeaderProps,
));

export const Header = overridable<IHeaderInputProps>(connect(HeaderComponent));
