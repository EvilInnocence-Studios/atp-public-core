import { createInjector, inject, mergeProps } from "unstateless";
import {XDSkirtTutorialComponent} from "./XDSkirtTutorial.component";
import {IXDSkirtTutorialInputProps, XDSkirtTutorialProps, IXDSkirtTutorialProps} from "./XDSkirtTutorial.d";

const injectXDSkirtTutorialProps = createInjector(({}:IXDSkirtTutorialInputProps):IXDSkirtTutorialProps => {
    return {};
});

const connect = inject<IXDSkirtTutorialInputProps, XDSkirtTutorialProps>(mergeProps(
    injectXDSkirtTutorialProps,
));

export const XDSkirtTutorial = connect(XDSkirtTutorialComponent);
