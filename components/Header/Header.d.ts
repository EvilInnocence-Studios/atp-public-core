import { Setter } from "unstateless";

export declare interface IHeaderProps {
    search: string;
    setSearch: Setter<string>;
    runSearch: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IHeaderInputProps {

}

export type HeaderProps = IHeaderInputProps & IHeaderProps;