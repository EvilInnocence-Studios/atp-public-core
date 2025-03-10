export declare interface ISocialLinksProps {

}

// What gets passed into the component from the parent as attributes
export declare interface ISocialLinksInputProps {
    multiline?: boolean;
    showLogo?: boolean;
    showSocialLinks?: boolean;
    showShopLink?: boolean;
}

export type SocialLinksProps = ISocialLinksInputProps & ISocialLinksProps;