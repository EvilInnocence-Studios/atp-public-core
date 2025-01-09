import { IBanner } from "@common-shared/banner/types";
import { services } from "@core/lib/api";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { HomePageComponent } from "./HomePage.component";
import { HomePageProps, IHomePageInputProps, IHomePageProps } from "./HomePage.d";

const injectHomePageProps = createInjector(({}:IHomePageInputProps):IHomePageProps => {
    const [largeBanners, setLargeBanners] = useState<IBanner[]>([]);
    const [smallBanners, setSmallBanners] = useState<IBanner[]>([]);
    const loader = useLoaderAsync();

    useEffect(() => {
        loader(async () => {
            const banners = await services().banner.search({tag: "homepageLarge"});
            setLargeBanners(banners);
        });
        loader(async () => {
            const banners = await services().banner.search({tag: "homepageSmall"});
            setSmallBanners(banners);
        });
    }, []);
    
    return {largeBanners, smallBanners, ...loader};
});

const connect = inject<IHomePageInputProps, HomePageProps>(mergeProps(
    injectHomePageProps,
));

export const HomePage = connect(HomePageComponent);
