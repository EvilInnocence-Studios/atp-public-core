import { useSearch } from "@store/lib/useSearch";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { HeaderComponent } from "./Header.component";
import { HeaderProps, IHeaderInputProps, IHeaderProps } from "./Header.d";

const injectHeaderProps = createInjector(({}:IHeaderInputProps):IHeaderProps => {
    const {q, search} = useSearch();
    const [query, setQuery] = useState(q);

    useEffect(() => {
        setQuery(q);
    }, [q]);

    const runSearch = () => {
        search(query);
    }

    return {query, setQuery, runSearch};
});

const connect = inject<IHeaderInputProps, HeaderProps>(mergeProps(
    injectHeaderProps,
));

export const Header = connect(HeaderComponent);
