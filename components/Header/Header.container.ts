import { createInjector, inject, mergeProps } from "unstateless";
import {HeaderComponent} from "./Header.component";
import {IHeaderInputProps, HeaderProps, IHeaderProps} from "./Header.d";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const injectHeaderProps = createInjector(({}:IHeaderInputProps):IHeaderProps => {
    const [query, setQuery] = useSearchParams();
    const [search, setSearch] = useState(query.get('q') || '');

    const navigate = useNavigate();

    useEffect(() => {
        setSearch(query.get('q') || '');
    }, [query.get('q')])

    const runSearch = () => {
        setQuery(q => {
            q.set('q', search);
            return q;
        });
        navigate(`/products?q=${search}`);
    }

    return {search, setSearch, runSearch};
});

const connect = inject<IHeaderInputProps, HeaderProps>(mergeProps(
    injectHeaderProps,
));

export const Header = connect(HeaderComponent);
