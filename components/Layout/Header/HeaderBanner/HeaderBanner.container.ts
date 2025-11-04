import { IBanner } from "@common-shared/banner/types";
import { useSetting } from "@common/lib/setting/services";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { HeaderBannerComponent } from "./HeaderBanner.component";
import { HeaderBannerProps, IHeaderBannerInputProps, IHeaderBannerProps } from "./HeaderBanner.d";

const injectHeaderBannerProps = createInjector(({}:IHeaderBannerInputProps):IHeaderBannerProps => {
    const bannerId          = useSetting("layout.header.topBanner");
    const [banner, setBanner] = useState<IBanner | null>(null);

    useEffect(() => {
        if(bannerId) {
            services().banner.get(bannerId).then(setBanner).catch(() => setBanner(null));
        } else {
            setBanner(null);
        }
    }, [bannerId])

    return {banner};
});

const connect = inject<IHeaderBannerInputProps, HeaderBannerProps>(mergeProps(
    injectHeaderBannerProps,
));

export const HeaderBanner = overridable<IHeaderBannerInputProps>(connect(HeaderBannerComponent));
