import { createInjector, inject, mergeProps } from "unstateless";
import {XDRuntimeTutorialComponent} from "./XDRuntimeTutorial.component";
import {IXDRuntimeTutorialInputProps, XDRuntimeTutorialProps, IXDRuntimeTutorialProps} from "./XDRuntimeTutorial.d";

const injectXDRuntimeTutorialProps = createInjector(({}:IXDRuntimeTutorialInputProps):IXDRuntimeTutorialProps => {
    return {};
});

const connect = inject<IXDRuntimeTutorialInputProps, XDRuntimeTutorialProps>(mergeProps(
    injectXDRuntimeTutorialProps,
));

export const XDRuntimeTutorial = connect(XDRuntimeTutorialComponent);
