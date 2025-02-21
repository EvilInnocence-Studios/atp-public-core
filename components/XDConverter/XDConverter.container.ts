import { createInjector, inject, mergeProps } from "unstateless";
import {XDConverterComponent} from "./XDConverter.component";
import {IXDConverterInputProps, XDConverterProps, IXDConverterProps} from "./XDConverter.d";

const injectXDConverterProps = createInjector(({}:IXDConverterInputProps):IXDConverterProps => {
    return {};
});

const connect = inject<IXDConverterInputProps, XDConverterProps>(mergeProps(
    injectXDConverterProps,
));

export const XDConverter = connect(XDConverterComponent);
