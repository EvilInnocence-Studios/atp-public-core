import { IBanner } from "@common-shared/banner/types";
import { Setter } from "unstateless";

export declare interface IHeaderProps {
    showStoreMenu: boolean;
    showTopMenu: boolean;
    showFirstColumn: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface IHeaderInputProps {

    classes?: any;
}

export type HeaderProps = IHeaderInputProps & IHeaderProps;