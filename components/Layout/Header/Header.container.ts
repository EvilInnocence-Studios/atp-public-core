import { IBanner } from "@common-shared/banner/types";
import { useSetting } from "@common/lib/setting/services";
import { services } from "@core/lib/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { createInjector, inject, mergeProps } from "unstateless";
import { HeaderComponent } from "./Header.component";
import { HeaderProps, IHeaderInputProps, IHeaderProps } from "./Header.d";

const injectHeaderProps = createInjector(({}:IHeaderInputProps):IHeaderProps => {
    const showBrandLink = useSetting("layout.header.showBrandLink") === "true";
    const showShopLink  = useSetting("layout.header.showShopLink" ) === "true";
    const showTopMenu   = useSetting("layout.header.showTopMenu"  ) === "true";

    // Only show the store menu on store-related routes
    const route = useLocation().pathname;
    const isStoreRoute = route.startsWith("/products") || route.startsWith("/cart") || route.startsWith("/my-account");
    const showStoreMenu = useSetting("layout.header.showStoreMenu") === "true" && isStoreRoute;

    const bannerId          = useSetting("layout.header.topBanner");
    const [banner, setBanner] = useState<IBanner | null>(null);

    useEffect(() => {
        if(bannerId) {
            services().banner.get(bannerId).then(setBanner).catch(() => setBanner(null));
        } else {
            setBanner(null);
        }
    }, [bannerId])

    return {showBrandLink, showShopLink, showStoreMenu, showTopMenu, banner};
});

const connect = inject<IHeaderInputProps, HeaderProps>(mergeProps(
    injectHeaderProps,
));

export const Header = connect(HeaderComponent);
