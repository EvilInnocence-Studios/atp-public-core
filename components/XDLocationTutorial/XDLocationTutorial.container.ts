import { createInjector, inject, mergeProps } from "unstateless";
import {XDLocationTutorialComponent} from "./XDLocationTutorial.component";
import {IXDLocationTutorialInputProps, XDLocationTutorialProps, IXDLocationTutorialProps} from "./XDLocationTutorial.d";

const injectXDLocationTutorialProps = createInjector(({}:IXDLocationTutorialInputProps):IXDLocationTutorialProps => {
    return {};
});

const connect = inject<IXDLocationTutorialInputProps, XDLocationTutorialProps>(mergeProps(
    injectXDLocationTutorialProps,
));

export const XDLocationTutorial = connect(XDLocationTutorialComponent);
