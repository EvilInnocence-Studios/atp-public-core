import { IBanner } from "@common-shared/banner/types";

export declare interface IHomePageProps {
    largeBanners:IBanner[];
    smallBanners: IBanner[];
    isLoading: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface IHomePageInputProps {

}

export type HomePageProps = IHomePageInputProps & IHomePageProps;