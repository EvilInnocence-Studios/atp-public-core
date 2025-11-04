import { IBanner } from "@common-shared/banner/types";
import { Setter } from "unstateless";

export declare interface IHeaderProps {
    showBrandLink: boolean;
    showShopLink: boolean;
    showStoreMenu: boolean;
    showTopMenu: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface IHeaderInputProps {

}

export type HeaderProps = IHeaderInputProps & IHeaderProps;