import { Setter } from "unstateless";

export declare interface IHeaderProps {
    query?: string;
    setQuery: Setter<string | undefined>;
    runSearch: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IHeaderInputProps {

}

export type HeaderProps = IHeaderInputProps & IHeaderProps;