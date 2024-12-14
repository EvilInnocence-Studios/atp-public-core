import { config } from "@config";
import { useNavigate } from "react-router-dom";
import { createInjector, inject, mergeProps } from "unstateless";
import { HeaderMenuProps, IHeaderMenuInputProps, IHeaderMenuProps } from "./HeaderMenu";
import { HeaderMenuComponent } from "./HeaderMenu.component";

const injectHeaderMenuProps = createInjector(({}:IHeaderMenuInputProps):IHeaderMenuProps => {
    const navigate = useNavigate();

    const items = config.menus;

    const onClick = (info:any) => {
        navigate(`/${info.key}`);
    }

    return {items, onClick};
});

const connect = inject<IHeaderMenuInputProps, HeaderMenuProps>(mergeProps(
    injectHeaderMenuProps,
));

export const HeaderMenu = connect(HeaderMenuComponent);
