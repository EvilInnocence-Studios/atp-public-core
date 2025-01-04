import { createInjector, inject, mergeProps } from "unstateless";
import {HeaderComponent} from "./Header.component";
import {IHeaderInputProps, HeaderProps, IHeaderProps} from "./Header.d";
import { useState } from "react";
import { useNavigate } from "react-router";

const injectHeaderProps = createInjector(({}:IHeaderInputProps):IHeaderProps => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const runSearch = () => {
        navigate(`/products?q=${search}`);
    }

    return {search, setSearch, runSearch};
});

const connect = inject<IHeaderInputProps, HeaderProps>(mergeProps(
    injectHeaderProps,
));

export const Header = connect(HeaderComponent);
