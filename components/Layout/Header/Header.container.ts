import { createInjector, inject, mergeProps } from "unstateless";
import { HeaderComponent } from "./Header.component";
import { HeaderProps, IHeaderInputProps, IHeaderProps } from "./Header.d";
import { useSetting } from "@common/lib/setting/services";
import { useEffect, useState } from "react";
import { IBanner } from "@common-shared/banner/types";
import { services } from "@core/lib/api";

const injectHeaderProps = createInjector(({}:IHeaderInputProps):IHeaderProps => {
    const showBrandLink     = useSetting("layout.header.showBrandLink"    ) === "true";
    const showShopLink      = useSetting("layout.header.showShopLink"     ) === "true";
    const showProductSearch = useSetting("layout.header.showProductSearch") === "true";
    const showTopMenu       = useSetting("layout.header.showTopMenu"      ) === "true";
    const bannerId          = useSetting("layout.header.topBanner");
    const [banner, setBanner] = useState<IBanner | null>(null);

    useEffect(() => {
        if(bannerId) {
            services().banner.get(bannerId).then(setBanner).catch(() => setBanner(null));
        } else {
            setBanner(null);
        }
    }, [bannerId])

    return {showBrandLink, showShopLink, showProductSearch, showTopMenu, banner};
});

const connect = inject<IHeaderInputProps, HeaderProps>(mergeProps(
    injectHeaderProps,
));

export const Header = connect(HeaderComponent);
