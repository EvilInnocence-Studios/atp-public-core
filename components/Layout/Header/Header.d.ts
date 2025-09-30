import { IBanner } from "@common-shared/banner/types";
import { Setter } from "unstateless";

export declare interface IHeaderProps {
    showBrandLink: boolean;
    showShopLink: boolean;
    showStoreMenu: boolean;
    showTopMenu: boolean;
    banner: IBanner | null;
}

// What gets passed into the component from the parent as attributes
export declare interface IHeaderInputProps {

}

export type HeaderProps = IHeaderInputProps & IHeaderProps;