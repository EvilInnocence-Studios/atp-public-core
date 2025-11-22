export declare interface IHeaderBannerProps {
    banner: IBanner | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IHeaderBannerInputProps {

    classes?: any;
}

export type HeaderBannerProps = IHeaderBannerInputProps & IHeaderBannerProps;