import { createInjector, inject, mergeProps } from "unstateless";
import {ConvertingWithXDComponent} from "./ConvertingWithXD.component";
import {IConvertingWithXDInputProps, ConvertingWithXDProps, IConvertingWithXDProps} from "./ConvertingWithXD.d";

const injectConvertingWithXDProps = createInjector(({}:IConvertingWithXDInputProps):IConvertingWithXDProps => {
    return {};
});

const connect = inject<IConvertingWithXDInputProps, ConvertingWithXDProps>(mergeProps(
    injectConvertingWithXDProps,
));

export const ConvertingWithXD = connect(ConvertingWithXDComponent);
