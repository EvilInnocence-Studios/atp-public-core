import { createInjector, inject, mergeProps } from "unstateless";
import {XDMorpherComponent} from "./XDMorpher.component";
import {IXDMorpherInputProps, XDMorpherProps, IXDMorpherProps} from "./XDMorpher.d";

const injectXDMorpherProps = createInjector(({}:IXDMorpherInputProps):IXDMorpherProps => {
    return {};
});

const connect = inject<IXDMorpherInputProps, XDMorpherProps>(mergeProps(
    injectXDMorpherProps,
));

export const XDMorpher = connect(XDMorpherComponent);
