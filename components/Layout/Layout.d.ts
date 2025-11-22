export declare interface ILayoutProps {
    loginModal: IModal;
}

// What gets passed into the component from the parent as attributes
export declare interface ILayoutInputProps {

    classes?: any;
}

export type LayoutProps = ILayoutInputProps & ILayoutProps;